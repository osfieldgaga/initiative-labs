import type { MetadataRoute } from "next";
import { getAllNotebookEntries, getAllProjects } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = ["", "/projects", "/notebook", "/about", "/contribute"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectEntries = getAllProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const notebookEntries = getAllNotebookEntries().map((entry) => ({
    url: `${SITE_URL}/notebook/${entry.slug}`,
    lastModified: new Date(entry.date),
  }));

  return [...staticEntries, ...projectEntries, ...notebookEntries];
}
