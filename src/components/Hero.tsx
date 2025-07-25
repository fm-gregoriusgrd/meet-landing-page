import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center border-4 border-green-600">
      <div className="relative mt-12 h-[40px] w-[120px]">
        <Image
          src="/logo.svg"
          alt="Logo Image"
          fill
          className="object-contain"
        />
      </div>

      <div className="mt-16 w-full">
        <div className="overflow-hidden">
          <div className="flex justify-center gap-4">
            <div className="relative h-[160px] w-[208px] md:h-[303px] md:w-[394px]">
              <Image
                src="/hero/image-hero-left-desktop.png"
                alt="Hero Left Image"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 394px, 208px"
              />
            </div>
            <div className="relative h-[160px] w-[208px] md:h-[303px] md:w-[394px]">
              <Image
                src="/hero/image-hero-right-desktop.png"
                alt="Hero Right Image"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 394px, 208px"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center gap-6 border-2 border-red-600 px-8 pt-12 pb-8 
        md:max-w-[450px] md:py-16">
          <h1 className="text-center text-[40px] font-black text-[var(--custom-slate-900)] md:text-5xl">
            Group Chat for Everyone
          </h1>
          <p className="text-center leading-6 text-[var(--custom-slate-600)]">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <button className="h-14 w-48 rounded-4xl bg-[var(--custom-cyan-600)] leading-6 font-black text-white">
              Download
              <span className="pl-1 text-[var(--custom-cyan-300)]">v1.3</span>
            </button>
            <button className="h-14 w-40 rounded-4xl bg-[var(--custom-purple-600)] font-black text-white">
              What is it?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
