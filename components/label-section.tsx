import type { ReactNode } from "react";

/** The label + content two-column section pattern used on About and Contribute. */
export function LabelSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t-2 border-border">
      <div className="mx-auto max-w-content px-content-x py-[90px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div className="font-mono text-eyebrow uppercase tracking-[0.16em] text-accent">
            {label}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
