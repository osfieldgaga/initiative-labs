"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";
import { GITHUB_URL } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/notebook", label: "Lab Notebook" },
  { href: "/about", label: "About" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-2 font-mono text-label uppercase tracking-[0.14em] transition-colors ${
        active ? "text-fg" : "text-fg-muted hover:text-fg"
      }`}
    >
      {active && <span className="block h-1.5 w-1.5 bg-accent" aria-hidden="true" />}
      {label}
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile panel on route change — adjusted during render (the
  // React-recommended way to reset state when a prop changes) rather than
  // in an effect, which would cause an extra cascading render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-border backdrop-blur-md"
      style={{ background: "rgba(21,20,25,0.94)" }}
    >
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-10 px-content-x">
        <Link href="/" className="flex items-center gap-3.5">
          <Wordmark size={34} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[34px] lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} active={isActive(item.href)} />
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="block bg-accent px-4 py-[11px] font-mono text-label uppercase tracking-[0.14em] text-bg transition-colors hover:bg-fg"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center text-fg lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            ) : (
              <path
                d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-6 border-t border-border px-content-x py-8 lg:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={isActive(item.href)}
              onClick={() => setOpen(false)}
            />
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block w-fit bg-accent px-4 py-[11px] font-mono text-label uppercase tracking-[0.14em] text-bg transition-colors hover:bg-fg"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
