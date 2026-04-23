import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Crops } from "@/components/Crops";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Beneficios — Sortiva",
  description:
    "Descubre cómo Sortiva reduce mermas, aumenta eficiencia y se adapta a cada cultivo.",
};

export default function BeneficiosPage() {
  return (
    <>
      <Benefits />
      <HowItWorks />
      <Crops />
      <CTA />
    </>
  );
}
