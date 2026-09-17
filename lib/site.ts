import { siteUrl } from "@/data/resume";

/** Resolve canonical site URL; empty SITE_URL must not win over the fallback. */
export function getBaseUrl(): string {
  const fromEnv = process.env.SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (fromVercel) {
    return `https://${fromVercel.replace(/\/$/, "")}`;
  }

  return siteUrl.replace(/\/$/, "");
}
