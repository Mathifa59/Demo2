import type { Metadata } from "next";
import { Nosotros } from "@/components/Nosotros";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Nosotros — Sortiva",
  description:
    "Conoce a Sortiva: innovación tecnológica y visión sostenible al servicio de la agroindustria.",
};

export default function NosotrosPage() {
  return (
    <>
      <Nosotros />
      <CTA />
    </>
  );
}
