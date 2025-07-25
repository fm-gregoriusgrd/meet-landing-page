import FooterBackground from "./FooterBackground";

export default function FooterSection() {
  return (
    <section className="relative">
      {/* Divider step */}
      <div className="relative z-10 -mb-7 flex flex-col items-center">
        <div className="h-20 w-px bg-[var(--custom-slate-300)]"></div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--custom-slate-300)] bg-white">
          <span className="font-black text-[var(--custom-slate-600)]">02</span>
        </div>
      </div>

      {/* Mobile Background */}
      <FooterBackground
        className="bg-[url('/footer/image-footer-mobile.png')] block md:hidden"
      />

      {/* Tablet Background */}
      <FooterBackground
        className="bg-[url('/footer/image-footer-tablet.png')] hidden md:flex lg:hidden"
      />

      {/* Desktop Background */}
      <FooterBackground
        className="bg-[url('/footer/image-footer-desktop.png')] hidden lg:flex"  
      />
      
    </section>
  );
}
