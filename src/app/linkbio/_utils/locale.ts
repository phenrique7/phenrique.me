import { headers } from "next/headers";
import type { Languages } from "@/types/app";

export async function getLocale(): Promise<string> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  return acceptLanguage?.split(",")[0] ?? "en";
}

export async function getDisplayLanguage(chosenLanguage: string | undefined): Promise<Languages> {
  if (chosenLanguage === "en" || chosenLanguage === "pt" || chosenLanguage === "de") {
    return chosenLanguage;
  }

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
