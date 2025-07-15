import { css } from "@/panda/css";
import { basehub } from "basehub";
import { vstack } from "@/panda/patterns";
import type { PageProps } from "@/types/next";
import { ensureChosenLanguage } from "@/utils/locale";
import { ErrorFallback } from "@/app/_components/error-fallback";
import { getLocaleLanguage } from "@/app/linkbio/_utils/locale";
import { getAppDictionary } from "@/app/_dictionaries/dictionaries";

type PresentationProps = Pick<PageProps, "searchParams">;

export async function Presentation(props: PresentationProps) {
  const chosenLanguage = ((await props.searchParams) as { lang: string } | undefined)?.lang;

  let displayLanguage = ensureChosenLanguage(chosenLanguage);

  if (displayLanguage === undefined) {
    displayLanguage = await getLocaleLanguage();
  }

  try {
    const data = await basehub().query({
      linkbio: {
        bioSection: {
          __args: {
            variants: { language: displayLanguage },
          },
          name: true,
          quote: true,
          description: true,
          avatar: {
            on_BlockImage: {
              url: true,
              alt: true,
              width: true,
              height: true,
            },
          },
        },
      },
    });

    return (
      <div lang={displayLanguage} className={vstack({ mt: 2, gap: 0 })}>
        <h2
          className={css({
            fontSize: "sm",
            color: "#fffcf4b0",
            fontWeight: "semibold",
            maxWidth: { base: "sm", sm: "md" },
          })}
        >
          {data.linkbio.bioSection.description}
        </h2>
        {data.linkbio.bioSection.quote ? (
          <span
            className={css({
              fontSize: "sm",
              display: "block",
              color: "#fffcf4b0",
              fontStyle: "italic",
              fontWeight: "medium",
              maxWidth: { base: "sm", sm: "md" },
            })}
          >
            {data.linkbio.bioSection.quote}
          </span>
        ) : null}
      </div>
    );
  } catch (err) {
    const dict = await getAppDictionary(displayLanguage);

    return (
      <div className={css({ mt: 6 })}>
        <ErrorFallback error={err} dict={dict} />
      </div>
    );
  }
}
