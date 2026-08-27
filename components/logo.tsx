import Image from "next/image";

export function Logo({ size = 34 }: { size?: number }) {
  return (
    <Image
      src="/mark-white.png"
      alt="Initiative Labs"
      width={size}
      height={size}
      style={{ width: size, height: size, display: "block" }}
    />
  );
}
