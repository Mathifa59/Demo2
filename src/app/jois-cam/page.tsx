import type { Metadata } from "next";
import { JoisCam } from "@/components/JoisCam";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Jois Cam — Sortiva",
  description:
    "Jois Cam: la cámara inteligente de Sortiva que automatiza la selección de frutas y hortalizas con IA.",
};

export default function JoisCamPage() {
  return (
    <>
      <JoisCam />
      <HowItWorks />
      <CTA />
    </>
  );
}
