import HeroSection from "@/components/Hero";
import MainSection from "@/components/Content";
import FooterSection from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[375px] bg-[var(--custom-white)] md:max-w-[768px] lg:max-w-none">
      <HeroSection />
      <MainSection />
      <FooterSection />
    </main>
  );
}
