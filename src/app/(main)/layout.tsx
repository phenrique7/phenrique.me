import { flex } from "@/panda/patterns";
import { Header } from "@/app/(main)/_components/header/header";
import { Footer } from "@/app/(main)/_components/footer/footer";

export default async function MainLayout(
  props: Readonly<React.PropsWithChildren>,
) {
  return (
    <div
      className={flex({
        color: "white",
        minH: "100dvh",
        bgColor: "neutral.900",
        flexDirection: "column",
      })}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
