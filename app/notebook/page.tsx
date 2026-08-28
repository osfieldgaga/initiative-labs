import type { Metadata } from "next";
import Link from "next/link";
import { getAllNotebookEntries, getProjectBySlug } from "@/lib/content";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Lab Notebook",
  description:
    "A chronological build journal from Initiative Labs — decisions, measurements, and the things that didn't work.",
};

export default function NotebookFeedPage() {
  const entries = getAllNotebookEntries();

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pb-[60px] pt-[100px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          Build journal
        </div>
        <h1 className="mt-6 text-display font-medium">Lab notebook</h1>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-fg-muted text-pretty">
          {copy.notebook.subhead}
        </p>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x pb-[120px]">
        <div className="border-t-2 border-border">
          {entries.map((entry) => {
            const project = getProjectBySlug(entry.projectTag);
            return (
              <div
                key={entry.slug}
                className="grid grid-cols-1 gap-3 border-b border-border py-11 sm:grid-cols-[170px_1fr] sm:gap-12"
              >
                <div>
                  <div className="font-mono text-xs tracking-[0.06em] text-fg">
                    {entry.date}
                  </div>
                  {project ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-fg"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                      {entry.projectTag}
                    </div>
                  )}
                </div>
                <div className="max-w-[74ch]">
                  <h2 className="text-2xl font-medium leading-tight tracking-[-0.025em]">
                    <Link
                      href={`/notebook/${entry.slug}`}
                      className="text-fg transition-colors hover:text-accent"
                    >
                      {entry.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty">
                    {entry.excerpt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
