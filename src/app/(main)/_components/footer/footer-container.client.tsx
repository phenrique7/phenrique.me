"use client";

import { useRef, useState } from "react";
import { css } from "@/panda/css";
import { flex } from "@/panda/patterns";
import type { FooterData } from "@/types/basehub";
import { FooterView } from "@/app/(main)/_components/footer/footer-view";

type CFooterContainerProps = {
  data: FooterData;
};

export function CFooterContainer(props: CFooterContainerProps) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (maskRef.current) {
      const rect = maskRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - 260,
        y: event.clientY - rect.top - 500,
      });
    }
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  return (
    <>
      <div
        ref={maskRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        className={flex({
          zIndex: 1,
          w: "full",
          h: "full",
          position: "fixed",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            px: 6,
            w: "full",
            maxW: "7xl",
            _before: {
              h: "full",
              content: "''",
              display: "block",
              borderInline: "1px solid token(colors.neutral.700)",
            },
          })}
        />
      </div>
      <FooterView
        mask={props.data.layout.footer.mask}
        source={props.data.layout.footer.source}
        socialLinks={props.data.layout.footer.socialLinks}
        imageContainer={{ isHovering, mousePosition }}
      />
    </>
  );
}
