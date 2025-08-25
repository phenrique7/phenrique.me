import { flex } from "@/panda/patterns";
import type { Languages } from "@/types/app";
import type { LayoutProps } from "@/types/next";
import { Header } from "@/app/[lang]/_components/header/header";
import { Footer } from "@/app/[lang]/_components/footer/footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }, { lang: "de" }];
}

export default async function MainLayout(props: LayoutProps) {
  const displayLanguage = (await props.params!).lang as Languages;

  return (
    <div
      data-component="main-layout"
      className={flex({
        minH: "100dvh",
        bgColor: "clr_white_neutral_900",
        flexDirection: "column",
      })}
    >
      <Header displayLanguage={displayLanguage} />
      {props.children}
      <Footer displayLanguage={displayLanguage} />
    </div>
  );
}
