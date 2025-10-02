import { flex } from "@/panda/patterns";
import type { Languages } from "@/types/app";
import { Header } from "@/app/[lang]/_components/header/header";
import { Footer } from "@/app/[lang]/_components/footer/footer";
import { OuterContainer } from "@/app/_components/outer-container";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }, { lang: "de" }];
}

type LayoutProps = React.PropsWithChildren<Pick<PageProps<"/[lang]">, "params">>;

export default async function MainLayout(props: LayoutProps) {
  const displayLanguage = ((await props.params)?.lang ?? "en") as Languages;

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
      <OuterContainer
        styles={{
          root: flex.raw({
            flexDirection: "column",
            flex: { base: 1, lg: "auto" },
          }),
          content: { flex: 1 },
        }}
      >
        {props.children}
      </OuterContainer>
      <Footer displayLanguage={displayLanguage} />
    </div>
  );
}
