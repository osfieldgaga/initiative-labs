# Initiative Labs

Production website for [Initiative Labs](https://initiativelabs.cc) — an
open-source lab for physical intelligence (embodied AI, electronics,
robotics). A build journal and project index, not a portfolio: work in
progress, shelved experiments, and dead ends get a page too.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com) v4 — design tokens live in
  [`app/globals.css`](app/globals.css)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) /
  [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `next/font/google`
- Content as markdown files with frontmatter — no CMS, no database
  ([gray-matter](https://github.com/jonschlinkert/gray-matter) for
  frontmatter, [marked](https://marked.js.org) for rendering)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` (production build), `npm run start` (serve
the production build), `npm run lint`.

No environment variables are needed — this is a static content site with no
external services.

## Content structure

Projects and lab notebook entries are markdown files with frontmatter under
`/content`. Adding one is "add a markdown file" — see
[CONTRIBUTING.md](CONTRIBUTING.md) for the exact steps and frontmatter
fields. In brief:

```
content/
  projects/
    <slug>.md      # title, slug, status, license, techTags, repoUrl,
                    # docsUrl?, summary — body is the full description
  notebook/
    <slug>.md      # title, date, projectTag, slug — body is the entry
```

Both are parsed and typed in [`lib/content.ts`](lib/content.ts) /
[`lib/content-types.ts`](lib/content-types.ts): `getAllProjects`,
`getProjectBySlug`, `getAllNotebookEntries`, `getNotebookEntryBySlug`.
`projectTag` on a notebook entry must match an existing project's `slug`,
or the entry just won't show a linked project.

Static-page copy that isn't per-item content (hero headline, mission
statement, etc.) lives in one place: [`lib/copy.ts`](lib/copy.ts).

## Project structure

```
app/              routes (App Router)
components/       shared UI primitives
content/          projects/ and notebook/ markdown
lib/              content loaders, types, copy, shared constants
public/           static assets (mark, OG image)
```

## License

Code is dual-licensed under [Apache-2.0](LICENSE-APACHE) or [MIT](LICENSE-MIT),
at your option. Written content (notebook entries, site copy) is licensed
under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See
[LICENSE](LICENSE).
