import * as z from "zod/v4";

export const readingStatusBooksResponseSchema = z.object({
  results: z.array(
    z.object({
      id: z.string(),
      properties: z.object({
        Book: z.object({
          title: z.array(
            z.object({
              plain_text: z.string(),
            }),
          ),
        }),
        Cover: z.object({
          files: z.array(
            z.object({
              file: z.object({
                url: z.string(),
              }),
            }),
          ),
        }),
        Genre: z.object({
          relation: z.array(
            z.object({
              id: z.string(),
            }),
          ),
        }),
        Author: z.object({
          relation: z.array(
            z.object({
              id: z.string(),
            }),
          ),
        }),
        Progress: z.object({
          formula: z.object({
            number: z.number().nullable(),
          }),
        }),
      }),
    }),
  ),
});

export const bookAuthorResponseSchema = z.object({
  properties: z.object({
    Name: z.object({
      title: z.array(
        z.object({
          plain_text: z.string(),
        }),
      ),
    }),
  }),
});

export const bookGenreResponseSchema = z.object({
  properties: z.object({
    Genre: z.object({
      title: z.array(
        z.object({
          plain_text: z.string(),
        }),
      ),
    }),
  }),
});

export type ReadingStatusBookResponse = z.infer<typeof readingStatusBooksResponseSchema>;
export type BookAuthorResponse = z.infer<typeof bookAuthorResponseSchema>;
export type BookGenreResponse = z.infer<typeof bookGenreResponseSchema>;
