"use client";

import { css } from "@/panda/css";
import { hstack } from "@/panda/patterns";
import type { FooterData } from "@/types/basehub";
import { OuterContainer } from "@/ui/shared/outer-container";
import { InnerContainer } from "@/ui/shared/inner-container";

type CFooterProps = {
  source: FooterData["layout"]["footer"]["source"];
  socialLinks: FooterData["layout"]["footer"]["socialLinks"];
};

export function CFooter(props: CFooterProps) {
  return (
    <footer>
      <div
        className={css({
          borderTop: "1px dashed",
          borderTopColor: "clr_neutral_300_700",
        })}
      >
        <OuterContainer noiseBackground={false}>
          <InnerContainer
            styles={css.raw({
              py: 6,
              display: "flex",
              justifyContent: "space-between",
            })}
          >
            <div className={hstack({ gap: 4 })}>
              {props.socialLinks.items.map((item) => (
                <a
                  key={item._title}
                  target="_blank"
                  href={item.href}
                  title={item.label}
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                  className={css({
                    w: 4,
                    color: "clr_neutral_700_400",
                    "& svg path": {
                      transition: "fill 0.15s ease-in-out",
                    },
                    "& svg:hover path": {
                      fill: "clr_neutral_900_50",
                    },
                  })}
                />
              ))}
            </div>
            <a
              href={props.source}
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                fontSize: "xs",
                color: "clr_neutral_700_400",
                textDecoration: "underline",
                fontFamily: "GeistMono",
                transition: "color 0.15s ease-in-out",
                _hover: {
                  color: "clr_neutral_900_50",
                },
              })}
            >
              Source
            </a>
          </InnerContainer>
        </OuterContainer>
      </div>
    </footer>
  );
}
