import Link from "next/link";

/**
 * Presentational only — doesn't take the raw NotebookEntry content type
 * directly, since `projectTag` is a slug and this needs the resolved
 * project title. Callers (page components) look that up via
 * getProjectBySlug and pass it in as `projectLabel`.
 */
type NotebookEntryPreviewProps =
  | {
      variant?: "teaser";
      date: string;
      projectLabel: string;
      title: string;
      excerpt: string;
    }
  | {
      variant: "full";
      date: string;
      projectLabel: string;
      title: string;
      contentHtml: string;
    };

export function NotebookEntryPreview(props: NotebookEntryPreviewProps) {
  if (props.variant === "full") {
    return (
      <div className="grid grid-cols-1 gap-8 border-b border-border py-11 sm:grid-cols-[170px_1fr] sm:gap-12">
        <div>
          <div className="font-mono text-xs tracking-[0.06em] text-fg">
            {props.date}
          </div>
          <div className="mt-3 font-mono text-label uppercase tracking-[0.14em] text-accent">
            {props.projectLabel}
          </div>
        </div>
        <div
          className="max-w-[74ch] text-base leading-relaxed text-fg-body [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-fg [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-3.5"
        >
          <h2 className="mb-4 text-2xl font-medium leading-tight tracking-[-0.025em] text-fg">
            {props.title}
          </h2>
          {/* Content is repo-authored markdown, not user input — safe to render directly. */}
          <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
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
        {props.date}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
        {props.projectLabel}
      </div>
      <div>
        <div className="text-xl font-medium tracking-[-0.02em] text-fg">
          {props.title}
        </div>
        <p className="mt-2.5 max-w-[70ch] text-[15px] leading-relaxed text-fg-muted">
          {props.excerpt}
        </p>
      </div>
    </Link>
  );
}
