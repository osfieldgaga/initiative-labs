export function LicenseBadge({
  license,
  variant = "inline",
}: {
  license: string;
  variant?: "inline" | "pill";
}) {
  if (variant === "pill") {
    return (
      <span className="inline-flex items-center border border-border px-[11px] py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted">
        {license} License
      </span>
    );
  }

  return (
    <span className="font-mono text-[10px] tracking-[0.12em] text-fg-muted">
      {license}
    </span>
  );
}
