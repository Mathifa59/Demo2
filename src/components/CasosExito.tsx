import { TrendingUp, Clock, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const casos = [
  {
    cultivo: "Arándano",
    empresa: "Agroexportadora del Sur S.A.C.",
    region: "Ica, Perú",
    img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
    challenge:
      "Alta variabilidad en la selección manual generaba devoluciones frecuentes de clientes internacionales por calidad inconsistente.",
    results: [
      { icon: TrendingUp, label: "Rentabilidad", value: "+18%", color: "text-brand-600" },
      { icon: Award, label: "Mermas", value: "-35%", color: "text-brand-600" },
      { icon: Clock, label: "Implementación", value: "36 h", color: "text-accent-600" },
    ],
    quote:
      "Desde que instalamos Jois Cam, nuestros clientes en Europa no han vuelto a hacer ninguna devolución por calidad.",
    author: "Gerente de Producción",
  },
  {
    cultivo: "Palta Hass",
    empresa: "Agrícola Valle Verde E.I.R.L.",
    region: "La Libertad, Perú",
    img: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=800&q=80",
    challenge:
      "Con tres líneas de procesamiento manuales, los errores de clasificación representaban pérdidas de hasta S/ 40,000 por campaña.",
    results: [
      { icon: TrendingUp, label: "Rentabilidad", value: "+22%", color: "text-brand-600" },
      { icon: Award, label: "Errores", value: "-90%", color: "text-brand-600" },
      { icon: Clock, label: "Implementación", value: "48 h", color: "text-accent-600" },
    ],
    quote:
      "El ROI fue visible desde la primera semana. Recuperamos la inversión antes del mes.",
    author: "Director General",
  },
  {
    cultivo: "Uva de mesa",
    empresa: "Exportaciones Viñas del Pacífico",
    region: "Chincha, Perú",
    img: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=800&q=80",
    challenge:
      "La selección visual dependía de 12 operarios por turno con criterios subjetivos, imposibles de estandarizar entre turnos.",
    results: [
      { icon: TrendingUp, label: "Rentabilidad", value: "+20%", color: "text-brand-600" },
      { icon: Award, label: "Consistencia", value: "100%", color: "text-brand-600" },
      { icon: Clock, label: "Ahorro mensual", value: "-60%", color: "text-accent-600" },
    ],
    quote:
      "Ahora los tres turnos producen exactamente con el mismo estándar. Es como tener el mejor seleccionador trabajando las 24 horas.",
    author: "Jefe de Planta",
  },
];

export function CasosExito() {
  return (
    <section
      id="casos"
      className="relative overflow-hidden bg-cream-100 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(62,166,70,0.15)_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Resultados reales
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
              Casos de{" "}
              <span className="text-gradient-brand">éxito</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
              Empresas agroexportadoras que ya transformaron su operación con
              Jois Cam y obtuvieron resultados medibles desde la primera semana.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {casos.map((caso, i) => (
            <Reveal key={caso.empresa} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 card-lift">
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caso.img}
                    alt={caso.cultivo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-lg font-extrabold text-white">
                        {caso.cultivo}
                      </div>
                      <div className="text-[11px] text-white/75">
                        {caso.region}
                      </div>
                    </div>
                    <span className="rounded-full bg-lime-brand/90 px-2.5 py-1 text-[10px] font-bold text-brand-950">
                      Caso real
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                    {caso.empresa}
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-600">
                    <span className="font-semibold text-accent-800">
                      Desafío:
                    </span>{" "}
                    {caso.challenge}
                  </p>

                  {/* Resultados */}
                  <div className="my-5 grid grid-cols-3 gap-2 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-100">
                    {caso.results.map(({ icon: Icon, label, value, color }) => (
                      <div key={label} className="text-center">
                        <div className={`text-xl font-extrabold ${color}`}>
                          {value}
                        </div>
                        <div className="mt-0.5 text-[10px] text-neutral-500">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-auto rounded-xl bg-brand-50 p-4 ring-1 ring-brand-100">
                    <p className="text-xs italic leading-relaxed text-brand-900">
                      &ldquo;{caso.quote}&rdquo;
                    </p>
                    <footer className="mt-2 text-[10px] font-semibold text-brand-700">
                      — {caso.author}
                    </footer>
                  </blockquote>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
