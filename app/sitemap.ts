import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/resume";

function getBaseUrl() {
  return (process.env.SITE_URL ?? siteUrl).replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getBaseUrl(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
