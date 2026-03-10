import HeroSection from "@/components/jornada/HeroSection";
import IncludesSection from "@/components/jornada/IncludesSection";
import DoctorSection from "@/components/jornada/DoctorSection";
import ProcessSection from "@/components/jornada/ProcessSection";
import FAQSection from "@/components/jornada/FAQSection";
import CTASection from "@/components/jornada/CTASection";
import FloatingButtons from "@/components/jornada/FloatingButtons";

export default function JornadaMangaGastricaPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <IncludesSection />
      <DoctorSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <FloatingButtons />
    </main>
  );
}
