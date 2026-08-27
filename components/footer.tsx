import Link from "next/link";
import { Wordmark } from "./wordmark";
import { EMAIL, GITHUB_URL } from "@/lib/site";

const SITE_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/notebook", label: "Lab notebook" },
  { href: "/about", label: "About" },
  { href: "/contribute", label: "Contribute" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-border">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-[60px] px-content-x pb-14 pt-16 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark size={44} />
          <p className="mt-[22px] max-w-[34ch] text-sm leading-relaxed text-fg-muted">
            An open-source lab for physical intelligence. Built in public,
            licensed permissively.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
            Site
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            {SITE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
            Elsewhere
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-fg-muted hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-fg-muted hover:text-accent"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-content px-content-x pb-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">
          <span>Initiative Labs — initiativelabs.cc</span>
          <span>Content CC BY 4.0 · Code MIT / Apache-2.0</span>
        </div>
      </div>
    </footer>
  );
}
