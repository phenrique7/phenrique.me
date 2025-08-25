import { basehub } from "basehub";

import { css } from "@/panda/css";
import { MDX } from "@/app/_components/mdx";
import { flex } from "@/panda/patterns";
import type { Languages } from "@/types/app";
import type { PageProps } from "@/types/next";
import { OuterContainer } from "@/app/_components/outer-container";
import { InnerContainer } from "@/app/_components/inner-container";

export const dynamic = "force-static";

type HomePageProps = Pick<PageProps, "params">;

export default async function HomePage(props: HomePageProps) {
  const displayLanguage = (await props.params!).lang as Languages;

  const data = await basehub().query({
    home: {
      bioSection: {
        __args: {
          variants: { language: displayLanguage },
        },
        title: true,
        subtitle: true,
        description: {
          markdown: true,
        },
      },
    },
  });

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
      <InnerContainer styles={css.raw({ py: { base: 32, sm: 44, "2xl": 52 } })}>
        <h2
          className={css({
            width: "fit-content",
            fontWeight: "semibold",
            color: "transparent",
            fontSize: "1.25rem",
            fontStyle: "italic",
            backgroundClip: "text",
            fontFamily: "etBookFont",
            backgroundImage: `linear-gradient(135deg, token(colors.clr_gray_soft), token(colors.clr_coral_flame))`,
          })}
        >
          {data.home.bioSection.subtitle}
        </h2>
        <h1
          className={css({
            fontSize: "4xl",
            color: "transparent",
            fontWeight: "semibold",
            backgroundClip: "text",
            backgroundImage: `linear-gradient(to bottom, token(colors.clr_neutral_950_snow), token(colors.clr_neutral_950_snow) 40%, #999999)`,
          })}
        >
          {data.home.bioSection.title}
        </h1>
        <MDX
          displayLanguage={displayLanguage}
          data={data.home.bioSection.description.markdown}
          wrapper={(props) => (
            <div className={"prose-ui antialiased " + css({ mt: 4, maxW: "2xl" })}>
              {props.children}
            </div>
          )}
        />
      </InnerContainer>
    </OuterContainer>
  );
}
