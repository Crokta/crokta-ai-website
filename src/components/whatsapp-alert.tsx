/* Mock of the alert as it arrives on WhatsApp: evidence first, one tap to act. */
export function WhatsAppAlert() {
  return (
    <div className="mx-auto w-full max-w-sm" aria-hidden="true">
      <div className="rounded-[28px] border border-line-2 bg-ink-2 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="rounded-[22px] bg-[#0b141a] p-3 font-sans">
          <div className="mb-3 flex items-center gap-2.5 border-b border-white/5 pb-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-ink">
              <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden="true">
                <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="16" cy="16" r="4" fill="currentColor" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-medium text-fg">Crokta Alerts</p>
              <p className="text-[11px] text-muted">Business account</p>
            </div>
          </div>

          <div className="ml-2 max-w-[92%] rounded-2xl rounded-tl-sm bg-[#1f2c34] p-2 text-[13px] leading-snug text-fg">
            <div className="relative mb-2 h-36 w-full overflow-hidden rounded-lg border border-white/10">
              <div className="absolute inset-0 video-noise" />
              <div className="absolute inset-0 bg-grid opacity-50 [background-size:24px_24px]" />
              <div className="absolute left-[20%] top-[30%] h-[52%] w-[16%] rounded-sm border-2 border-amber" />
              <div className="absolute left-[20%] top-[22%] rounded-sm bg-amber px-1 font-mono text-[9px] font-semibold text-ink">person 0.94</div>
              <div className="absolute inset-x-[12%] bottom-[8%] h-[40%] border border-dashed border-amber/70 bg-amber/10 [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)]" />
              <div className="absolute bottom-1 left-1.5 font-mono text-[9px] text-fg-2">CAM-07 · 21:14:08</div>
            </div>
            <p className="font-semibold text-critical">🔴 CRITICAL · Intrusion</p>
            <p className="mt-1">
              <span className="text-fg-2">Person</span> in <span className="font-medium">yard-perimeter</span>, Loading bay B (CAM-07)
            </p>
            <p className="mt-1 text-fg-2">Rule: after-hours-intrusion · Confidence 0.94</p>
            <p className="mt-1 text-fg-2">Tue 21:14:08 WAT · Apapa depot</p>
            <p className="mt-2 text-[#53bdeb] underline decoration-[#53bdeb]/40">Open 15 s clip · Acknowledge</p>
            <p className="mt-1 text-right font-mono text-[10px] text-muted">21:14:15 ✓✓</p>
          </div>

          <div className="mt-2 ml-2 max-w-[92%] rounded-2xl rounded-tl-sm bg-[#1f2c34] p-2.5 text-[12.5px] leading-snug text-fg-2">
            Acknowledged by <span className="text-fg">Grace O.</span> · assigned to gate guard · 41 s after alert
          </div>
        </div>
      </div>
    </div>
  );
}
