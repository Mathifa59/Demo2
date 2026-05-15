import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una demo personalizada de Selekta. Un especialista se comunicará contigo en menos de 24 horas para analizar tu operación.",
  openGraph: {
    title: "Contacto | Selekta",
    description:
      "Solicita una demo personalizada de Selekta. Un especialista se comunicará contigo en menos de 24 horas para analizar tu operación.",
    url: "https://www.selektafood.com/contacto",
  },
};

export default function ContactoPage() {
  return <ContactForm />;
}
