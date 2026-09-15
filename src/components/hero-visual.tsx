/* Animated "camera tile" that shows what Crokta does in one glance:
   detection boxes, a zone, an edge/uplink status bar, and an alert with evidence. */

function Person({ label, track, x, y, anim }: { label: string; track: string; x: number; y: number; anim: string }) {
  return (
    <g className={anim} style={{ transformOrigin: `${x}px ${y}px` }}>
      {/* bounding box */}
      <rect x={x - 22} y={y - 58} width="44" height="96" rx="2" fill="rgba(246,178,52,0.06)" stroke="#f6b234" strokeWidth="1.5" />
      <path d={`M${x - 22} ${y - 50}v-8h8M${x + 22} ${y - 50}v-8h-8M${x - 22} ${y + 30}v8h8M${x + 22} ${y + 30}v8h-8`} stroke="#ffd27a" strokeWidth="2" fill="none" />
      {/* silhouette */}
      <circle cx={x} cy={y - 40} r="8" fill="#c8d0da" />
      <path d={`M${x - 11} ${y - 28}h22a5 5 0 0 1 5 5v22a3 3 0 0 1 -3 3h-3v28h-8v-24h-4v24h-8v-28h-3a3 3 0 0 1 -3 -3v-22a5 5 0 0 1 5 -5z`} fill="#aeb8c4" />
      {/* label */}
      <rect x={x - 22} y={y - 74} width="76" height="15" rx="2" fill="#f6b234" />
      <text x={x - 18} y={y - 63} fontFamily="var(--font-geist-mono)" fontSize="9.5" fill="#0a0d12" fontWeight="600">
        {label} · {track}
      </text>
    </g>
  );
}

