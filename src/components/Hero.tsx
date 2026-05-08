import Link from "next/link";
import {
  ArrowRight,
  Play,
  Leaf,
  TrendingUp,
  DollarSign,
  Sprout,
  Package,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const pillars = [
  { icon: Leaf, label: "Menos\ndesperdicio" },
  { icon: TrendingUp, label: "Más\neficiencia" },
  { icon: DollarSign, label: "Mayor\nrentabilidad" },
  { icon: Sprout, label: "Impacto\nsostenible" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-8 pb-24 lg:pt-16 lg:pb-32"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center scale-[1.02]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2200&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/85 via-brand-900/70 to-brand-800/35" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(140,198,63,0.25),transparent_50%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-brand-400/30 blur-3xl animate-[float_11s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-[-120px] -z-10 h-[360px] w-[360px] rounded-full bg-lime-brand/20 blur-3xl animate-[float_9s_ease-in-out_infinite]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
                </span>
                Selección automatizada
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-brand/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-950 shadow">
                ↑ Hasta +20% rentabilidad
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur">
                Tecnología validada en operaciones reales de exportación.
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Convierte pérdidas en{" "}
              <span className="text-gradient-brand">ganancias</span>{" "}
              con selección inteligente.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Nuestra tecnología de visión artificial clasifica frutas con
              precisión superior al humano, reduciendo merma y aumentando la{" "}
              <strong className="font-semibold text-white">
                rentabilidad hasta en 20%
              </strong>
              .
            </p>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 grid grid-cols-4 gap-4 max-w-lg">
              {pillars.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className="group text-center"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-200 ring-1 ring-white/15 backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/20 group-hover:text-white group-hover:ring-brand-300/60">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-2.5 whitespace-pre-line text-[11px] font-semibold leading-tight text-white/85">
                    {label}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Solicitar demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/jois-cam"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-all duration-300 hover:bg-white/20 hover:ring-white/40"
              >
                Conoce cómo funciona
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-700 transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-3 w-3 fill-brand-700" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} variant="fade" className="relative hidden lg:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-[32px] bg-gradient-to-br from-brand-400/30 to-brand-700/20 blur-xl" />
            <div
              className="absolute inset-0 overflow-hidden rounded-[32px] ring-1 ring-white/20 shadow-2xl shadow-brand-950/40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute -right-4 bottom-10 w-56 rounded-2xl glass-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600">
                  <Sprout className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                    Cosecha protegida
                  </div>
                  <div className="text-[10px] text-neutral-600">
                    +20% rentabilidad
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 top-6 w-52 rounded-2xl glass-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-brand/20 text-brand-700">
                  <Package className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    Toneladas aprovechadas
                  </div>
                  <div className="mt-0.5 text-lg font-extrabold text-brand-900 tabular-nums">
                    <CountUp end={12540} duration={4500} />
                    <span className="ml-1 text-xs font-semibold text-neutral-500">
                      t
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-5 top-10 w-44 rounded-2xl glass-card p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                </span>
                <span className="text-[11px] font-semibold text-brand-900">
                  IA analizando
                </span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-200/80">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-lime-brand shimmer-bg" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}
