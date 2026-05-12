import { Camera, Target, TrendingUp, Leaf } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  {
    icon: Camera,
    value: "+5M",
    label: "Imágenes reales utilizadas\npara entrenar y validar el sistema",
  },
  {
    icon: Target,
    value: "Alta precisión",
    compact: true,
    label: "Consistencia en la clasificación\nde calidad en línea de proceso",
  },
  {
    icon: TrendingUp,
    value: "+20%",
    label: "Incremento en rentabilidad\npara nuestros clientes",
  },
  {
    icon: Leaf,
    value: "+13 tn",
    label: "De producto recuperado\nque antes se consideraba merma",
  },
];

export function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(251,250,246,0.92), rgba(245,242,232,0.9)), url('/assets/CULTIVO DE PALTA.jpg')",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              <Leaf className="h-3 w-3" />
              Nuestro impacto
            </span>
            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-accent-800 sm:text-3xl lg:text-4xl">
              Impulsamos una agroindustria más{" "}
              <span className="text-brand-600">eficiente</span> y{" "}
              <span className="text-brand-600">sostenible</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, compact }, i) => (
            <Reveal key={value} delay={i * 90}>
              <div className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-brand-50/50">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-brand-500/20">
                  <Icon className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-6" />
                </div>
                <div>
                  <div
                    className={`bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text font-extrabold text-transparent ${
                      compact ? "text-2xl leading-tight" : "text-4xl"
                    }`}
                  >
                    {value}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-xs leading-snug text-neutral-600">
                    {label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
