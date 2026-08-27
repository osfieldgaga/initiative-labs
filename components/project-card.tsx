import Link from "next/link";
import { StatusBadge } from "./status-badge";
import { LicenseBadge } from "./license-badge";
import { TagPill } from "./tag-pill";
import type { Project } from "@/lib/content-types";

export function ProjectCard({
  project,
  variant = "grid",
}: {
  project: Project;
  variant?: "grid" | "list";
}) {
  if (variant === "list") {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="grid grid-cols-1 items-start gap-8 border-b border-border py-9 transition-colors hover:bg-bg-raised sm:grid-cols-[1.6fr_1fr_auto] sm:gap-12"
      >
        <div>
          <div className="flex items-center gap-3.5">
            <StatusBadge status={project.status} />
            <LicenseBadge license={project.license} />
          </div>
          <div className="mt-5 text-3xl font-medium tracking-[-0.025em] text-fg">
            {project.name}
          </div>
          <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-fg-muted">
            {project.blurb}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <TagPill key={t}>{t}</TagPill>
          ))}
        </div>
        <div className="pt-1.5 font-mono text-label uppercase tracking-[0.14em] text-accent">
          Open →
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex min-h-[300px] flex-col bg-bg px-9 pb-[34px] pt-[38px] transition-colors hover:bg-bg-raised"
    >
      <div className="flex items-center justify-between gap-4">
        <StatusBadge status={project.status} />
        <LicenseBadge license={project.license} />
      </div>
      <div className="mt-[30px] text-[27px] font-medium tracking-[-0.025em] text-fg">
        {project.name}
      </div>
      <p className="mt-3.5 max-w-[44ch] text-[15px] leading-relaxed text-fg-muted">
        {project.blurb}
      </p>
      <div className="flex-1" />
      <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-[18px]">
        {project.tech.map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>
    </Link>
  );
}
