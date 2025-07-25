import Image from "next/image";

const images = [
  {
    src: "/content/image-woman-in-videocall.jpg",
    alt: "Woman In Videocall Image",
  },
  {
    src: "/content/image-women-videochatting.jpg",
    alt: "Women Videochatting Image",
  },
  {
    src: "/content/image-men-in-meeting.jpg",
    alt: "Men In Meeting Image",
  },
  {
    src: "/content/image-man-texting.jpg",
    alt: "Man Texting Image",
  },
];

export default function ContentSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-16 px-8 py-8 mb-8
      md:px-16 md:py-16">
        <div className="flex flex-col items-center">
          {/* Vertical Line */}
          <div className="h-20 w-px bg-[var(--custom-slate-300)]"></div>

          {/* Circle Number */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--custom-slate-300)]">
            <span className="font-black text-[var(--custom-slate-600)]">
              01
            </span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4">
          {images.map((image, index) => (
            <Image
            key={index}
            src={image.src}
            alt={image.alt}
              width={256}
              height={256}
              className="h-[145px] w-[147px] md:w-[152px] md:h-[160px] lg:w-[256px] lg:h-[256px] rounded-xl object-cover"
              sizes="(min-width: 1024px) 256px, (min-width: 768px) 150px, 147px"
            />
          ))}
        </div>

        <div className="flex flex-col items-center text-center md:max-w-[500px] lg:max-w-[544px] mx-auto">
          <div>
            <p className="text-xs md:text-sm lg:text-base font-bold tracking-[4px] text-[var(--custom-cyan-600)] uppercase">
              Built for modern use
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[var(--custom-slate-900)]">
              Smarter meetings, all in one place
            </h2>
          </div>

          <p className="lg:text-lg mt-8 leading-6 text-[var(--custom-slate-600)]">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </section>
  );
}
