import Link from "next/link";
import { JsonLd } from "./json-ld";
import { breadcrumbJsonLd, jsonLdGraph } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-fg-2">{c.name}</span>
                ) : (
                  <Link href={c.path} className="transition-colors hover:text-fg">{c.name}</Link>
                )}
                {!last ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={jsonLdGraph(breadcrumbJsonLd(all))} />
    </>
  );
}
