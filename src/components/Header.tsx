import Link from "next/link";
import { Leaf } from "lucide-react";
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
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-sm text-neutral-700">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-brand-700 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-800 transition"
        >
          <Leaf className="h-4 w-4" />
          Solicitar demo
        </Link>
      </div>
    </header>
  );
}
