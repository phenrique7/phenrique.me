import { Client } from "@notionhq/client";
import {
  type BookGenreResponse,
  bookGenreResponseSchema,
  type BookAuthorResponse,
  bookAuthorResponseSchema,
  type ReadingStatusBookResponse,
  readingStatusBooksResponseSchema,
} from "@/lib/notion/api-responses.schema";

export class NotionHQ {
  private booksDatabaseId: string = process.env.NOTION_BOOKS_DATABASE_ID!;
  private notion: Client = new Client({ auth: process.env.NOTION_API_SECRET });

  public async getReadingStatusBooks(): Promise<ReadingStatusBookResponse> {
    const readingBooks = await this.notion.databases.query({
      database_id: this.booksDatabaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Reading",
        },
      },
    });

    return readingStatusBooksResponseSchema.parse(readingBooks);
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
