import { cloneElement } from "react";
import { css } from "@/panda/css";
import { center } from "@/panda/patterns";
import type { Languages } from "@/types/app";
import { languageItems } from "@/app/_content/language-items";
import { LanguagesIcon } from "@/app/_components/languages-icon";

type LanguageBadgeProps = {
  displayLanguage: Languages;
};

export function LanguageBadge(props: LanguageBadgeProps) {
  return (
    <span className={center({ w: 5, h: 5, position: "relative", color: "clr_neutral_800_200" })}>
      <LanguagesIcon />
      <span className={css({ display: "block", position: "absolute", top: -1.5, w: 4, right: -2.5 })}>
        {(() => {
          const language = languageItems.find((language) => language.id === props.displayLanguage);
          if (language) return cloneElement(language.icon, { width: 14, height: 10.5 });
          return null;
        })()}
      </span>
    </span>
  );
}
