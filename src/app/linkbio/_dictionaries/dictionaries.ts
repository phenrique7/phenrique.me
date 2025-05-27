import "server-only";
import type { LanguageEnum } from "~/basehub/schema";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  de: () => import("./de.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: LanguageEnum) => dictionaries[locale]();
