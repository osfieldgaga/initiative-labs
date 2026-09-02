/**
 * Central home for static-page copy that isn't sourced from markdown
 * content (projects and notebook entries live under /content instead).
 * Every string here is Lorem Ipsum — real copy gets written later, in
 * this one file, so nothing is scattered through page JSX.
 */
export const copy = {
  home: {
    heroEyebrow: "Physical AI",
    heroHeadline:
      "Physical intelligence, built in the open.",
    heroSubhead:
      "Sensors, control systems, actuation. Released as they're built, licensed so you can take them.",
    scopeStatement:
      "We aim to give physical objects a sense of what is around them, and what to do with that information.",
    scopeBody:
      "Electronics and robotics are the means, not the point. Every project here has to close the loop between the world and a decision.",
    scopePillars: [
      {
        label: "Sense",
        title: "Sensors, CAN buses, tactile arrays",
        body: "Turning the world into signal worth trusting. Timestamped, sourced, fast enough to act on.",
      },
      {
        label: "Decide",
        title: "Models and control systems",
        body: "Turning those signals into a choice, in the time budget the hardware allows.",
      },
      {
        label: "Act",
        title: "Actuation, results or consequences",
        body: "It either works or it doesn't.",
      },
    ],
    projectsHeading: "What we are building.",
    notebookHeading: "What we are thinking about while building.",
    contributeHeadline: "And yes, you can just do things. Fork it, build it, break it.",
    contributeBody:
      "Fix a bug, build the next milestone, or just implement something shelved to learn how it works. Do it, and if you get stuck, reach out.",
  },
  projects: {
    subhead:
      "All projects, whether active or not. Contribute or unshelf it if it inspires you.",
  },
  notebook: {
    subhead:
      "Ongoing notes and updates on projects. They cover design decisions, or just thoughts along the way.",
  },
  about: {
    eyebrow: "Manifesto",
    headline:
      "Ideas about physical intelligence get built here, not theorised.",
    mission: {
      label: "Mission",
      paragraphs: [
        "Initiative Labs is an open-source lab; not a physical lab, and not yet a company. It's where I build side projects at the intersection of physical intelligence, electronics, and robotics.",
        "Everything ships in public, work-in-progress and all, under permissive licenses (MIT or Apache-2.0 by default) so anyone can pick up where I left off. That includes the projects that stalled. A shelved build with honest notes is more useful to the next person than a polished summary of a finished one.",
      ],
    },
    throughline: {
      label: "The throughline",
      paragraphs: [
        "Physical intelligence is the scope: embodied systems that sense, decide, and act in the physical world.",
        "Electronics and robotics show up constantly, but never as ends in themselves. The test for whether something belongs here is whether it closes a loop between the world and a decision. A sensor that only logs, or a mechanism that only moves on command, is a component. Interesting, but not the work.",
      ],
    },
    howItWorks: {
      label: "How this site works",
      items: [
        {
          title: "Status is stated",
          body: "Active, WIP, Shelved, or Archived — on every card and every page. No project is presented as finished when it isn't.",
        },
        {
          title: "License is visible",
          body: "Permissive by default, shown next to the status rather than buried in a repo footer.",
        },
        {
          title: "Dead ends stay up",
          body: "Abandoned work keeps its page and its notes. Deleting it would hide the most useful part.",
        },
        {
          title: "Notes over write-ups",
          body: "The notebook is written during the build, not after. It's rougher on purpose.",
        },
      ],
    },
    closingHeadline: "Get in touch or just take the code.",
  },
} as const;
