import { headers } from "next/headers";
import type { LanguageEnum } from "~/basehub/schema";

export async function getLocale(): Promise<string> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  return acceptLanguage?.split(",")[0] ?? "en";
}

export function ensureChosenLanguage(chosenLanguage: string | undefined): LanguageEnum | undefined {
  if (chosenLanguage === "en" || chosenLanguage === "pt" || chosenLanguage === "de") {
    return chosenLanguage;
  }
}
