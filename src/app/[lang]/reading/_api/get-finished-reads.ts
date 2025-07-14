import { NotionHQ } from "@/lib/notion/notion-hq";

type GetFinishedReadsResponse = Array<{
  id: string;
  title: string;
  rating: number;
  authors: string[];
}>;

export async function getFinishedReads(): Promise<GetFinishedReadsResponse> {
  const notion = new NotionHQ();
  const finishedReads: GetFinishedReadsResponse = [];

  const finishedBooks = await notion.getFinishedBooks();

  for (const book of finishedBooks.results) {
    const authorsPageIds = book.properties.Author.relation;
    const authors = await Promise.all(
      authorsPageIds.map((author) => notion.getBookAuthor(author.id)),
    );

    finishedReads.push({
      id: book.id,
      title: book.properties.Book.title[0].plain_text,
      rating: Number(book.properties.Rating.select?.name ?? 0),
      authors: authors.map((author) => author.properties.Name.title[0].plain_text),
    });
  }

  return finishedReads;
}
