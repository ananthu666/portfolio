import { MetadataRoute } from "next";

const siteUrl = "https://ananthujayakumar.dev"; // TODO: replace with your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
