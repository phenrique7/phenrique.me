import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GoogleTagManager } from "@next/third-parties/google";
import "@/ui/styles/base.css";
import { ToastProvider } from "@/app/_components/toast-provider";

export const metadata: Metadata = {
  generator: "Next.js",
  title: {
    template: "%s − Paulo Henrique",
    default: "Paulo Henrique | Protestant Christian • Software Engineer",
  },
  description: "My personal site, where I share my thoughts and my work.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Paulo Henrique",
    title: "Paulo Henrique | Protestant Christian • Software Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s − Paulo Henrique",
      default: "Paulo Henrique | Protestant Christian • Software Engineer",
    },
    description: "My personal site, where I share my thoughts and my work.",
  },
};

export default function App(props: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <GoogleTagManager gtmId="GTM-5CX6S9KJ" />
        <ToastProvider />
        {props.children}
      </body>
    </html>
  );
}
