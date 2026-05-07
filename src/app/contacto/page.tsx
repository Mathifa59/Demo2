import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Selekta",
  description:
    "Solicita una demo personalizada de Selekta y descubre cómo podemos transformar tu operación.",
};

export default function ContactoPage() {
  return <ContactForm />;
}
