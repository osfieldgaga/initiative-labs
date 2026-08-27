import { Logo } from "@/components/logo";
import { Wordmark } from "@/components/wordmark";

const swatches = [
  { name: "bg", className: "bg-bg border border-border" },
  { name: "bg-raised", className: "bg-bg-raised border border-border" },
  { name: "border", className: "bg-border" },
  { name: "fg", className: "bg-fg" },
  { name: "fg-body", className: "bg-fg-body" },
  { name: "fg-muted", className: "bg-fg-muted" },
  { name: "fg-faint", className: "bg-fg-faint" },
  { name: "accent", className: "bg-accent" },
];

export default function Home() {
  return (
    <div className="flex-1 bg-bg text-fg">
      <div className="mx-auto max-w-content px-content-x py-16 flex flex-col gap-16">
        <header className="flex items-center gap-4">
          <Wordmark size={40} />
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-label tracking-[0.14em] uppercase text-fg-muted">
            Sprint 0 — token check
          </h2>
          <p className="text-fg-muted max-w-prose">
            This is a scaffolding checkpoint, not a real page. Colors, type,
            and the mark are pulled from the Tailwind theme in globals.css —
            nothing here is hand-tuned per component.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-label tracking-[0.14em] uppercase text-fg-muted">
            Color tokens
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div className={`h-16 ${s.className}`} />
                <span className="font-mono text-label text-fg-muted">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h3 className="font-mono text-label tracking-[0.14em] uppercase text-fg-muted">
            Type scale
          </h3>
          <p className="text-hero font-medium">Hero</p>
          <p className="text-display font-medium">Display</p>
          <p className="text-heading font-medium">Heading</p>
          <p className="text-statement">Statement text sample</p>
          <p className="text-lg text-fg-body max-w-prose">
            Body copy sample, set in Space Grotesk at the body size used
            across project detail pages.
          </p>
          <p className="font-mono text-eyebrow tracking-[0.16em] uppercase text-accent">
            Eyebrow label — JetBrains Mono
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="font-mono text-label tracking-[0.14em] uppercase text-fg-muted">
            Mark
          </h3>
          <Logo size={48} />
        </section>
      </div>
    </div>
  );
}
