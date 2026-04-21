import { BarChart3, Leaf, Award, User, Globe2 } from "lucide-react";

const items = [
  {
    icon: BarChart3,
    title: "Hasta 20% más\nde rentabilidad",
    desc: "Aumenta tus ganancias reduciendo pérdidas innecesarias.",
  },
  {
    icon: Leaf,
    title: "Reducción significativa\nde mermas",
    desc: "Aprovecha mejor cada fruta y cuida lo que el campo produce.",
  },
  {
    icon: Award,
    title: "Estandarización\nde calidad",
    desc: "Asegura productos consistentes que cumplen con los estándares del mercado.",
  },
  {
    icon: User,
    title: "Disminución de\nerrores humanos",
    desc: "Menos variabilidad, más precisión y decisiones confiables.",
  },
  {
    icon: Globe2,
    title: "Impacto ambiental\npositivo",
    desc: "Menos desperdicio de alimento, más sostenibilidad.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-cream-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          Beneficios que transforman tu producción
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="whitespace-pre-line text-sm font-bold text-brand-950">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
