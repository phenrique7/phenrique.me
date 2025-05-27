import { getLocale } from "@/utils/locale";
import { LanguageEnum } from "~/basehub/schema";

export async function getLocaleLanguage(): Promise<LanguageEnum> {
  switch (await getLocale()) {
    case "en":
    case "en-US":
      return "en";
    case "pt":
    case "pt-BR":
      return "pt";
    case "de":
    case "de-DE":
      return "de";
    default:
      return "en";
  }
}
