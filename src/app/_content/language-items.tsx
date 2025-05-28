import { USAIcon } from "@/app/_components/usa-icon";
import { BrazilIcon } from "@/app/_components/brazil-icon";
import { DeutschIcon } from "@/app/_components/deutsch-icon";

export const languageItems = [
  {
    id: "pt" as const,
    name: "Português",
    icon: <BrazilIcon />,
  },
  {
    id: "en" as const,
    name: "English",
    icon: <USAIcon />,
  },
  {
    id: "de" as const,
    name: "Deutsch",
    icon: <DeutschIcon />,
  },
];
