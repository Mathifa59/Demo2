const crops = [
  {
    name: "Uva",
    img: "https://images.unsplash.com/photo-1599819177626-b31d1dc01348?auto=format&fit=crop&w=600&q=80",
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
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          Cultivos que transciamos
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {crops.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-xl ring-2 ring-brand-700/80 shadow-md"
            >
              <img
                src={c.img}
                alt={c.name}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center pb-3">
                <span className="rounded-md bg-brand-800/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {c.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
