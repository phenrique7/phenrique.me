import { basehub } from "basehub";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/ui/styles/base.css";
import { css } from "@/panda/css";
import { Provider } from "@/app/_components/provider";
import { etBookFont } from "@/app/_utils/et-book-font";
import { themeEffect } from "@/app/_utils/theme-effect";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const meta = await basehub({ cache: "force-cache" }).query({
    home: {
      metadata: {
        title: true,
        xUsername: true,
        description: true,
        ogImage: {
          url: true,
        },
      },
    },
  });

  return {
    title: meta.home.metadata.title,
    description: meta.home.metadata.description,
    openGraph: {
      type: "website",
      siteName: "Paulo Henrique",
      title: {
        template: "%s − Paulo Henrique",
        default: meta.home.metadata.title,
      },
      images: [
        {
          width: 1200,
          height: 630,
          url: meta.home.metadata.ogImage.url,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: {
        template: "%s − Paulo Henrique",
        default: meta.home.metadata.title,
      },
      site: "@__phenrique7",
      creator: "@__phenrique7",
      description: meta.home.metadata.description,
      images: [{ url: meta.home.metadata.ogImage.url }],
    },
  };
}

export default function AppLayout(props: Readonly<React.PropsWithChildren>) {
  return (
    <html
      lang="en"
      className={[GeistSans.className, GeistMono.className, etBookFont.className].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className={css({ fontFamily: "GeistSans" })}>
        <Provider>{props.children}</Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
