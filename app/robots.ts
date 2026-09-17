import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/resume";

function getBaseUrl() {
  return (process.env.SITE_URL ?? siteUrl).replace(/\/$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
