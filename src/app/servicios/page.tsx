import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Servicios — Selekta",
  description:
    "Servicios de Selekta para automatizar la selección de frutas y hortalizas con cámaras de alta resolución y nuestro sistema de clasificación.",
};

export default function ServiciosPage() {
  return (
    <>
      <Services />
      <HowItWorks />
      <CTA />
    </>
  );
}
