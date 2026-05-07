import Link from "next/link";
import { Headphones, Leaf, Handshake, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: Headphones, label: "Diagnóstico de\ntu proceso actual" },
  { icon: Leaf, label: "Configuración adaptada\na tu cultivo y operación" },
  { icon: Handshake, label: "Implementación y\nsoporte en planta" },
];

export function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(247,245,234,0.94), rgba(232,241,224,0.88)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-lime-brand/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100 backdrop-blur">
            Hablemos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
            ¿Listo para reducir mermas
            <br /> y aumentar tus{" "}
            <span className="text-brand-600">ganancias</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-neutral-700">
            Conoce cómo mejorar la precisión en tu línea de selección y
            aumentar la rentabilidad desde el primer mes.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-800">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-brand-100 shadow-sm">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="whitespace-pre-line text-left font-medium leading-tight">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={220}>
          <Link
            href="/contacto"
            className="btn-glow group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Solicitar demo ahora
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
