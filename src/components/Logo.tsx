export function Logo({ tagline = true }: { tagline?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        className="h-11 w-11 shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="23" fill="#fff" stroke="#246230" strokeWidth="2" />
        <path
          d="M10 30c6 2 12 1 17-4s6-11 4-17c-6-2-12-1-17 4s-6 11-4 17z"
          fill="#3d874d"
        />
        <path
          d="M10 30c4-8 10-13 18-15"
          stroke="#1d4d28"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="leading-tight">
        <div className="font-extrabold tracking-tight text-brand-800 text-lg">
          JOIS 0 WASTE
        </div>
        {tagline && (
          <div className="text-[10px] text-brand-700/80 font-medium">
            Más eficiencia. Menos desperdicio. Mayor rentabilidad.
          </div>
        )}
      </div>
    </div>
  );
}
