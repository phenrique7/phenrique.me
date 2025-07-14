import { Client } from "@notionhq/client";
import {
  type BooksResponse,
  booksResponseSchema,
  type BookGenreResponse,
  bookGenreResponseSchema,
  type BookAuthorResponse,
  bookAuthorResponseSchema,
} from "@/lib/notion/api-responses.schema";

export class NotionHQ {
  private booksDatabaseId: string = process.env.NOTION_BOOKS_DATABASE_ID!;
  private notion: Client = new Client({ auth: process.env.NOTION_API_SECRET });

  public async getReadingStatusBooks(): Promise<BooksResponse> {
    const readingBooks = await this.notion.databases.query({
      database_id: this.booksDatabaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Reading",
        },
      },
    });

    return booksResponseSchema.parse(readingBooks);
  }

  public async getFinishedBooks(): Promise<BooksResponse> {
    const finishedBooks = await this.notion.databases.query({
      database_id: this.booksDatabaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Completed",
        },
      },
      sorts: [
        {
          property: "End Date",
          direction: "descending",
        },
      ],
    });

    return booksResponseSchema.parse(finishedBooks);
  }

  public async getBookAuthor(authorPageId: string): Promise<BookAuthorResponse> {
    const author = await this.notion.pages.retrieve({ page_id: authorPageId });
    return bookAuthorResponseSchema.parse(author);
  }

  public async getBookGenre(genrePageId: string): Promise<BookGenreResponse> {
    const genre = await this.notion.pages.retrieve({ page_id: genrePageId });
    return bookGenreResponseSchema.parse(genre);
  }
}
