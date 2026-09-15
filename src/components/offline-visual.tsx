/* Timeline of an outage: what keeps working, what waits, what is not re-notified. */
const rows = [
  { t: "18:02", k: "Grid power drops", s: "UPS takes over · 4 h runtime", tone: "warn" },
  { t: "18:02", k: "Uplink lost", s: "Ethernet → Wi-Fi → 4G · none available", tone: "warn" },
  { t: "18:41", k: "Intrusion, gate B", s: "Detected at edge · siren fired · event in WAL", tone: "crit" },
  { t: "18:41", k: "Alert delivered on LAN", s: "Guard-house console + local push", tone: "ok" },
  { t: "19:10 – 21:55", k: "112 events buffered", s: "Metadata 72 h · clips 24 h · nothing dropped", tone: "ok" },
  { t: "21:56", k: "Uplink restored", s: "Backfill ingested · one summary notification, no alert storm", tone: "ok" },
];

export function OfflineVisual() {
  return (
    <div className="rounded-2xl border border-line bg-ink-2/70 p-1" aria-label="What happens during an outage">
      <div className="flex items-center justify-between rounded-t-xl border-b border-line bg-ink-3/70 px-4 py-2.5 font-mono text-[11px] text-fg-2">
        <span>Apapa depot · Tuesday</span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-amber"><span className="h-1.5 w-1.5 rounded-full bg-amber" />uplink down 3 h 54 m</span>
          <span className="inline-flex items-center gap-1 text-signal"><span className="h-1.5 w-1.5 rounded-full bg-signal" />0 events lost</span>
        </span>
      </div>
      <ol className="relative flex flex-col px-4 py-3">
        <span className="absolute left-[4.85rem] top-4 bottom-4 w-px bg-line-2 sm:left-[6.2rem]" aria-hidden="true" />
        {rows.map((r) => (
          <li key={r.k} className="relative grid grid-cols-[3.6rem_1fr] gap-4 py-2.5 sm:grid-cols-[5rem_1fr]">
            <span className="pt-0.5 font-mono text-[11px] text-muted">{r.t}</span>
            <div className="relative pl-5">
              <span
                className={`absolute left-[-3px] top-[7px] h-2.5 w-2.5 rounded-full ring-4 ring-ink-2 ${
                  r.tone === "crit" ? "bg-critical" : r.tone === "warn" ? "bg-amber" : "bg-signal"
                }`}
              />
              <p className="text-sm font-medium text-fg">{r.k}</p>
              <p className="text-[13px] text-muted">{r.s}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
