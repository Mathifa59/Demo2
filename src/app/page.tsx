import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Nosotros } from "@/components/Nosotros";
import { JoisCam } from "@/components/JoisCam";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Crops } from "@/components/Crops";
import { CasosExito } from "@/components/CasosExito";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Nosotros />
        <JoisCam />
        <HowItWorks />
        <Benefits />
        <Crops />
        <CasosExito />
        <Blog />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
