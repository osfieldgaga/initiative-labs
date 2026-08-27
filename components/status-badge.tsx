import type { ProjectStatus } from "@/lib/content-types";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Active: "bg-accent text-bg border-accent",
  WIP: "bg-transparent text-accent border-accent",
  Shelved: "bg-transparent text-fg-muted border-border-shelved",
  Archived: "bg-transparent text-fg-subtle border-border-archived",
};

const SIZE_STYLES = {
  md: "px-[11px] py-1.5 text-[11px]",
  sm: "px-[9px] py-[5px] text-[10px]",
};

export function StatusBadge({
  status,
  size = "md",
}: {
  status: ProjectStatus;
  size?: keyof typeof SIZE_STYLES;
}) {
  return (
    <span
      className={`inline-flex items-center border font-mono uppercase tracking-[0.14em] ${STATUS_STYLES[status]} ${SIZE_STYLES[size]}`}
    >
      {status}
    </span>
  );
}
