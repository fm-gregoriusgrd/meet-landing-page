interface HeroContentProps {
  className?: string;
}

export default function HeroContent({ className = "" }: HeroContentProps) {
  return (
    <div
      className={`flex flex-col items-center gap-6 px-8 text-center ${className}`}
    >
      <h1 className="text-[40px] font-black text-[var(--custom-slate-900)] md:text-5xl lg:text-6xl">
        Group Chat for Everyone
      </h1>
      <p className="leading-6 text-[var(--custom-slate-600)] lg:text-lg">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <button className="h-14 w-48 cursor-pointer rounded-4xl bg-[var(--custom-cyan-600)] leading-6 font-black text-white hover:bg-[var(--custom-cyan-500)]">
          Download
          <span className="pl-1 text-[var(--custom-cyan-300)]">v1.3</span>
        </button>
        <button className="h-14 w-40 cursor-pointer rounded-4xl bg-[var(--custom-purple-600)] font-black text-white hover:bg-[var(--custom-purple-500)]">
          What is it?
        </button>
      </div>
    </div>
  );
}
