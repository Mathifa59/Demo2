import { Leaf, Zap, Globe2, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Zap,
    title: "Innovación tecnológica",
    desc: "Desarrollamos software de precisión gráfica con IA entrenada sobre millones de imágenes reales del campo.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Cada fruta bien seleccionada es toneladas de alimento que no se desperdician y menos impacto ambiental.",
  },
  {
    icon: Globe2,
    title: "Visión global",
    desc: "Ser líderes internacionales en soluciones tecnológicas para la agroexportación, desde Perú para el mundo.",
  },
  {
    icon: Users,
    title: "Equipo especializado",
    desc: "Nacimos en el sector. Conocemos los problemas de primera mano porque los vivimos dentro de las plantas.",
  },
];

const milestones = [
  { value: "+5M", label: "imágenes de entrenamiento" },
  { value: "+10", label: "plantas implementadas" },
  { value: "100%", label: "eficiencia en selección" },
  { value: "$299", label: "desde, por línea al mes" },
];

export function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-white py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Nosotros
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-accent-800 sm:text-5xl">
              Nacimos en el campo.
              <br />
              <span className="text-gradient-brand">Crecimos con la IA.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Somos una empresa peruana de base tecnológica con experiencia
              directa en el sector agroexportador. Identificamos el problema
              más costoso de la industria —la alta dependencia del factor
              humano en la selección de frutas— y lo resolvimos con
              inteligencia artificial.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* Izquierda: misión, visión y pilares */}
          <div className="space-y-10">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-lg shadow-brand-900/20">
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-200">
                    Nuestra misión
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">
                    Reducir las mermas en la agroindustria mediante tecnología
                    de precisión que optimice la selección de productos,
                    generando mayor rentabilidad y contribuyendo a la
                    sostenibilidad ambiental.
                  </p>
                </div>
                <div className="rounded-2xl bg-accent-800 p-6 text-white shadow-lg">
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-300">
                    Nuestra visión
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">
                    Ser líderes internacionales en soluciones tecnológicas
                    para la agroexportación, promoviendo una industria más
                    eficiente, sostenible y sin desperdicios.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <div className="group flex flex-col gap-3 rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-100 transition-all duration-300 hover:bg-white hover:shadow-md card-lift">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent-800">
                        {title}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                        {desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Derecha: imagen + stats */}
          <Reveal delay={120} variant="fade">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand-200/40 to-brand-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/15 ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1400&q=80"
                  alt="Equipo Sortiva en planta"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/60 via-transparent to-transparent" />
              </div>

              {/* Stat badges flotantes */}
              <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {milestones.map(({ value, label }, i) => (
                  <div
                    key={value}
                    className="glass-card rounded-xl px-3 py-3 text-center shadow-lg"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text text-xl font-extrabold text-transparent">
                      {value}
                    </div>
                    <div className="mt-0.5 text-[10px] leading-tight text-neutral-600">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
