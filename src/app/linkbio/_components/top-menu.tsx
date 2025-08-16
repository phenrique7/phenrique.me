import { css } from "@/panda/css";
import type { Languages } from "@/types/app";
import type { PageProps } from "@/types/next";
import { ensureChosenLanguage } from "@/utils/locale";
import { getLocaleLanguage } from "@/app/linkbio/_utils/locale";
import { CTopMenu } from "@/app/linkbio/_components/top-menu.client";
import { getLinkbioDictionary } from "@/app/linkbio/_dictionaries/dictionaries";

export function TopMenuSkeleton() {
  return (
    <div
      className={css({
        mb: 6,
        display: "flex",
        justifyContent: "flex-end",
      })}
    >
      <div
        className={css({
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          animation: "pulse-custom 1.5s infinite ease-in-out",
        })}
      />
    </div>
  );
}

type TopMenuProps = Pick<PageProps, "searchParams">;

export async function TopMenu(props: TopMenuProps) {
  const chosenLanguage = ((await props.searchParams) as { lang: Languages } | undefined)?.lang;

  let displayLanguage = ensureChosenLanguage(chosenLanguage);

  if (displayLanguage === undefined) {
    displayLanguage = await getLocaleLanguage();
  }

  const dict = await getLinkbioDictionary(displayLanguage);

  return <CTopMenu displayLanguage={displayLanguage} dict={dict} />;
}
