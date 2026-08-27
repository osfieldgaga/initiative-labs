import Link from "next/link";
import type { NotebookEntry } from "@/lib/content-types";

export function NotebookEntryPreview({
  entry,
  variant = "teaser",
}: {
  entry: NotebookEntry;
  variant?: "teaser" | "full";
}) {
  if (variant === "full") {
    return (
      <div className="grid grid-cols-1 gap-8 border-b border-border py-11 sm:grid-cols-[170px_1fr] sm:gap-12">
        <div>
          <div className="font-mono text-xs tracking-[0.06em] text-fg">
            {entry.date}
          </div>
          <div className="mt-3 font-mono text-label uppercase tracking-[0.14em] text-accent">
            {entry.project}
          </div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">
            {entry.tag}
          </div>
        </div>
        <div className="max-w-[74ch]">
          <h2 className="text-2xl font-medium leading-tight tracking-[-0.025em]">
            {entry.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-body">
            {entry.body}
          </p>
          {entry.body2 && (
            <p className="mt-3.5 text-base leading-relaxed text-fg-muted">
              {entry.body2}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/notebook"
      className="grid grid-cols-1 items-baseline gap-6 border-b border-border py-8 transition-colors hover:bg-bg-raised sm:grid-cols-[150px_190px_1fr] sm:gap-8"
    >
      <div className="font-mono text-xs tracking-[0.06em] text-fg-muted">
        {entry.date}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
        {entry.project}
      </div>
      <div>
        <div className="text-xl font-medium tracking-[-0.02em] text-fg">
          {entry.title}
        </div>
        <p className="mt-2.5 max-w-[70ch] text-[15px] leading-relaxed text-fg-muted">
          {entry.excerpt ?? entry.body}
        </p>
      </div>
    </Link>
  );
}
