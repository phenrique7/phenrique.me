import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GoogleTagManager } from "@next/third-parties/google";
import "@/ui/styles/base.css";
import { css } from "@/panda/css";
import { themeEffect } from "@/app/(main)/_theme-effect";
import { CToastProvider } from "@/app/_components/toast-provider.client";

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

export default function AppLayout(props: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" className={[GeistSans.className, GeistMono.className].join(" ")} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className={css({ fontFamily: "GeistSans" })}>
        <GoogleTagManager gtmId="GTM-5CX6S9KJ" />
        <CToastProvider />
        <main>{props.children}</main>
      </body>
    </html>
  );
}
