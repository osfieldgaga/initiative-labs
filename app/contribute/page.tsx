import type { Metadata } from "next";
import { LabelSection } from "@/components/label-section";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "How to contribute to a project, add a lab notebook entry, or propose code changes to Initiative Labs.",
};

const NOTEBOOK_FRONTMATTER_EXAMPLE = `---
title: "Entry title"
date: "2026-08-27"
projectTag: "road-logger"
slug: "entry-title"
---

Entry body goes here, in Markdown.`;

export default function ContributePage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pb-[90px] pt-[100px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          Contribute
        </div>
        <h1 className="mt-6 text-display font-medium">Contribute</h1>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-fg-muted text-pretty">
          There are two separate things you might want to do: contribute to a
          project&apos;s code, or add to the lab notebook. They work
          differently, since project code and this website live in separate
          repositories.
        </p>
      </div>

      <LabelSection label="Fork a project">
        <div className="max-w-[66ch]">
          <p className="text-lg leading-relaxed text-fg-muted text-pretty">
            Every project on this site links out to its own repository —
            that&apos;s the &quot;View repository&quot; button on its detail
            page. Contributing to a project means forking and opening a pull
            request there, against that project&apos;s own repo, not this
            website&apos;s.
          </p>
          <ol className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-fg-muted">
            <li>
              <span className="text-fg">1.</span> Open the project&apos;s
              page and follow &quot;View repository&quot; to its GitHub repo.
            </li>
            <li>
              <span className="text-fg">2.</span> Fork it, make your changes
              on a branch, and open a pull request against that repo.
            </li>
            <li>
              <span className="text-fg">3.</span> If you&apos;re picking up
              a Shelved or Archived project, say so in your PR description —
              the status shown here isn&apos;t automatic, so it only changes
              once this site&apos;s content is updated to match.
            </li>
          </ol>
        </div>
      </LabelSection>

      <LabelSection label="Add a notebook entry">
        <div className="max-w-[66ch]">
          <p className="text-lg leading-relaxed text-fg-muted text-pretty">
            Lab notebook entries are markdown files with frontmatter,
            committed straight to this website&apos;s own repository — the
            same &quot;add a markdown file&quot; model the whole site runs
            on.
          </p>
          <ol className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-fg-muted">
            <li>
              <span className="text-fg">1.</span> Fork this website&apos;s
              repository.
            </li>
            <li>
              <span className="text-fg">2.</span> Add a new file under{" "}
              <code className="font-mono text-fg">content/notebook/</code>.
            </li>
            <li>
              <span className="text-fg">3.</span> Give it frontmatter with{" "}
              <code className="font-mono text-fg">title</code>,{" "}
              <code className="font-mono text-fg">date</code> (ISO format,{" "}
              <code className="font-mono text-fg">YYYY-MM-DD</code> — entries
              sort on this string directly),{" "}
              <code className="font-mono text-fg">projectTag</code> (must
              exactly match an existing project&apos;s{" "}
              <code className="font-mono text-fg">slug</code>, or the entry
              won&apos;t show a linked project), and{" "}
              <code className="font-mono text-fg">slug</code>:
            </li>
          </ol>
          <pre className="mt-6 overflow-x-auto border border-border bg-bg-raised p-5 font-mono text-[13px] leading-relaxed text-fg-body">
            {NOTEBOOK_FRONTMATTER_EXAMPLE}
          </pre>
          <ol start={4} className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-fg-muted">
            <li>
              <span className="text-fg">4.</span> Write the entry body
              underneath in plain markdown — headings, lists, and paragraphs
              all render. Rough, in-progress notes are the point; it doesn&apos;t
              need to read like a finished write-up. If you use headings,
              start at <code className="font-mono text-fg">##</code> rather
              than <code className="font-mono text-fg">#</code> — the entry
              title above is already the page&apos;s top-level heading.
            </li>
            <li>
              <span className="text-fg">5.</span> Open a pull request.
            </li>
          </ol>
        </div>
      </LabelSection>
    </div>
  );
}
