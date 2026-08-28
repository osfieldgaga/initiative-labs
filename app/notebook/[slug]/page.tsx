import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllNotebookEntries,
  getNotebookEntryBySlug,
  getProjectBySlug,
} from "@/lib/content";

export function generateStaticParams() {
  return getAllNotebookEntries().map((entry) => ({ slug: entry.slug }));
}

export default async function NotebookEntryDetailPage({
  params,
}: PageProps<"/notebook/[slug]">) {
  const { slug } = await params;
  const entry = getNotebookEntryBySlug(slug);
  if (!entry) notFound();

  const project = getProjectBySlug(entry.projectTag);

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pt-11">
        <Link
          href="/notebook"
          className="inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-accent"
        >
          ← Lab notebook
        </Link>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x pb-14 pt-9">
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="font-mono text-xs tracking-[0.06em] text-fg">
            {entry.date}
          </div>
          {project ? (
            <Link
              href={`/projects/${project.slug}`}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-fg"
            >
              {project.title}
            </Link>
          ) : (
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
              {entry.projectTag}
            </div>
          )}
        </div>
        <h1 className="mt-6 text-display-lg font-medium">{entry.title}</h1>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x pb-[120px]">
        {/* Content is repo-authored markdown, not user input — safe to render directly. */}
        <div
          className="max-w-[74ch] border-t-2 border-border pt-10 text-base leading-relaxed text-fg-body [&_h2]:mb-2 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-fg [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
        />
      </div>
    </div>
  );
}
