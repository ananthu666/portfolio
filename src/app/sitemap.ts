import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { selectedProjects } from "@/data/selected-projects";
import { odooProjects } from "@/data/odoo-projects";

const siteUrl = "https://ananthu-jayakumar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...projects, ...selectedProjects, ...odooProjects];
  return [
    { url: siteUrl, lastModified: new Date() },
    ...all.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
