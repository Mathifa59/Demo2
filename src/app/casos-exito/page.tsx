import type { Metadata } from "next";
import { CasosExito } from "@/components/CasosExito";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Casos de éxito — Sortiva",
  description:
    "Resultados reales de empresas que transformaron su operación con Sortiva.",
};

export default function CasosExitoPage() {
  return (
    <>
      <CasosExito />
      <CTA />
    </>
  );
}
