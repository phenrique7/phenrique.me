import { basehub } from "basehub";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Pump } from "basehub/react-pump";
import { css } from "../../../styled-system/css";
import { Head } from "@/app/linkbio/_components/head";
import { TopBar } from "@/app/linkbio/_components/top-bar";
import { SocialLinks } from "@/app/linkbio/_components/social-links";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await basehub().query({
    linkbio: {
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
    title: metadata.linkbio.metadata.title,
    description: metadata.linkbio.metadata.description,
    openGraph: {
      title: metadata.linkbio.metadata.title,
      images: [
        {
          width: 1200,
          height: 630,
          url: metadata.linkbio.metadata.ogImage.url,
        },
      ],
    },
    twitter: {
      title: metadata.linkbio.metadata.title,
      description: metadata.linkbio.metadata.description,
    },
  };
}

export default async function LinkbioPage() {
  return (
    <div
      className={css({
        inset: 0,
        zIndex: -1,
        color: "white",
        height: "100dvh",
        overflowY: "auto",
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
    >
      <div
        className={css({
          px: 6,
          pb: 8,
          zIndex: 1,
          maxWidth: "xl",
          margin: "0 auto",
          position: "relative",
        })}
      >
        <Pump
          next={{ revalidate: 30 }}
          draft={(await draftMode()).isEnabled}
          queries={[
            {
              linkbio: {
                bioSection: {
                  name: true,
                  quote: true,
                  description: true,
                  avatar: {
                    on_BlockImage: {
                      url: true,
                      alt: true,
                      width: true,
                      height: true,
                    },
                  },
                },
                socialLinks: {
                  items: {
                    _title: true,
                    mediaName: true,
                    mediaSlug: true,
                    mediaLink: true,
                    mediaLogo: {
                      on_BlockFile: {
                        url: true,
                      },
                      on_BlockImage: {
                        url: true,
                        alt: true,
                        width: true,
                        height: true,
                      },
                    },
                  },
                },
              },
            },
          ]}
        >
          {async ([data]) => {
            "use server";

            return (
              <>
                <TopBar />
                <Head
                  name={data.linkbio.bioSection.name}
                  quote={data.linkbio.bioSection.quote}
                  description={data.linkbio.bioSection.description}
                  avatar={{
                    url: data.linkbio.bioSection.avatar.url,
                    // @ts-ignore
                    alt: data.linkbio.bioSection.avatar.alt,
                    // @ts-ignore
                    width: data.linkbio.bioSection.avatar.width,
                    // @ts-ignore
                    height: data.linkbio.bioSection.avatar.height,
                  }}
                />
                <SocialLinks
                  items={data.linkbio.socialLinks.items.map((item) => ({
                    id: item._title,
                    mediaName: item.mediaName,
                    mediaSlug: item.mediaSlug,
                    mediaLink: item.mediaLink,
                    mediaLogo: {
                      url: item.mediaLogo.url,
                      // @ts-ignore
                      alt: item.mediaLogo.alt ?? null,
                      // @ts-ignore
                      width: item.mediaLogo.width ?? null,
                      // @ts-ignore
                      height: item.mediaLogo.height ?? null,
                    },
                  }))}
                />
              </>
            );
          }}
        </Pump>
      </div>
    </div>
  );
}
