import logo from "@/assets/logo.png";


const HeroSection = () => {
  return (
    <section className="relative min-h-[85svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(30, 95%, 55%) 0%, transparent 50%), radial-gradient(circle at 80% 30%, hsl(45, 95%, 50%) 0%, transparent 40%), radial-gradient(circle at 60% 80%, hsl(10, 65%, 45%) 0%, transparent 45%)",
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(30, 95%, 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(30, 95%, 55%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <img
          src={logo}
          alt="Wingz and Thingz"
          className="h-32 sm:h-44 md:h-64 w-auto mb-4 md:mb-6 drop-shadow-2xl"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />

        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8"
          style={{ animation: "slide-up 0.8s ease-out 0.3s both" }}
        >
          {[
            { label: "Wings & Lamb Chops", href: "#menu" },
            { label: "Bijgerechten", href: "#sides" },
            { label: "Dranken", href: "#drinks" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-semibold font-body border border-primary/30 bg-primary/10 text-primary backdrop-blur-sm hover:bg-primary/20 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
