import Link from "next/link";
import { CheckCircle2, Factory } from "lucide-react";

const features = [
  "Clasificación automática por calidad",
  "Adaptable a diferentes cultivos",
  "Implementación rápida y sencilla",
  "Pago accesible: desde $299 por línea",
];

export function JoisCam() {
  return (
    <section id="jois-cam" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-5xl">
            Nuestro sistema{" "}
            <span className="text-brand-600">Jois Cam</span>
          </h2>
          <p className="mt-5 max-w-lg text-neutral-700">
            Combinamos cámaras de alta resolución con inteligencia artificial
            para clasificar frutas y hortalizas en tiempo real, asegurando
            calidad, consistencia y menor desperdicio.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-neutral-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition"
          >
            Conocer más sobre Jois Cam →
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80"
              alt="Línea de selección Jois Cam"
              className="h-full w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="absolute -right-4 bottom-10 w-60 rounded-xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:-right-6">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Factory className="h-5 w-5" />
            </div>
            <div className="text-center text-sm font-semibold text-brand-950">
              Selección inteligente
              <br />
              en tiempo real
            </div>
            <div className="mt-3 rounded-lg bg-neutral-50 px-3 py-1.5 text-center text-[11px] font-medium text-brand-700">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500 align-middle" />
              Sistema activo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
