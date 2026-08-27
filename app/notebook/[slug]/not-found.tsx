import Link from "next/link";

export default function NotebookEntryNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-content flex-1 flex-col items-start justify-center px-content-x py-[120px]">
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
        404
      </div>
      <h1 className="mt-6 text-heading font-medium">Entry not found.</h1>
      <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-fg-muted">
        There&apos;s no notebook entry at this address. It may have been
        renamed or never existed.
      </p>
      <Link
        href="/notebook"
        className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-fg"
      >
        ← Lab notebook
      </Link>
    </div>
  );
}
