import { css } from "@/panda/css";
import type { PageProps } from "@/types/next";
import { flex, grid, vstack } from "@/panda/patterns";
import { OuterContainer } from "@/app/_components/outer-container";
import { InnerContainer } from "@/app/_components/inner-container";
import { BookItem } from "@/app/[lang]/reading/_components/book-item";
import { getFinishedReads } from "@/app/[lang]/reading/_api/get-finished-reads";
import { getCurrentlyReads } from "@/app/[lang]/reading/_api/get-currently-reads";
import { getAppDictionary } from "@/app/[lang]/reading/_dictionaries/dictionaries";
import { BookPreviewCard } from "@/app/[lang]/reading/_components/book-preview-card";

export const dynamic = "force-static";

type ReadingPageProps = Pick<PageProps<{ lang: "en" | "pt" | "de" }>, "params">;

export default async function ReadingPage(props: ReadingPageProps) {
  const displayLanguage = (await props.params).lang;
  const currentlyReads = await getCurrentlyReads();
  const allBooks = await getFinishedReads();
  const dict = await getAppDictionary(displayLanguage);

  return (
    <OuterContainer
      styles={{
        root: flex.raw({
          flexDirection: "column",
          flex: { base: 1, lg: "auto" },
        }),
        content: { flex: 1 },
      }}
    >
      <InnerContainer>
        <div className={vstack({ mt: 32, alignItems: "stretch", gap: 8 })}>
          <h1
            className={css({
              fontSize: "2xl",
              fontWeight: "semibold",
              color: "clr_neutral_900_50",
            })}
          >
            {dict["page-title"]}
          </h1>
          <h2
            className={css({ fontSize: "sm", fontWeight: "medium", color: "clr_neutral_700_400" })}
          >
            {dict["currently-reads"]["section-title"]}
          </h2>
        </div>
        {currentlyReads.length === 0 ? (
          <div className={css({ mt: 12, color: "clr_neutral_700_400", textAlign: "center" })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={css({ mx: "auto" })}
            >
              <path d="M12 17h1.5" />
              <path d="M12 22h1.5" />
              <path d="M12 2h1.5" />
              <path d="M17.5 22H19a1 1 0 0 0 1-1" />
              <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
              <path d="M20 14v3h-2.5" />
              <path d="M20 8.5V10" />
              <path d="M4 10V8.5" />
              <path d="M4 19.5V14" />
              <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
              <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
            </svg>
            <h3
              className={css({
                mt: 3.5,
                fontWeight: "semibold",
                color: "clr_neutral_800_200",
                fontSize: "sm",
              })}
            >
              {dict["currently-reads"]["no-reads"].title}
            </h3>
            <p
              className={css({
                mt: 1,
                mx: "auto",
                maxW: "16rem",
                fontSize: "sm",
                lineHeight: 1.25,
                color: "clr_neutral_700_400",
              })}
            >
              {dict["currently-reads"]["no-reads"].description}
            </p>
          </div>
        ) : (
          <div
            className={grid({
              mt: 6,
              gap: 8,
              gridTemplateColumns: {
                base: "repeat(1, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, 1fr))",
              },
            })}
          >
            {currentlyReads.map((book) => (
              <BookPreviewCard
                key={book.id}
                title={book.title}
                cover={book.cover}
                genres={book.genres}
                authors={book.authors}
                progress={book.progress}
              />
            ))}
          </div>
        )}
        <div className={css({ mt: 16 })}>
          <h2
            className={css({
              fontSize: "sm",
              position: "relative",
              fontWeight: "medium",
              color: "clr_neutral_700_400",
              _after: {
                content: '""',
                h: "2px",
                w: "full",
                left: 0,
                right: 0,
                bottom: -2.5,
                display: "block",
                borderRadius: "sm",
                position: "absolute",
                bgColor: "clr_neutral_300_700",
              },
            })}
          >
            {dict["more-reads"]}
          </h2>
          <ul className={vstack({ mt: 8, mb: 20, alignItems: "stretch", gap: { base: 6, lg: 1 } })}>
            {allBooks.map((book) => (
              <BookItem
                key={book.id}
                title={book.title}
                rating={book.rating}
                authors={book.authors}
              />
            ))}
          </ul>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}
