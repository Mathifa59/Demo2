import Link from "next/link";
import { Headphones, Leaf, Handshake, ArrowRight } from "lucide-react";

const features = [
  { icon: Headphones, label: "Asesoría personalizada" },
  { icon: Leaf, label: "Soluciones adaptadas\na tu cultivo" },
  { icon: Handshake, label: "Acompañamiento en\ntodo el proceso" },
];

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(247,245,234,0.9), rgba(247,245,234,0.75)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl">
            ¿Listo para reducir mermas
            <br /> y aumentar tus ganancias?
          </h2>
          <p className="mt-4 max-w-md text-sm text-neutral-700">
            Hablemos sobre cómo Jois Cam puede transformar tu operación.
          </p>
          <Link
            href="mailto:info@jois0waste.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition"
          >
            Solicitar demo ahora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-brand-100 shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-3 whitespace-pre-line text-xs font-medium leading-snug text-neutral-800">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"
            alt="Agricultor con tablet"
            className="mx-auto h-72 w-full max-w-sm rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
