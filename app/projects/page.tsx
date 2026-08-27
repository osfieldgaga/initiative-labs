import { getAllProjects } from "@/lib/content";
import { copy } from "@/lib/copy";
import { ProjectsFilterList } from "@/components/projects-filter-list";

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pb-[120px] pt-[100px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          Index
        </div>
        <h1 className="mt-6 text-display font-medium">Projects</h1>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-fg-muted text-pretty">
          {copy.projects.subhead}
        </p>
        <ProjectsFilterList projects={projects} />
      </div>
    </div>
  );
}
