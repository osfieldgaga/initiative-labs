import Image from "next/image";

export function Logo({
  size = 34,
  alt = "",
}: {
  size?: number;
  /** Defaults to decorative (empty alt) since Logo is always paired with
   * adjacent "Initiative Labs" text in Wordmark, which already provides
   * the accessible name — pass a real alt if using Logo on its own. */
  alt?: string;
}) {
  return (
    <Image
      src="/mark-white.png"
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size, display: "block" }}
    />
  );
}
