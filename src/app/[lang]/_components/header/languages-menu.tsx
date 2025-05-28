"use client";

import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";
import { css } from "@/panda/css";
import type { Languages } from "@/types/app";
import { CheckIcon } from "@/app/_components/close-icon";
import { languageItems } from "@/app/_content/language-items";
import { center, flex, hstack } from "@/panda/patterns";
import { LanguagesIcon } from "@/app/_components/languages-icon";
import { getAppDictionary } from "@/app/_dictionaries/dictionaries";

type LanguagesMenuProps = {
  displayLanguage: Languages;
  dict: Awaited<ReturnType<typeof getAppDictionary>>;
};

export function LanguagesMenu(props: LanguagesMenuProps) {
  return (
    <MenuTrigger>
      <Button
        aria-label={props.dict.header["menu-label"]}
        className={css({
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          borderRadius: "full",
          justifyContent: "center",
        })}
      >
        <span
          className={center({
            w: 6,
            h: 6,
            position: "relative",
            color: "clr_neutral_800_200",
            "& svg": { transform: "scale(0.85)" },
          })}
        >
          <LanguagesIcon />
          <span className={css({ display: "block", position: "absolute", top: -0.5, w: 4, right: -2 })}>
            {languageItems.find((language) => language.id === props.displayLanguage)?.icon ?? null}
          </span>
        </span>
      </Button>
      <Popover placement="bottom">
        <Menu
          className={css({
            p: 1,
            minW: 48,
            boxShadow: "sm",
            borderRadius: "lg",
            border: "1px solid",
            bgColor: "clr_neutral_100_800",
            borderColor: "clr_neutral_300_700",
          })}
        >
          {languageItems.map((language) => (
            <MenuItem
              key={language.id}
              href={`/${language.id}`}
              className={flex({
                p: 2,
                borderRadius: "md",
                alignItems: "center",
                color: "clr_neutral_800_200",
                justifyContent: "space-between",
                transition: "background-color 0.15s ease-in-out",
                _hover: { bg: "clr_neutral_300_700", cursor: "default" },
              })}
            >
              <div className={hstack()}>
                <div className={flex({ w: 6, h: 6, alignItems: "center" })}>{language.icon}</div>
                <span className={css({ fontSize: "sm", fontWeight: "medium" })}>{language.name}</span>
              </div>
              {language.id === props.displayLanguage ? <CheckIcon /> : null}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
