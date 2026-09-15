import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button, ArrowIcon } from "@/components/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <Container className="relative py-28 sm:py-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">404 · no detection</p>
        <h1 className="mt-4 font-display text-balance text-4xl font-semibold leading-[1.0] tracking-tight sm:text-6xl">
          Nothing in this zone.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-fg-2">The page you asked for does not exist or has moved. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Home <ArrowIcon /></Button>
          {siteConfig.nav.map((n) => (
            <Button key={n.href} href={n.href} variant="secondary">{n.label}</Button>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          Looking for something specific? <Link href="/contact" className="text-amber underline-offset-4 hover:underline">Ask us</Link>.
        </p>
      </Container>
    </section>
  );
}
