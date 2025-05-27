import { css } from "@/panda/css";
import { basehub } from "basehub";
import type { PageProps } from "@/types/next";
import { getDisplayLanguage } from "@/app/linkbio/_utils/locale";

export function PresentationSkeleton() {
  return (
    <>
      <div
        className={css({
          mt: 2,
          mx: "auto",
          width: "70%",
          h: "1.125rem",
          borderRadius: "sm",
          maxWidth: { base: "sm", sm: "md" },
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          animation: "pulse-custom 1.5s ease-in-out infinite",
        })}
      />
      <div
        className={css({
          mt: 2,
          mx: "auto",
          width: "full",
          h: "1.125rem",
          borderRadius: "sm",
          maxWidth: { base: "sm", sm: "md" },
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          animation: "pulse-custom 1.5s ease-in-out infinite",
        })}
      />
    </>
  );
}

type PresentationProps = Pick<PageProps, "searchParams">;

export async function Presentation(props: PresentationProps) {
  const chosenLanguage = ((await props.searchParams) as { lang: string } | undefined)?.lang;
  const displayLanguage = await getDisplayLanguage(chosenLanguage);

  const data = await basehub().query({
    linkbio: {
      __args: {},
      bioSection: {
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
    <>
      <h2
        className={css({
          mt: 2,
          mx: "auto",
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
            mx: "auto",
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
    </>
  );
}
