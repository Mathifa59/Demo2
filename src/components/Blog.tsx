"use client";

import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Reveal } from "./Reveal";

const posts = [
  {
    category: "Innovación agro",
    categoryColor: "bg-white/95 text-brand-700 ring-brand-200",
    title: "¿Por qué la selección manual ya no es suficiente en la agroexportación?",
    excerpt:
      "La variabilidad humana en la clasificación de frutas genera pérdidas invisibles que se acumulan campaña tras campaña. Descubre cómo la IA está cambiando las reglas del juego.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    date: "12 abril 2026",
    readTime: "5 min",
    href: "#blog",
  },
  {
    category: "Sostenibilidad",
    categoryColor: "bg-white/95 text-brand-700 ring-brand-200",
    title: "Desperdicio alimentario en Perú: el costo oculto que nadie calcula",
    excerpt:
      "Millones de toneladas de frutas y hortalizas se pierden cada año por errores en la selección. La tecnología de visión artificial puede revertir esta tendencia.",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    date: "28 marzo 2026",
    readTime: "4 min",
    href: "#blog",
  },
  {
    category: "Tecnología",
    categoryColor: "bg-white/95 text-accent-700 ring-accent-200",
    title: "Jois Cam: cómo entrenamos la IA con más de 5 millones de imágenes",
    excerpt:
      "El sistema de clasificación de Jois Cam no surgió de la noche a la mañana. Detrás hay años de captura de datos reales en plantas de todo el Perú.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    date: "10 marzo 2026",
    readTime: "6 min",
    href: "#blog",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-brand-50/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
                Blog
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
                Contenido que{" "}
                <span className="text-gradient-brand">suma</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm text-neutral-600">
                Artículos sobre innovación agroindustrial, reducción de mermas
                y tecnología aplicada al campo.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 transition-all duration-300 hover:bg-brand-600 hover:text-white hover:ring-brand-600"
            >
              Ver todos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 card-lift">
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/50 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${post.categoryColor} backdrop-blur-sm`}
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {post.category}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-[11px] text-neutral-500">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} lectura
                    </span>
                  </div>

                  <h3 className="text-sm font-bold leading-snug text-accent-800 transition-colors duration-300 group-hover:text-brand-700">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>

                  <Link
                    href={post.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 transition-all duration-300 hover:gap-2.5 hover:text-brand-700"
                  >
                    Leer artículo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-br from-brand-50 to-cream-100 p-6 ring-1 ring-brand-100 sm:flex-row sm:items-center sm:p-8">
            <div>
              <div className="text-sm font-bold text-accent-800">
                Recibe contenido exclusivo
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                Tendencias en agroexportación, casos de éxito y novedades de
                Jois Cam directo en tu correo.
              </p>
            </div>
            <form
              className="flex w-full flex-col gap-2 sm:max-w-sm sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="tu@empresa.com"
                className="w-full rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:shrink-0"
              >
                Suscribir
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