export function HeroVisual() {
  return (
    <div className="relative w-full min-w-0 select-none" aria-hidden="true">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(246,178,52,0.16),transparent_70%)] blur-2xl" />

      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-line-2 bg-ink-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        {/* HUD top bar */}
        <div className="flex min-w-0 items-center justify-between gap-3 overflow-hidden border-b border-line bg-ink-3/80 px-3.5 py-2 font-mono text-[11px] text-fg-2">
          <div className="flex min-w-0 items-center gap-2.5 whitespace-nowrap">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-critical" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-critical" />
            </span>
            <span className="text-fg">CAM-07</span>
            <span className="truncate text-muted">Loading bay B<span className="hidden lg:inline"> · sub-stream 1280×720 @ 8 fps</span></span>
          </div>
          <div className="hidden shrink-0 items-center gap-2 whitespace-nowrap sm:flex">
            <span className="rounded-md border border-signal/30 bg-signal/10 px-1.5 py-0.5 text-signal">EDGE · 212 ms</span>
            <span className="rounded-md border border-amber/30 bg-amber/10 px-1.5 py-0.5 text-amber">UPLINK DOWN · buffering 1,240</span>
          </div>
        </div>

        {/* video area */}
        <div className="video-noise relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
          <div className="absolute inset-0 bg-grid opacity-60 [background-size:36px_36px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[18%] animate-scan bg-gradient-to-b from-transparent via-cyan/15 to-transparent" />

          <svg viewBox="0 0 640 400" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            {/* perspective floor */}
            <path d="M0 400 L200 190 L440 190 L640 400 Z" fill="url(#floor)" />
            <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
              <path d="M200 190 L0 400M440 190 L640 400M280 190 L160 400M360 190 L480 400M320 190 L320 400" />
              <path d="M180 230h280M160 275h320M130 330h380" />
            </g>
            {/* container / shelving silhouettes */}
            <g fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)">
              <rect x="20" y="120" width="150" height="120" />
              <rect x="470" y="60" width="150" height="100" />
              <path d="M20 120l30-30h150l-30 30zM470 60l30-30h150l-30 30z" />
            </g>

            {/* zone polygon */}
            <g>
              <path
                d="M60 395 L150 250 L400 250 L470 395 Z"
                fill="rgba(246,178,52,0.09)"
                stroke="#f6b234"
                strokeWidth="1.5"
                strokeDasharray="6 5"
              />
              <rect x="152" y="232" width="102" height="16" rx="2" fill="rgba(10,13,18,0.85)" stroke="rgba(246,178,52,0.5)" />
              <text x="159" y="244" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#ffd27a">zone: yard-perimeter</text>
            </g>

            {/* parked vehicle */}
            <g>
              <rect x="478" y="176" width="118" height="58" rx="3" fill="rgba(95,211,243,0.06)" stroke="#5fd3f3" strokeWidth="1.2" />
              <rect x="492" y="199" width="90" height="30" rx="4" fill="#7f8c9a" />
              <rect x="505" y="186" width="55" height="18" rx="3" fill="#94a1ae" />
              <circle cx="510" cy="230" r="6" fill="#2b333d" />
              <circle cx="565" cy="230" r="6" fill="#2b333d" />
              <rect x="478" y="162" width="86" height="14" rx="2" fill="#5fd3f3" />
              <text x="482" y="172.5" fontFamily="var(--font-geist-mono)" fontSize="9.5" fill="#0a0d12" fontWeight="600">vehicle 0.88 · #t1170</text>
            </g>

            <Person label="person 0.94" track="#t1183" x={150} y={330} anim="animate-track-a" />
            <Person label="person 0.91" track="#t1184" x={330} y={295} anim="animate-track-b" />
          </svg>

          {/* corner overlays */}
          <div className="absolute left-3 top-3 font-mono text-[10px] text-fg-2/80">21:14:08 · Africa/Lagos · after-hours</div>
          <div className="absolute right-3 top-3 hidden font-mono text-[10px] text-fg-2/80 sm:block">REC ring 60s · WAL ok</div>

          {/* alert card */}
          <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:w-[268px] animate-alert-in">
            <div className="rounded-xl border border-critical/40 bg-ink/90 p-2.5 shadow-[0_20px_50px_-20px_rgba(255,90,95,0.55)] backdrop-blur sm:p-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-critical">
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor"><path d="M6 1 11.5 11H.5L6 1Zm-.6 3.4v3.4h1.2V4.4H5.4Zm0 4.4v1.2h1.2V8.8H5.4Z" /></svg>
                  Critical · Intrusion
                </span>
                <span className="font-mono text-[10px] text-muted">3 s ago</span>
              </div>
              <div className="mt-2 flex gap-2.5">
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-line-2 bg-ink-3">
                  <div className="absolute inset-0 video-noise" />
                  <div className="absolute left-5 top-2 h-9 w-5 rounded-sm border border-amber" />
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-amber/70" />
                </div>
                <div className="min-w-0 text-[12px] leading-snug text-fg-2">
                  <p className="truncate text-fg">Person in <span className="text-amber-2">yard-perimeter</span></p>
                  <p className="truncate">CAM-07 · Loading bay B</p>
                  <p className="truncate font-mono text-[10.5px] text-muted">rule: after-hours-intrusion · conf 0.94</p>
                </div>
              </div>
              <div className="mt-2.5 hidden grid-cols-3 gap-1.5 text-[11px] sm:grid">
                <span className="rounded-md bg-amber py-1 text-center font-medium text-ink">Acknowledge</span>
                <span className="rounded-md border border-line-2 py-1 text-center text-fg-2">Assign</span>
                <span className="rounded-md border border-line-2 py-1 text-center text-fg-2">False →</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom telemetry strip */}
        <div className="grid grid-cols-3 divide-x divide-line border-t border-line bg-ink-3/60 font-mono text-[10.5px] text-muted sm:grid-cols-4">
          <div className="px-3 py-2"><span className="block text-fg-2">Siren</span>fired locally · 0.6 s</div>
          <div className="px-3 py-2"><span className="block text-fg-2">Clip</span>15 s · 1.4 MB · spooled</div>
          <div className="px-3 py-2"><span className="block text-fg-2">Offline buffer</span>72 h events · 24 h clips</div>
          <div className="hidden px-3 py-2 sm:block"><span className="block text-fg-2">Raw video</span>stays on site</div>
        </div>
      </div>
    </div>
  );
}
