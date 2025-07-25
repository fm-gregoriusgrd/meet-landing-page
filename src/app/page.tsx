import HeroSection from "@/components/Hero";
import MainSection from "@/components/Content";
import FooterSection from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--custom-white)] min-h-screen max-w-[375px] md:max-w-[768px] mx-auto border-4 border-red-600">
      <HeroSection />
      <MainSection />
      <FooterSection />
    </main>
  );
}
