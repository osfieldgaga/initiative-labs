"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import type { ProjectMeta, ProjectStatus } from "@/lib/content-types";

const FILTERS = ["All", "Active", "WIP", "Shelved", "Archived"] as const;
type Filter = (typeof FILTERS)[number];

function countFor(projects: ProjectMeta[], filter: Filter): number {
  if (filter === "All") return projects.length;
  return projects.filter((p) => p.status === (filter as ProjectStatus)).length;
}

export function ProjectsFilterList({ projects }: { projects: ProjectMeta[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === (filter as ProjectStatus));

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`border px-4 py-[11px] font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                active
                  ? "border-accent bg-accent text-bg"
                  : "border-border bg-transparent text-fg-muted hover:text-fg"
              }`}
            >
              {f}{" "}
              <span className="opacity-55">
                {String(countFor(projects, f)).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
      <h2 className="sr-only">Projects</h2>
      <div className="mt-[60px] border-t-2 border-border">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="list" />
        ))}
        {visible.length === 0 && (
          <p className="py-16 text-center text-fg-muted">
            No projects match this filter.
          </p>
        )}
      </div>
    </>
  );
}
