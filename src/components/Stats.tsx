import { Camera, Target, TrendingUp, Leaf } from "lucide-react";

const stats = [
  {
    icon: Camera,
    value: "+5M",
    label: "Imágenes utilizadas para\nentrenar nuestro sistema",
  },
  {
    icon: Target,
    value: "100%",
    label: "Eficiencia en selección\nalcanzada",
  },
  {
    icon: TrendingUp,
    value: "20%",
    label: "Más rentabilidad\npara nuestros clientes",
  },
  {
    icon: Leaf,
    value: "- Miles",
    label: "De toneladas de alimento\nque evitamos que se pierdan",
  },
];

export function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-center gap-3">
          <Leaf className="h-5 w-5 text-brand-600" />
          <h2 className="text-center text-2xl font-bold text-brand-950 sm:text-3xl">
            Impulsamos una agroindustria más eficiente y sostenible
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-700">
                  {value}
                </div>
                <div className="mt-1 whitespace-pre-line text-xs leading-snug text-neutral-600">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
