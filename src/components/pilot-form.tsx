"use client";

import { useState, type FormEvent } from "react";
import { Button, ArrowIcon } from "./button";
import { siteConfig } from "@/lib/site";

const inputCls =
  "w-full rounded-lg border border-line-2 bg-ink-2 px-3.5 py-2.5 text-[15px] text-fg placeholder:text-muted/70 outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/30";
const labelCls = "mb-1.5 block text-sm font-medium text-fg-2";

export function PilotForm({ intent = "pilot" }: { intent?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/pilot-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, intent }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong");
      setState("done");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-signal/30 bg-signal/5 p-6" role="status">
        <p className="font-display text-xl font-semibold tracking-tight text-fg">Thanks. We will be in touch within one working day.</p>
        <p className="mt-2 text-sm text-fg-2">
          Useful to have ready: how many cameras and NVRs you have, roughly where they point, and who currently
          watches the screens at night.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Your name</label>
          <input id="name" name="name" required autoComplete="name" className={inputCls} placeholder="Ade Okafor" />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Company or site</label>
          <input id="company" name="company" required autoComplete="organization" className={inputCls} placeholder="Apapa Logistics Ltd" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Work email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="ade@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>WhatsApp number <span className="text-muted">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+234 …" />
        </div>
        <div>
          <label htmlFor="country" className={labelCls}>Country</label>
          <select id="country" name="country" required defaultValue="Nigeria" className={inputCls}>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Kenya</option>
            <option>South Africa</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="cameras" className={labelCls}>Cameras on site</label>
          <select id="cameras" name="cameras" defaultValue="9–16" className={inputCls}>
            <option>1–8</option>
            <option>9–16</option>
            <option>17–32</option>
            <option>33–48</option>
            <option>More than 48, or many sites</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="segment" className={labelCls}>What kind of site</label>
          <select id="segment" name="segment" defaultValue="" className={inputCls}>
            <option value="" disabled>Choose one</option>
            <option>Warehouse, factory or depot</option>
            <option>Gated estate or facility management</option>
            <option>Retail</option>
            <option>Bank, fuel station or telecom site</option>
            <option>School, hospital or hospitality</option>
            <option>Government or public space</option>
            <option>I am an installer or integrator</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>What do you want the cameras to catch? <span className="text-muted">(optional)</span></label>
          <textarea id="message" name="message" rows={4} className={inputCls} placeholder="After-hours intrusion at the yard, PPE compliance on the packing line, tailgating at the estate gate…" />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {error ? (
        <p className="rounded-lg border border-critical/40 bg-critical/10 px-3.5 py-2.5 text-sm text-fg" role="alert">
          {error} You can also write to <a className="underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We reply within one working day. No mailing list, no auto-dialler.
        </p>
        <Button type="submit" size="lg" disabled={state === "sending"} className="disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send request"} <ArrowIcon />
        </Button>
      </div>
    </form>
  );
}
