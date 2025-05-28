"use client";

import { useEffect } from "react";
import { css } from "@/panda/css";
import { hstack, vstack } from "@/panda/patterns";
import { AlertIcon } from "@/app/_components/alert-icon";
import { getAppDictionary } from "@/app/_dictionaries/dictionaries";

type ErrorFallbackProps = {
  error: unknown;
  dict: Awaited<ReturnType<typeof getAppDictionary>>;
};

export function ErrorFallback(props: ErrorFallbackProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(props.error);
  }, [props.error]);

  return (
    <div
      className={vstack({
        p: 4,
        mx: "auto",
        w: "fit-content",
        borderRadius: "md",
        border: "1px solid",
        bgColor: "clr_neutral_50_800",
        borderColor: "clr_neutral_300_700",
      })}
    >
      <div className={hstack({ gap: 2 })}>
        <AlertIcon />
        <p className={css({ fontWeight: "semibold", color: "clr_neutral_800_200" })}>
          {props.dict["error-fallback"].title}
        </p>
      </div>
      <p className={css({ textAlign: "center", fontSize: "sm", color: "clr_neutral_700_400", maxW: "md" })}>
        {props.dict["error-fallback"].description}
      </p>
    </div>
  );
}
