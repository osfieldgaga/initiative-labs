import type { ReactNode } from "react";

const SIZE_STYLES = {
  md: "px-[9px] py-[5px]",
  sm: "px-2 py-1",
};

export function TagPill({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: keyof typeof SIZE_STYLES;
}) {
  return (
    <span
      className={`border border-border font-mono text-[10px] uppercase tracking-[0.1em] text-fg-muted ${SIZE_STYLES[size]}`}
    >
      {children}
    </span>
  );
}
