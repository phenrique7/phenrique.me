"use client";

import { css } from "@/panda/css";
import { flex, hstack } from "@/panda/patterns";
import type { FooterData } from "@/types/basehub";

type CFooterProps = {
  mask: FooterData["layout"]["footer"]["mask"];
  source: FooterData["layout"]["footer"]["source"];
  socialLinks: FooterData["layout"]["footer"]["socialLinks"];
  imageContainer: {
    isHovering: boolean;
    mousePosition: { x: number; y: number };
  };
};

export function FooterView(props: CFooterProps) {
  return (
    <footer>
      <div
        className={css({ mx: "auto", maxW: "7xl", px: 6, overflow: "hidden" })}
      >
        <div
          style={{ maskImage: `url(${props.mask.url})` }}
          className={css({
            mb: "-74px",
            aspectRatio: 1600 / 436,
            // background: "tomato",
            background: "neutral.900",
            maskSize: "100%",
            maskRepeat: "no-repeat",
            imageRendering: "crisp-edges",
            position: "relative",
            transition: "all 1s cubic-bezier(.165,.84,.44,1)",
            transformOrigin: "bottom",
          })}
        >
          <div
            style={
              {
                "--mouse-x": props.imageContainer.mousePosition.x,
                "--mouse-y": props.imageContainer.mousePosition.y,
                opacity: props.imageContainer.isHovering ? 1 : 0,
              } as React.CSSProperties
            }
            className={css({
              position: "absolute",
              filter: "blur(100px)",
              width: "60rem",
              height: "60rem",
              aspectRatio: "1/1",
              borderRadius: "100%",
              transition: "opacity 1s cubic-bezier(.165,.84,.44,1)",
              background: `radial-gradient(circle at center, rgba(255,255,255,.2), rgba(255,255,255,.1), rgba(255,255,255,0))`,
              transform: `translate3d(calc(var(--mouse-x, -100%) * 1px - 35rem), calc(var(--mouse-y, -100%) * 1px - 35rem), 0)`,
            })}
          ></div>
        </div>
      </div>
      <div
        className={css({
          borderTop: "1px dashed",
          borderTopColor: "neutral.700",
        })}
      >
        <div
          className={flex({
            py: 6,
            zIndex: 1,
            mx: "auto",
            maxW: "5xl",
            position: "relative",
            justify: "space-between",
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
                className={css({ w: 4 })}
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
            ))}
          </div>
          <a
            href={props.source}
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              fontSize: "xs",
              color: "neutral.300",
              textDecoration: "underline",
              fontFamily: "Liberation Mono",
            })}
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
