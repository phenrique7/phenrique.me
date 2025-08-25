import { Suspense } from "react";
import { basehub } from "basehub";
import type { Metadata } from "next";

import { css } from "@/panda/css";
import type { Languages } from "@/types/app";
import type { PageProps } from "@/types/next";
import { Head } from "@/app/linkbio/_components/head";
import { ensureChosenLanguage } from "@/utils/locale";
import { TopMenu } from "@/app/linkbio/_components/top-menu";
import { getLocaleLanguage } from "@/app/linkbio/_utils/locale";
import { SocialLinks } from "@/app/linkbio/_components/social-links";
import { Presentation } from "@/app/linkbio/_components/presentation";
import { TopMenuSkeleton } from "@/app/linkbio/_components/top-menu.skeleton";
import { PresentationSkeleton } from "@/app/linkbio/_components/presentation.skeleton";

export const experimental_ppr = true;

export async function generateMetadata(props: Pick<PageProps, "searchParams">): Promise<Metadata> {
  const chosenLanguage = ((await props.searchParams) as { lang: Languages } | undefined)?.lang;

  let displayLanguage = ensureChosenLanguage(chosenLanguage);

  if (displayLanguage === undefined) {
    displayLanguage = await getLocaleLanguage();
  }

  const meta = await basehub().query({
    linkbio: {
      metadata: {
        __args: {
          variants: { language: displayLanguage },
        },
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
    title: meta.linkbio.metadata.title,
    description: meta.linkbio.metadata.description,
    openGraph: {
      title: meta.linkbio.metadata.title,
      images: [
        {
          width: 1200,
          height: 630,
          url: meta.linkbio.metadata.ogImage.url,
        },
      ],
    },
    twitter: {
      title: meta.linkbio.metadata.title,
      description: meta.linkbio.metadata.description,
      images: [{ url: meta.linkbio.metadata.ogImage.url }],
    },
  };
}

export default function LinkbioPage(props: PageProps) {
  return (
    <>
      <div
        className={css({
          inset: 0,
          zIndex: -1,
          color: "white",
          position: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgb(0, 0, 0)",
          _before: {
            top: 0,
            content: "''",
            width: "100%",
            height: "100%",
            position: "fixed",
            filter: "blur(40px)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { base: 0.15, md: 0.4 },
            backgroundPosition: "center 20%",
            backgroundImage: 'url("/images/me-bg.linkbio.png")',
          },
          _after: {
            top: 0,
            content: "''",
            width: "100%",
            height: "100%",
            opacity: 0.25,
            position: "fixed",
            mixBlendMode: "overlay",
            backgroundRepeat: "repeat",
            backgroundSize: "512px 512px",
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgNTEyIDUxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KICA8ZmlsdGVyIGlkPSdub2lzZUZpbHRlcic+CiAgICA8ZmVUdXJidWxlbmNlIAogICAgICB0eXBlPSdmcmFjdGFsTm9pc2UnIAogICAgICBiYXNlRnJlcXVlbmN5PScwLjcnCiAgICAgIG51bU9jdGF2ZXM9JzMnIAogICAgICBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+CiAgICA8ZmVDb2xvck1hdHJpeCBpbj0idHVyYnVsZW5jZSIgdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgoKICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICA8ZmVGdW5jUiB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIgLz4KICAgICAgPGZlRnVuY0cgdHlwZT0iZGlzY3JldGUiIHRhYmxlVmFsdWVzPSIwIDEiIC8+CiAgICAgIDxmZUZ1bmNCIHR5cGU9ImRpc2NyZXRlIiB0YWJsZVZhbHVlcz0iMCAxIiAvPgogICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogIDwvZmlsdGVyPgogIAogIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNub2lzZUZpbHRlciknLz4KPC9zdmc+")`,
          },
        })}
      />
      <main
        className={css({
          px: 6,
          py: 8,
          zIndex: 1,
          maxWidth: "xl",
          margin: "0 auto",
          position: "relative",
        })}
      >
        <Suspense fallback={<TopMenuSkeleton />}>
          <TopMenu searchParams={props.searchParams} />
        </Suspense>
        <Head>
          <Suspense fallback={<PresentationSkeleton />}>
            <Presentation searchParams={props.searchParams} />
          </Suspense>
        </Head>
        <SocialLinks />
      </main>
    </>
  );
}
