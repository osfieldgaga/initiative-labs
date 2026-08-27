import {
  getAllNotebookEntries,
  getAllProjects,
  getNotebookEntryBySlug,
} from "@/lib/content";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 border-t border-border pt-10">
      <h2 className="font-mono text-eyebrow uppercase tracking-[0.16em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DevContentPage() {
  const projects = getAllProjects();
  const entries = getAllNotebookEntries();
  const rendered = getNotebookEntryBySlug("lorem-ipsum-dolor-sit-amet");

  return (
    <div className="mx-auto flex max-w-content flex-col gap-14 px-content-x py-16">
      <header>
        <h1 className="text-display font-medium">Content structure</h1>
        <p className="mt-4 max-w-prose text-fg-muted">
          Loader output as a plain data dump, plus one fully rendered
          markdown file. Dev-only checkpoint — no real page styling yet.
        </p>
      </header>

      <Section title={`getAllProjects() — ${projects.length}`}>
        <pre className="overflow-x-auto bg-bg-raised p-4 text-xs text-fg-body">
          {JSON.stringify(projects, null, 2)}
        </pre>
      </Section>

      <Section title={`getAllNotebookEntries() — ${entries.length}`}>
        <pre className="overflow-x-auto bg-bg-raised p-4 text-xs text-fg-body">
          {JSON.stringify(entries, null, 2)}
        </pre>
      </Section>

      <Section title='getNotebookEntryBySlug("lorem-ipsum-dolor-sit-amet")'>
        {rendered ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-2 font-mono text-label uppercase tracking-[0.14em] text-fg-faint">
                Raw markdown body
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap bg-bg-raised p-4 text-xs text-fg-body">
                {rendered.content}
              </pre>
            </div>
            <div>
              <div className="mb-2 font-mono text-label uppercase tracking-[0.14em] text-fg-faint">
                Rendered HTML (plain dump — no prose styling yet)
              </div>
              {/* Content is repo-authored markdown, not user input — safe to render directly. */}
              <div
                className="bg-bg-raised p-4 text-sm text-fg"
                dangerouslySetInnerHTML={{ __html: rendered.contentHtml }}
              />
            </div>
          </div>
        ) : (
          <p className="text-fg-muted">Entry not found.</p>
        )}
      </Section>
    </div>
  );
}
