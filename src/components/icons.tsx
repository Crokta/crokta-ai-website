const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Icon = {
  Bolt: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M11 2 4 11h5l-1 7 7-9h-5l1-7z" /></svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M10 2 4 4.5v5c0 4 2.6 6.8 6 8.5 3.4-1.7 6-4.5 6-8.5v-5L10 2z" /><path d="m7.5 10 2 2 3.5-4" /></svg>
  ),
  Wifi: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M2 7.5a12 12 0 0 1 16 0M5 10.5a8 8 0 0 1 10 0M8 13.5a4 4 0 0 1 4 0" /><circle cx="10" cy="16.5" r=".8" fill="currentColor" /><path d="M3 17 17 3" /></svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10z" /><circle cx="10" cy="10" r="2.5" /></svg>
  ),
  Camera: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><rect x="2" y="6" width="12" height="9" rx="2" /><path d="m14 9 4-2v7l-4-2" /></svg>
  ),
  Clip: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="M8.5 8v4l3.5-2-3.5-2z" fill="currentColor" stroke="none" /></svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><rect x="4" y="9" width="12" height="8" rx="2" /><path d="M7 9V6.5a3 3 0 0 1 6 0V9" /></svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M3 17h14M5 14V9M9 14V5M13 14v-3M17 14V7" /></svg>
  ),
  Tag: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M3 3h6l8 8-6 6-8-8V3z" /><circle cx="7" cy="7" r="1" fill="currentColor" /></svg>
  ),
  Plug: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M7 2v4M13 2v4M5 6h10v3a5 5 0 0 1-10 0V6zM10 14v4" /></svg>
  ),
  Users: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><circle cx="7.5" cy="7" r="2.5" /><circle cx="13.5" cy="8" r="2" /><path d="M2.5 16a5 5 0 0 1 10 0M11.5 16a4 4 0 0 1 6-3.5" /></svg>
  ),
  Doc: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><path d="M5 2h7l4 4v12H5V2z" /><path d="M12 2v4h4M8 10h5M8 13h5" /></svg>
  ),
  Ban: () => (
    <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" {...p} aria-hidden="true"><circle cx="10" cy="10" r="7.5" /><path d="m4.7 4.7 10.6 10.6" /></svg>
  ),
};
