import { Reveal } from "./Reveal";

const crops = [
  {
    name: "Uva",
    img: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arándano",
    img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Palta",
    img: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mango",
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cítricos",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pimiento",
    img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
  },
];

export function Crops() {
  const loop = [...crops, ...crops];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,31,14,0.6), rgba(10,31,14,0.6)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/25 backdrop-blur">
              Cultivos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Cultivos que{" "}
              <span className="text-lime-brand">transformamos</span>
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="marquee-mask relative">
        <ul className="marquee-track flex gap-6 px-6">
          {loop.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              className="group relative w-[220px] shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/20 shadow-xl transition-all duration-500 hover:ring-lime-brand hover:shadow-[0_25px_50px_-15px_rgba(140,198,63,0.45)] hover:-translate-y-2 sm:w-[260px]"
              aria-hidden={i >= crops.length ? true : undefined}
            >
              <img
                src={c.img}
                alt={c.name}
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex justify-center pb-3">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-800 shadow-md backdrop-blur transition-all duration-300 group-hover:bg-lime-brand group-hover:text-brand-950">
                  {c.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
