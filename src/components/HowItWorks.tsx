import { MonitorCheck, Cpu, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    icon: MonitorCheck,
    title: "Instalación en planta",
    desc: "Instalamos las cámaras de alta resolución directamente en tu línea de procesamiento. El proceso toma entre 24 y 48 horas sin interrumpir tu operación.",
    tag: "24–48 h",
  },
  {
    number: "02",
    icon: Cpu,
    title: "IA analiza en tiempo real",
    desc: "Nuestro sistema, entrenado con más de 5 millones de imágenes, evalúa cada fruta u hortaliza al instante: color, tamaño, defectos y madurez.",
    tag: "+5M imágenes",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Selección automatizada",
    desc: "La línea clasifica y separa los productos automáticamente según los estándares de calidad de tu mercado, sin depender del criterio humano.",
    tag: "100% precisión",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-accent-900 py-24">
      {/* decoración */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/15">
              Jois Cam en acción
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              ¿Cómo funciona{" "}
              <span className="text-gradient-brand">Jois Cam</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/65">
              Tres pasos para transformar tu línea de producción en una
              máquina de rentabilidad.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="relative grid gap-6 lg:grid-cols-3">

          {steps.map(({ number, icon: Icon, title, desc, tag }, i) => (
            <Reveal key={number} delay={i * 110}>
              <div className="group relative flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur transition-all duration-500 hover:bg-white/10 hover:ring-white/20 hover:-translate-y-1">
                {/* número flotante */}
                <div className="absolute -top-4 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-extrabold text-white shadow-lg shadow-brand-900/40">
                  {number}
                </div>

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lime-brand ring-1 ring-white/15 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                  {desc}
                </p>

                <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-lime-brand/15 px-3 py-1 text-[11px] font-bold text-lime-brand ring-1 ring-lime-brand/30">
                  {tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ROI callout */}
        <Reveal delay={150}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-brand-700/30 to-brand-500/20 p-8 ring-1 ring-brand-500/30 backdrop-blur sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                Resultado promedio de nuestros clientes
              </div>
              <div className="mt-1 text-3xl font-extrabold text-white">
                ROI positivo desde la primera semana.
              </div>
              <p className="mt-2 text-sm text-white/60">
                Desde{" "}
                <strong className="text-white">$299 por línea</strong> — sin
                costos ocultos, implementación incluida.
              </p>
            </div>
            <Link
              href="/contacto"
              className="btn-glow group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver demostración
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
