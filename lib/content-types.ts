export type ProjectStatus = "Active" | "WIP" | "Shelved" | "Archived";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  license: string;
  blurb: string;
  tech: string[];
};

export type NotebookEntry = {
  slug: string;
  date: string;
  project: string;
  tag: string;
  title: string;
  body: string;
  body2?: string;
  excerpt?: string;
};
