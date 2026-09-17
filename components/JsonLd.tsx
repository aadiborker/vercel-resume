import { profile } from "@/data/resume";

export default function JsonLd() {
  const sameAs = profile.links
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));

  const email = profile.links
    .find((link) => link.href.startsWith("mailto:"))
    ?.href.replace("mailto:", "");

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    description: profile.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    ...(email ? { email } : {}),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
