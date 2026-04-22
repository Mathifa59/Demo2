import { Camera, Target, TrendingUp, Leaf } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  {
    icon: Camera,
    value: "+5M",
    label: "Imágenes utilizadas para\nentrenar nuestro sistema",
  },
  {
    icon: Target,
    value: "100%",
    label: "Eficiencia en selección\nalcanzada",
  },
  {
    icon: TrendingUp,
    value: "20%",
    label: "Más rentabilidad\npara nuestros clientes",
  },
  {
    icon: Leaf,
    value: "-Miles",
    label: "De toneladas de alimento\nque evitamos que se pierdan",
  },
];

export function Stats() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
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
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={value} delay={i * 90}>
              <div className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-brand-50/50">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-brand-500/20">
                  <Icon className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-6" />
                </div>
                <div>
                  <div className="bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text text-4xl font-extrabold text-transparent">
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
