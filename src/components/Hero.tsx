import Image from "next/image";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="relative mt-12 h-[40px] w-[120px]">
        <Image
          src="/logo.svg"
          alt="Logo Image"
          fill
          className="object-contain"
        />
      </div>

      {/* Hero */}
      <div className="relative mt-16 w-full overflow-hidden">
        {/* Desktop Background */}
        <div className="relative hidden h-[303px] lg:block">
          {/* Left */}
          <div className="absolute top-0 left-0 h-[303px] w-[394px]">
            <Image
              src="/hero/image-hero-left-desktop.png"
              alt="Hero Left"
              fill
              className="object-contain"
            />
          </div>

          {/* Right */}
          <div className="absolute top-0 right-0 h-[303px] w-[394px]">
            <Image
              src="/hero/image-hero-right-desktop.png"
              alt="Hero Right"
              fill
              className="object-contain"
            />
          </div>

          {/* Content Centered */}
          <div className="absolute top-1/2 left-1/2 w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2">
            <HeroContent />
          </div>
        </div>

        {/* mobile & tablet */}
        <div className="flex flex-col items-center justify-center lg:hidden">
          <div className="relative h-[160px] w-[430px] md:h-[303px] md:w-[820px]">
            <Image
              src="/hero/image-hero-tablet.png"
              alt="Hero Image"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 820px, 430px"
            />
          </div>

          {/* Content */}
          <div className="mt-8 max-w-[450px]">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
}
