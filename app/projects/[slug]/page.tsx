import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { LicenseBadge } from "@/components/license-badge";
import { StatusBadge } from "@/components/status-badge";
import { TagPill } from "@/components/tag-pill";
import { MediaPlaceholder } from "@/components/media-placeholder";
import {
  getAllNotebookEntries,
  getAllProjects,
  getProjectBySlug,
} from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedEntries = getAllNotebookEntries().filter(
    (entry) => entry.projectTag === project.slug,
  );

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pt-11">
        <Link
          href="/projects"
          className="inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-accent"
        >
          ← All projects
        </Link>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x pb-[90px] pt-14">
        <div className="flex flex-wrap items-center gap-3.5">
          <StatusBadge status={project.status} />
          <LicenseBadge license={project.license} variant="pill" />
        </div>
        <h1 className="mt-9 text-display-lg font-medium">{project.title}</h1>
        <p className="mt-8 max-w-[56ch] text-xl leading-relaxed text-fg text-pretty">
          {project.summary}
        </p>
        <div className="mt-10 flex flex-wrap gap-3.5">
          <Button href={project.repoUrl}>View repository</Button>
          {project.docsUrl && (
            <Button href={project.docsUrl} variant="secondary">
              Documentation
            </Button>
          )}
        </div>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x">
        <div className="relative h-[320px] border-2 border-border sm:h-[520px]">
          <MediaPlaceholder className="h-full" />
        </div>
        <div className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
          Fig. 01 — Build photo placeholder
        </div>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x pt-[100px]">
        <div className="grid grid-cols-1 items-start gap-[90px] lg:grid-cols-[1.55fr_1fr]">
          <div>
            <div className="border-t-2 border-accent pt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              What it does
            </div>
            {/* Content is repo-authored markdown, not user input — safe to render directly. */}
            <div
              className="mt-6 max-w-[70ch] text-[17px] leading-relaxed text-fg-body [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-fg [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: project.contentHtml }}
            />
          </div>

          <div>
            <div className="border-t-2 border-border pt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
              Stack
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>

            <div className="mt-12 border-t-2 border-border pt-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
              License
            </div>
            <div className="mt-6 border-2 border-border p-6">
              <div className="text-xl font-medium tracking-[-0.015em]">
                {project.license}
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                Full license text ships in the repository.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-content px-content-x pb-[120px] pt-[100px]">
        <div className="flex flex-wrap items-baseline justify-between gap-8 border-t-2 border-border pt-9">
          <h2 className="text-3xl font-medium tracking-[-0.025em]">
            Notebook entries for this project
          </h2>
          <Link
            href="/notebook"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-fg"
          >
            Full notebook →
          </Link>
        </div>
        <div className="mt-8">
          {relatedEntries.length > 0 ? (
            relatedEntries.map((entry) => (
              <Link
                key={entry.slug}
                href="/notebook"
                className="grid grid-cols-[100px_1fr] items-baseline gap-8 border-b border-border py-6 transition-colors hover:bg-bg-raised sm:grid-cols-[150px_1fr]"
              >
                <div className="font-mono text-xs text-fg-muted">
                  {entry.date}
                </div>
                <div className="text-lg font-medium tracking-[-0.015em] text-fg">
                  {entry.title}
                </div>
              </Link>
            ))
          ) : (
            <p className="py-6 text-fg-muted">
              No notebook entries for this project yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
