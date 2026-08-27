import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type {
  NotebookEntry,
  NotebookEntryMeta,
  Project,
  ProjectMeta,
  ProjectStatus,
} from "./content-types";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");
const NOTEBOOK_DIR = path.join(process.cwd(), "content", "notebook");

const STATUS_ORDER: Record<ProjectStatus, number> = {
  Active: 0,
  WIP: 1,
  Shelved: 2,
  Archived: 3,
};

function readMarkdownFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => matter(fs.readFileSync(path.join(dir, file), "utf8")));
}

function renderHtml(markdown: string): string {
  return marked.parse(markdown, { async: false });
}

/** Plain-text preview of a markdown body — strips formatting, doesn't parse to HTML. */
function excerptFrom(markdown: string, maxLength = 160): string {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[.*?\]\(.*?\)/g, " ")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#*_>`~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trimEnd()}…`;
}

export function getAllProjects(): ProjectMeta[] {
  return readMarkdownFiles(PROJECTS_DIR)
    .map(({ data }) => data as ProjectMeta)
    .sort((a, b) => {
      const statusDiff = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
      return statusDiff !== 0 ? statusDiff : a.title.localeCompare(b.title);
    });
}

export function getProjectBySlug(slug: string): Project | undefined {
  const match = readMarkdownFiles(PROJECTS_DIR).find(
    ({ data }) => data.slug === slug,
  );
  if (!match) return undefined;
  return {
    ...(match.data as ProjectMeta),
    content: match.content,
    contentHtml: renderHtml(match.content),
  };
}

export function getAllNotebookEntries(): NotebookEntryMeta[] {
  return readMarkdownFiles(NOTEBOOK_DIR)
    .map(({ data, content }) => ({
      ...(data as Omit<NotebookEntryMeta, "excerpt">),
      excerpt: excerptFrom(content),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNotebookEntryBySlug(slug: string): NotebookEntry | undefined {
  const match = readMarkdownFiles(NOTEBOOK_DIR).find(
    ({ data }) => data.slug === slug,
  );
  if (!match) return undefined;
  return {
    ...(match.data as Omit<NotebookEntryMeta, "excerpt">),
    excerpt: excerptFrom(match.content),
    content: match.content,
    contentHtml: renderHtml(match.content),
  };
}
