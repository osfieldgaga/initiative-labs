/**
 * Central home for static-page copy that isn't sourced from markdown
 * content (projects and notebook entries live under /content instead).
 * Every string here is Lorem Ipsum — real copy gets written later, in
 * this one file, so nothing is scattered through page JSX.
 */
export const copy = {
  home: {
    heroEyebrow: "Lorem ipsum · Dolor sit",
    heroHeadline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    heroSubhead:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.",
    scopeStatement:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    scopeBody:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident.",
    scopePillars: [
      {
        label: "Lorem",
        title: "Ipsum dolor sit amet consectetur",
        body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      },
      {
        label: "Ipsum",
        title: "Dolor sit amet consectetur adipiscing",
        body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      },
      {
        label: "Dolor",
        title: "Sit amet consectetur adipiscing elit",
        body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      },
    ],
    projectsHeading: "Lorem ipsum dolor sit, amet consectetur.",
    notebookHeading: "Adipiscing elit sed do eiusmod tempor.",
    contributeHeadline: "Incididunt ut labore, et dolore magna.",
    contributeBody:
      "Aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  projects: {
    subhead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  about: {
    missionBlurb:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    manifestoBody: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    ],
  },
  contribute: {
    instructions: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    ],
  },
} as const;
