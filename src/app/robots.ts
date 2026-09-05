import { MetadataRoute } from "next";

const siteUrl = "https://portfolio-opal-mu-19.vercel.app"; // TODO: swap to your custom domain if you add one

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
