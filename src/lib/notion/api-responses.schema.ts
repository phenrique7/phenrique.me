import * as z from "zod/v4";

export const booksResponseSchema = z.object({
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
        Status: z.object({
          status: z.object({
            name: z
              .string()
              .pipe(z.transform((val) => val.toLowerCase().replace(" ", "-")))
              .pipe(
                z.union([z.literal("not-started"), z.literal("reading"), z.literal("completed")]),
              ),
          }),
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
        Rating: z.object({
          select: z
            .object({
              name: z.string(),
            })
            .nullable(),
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

export type BooksResponse = z.infer<typeof booksResponseSchema>;
export type BookAuthorResponse = z.infer<typeof bookAuthorResponseSchema>;
export type BookGenreResponse = z.infer<typeof bookGenreResponseSchema>;
