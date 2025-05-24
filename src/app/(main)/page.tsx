import { Suspense } from "react";
import { Pump } from "basehub/react-pump";
import { css } from "@/panda/css";
import { MDX } from "@/ui/shared/mdx";
import { flex } from "@/panda/patterns";
import { OuterContainer } from "@/ui/shared/outer-container";
import { InnerContainer } from "@/ui/shared/inner-container";

export default function Home() {
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
      <InnerContainer styles={css.raw({ py: { base: 32, sm: 44, "2xl": 56 } })}>
        <Pump
          queries={[
            {
              home: {
                bioSection: {
                  title: true,
                  subtitle: true,
                  description: {
                    markdown: true,
                  },
                },
              },
            },
          ]}
        >
          {async ([data]) => {
            "use server";

            return (
              <>
                <h2
                  className={css({
                    width: "fit-content",
                    fontWeight: "medium",
                    color: "transparent",
                    backgroundClip: "text",
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
                <Suspense fallback={<div>Loading...</div>}>
                  <MDX
                    data={data.home.bioSection.description.markdown}
                    wrapper={(props) => (
                      <div className={"prose-ui antialiased " + css({ mt: 4, maxW: "2xl" })}>{props.children}</div>
                    )}
                  />
                </Suspense>
              </>
            );
          }}
        </Pump>
      </InnerContainer>
    </OuterContainer>
  );
}
