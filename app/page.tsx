import Link from "next/link";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { NotebookEntryPreview } from "@/components/notebook-entry-preview";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { getAllNotebookEntries, getAllProjects, getProjectBySlug } from "@/lib/content";
import { copy } from "@/lib/copy";

const GITHUB_URL = "https://github.com/osfieldgaga";
const EMAIL = "osfield@initiativelabs.cc";

function SectionHeader({
  eyebrow,
  heading,
  allHref,
  allLabel,
}: {
  eyebrow: string;
  heading: string;
  allHref: string;
  allLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-10">
      <div>
        <div className="font-mono text-eyebrow uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </div>
        <h2 className="mt-6 text-heading font-medium">{heading}</h2>
      </div>
      <Link
        href={allHref}
        className="border-b-2 border-accent pb-1.5 font-mono text-label uppercase tracking-[0.14em] text-accent transition-colors hover:border-fg hover:text-fg"
      >
        {allLabel}
      </Link>
    </div>
  );
}

export default function Home() {
  const projects = getAllProjects().slice(0, 4);
  const notebookEntries = getAllNotebookEntries()
    .slice(0, 3)
    .map((entry) => ({
      ...entry,
      projectLabel:
        getProjectBySlug(entry.projectTag)?.title ?? entry.projectTag,
    }));

  const totalProjects = projects.length;
  const activeOrWip = projects.filter(
    (p) => p.status === "Active" || p.status === "WIP",
  ).length;
  const permissiveCount = projects.filter(
    (p) => p.license === "MIT" || p.license === "Apache-2.0",
  ).length;
  const permissivePercent =
    totalProjects > 0 ? Math.round((permissiveCount / totalProjects) * 100) : 0;

  const headlineWords = copy.home.heroHeadline.trim().split(" ");
  const headlineLast = headlineWords.pop();

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <div className="mx-auto w-full max-w-content px-content-x">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1.4fr_1fr]">
          <div className="pb-16 pt-16 lg:pb-[90px] lg:pt-[120px] lg:pr-[60px]">
            <div className="flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
              <span className="block h-0.5 w-7 bg-accent" />
              {copy.home.heroEyebrow}
            </div>
            <h1 className="mt-9 text-hero font-medium text-balance">
              {headlineWords.join(" ")}{" "}
              <span className="text-accent">{headlineLast}</span>
            </h1>
            <p className="mt-[34px] max-w-[47ch] text-lg leading-relaxed text-fg-muted text-pretty">
              {copy.home.heroSubhead}
            </p>
            <div className="mt-11 flex flex-wrap gap-3.5">
              <Button href="/projects">See the projects</Button>
              <Button href="/notebook" variant="secondary">
                Read the notebook
              </Button>
            </div>
            <div className="mt-[72px] grid grid-cols-3 border-t-2 border-border">
              <div className="border-r-2 border-border py-[22px] pr-5">
                <div className="text-3xl font-medium tracking-[-0.02em]">
                  {String(totalProjects).padStart(2, "0")}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                  Projects logged
                </div>
              </div>
              <div className="border-r-2 border-border px-5 py-[22px]">
                <div className="text-3xl font-medium tracking-[-0.02em]">
                  {String(activeOrWip).padStart(2, "0")}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                  Active or WIP
                </div>
              </div>
              <div className="py-[22px] pl-5">
                <div className="text-3xl font-medium tracking-[-0.02em]">
                  {permissivePercent}%
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                  MIT / Apache-2.0
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-border pb-16 lg:border-l-2 lg:pb-[90px] lg:pl-[60px] lg:pt-[120px]">
            <MediaPlaceholder className="min-h-[320px] flex-1 lg:min-h-[520px]" />
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
              Fig. 01 — Build photo placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Scope */}
      <div className="border-t-2 border-border">
        <div className="mx-auto max-w-content px-content-x py-section-y">
          <div className="font-mono text-eyebrow uppercase tracking-[0.16em] text-accent">
            01 — Scope
          </div>
          <p className="mt-10 max-w-[24ch] text-statement text-fg text-pretty">
            {copy.home.scopeStatement}
          </p>
          <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-fg-muted text-pretty">
            {copy.home.scopeBody}
          </p>
          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
            {copy.home.scopePillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className={`border-t-2 border-accent pt-[26px] ${
                  i === 0
                    ? "sm:pr-10"
                    : i === copy.home.scopePillars.length - 1
                      ? "sm:pl-10"
                      : "sm:px-10"
                }`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted">
                  {pillar.label}
                </div>
                <div className="mt-3.5 text-xl font-medium tracking-[-0.015em]">
                  {pillar.title}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects teaser */}
      <div className="border-t-2 border-border">
        <div className="mx-auto max-w-content px-content-x py-section-y">
          <SectionHeader
            eyebrow="02 — Projects"
            heading={copy.home.projectsHeading}
            allHref="/projects"
            allLabel="All projects →"
          />
          <div className="mt-16 grid grid-cols-1 border-l-2 border-t-2 border-border sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="grid" />
            ))}
          </div>
        </div>
      </div>

      {/* Lab notebook teaser */}
      <div className="border-t-2 border-border">
        <div className="mx-auto max-w-content px-content-x py-section-y">
          <SectionHeader
            eyebrow="03 — Lab notebook"
            heading={copy.home.notebookHeading}
            allHref="/notebook"
            allLabel="All entries →"
          />
          <div className="mt-14 border-t-2 border-border">
            {notebookEntries.map((entry) => (
              <NotebookEntryPreview
                key={entry.slug}
                variant="teaser"
                date={entry.date}
                projectLabel={entry.projectLabel}
                title={entry.title}
                excerpt={entry.excerpt}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contribute CTA */}
      <div className="bg-accent text-bg">
        <div className="mx-auto max-w-content px-content-x py-section-y">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <div className="font-mono text-eyebrow uppercase tracking-[0.16em] text-bg opacity-70">
                04 — Contribute
              </div>
              <h2 className="mt-7 text-heading-lg font-medium text-balance">
                {copy.home.contributeHeadline}
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-pretty">
                {copy.home.contributeBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button tone="accent" href={GITHUB_URL}>
                  Browse the repos
                </Button>
                <Button tone="accent" variant="secondary" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
