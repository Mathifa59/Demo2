import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 17v-7H6v7h2zM7 8.8A1.2 1.2 0 1 0 7 6.4a1.2 1.2 0 0 0 0 2.4zM18 17v-3.9c0-2-1.1-3-2.6-3-1.3 0-1.9.7-2.2 1.2V10h-2.1c0 .6 0 7 0 7h2.1v-3.7c0-.2 0-.4.1-.5.2-.4.5-.9 1.2-.9 1 0 1.4.7 1.4 1.8V17H18z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.04 0C5.463 0 .102 5.335.099 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.91 11.91 0 005.705 1.455h.005c6.578 0 11.939-5.336 11.942-11.893A11.821 11.821 0 0020.452 3.488z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-accent-900 via-accent-800 to-brand-950 text-neutral-200">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-neutral-400">
            Más eficiencia. Menos desperdicio.
            <br />
            Mayor rentabilidad.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">
            Enlaces rápidos
          </h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li><Link href="/" className="transition-colors hover:text-lime-brand">Inicio</Link></li>
            <li><Link href="/beneficios" className="transition-colors hover:text-lime-brand">Beneficios</Link></li>
            <li><Link href="/nosotros" className="transition-colors hover:text-lime-brand">Nosotros</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-lime-brand">Blog</Link></li>
            <li><Link href="/jois-cam" className="transition-colors hover:text-lime-brand">Jois Cam</Link></li>
            <li><Link href="/contacto" className="transition-colors hover:text-lime-brand">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Contáctanos</h4>
          <ul className="space-y-2.5 text-sm text-neutral-300">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-lime-brand" />
              info@sortiva.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-lime-brand" />
              +51 987 654 321
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-lime-brand" />
              Calle Los Agricultores 123
              <br />
              Ica, Perú
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Síguenos</h4>
          <div className="flex gap-3">
            {[
              { Icon: LinkedinIcon, label: "LinkedIn" },
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: WhatsappIcon, label: "WhatsApp" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition-all duration-300 hover:bg-lime-brand hover:text-accent-900 hover:-translate-y-0.5 hover:ring-lime-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Ubícanos</h4>
          <div className="relative h-32 w-full overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(30,64,115,0.35), rgba(10,31,14,0.35)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="absolute -inset-4 animate-ping rounded-full bg-lime-brand/40" />
                <MapPin className="relative h-8 w-8 text-lime-brand drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-neutral-400">
          © 2026 Sortiva. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
