"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  Send,
  User,
  Building2,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.04 0C5.463 0 .102 5.335.099 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.91 11.91 0 005.705 1.455h.005c6.578 0 11.939-5.336 11.942-11.893A11.821 11.821 0 0020.452 3.488z" />
    </svg>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-cream-50 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-28 h-[28rem] w-[28rem] rounded-full bg-lime-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 ring-1 ring-brand-100">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-accent-800 sm:text-4xl lg:text-5xl">
              Hablemos de tu{" "}
              <span className="text-gradient-brand">operación</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
              Déjanos tus datos y un especialista de Selekta se
              comunicará contigo en menos de 24 horas.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-lime-brand to-brand-500"
              />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    id="nombre"
                    label="Nombre completo"
                    icon={User}
                    required
                    placeholder="Juan Pérez"
                  />
                  <FormField
                    id="empresa"
                    label="Empresa"
                    icon={Building2}
                    required
                    placeholder="Agroexportadora SAC"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    id="email"
                    type="email"
                    label="Correo electrónico"
                    icon={Mail}
                    required
                    placeholder="tu@empresa.com"
                  />
                  <FormField
                    id="telefono"
                    type="tel"
                    label="Teléfono"
                    icon={Phone}
                    placeholder="+51 987 654 321"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cultivo"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                  >
                    Tipo de cultivo
                  </label>
                  <select
                    id="cultivo"
                    name="cultivo"
                    defaultValue=""
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition-all duration-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option>Uva</option>
                    <option>Arándano</option>
                    <option>Palta</option>
                    <option>Mango</option>
                    <option>Cítricos</option>
                    <option>Pimiento</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                  >
                    Cuéntanos sobre tu proyecto
                  </label>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="Volumen aproximado de procesamiento, líneas actuales, objetivos..."
                      className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 pl-10 text-sm text-neutral-800 outline-none transition-all duration-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-xs text-neutral-600">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span>
                    Acepto el tratamiento de mis datos personales para recibir
                    información comercial sobre Jois Cam.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-90"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Mensaje enviado, te contactaremos pronto
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <a
                href="https://wa.me/51987654321?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Jois%20Cam"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-5 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
                    <WhatsappIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                      Respuesta inmediata
                    </div>
                    <div className="text-sm font-bold">
                      Escríbenos por WhatsApp
                    </div>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl bg-accent-800 p-5 text-white">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-brand opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-brand" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    Horario de atención
                  </span>
                </div>
                <p className="mt-2 text-xs text-white/80">
                  Lunes a viernes de 9:00 a 18:00h.
                  <br />
                  Sábados de 9:00 a 13:00h.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function FormField({
  id,
  label,
  icon: Icon,
  type = "text",
  required,
  placeholder,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-700"
      >
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 pl-10 text-sm text-neutral-800 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>
    </div>
  );
}
