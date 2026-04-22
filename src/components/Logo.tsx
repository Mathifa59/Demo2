import Image from "next/image";

type LogoProps = {
  tagline?: boolean;
  variant?: "default" | "light";
  layout?: "horizontal" | "stacked";
};

export function Logo({
  tagline = true,
  variant = "default",
  layout = "stacked",
}: LogoProps) {
  if (layout === "horizontal") {
    return (
      <div className="relative h-11 w-[170px] sm:h-12 sm:w-[190px]">
        <Image
          src="/sortiva-logo-horizontal.png"
          alt="Sortiva — Selección Automatizada"
          fill
          sizes="190px"
          className="object-contain object-left"
          priority
        />
      </div>
    );
  }

  const textColor =
    variant === "light" ? "text-white" : "text-accent-700";
  const taglineColor =
    variant === "light" ? "text-white/70" : "text-brand-700/80";
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0">
        <Image
          src="/sortiva-logo.png"
          alt="Sortiva"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>
      <div className="leading-tight">
        <div
          className={`text-xl font-extrabold tracking-[0.14em] ${textColor}`}
        >
          SORTIVA
        </div>
        {tagline && (
          <div
            className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${taglineColor}`}
          >
            Selección Automatizada
          </div>
        )}
      </div>
    </div>
  );
}
