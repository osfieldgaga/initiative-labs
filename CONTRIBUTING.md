# Contributing

There are two kinds of change here: content (adding or updating a project or
notebook entry, as a markdown file) and code (the Next.js site itself). They
work differently.

## Adding or updating a project

Projects live as markdown files with frontmatter under `content/projects/`.

1. Fork this repository.
2. Add a new file under `content/projects/`, e.g.
   `content/projects/my-project.md` (or edit an existing one to update its
   status, tags, or description).
3. Give it this frontmatter:

   ```markdown
   ---
   title: "My Project"
   slug: "my-project"
   status: "WIP"
   license: "MIT"
   techTags: ["Python", "OpenCV"]
   repoUrl: "https://github.com/you/my-project"
   docsUrl: "https://example.com/docs"
   summary: "One-line summary shown on cards."
   ---

   Longer description goes here, in Markdown. This is the project's full
   "What it does" writeup.
   ```

   - `status` must be exactly one of `Active`, `WIP`, `Shelved`, or `Archived`.
   - `docsUrl` is optional — omit it entirely if there's no separate docs site.
   - `slug` must match the filename and must be unique across `content/projects/`.

4. Open a pull request.

## Adding a notebook entry

Notebook entries are markdown files with frontmatter under `content/notebook/`.

1. Fork this repository.
2. Add a new file under `content/notebook/`, e.g.
   `content/notebook/entry-title.md`.
3. Give it this frontmatter:

   ```markdown
   ---
   title: "Entry title"
   date: "2026-08-27"
   projectTag: "my-project"
   slug: "entry-title"
   ---

   Entry body goes here, in Markdown.
   ```

   - `date` must be ISO format (`YYYY-MM-DD`) — entries sort on this string
     directly, so anything else will sort incorrectly.
   - `projectTag` must exactly match an existing project's `slug`, or the
     entry won't show a linked project on the site.
   - If the body uses headings, start at `##` rather than `#` — the entry
     title is already rendered as the page's top-level heading.

4. Write the entry itself in plain markdown. Rough, in-progress notes are
   the point — it doesn't need to read like a finished write-up.
5. Open a pull request.

## Proposing code changes

1. Fork this repository.
2. Install dependencies: `npm install`.
3. Make your change.
4. Before opening a PR, confirm both of these pass:
   ```bash
   npm run lint
   npm run build
   ```
5. Open a pull request describing what changed and why.

No environment variables or external services are needed to run or build
this project locally.

## License

By contributing, you agree that your contribution is licensed under this
project's existing terms: code under Apache-2.0 or MIT (see
[LICENSE](LICENSE)), written content under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
