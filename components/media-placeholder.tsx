/**
 * Stands in for the canvas's <image-slot> (a canvas-editor drag-and-drop
 * tool, not real site behavior — see Sprint 0 notes). Reserves the same
 * layout space until real photography exists to drop in via next/image.
 */
export function MediaPlaceholder({
  caption,
  className = "",
}: {
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-bg-raised ${className}`}
    >
      <span className="font-mono text-label uppercase tracking-[0.14em] text-fg-faint">
        {caption ?? "Image placeholder, use your imagination."}
      </span>
    </div>
  );
}
