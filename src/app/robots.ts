import type { MetadataRoute } from "next";

// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://phenrique.me";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: baseUrl,
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
}
