import type { Languages } from "@/types/app";

export function ensureChosenLanguage(chosenLanguage: string | undefined): Languages | undefined {
  if (chosenLanguage === "en" || chosenLanguage === "pt" || chosenLanguage === "de") {
    return chosenLanguage;
  }
}
