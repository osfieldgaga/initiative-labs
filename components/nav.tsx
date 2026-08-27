"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./wordmark";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/notebook", label: "Lab Notebook" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <div
      className="sticky top-0 z-50 border-b-2 border-border backdrop-blur-md"
      style={{ background: "rgba(21,20,25,0.94)" }}
    >
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-10 px-content-x">
        <Link href="/" className="flex items-center gap-3.5">
          <Wordmark size={34} />
        </Link>
        <div className="flex items-center gap-[34px]">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 font-mono text-label uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {active && <span className="block h-1.5 w-1.5 bg-accent" />}
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://github.com/osfieldgaga"
            target="_blank"
            rel="noreferrer"
            className="block bg-accent px-4 py-[11px] font-mono text-label uppercase tracking-[0.14em] text-bg transition-colors hover:bg-fg"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
