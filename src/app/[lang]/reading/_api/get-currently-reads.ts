import { NotionHQ } from "@/lib/notion/notion-hq";

type GetCurrentlyReadsResponse = Array<{
  id: string;
  title: string;
  cover: string;
  genres: string[];
  authors: string[];
  progress: number | null;
}>;

export async function getCurrentlyReads(): Promise<GetCurrentlyReadsResponse> {
  const notion = new NotionHQ();

  const readingStatusBooks = await notion.getReadingStatusBooks();

  const currentlyReads: GetCurrentlyReadsResponse = [];

  for (const book of readingStatusBooks.results) {
    const authorsPageIds = book.properties.Author.relation;
    const authors = await Promise.all(authorsPageIds.map((author) => notion.getBookAuthor(author.id)));

    const genresPageIds = book.properties.Genre.relation;
    const genres = await Promise.all(genresPageIds.map((genre) => notion.getBookGenre(genre.id)));

    currentlyReads.push({
      id: book.id,
      title: book.properties.Book.title[0].plain_text,
      cover: book.properties.Cover.files[0].file.url,
      progress: book.properties.Progress.formula.number,
      genres: genres.map((genre) => genre.properties.Genre.title[0].plain_text),
      authors: authors.map((author) => author.properties.Name.title[0].plain_text),
    });
  }

  return currentlyReads;
}
