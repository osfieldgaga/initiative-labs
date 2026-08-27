import { Button } from "@/components/button";
import { StatusBadge } from "@/components/status-badge";
import { LicenseBadge } from "@/components/license-badge";
import { TagPill } from "@/components/tag-pill";
import { ProjectCard } from "@/components/project-card";
import { NotebookEntryPreview } from "@/components/notebook-entry-preview";
import type { Project, NotebookEntry, ProjectStatus } from "@/lib/content-types";

const STATUSES: ProjectStatus[] = ["Active", "WIP", "Shelved", "Archived"];

const PROJECTS: Project[] = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    status: "Active",
    license: "MIT",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    tech: ["Python", "OpenCV", "SocketCAN"],
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    status: "WIP",
    license: "MIT",
    blurb:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    tech: ["C", "SDL2", "Assembly"],
  },
  {
    slug: "project-gamma",
    name: "Project Gamma",
    status: "Shelved",
    license: "Apache-2.0",
    blurb:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tech: ["Flex PCB", "STM32"],
  },
  {
    slug: "project-delta",
    name: "Project Delta",
    status: "Archived",
    license: "MIT",
    blurb:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    tech: ["MuJoCo", "PyTorch"],
  },
];

const ENTRIES: NotebookEntry[] = [
  {
    slug: "entry-one",
    date: "2026-08-21",
    project: "Project Alpha",
    tag: "Timing",
    title: "Lorem ipsum dolor sit amet consectetur",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
    body2:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    slug: "entry-two",
    date: "2026-08-09",
    project: "Project Beta",
    tag: "Rendering",
    title: "Ut enim ad minim veniam quis nostrud",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    body2:
      "Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore cum soluta nobis est eligendi optio.",
    excerpt:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 border-t border-border pt-10">
      <h2 className="font-mono text-eyebrow uppercase tracking-[0.16em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DevComponentsPage() {
  return (
    <div className="mx-auto flex max-w-content flex-col gap-14 px-content-x py-16">
      <header>
        <h1 className="text-display font-medium">Component library</h1>
        <p className="mt-4 max-w-prose text-fg-muted">
          Every reusable primitive, rendered with a couple of variants each.
          Dev-only — delete this route before launch.
        </p>
      </header>

      <Section title="Button">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button href="/projects">Primary (link)</Button>
            <Button href="https://github.com/osfieldgaga" variant="secondary">
              Secondary (external)
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 bg-accent p-8">
            <Button tone="accent" variant="primary">
              Primary (on accent)
            </Button>
            <Button tone="accent" variant="secondary">
              Secondary (on accent)
            </Button>
          </div>
        </div>
      </Section>

      <Section title="StatusBadge">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            {STATUSES.map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {STATUSES.map((s) => (
              <StatusBadge key={s} status={s} size="sm" />
            ))}
          </div>
        </div>
      </Section>

      <Section title="LicenseBadge">
        <div className="flex flex-wrap items-center gap-4">
          <LicenseBadge license="MIT" />
          <LicenseBadge license="Apache-2.0" />
          <LicenseBadge license="MIT" variant="pill" />
          <LicenseBadge license="Apache-2.0" variant="pill" />
        </div>
      </Section>

      <Section title="TagPill">
        <div className="flex flex-wrap items-center gap-3">
          <TagPill>Python</TagPill>
          <TagPill>OpenCV</TagPill>
          <TagPill size="sm">SDL2</TagPill>
          <TagPill size="sm">Assembly</TagPill>
        </div>
      </Section>

      <Section title="ProjectCard — grid">
        <div className="grid grid-cols-1 gap-[2px] bg-border sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="grid" />
          ))}
        </div>
      </Section>

      <Section title="ProjectCard — list">
        <div className="border-t border-border">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="list" />
          ))}
        </div>
      </Section>

      <Section title="NotebookEntryPreview — teaser">
        <div className="border-t border-border">
          {ENTRIES.map((e) => (
            <NotebookEntryPreview key={e.slug} entry={e} variant="teaser" />
          ))}
        </div>
      </Section>

      <Section title="NotebookEntryPreview — full">
        <div className="border-t border-border">
          {ENTRIES.map((e) => (
            <NotebookEntryPreview key={e.slug} entry={e} variant="full" />
          ))}
        </div>
      </Section>
    </div>
  );
}
