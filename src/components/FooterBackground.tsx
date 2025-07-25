interface ImageProps {
  className?: string;
}

export default function FooterBackground({ className }: ImageProps) {
  return (
    <div className={`${className} bg-cover bg-center px-8 py-16`}>
      <div className="mx-auto flex max-w-[500px] flex-col items-center gap-6 text-center text-white lg:max-w-[1120px] lg:flex-row lg:text-start">
        <h2 className="text-3xl font-black md:text-4xl lg:max-w-[400px]">
          Experience more together
        </h2>

        <p className="leading-6 lg:max-w-[360px] lg:text-lg">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <button className="h-14 w-48 cursor-pointer rounded-full bg-[var(--custom-purple-600)] leading-6 font-black text-white hover:bg-[var(--custom-purple-500)]">
          Download{" "}
          <span className="pl-1 text-[var(--custom-purple-300)]">v1.3</span>
        </button>
      </div>
    </div>
  );
}
