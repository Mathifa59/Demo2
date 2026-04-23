import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Sortiva",
  description:
    "Solicita una demo personalizada de Sortiva y descubre cómo podemos transformar tu operación.",
};

export default function ContactoPage() {
  return <ContactForm />;
}
