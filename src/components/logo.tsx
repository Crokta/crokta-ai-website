export function Logo({ className = "h-6" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-full w-auto" aria-hidden="true">
        <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h5M9 9v5M23 9h-5M23 9v5M9 23h5M9 23v-5M23 23h-5M23 23v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3.2" fill="#f6b234" />
      </svg>
      <span className="font-display text-[1.05em] font-semibold tracking-tight">Crokta</span>
    </span>
  );
}
