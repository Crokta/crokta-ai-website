import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[background-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-amber text-ink hover:bg-amber-2 shadow-[0_0_0_1px_rgba(246,178,52,0.4),0_8px_30px_-10px_rgba(246,178,52,0.6)]",
  secondary: "bg-ink-3 text-fg border border-line-2 hover:bg-ink-4 hover:border-white/25",
  ghost: "text-fg-2 hover:text-fg hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & (({ href: string } & Omit<ComponentProps<typeof Link>, "href">) | ({ href?: undefined } & ComponentProps<"button">));

export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest as { href: string } & Omit<ComponentProps<typeof Link>, "href">;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }
  const buttonProps = rest as ComponentProps<"button">;
  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
