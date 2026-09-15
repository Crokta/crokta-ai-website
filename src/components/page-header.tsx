import type { ReactNode } from "react";
import { Container, Eyebrow } from "./container";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(246,178,52,0.12),transparent)] blur-2xl" />
      <Container className="relative pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="max-w-3xl animate-rise">
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-balance text-4xl font-semibold leading-[1.0] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {lede ? <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-2">{lede}</p> : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
