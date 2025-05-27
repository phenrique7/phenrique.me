import { getLocale } from "@/utils/locale";
import type { Languages } from "@/types/app";

export async function getLocaleLanguage(): Promise<Languages> {
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
