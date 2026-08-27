import { Logo } from "./logo";

/**
 * Mark + "Initiative Labs" lockup, matching the header treatment in the
 * design canvas. Substitutes for wordmark-white.png (a 9727x3000px asset
 * too large to pull through the design-sync read cap) with the same
 * mark + Space Grotesk pairing the canvas already uses at header scale.
 */
export function Wordmark({ size = 34 }: { size?: number }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: size * 0.41 }}
    >
      <Logo size={size} />
      <span
        className="font-sans text-fg"
        style={{
          fontSize: size * 0.47,
          fontWeight: 500,
          letterSpacing: "-0.01em",
        }}
      >
        Initiative Labs
      </span>
    </div>
  );
}
