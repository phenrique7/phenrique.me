import { flex } from "@/panda/patterns";
import type { PageProps } from "@/types/next";
import { Header } from "@/app/[lang]/_components/header/header";
import { Footer } from "@/app/[lang]/_components/footer/footer";

type MainLayoutProps = Readonly<React.PropsWithChildren & Pick<PageProps<{ lang: "en" | "pt" | "de" }>, "params">>;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }, { lang: "de" }];
}

export default async function MainLayout(props: MainLayoutProps) {
  const displayLanguage = (await props.params).lang;

  return (
    <div
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
