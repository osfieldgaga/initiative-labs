import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
// "dark" = default context, sitting on the page's #151419 background.
// "accent" = inside an accent-colored band (the Contribute / closing CTA
// sections), where primary/secondary swap to their inverted colors.
type ButtonTone = "dark" | "accent";

const VARIANT_STYLES: Record<ButtonTone, Record<ButtonVariant, string>> = {
  dark: {
    primary: "bg-accent text-bg hover:bg-fg",
    secondary: "border-2 border-border text-fg hover:border-accent hover:text-accent",
  },
  accent: {
    primary: "bg-bg text-fg hover:bg-fg hover:text-bg",
    secondary: "border-2 border-bg text-bg hover:bg-bg hover:text-accent",
  },
};

const BASE =
  "inline-flex items-center justify-center px-6 py-4 text-sm font-semibold tracking-[0.01em] transition-colors";

type BaseProps = {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (BaseProps & { href: string; onClick?: never })
  | (BaseProps & { href?: undefined; onClick?: () => void });

export function Button({
  variant = "primary",
  tone = "dark",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${VARIANT_STYLES[tone][variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const isHttp = /^https?:\/\//.test(rest.href);
    const isExternal = isHttp || rest.href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={rest.href}
          className={classes}
          {...(isHttp ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={(rest as { onClick?: () => void }).onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
