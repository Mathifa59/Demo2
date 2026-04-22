import Link from "next/link";
import { Headphones, Leaf, Handshake, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: Headphones, label: "Asesoría personalizada" },
  { icon: Leaf, label: "Soluciones adaptadas\na tu cultivo" },
  { icon: Handshake, label: "Acompañamiento en\ntodo el proceso" },
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
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-lime-brand/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-20 pb-4 lg:grid-cols-[1.1fr_1fr_0.9fr] lg:pb-0">
        <Reveal>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100 backdrop-blur">
              Hablemos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
              ¿Listo para reducir mermas
              <br /> y aumentar tus{" "}
              <span className="text-brand-600">ganancias</span>?
            </h2>
            <p className="mt-5 max-w-md text-sm text-neutral-700">
              Hablemos sobre cómo Jois Cam puede transformar tu operación.
            </p>
            <Link
              href="mailto:info@sortiva.com"
              className="btn-glow group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Solicitar demo ahora
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <div className="h-16 lg:h-20" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative z-10 grid grid-cols-3 gap-4 self-center pb-10 text-center">
            {features.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="group flex flex-col items-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 ring-1 ring-brand-100 shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:shadow-brand-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-3 whitespace-pre-line text-xs font-semibold leading-snug text-neutral-800">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative hidden h-[420px] self-end lg:block">
          <Reveal variant="fade" delay={250} className="h-full">
            <img
              src="https://images.pexels.com/photos/5529604/pexels-photo-5529604.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Agricultores en campo"
              className="absolute bottom-0 right-0 h-full w-full object-cover object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 65% 80% at 55% 50%, #000 45%, rgba(0,0,0,0.9) 62%, transparent 92%)",
                maskImage:
                  "radial-gradient(ellipse 65% 80% at 55% 50%, #000 45%, rgba(0,0,0,0.9) 62%, transparent 92%)",
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
