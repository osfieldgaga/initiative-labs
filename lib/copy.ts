/**
 * Central home for static-page copy that isn't sourced from markdown
 * content (projects and notebook entries live under /content instead).
 * Every string here is Lorem Ipsum — real copy gets written later, in
 * this one file, so nothing is scattered through page JSX.
 */
export const copy = {
  home: {
    heroEyebrow: "Open source intelligence",
    heroHeadline:
      "Physical intelligence built in the open.",
    heroSubhead:
      "Real projects and research, built in public, with open source hardware and software. Build it yourself or improve it, and share your work with the world.",
    scopeStatement:
      "We aim at giving physical objects a sense of what is around them, and what to do with that information.",
    scopeBody:
      "All projects are either in progress or done, but can always be improved. Contributions keep the world going, log books for each project will be available to give insights on the prcecss and the decisions made along the way.",
    scopePillars: [
      {
        label: "Physical AI",
        title: "Make your creations more aware",
        body: "Be the designer, and let your creations be the thinker. Build intelligence into your physical objects, and give them a sense of what is around them.",
      },
      {
        label: "Electronics & Embedded programming",
        title: "Hardware made for the software",
        body: "A good design needs hardware that can support...",
      },
      {
        label: "Robotics & Mechatronics",
        title: "Sit amet consectetur adipiscing elit",
        body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      },
    ],
    projectsHeading: "What we are building",
    notebookHeading: "What we are thinking about while building",
    contributeHeadline: "And yes, you can just do things. Contribute.",
    contributeBody:
      "Improvements, new stuff or just implementing a project for the sake of learning. Feel free, do it, and if you need help, reach out.",
  },
  projects: {
    subhead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  notebook: {
    subhead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua.",
  },
  about: {
    eyebrow: "Manifesto",
    headline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    mission: {
      label: "Mission",
      paragraphs: [
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor.",
        "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    throughline: {
      label: "The throughline",
      paragraphs: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo.",
        "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      ],
    },
    howItWorks: {
      label: "How this site works",
      items: [
        {
          title: "Lorem ipsum dolor sit amet",
          body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Ut enim ad minima veniam",
          body: "Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        },
        {
          title: "Neque porro quisquam est",
          body: "Qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora.",
        },
        {
          title: "At vero eos et accusamus",
          body: "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        },
      ],
    },
    closingHeadline: "Lorem ipsum dolor sit amet, consectetur.",
  },
} as const;
