import Link from "next/link";
import {
  ArrowRight,
  Play,
  Leaf,
  TrendingUp,
  DollarSign,
  Sprout,
} from "lucide-react";

const pillars = [
  { icon: Leaf, label: "Menos\ndesperdicio" },
  { icon: TrendingUp, label: "Más\neficiencia" },
  { icon: DollarSign, label: "Mayor\nrentabilidad" },
  { icon: Sprout, label: "Impacto\nsostenible" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597474561103-0dd0f4634f2c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/85 to-white/10" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-950 sm:text-6xl">
            Tecnología que cuida
            <br /> lo que la tierra{" "}
            <span className="text-brand-700">produce</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-neutral-700">
            En Jois 0 Waste desarrollamos soluciones inteligentes que optimizan
            la selección de frutas y hortalizas, reduciendo mermas y aumentando
            la rentabilidad de tu empresa.
          </p>

          <ul className="mt-10 grid grid-cols-4 gap-4 max-w-md">
            {pillars.map(({ icon: Icon, label }) => (
              <li key={label} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-2 whitespace-pre-line text-[11px] font-semibold leading-tight text-neutral-800">
                  {label}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition"
            >
              Solicitar demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#jois-cam"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 ring-1 ring-neutral-200 hover:ring-brand-300 transition"
            >
              Conoce cómo funciona
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-white">
                <Play className="h-2.5 w-2.5 fill-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
