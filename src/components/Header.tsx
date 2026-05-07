"use client";

import Link from "next/link";
<<<<<<< HEAD
import { Leaf, Menu, X } from "lucide-react";
=======
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";
>>>>>>> 071bde22201fc0b95b0b68ec1bdc7a97135a486a
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
<<<<<<< HEAD
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#jois-cam", label: "Jois Cam" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Productos" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
=======
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/jois-cam", label: "Jois Cam" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/casos-exito", label: "Casos de éxito" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
>>>>>>> 071bde22201fc0b95b0b68ec1bdc7a97135a486a
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);
=======
  const pathname = usePathname();
>>>>>>> 071bde22201fc0b95b0b68ec1bdc7a97135a486a

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
<<<<<<< HEAD
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_6px_30px_-16px_rgba(10,31,14,0.25)] border-b border-neutral-100"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo layout="horizontal" />

          {/* Nav escritorio */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-neutral-700">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="relative transition-colors hover:text-brand-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contacto"
              className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <Leaf className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-18deg]" />
              Solicitar demo
            </Link>

            {/* Botón hamburguesa — solo en móvil */}
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-neutral-700 transition-colors hover:bg-neutral-100"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay oscuro */}
      <div
        aria-hidden
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer lateral */}
      <aside
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabecera del drawer */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
          <Logo layout="horizontal" />
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-500 transition-colors hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links de navegación */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {nav.map((n, i) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-brand-50 hover:text-brand-700"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300 transition-colors group-hover:bg-brand-500" />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA al pie del drawer */}
        <div className="border-t border-neutral-100 px-6 py-5">
          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="btn-glow group flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <Leaf className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-18deg]" />
            Solicitar demo
          </Link>
          <p className="mt-3 text-center text-[11px] text-neutral-400">
            Respuesta en menos de 24 h
          </p>
        </div>
      </aside>
    </>
=======
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_6px_30px_-16px_rgba(10,31,14,0.25)] border-b border-neutral-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo layout="horizontal" />
        <nav className="hidden lg:flex items-center gap-8 text-sm text-neutral-700">
          {nav.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-brand-500 after:transition-all after:duration-300 ${
                  isActive
                    ? "font-semibold text-brand-700 after:w-full"
                    : "hover:text-brand-700 after:w-0 hover:after:w-full"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contacto"
          className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <Leaf className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-18deg]" />
          Solicitar demo
        </Link>
      </div>
    </header>
>>>>>>> 071bde22201fc0b95b0b68ec1bdc7a97135a486a
  );
}
