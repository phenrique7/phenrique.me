import type { Languages } from "@/types/app";

export function ensureChosenLanguage(chosenLanguage: string | undefined): Languages | undefined {
  if (chosenLanguage?.startsWith("en")) {
    return "en";
  }
  if (chosenLanguage?.startsWith("pt")) {
    return "pt";
  }
  if (chosenLanguage?.startsWith("de")) {
    return "de";
  }
}
