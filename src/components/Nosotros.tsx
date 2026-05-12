import Image from "next/image";
import { Leaf, Zap, Globe2, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Zap,
    title: "Innovación tecnológica",
    desc: "Desarrollamos software de precisión gráfica entrenado con millones de imágenes reales del campo, que mejora la consistencia y exactitud en la clasificación de fruta.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Cada fruta bien clasificada reduce el desperdicio y evita que producto apto se convierta en merma, generando un impacto positivo en el uso de recursos y el medio ambiente.",
  },
  {
    icon: Globe2,
    title: "Visión global",
    desc: "Expandir nuestra solución a los principales mercados agroexportadores, llevando procesos de selección más precisos y eficientes desde Perú hacia el mundo.",
  },
  {
    icon: Users,
    title: "Equipo especializado",
    desc: "Somos un equipo con experiencia directa en agroexportación. Entendemos los desafíos de la operación porque trabajamos dentro de plantas reales.",
  },
];

const milestones = [
  { value: "+5M", label: "imágenes reales analizadas en operación" },
  { value: "+35", label: "plantas que ya optimizan su selección" },
  { value: "+20%", label: "mejora en rentabilidad" },
  { value: "+13 TN", label: "producto recuperado que antes se consideraba merma" },
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
              Mejoramos la selección.
              <br />
              <span className="text-gradient-brand">
                Mejoramos el resultado.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Somos una empresa peruana enfocada en optimizar la selección de
              fruta en plantas agroexportadoras. Mejoramos la precisión en la
              clasificación en línea, reduciendo mermas y recuperando valor
              que se pierde por errores en el proceso. Nuestra solución ya
              opera en plantas reales, donde contribuye a mejorar la
              eficiencia operativa y la rentabilidad de cada campaña.
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
                    Optimizar los procesos de selección en la agroindustria,
                    mejorando la precisión en la clasificación de frutas para
                    reducir mermas y maximizar el valor de la producción.
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
            <div className="relative pb-6 lg:pb-8">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand-200/40 to-brand-500/20 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/15 ring-1 ring-black/5">
                <Image
                  src="/assets/FRIJOL CHINO PASANDO POR FAJA 002.jpeg"
                  alt="Alimento pasando por faja de selección"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/60 via-transparent to-transparent" />
              </div>

              {/* Stat badges — flotantes en desktop, estáticos en móvil */}
              <div className="relative mt-3 grid grid-cols-2 gap-3 lg:absolute lg:-bottom-5 lg:left-4 lg:right-4 lg:mt-0 xl:grid-cols-4">
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
