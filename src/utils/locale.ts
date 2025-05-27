import { headers } from "next/headers";
import type { Languages } from "@/types/app";

export async function getLocale(): Promise<string> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  return acceptLanguage?.split(",")[0] ?? "en";
}

export function ensureChosenLanguage(chosenLanguage: string | undefined): Languages | undefined {
  if (chosenLanguage === "en" || chosenLanguage === "pt" || chosenLanguage === "de") {
    return chosenLanguage;
  }
}
