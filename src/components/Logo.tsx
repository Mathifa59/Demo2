import Image from "next/image";

type LogoProps = {
  variant?: "default" | "light";
  layout?: "horizontal" | "stacked";
};

export function Logo({ variant = "default", layout = "stacked" }: LogoProps) {
  if (layout === "horizontal") {
    return (
      <div className="relative h-10 w-[156px] sm:h-11 sm:w-[176px]">
        <Image
          src="/assets/Recurso 1@4x.png"
          alt="Selekta — Selección Automatizada"
          fill
          sizes="176px"
          className="object-contain object-left"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
      <Image
        src={
          variant === "light"
            ? "/assets/SELEKTA_fondo_azul.png"
            : "/assets/SELEKTA_fondo_blanco.png"
        }
        alt="Selekta"
        fill
        sizes="80px"
        className="object-cover"
        priority
      />
    </div>
  );
}
