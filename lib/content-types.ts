export type ProjectStatus = "Active" | "WIP" | "Shelved" | "Archived";

/** Project frontmatter — enough to render a card or list row. */
export type ProjectMeta = {
  slug: string;
  title: string;
  status: ProjectStatus;
  license: string;
  techTags: string[];
  repoUrl: string;
  docsUrl?: string;
  summary: string;
};

/** A single project's meta plus its parsed markdown body. */
export type Project = ProjectMeta & {
  content: string;
  contentHtml: string;
};

/** Notebook entry frontmatter, plus a derived excerpt for teaser use. */
export type NotebookEntryMeta = {
  slug: string;
  title: string;
  date: string;
  projectTag: string;
  excerpt: string;
};

/** A single notebook entry's meta plus its parsed markdown body. */
export type NotebookEntry = NotebookEntryMeta & {
  content: string;
  contentHtml: string;
};
