"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#jois-cam", label: "Jois Cam" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#casos", label: "Casos de éxito" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        <Link
          href="#contacto"
          className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <Leaf className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-18deg]" />
          Solicitar demo
        </Link>
      </div>
    </header>
  );
}
