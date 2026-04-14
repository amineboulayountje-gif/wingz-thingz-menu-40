import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <>
      {/* HEADER */}
      <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Wingz and Thingz"
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold tracking-wide">
              Wingz & Thingz
            </span>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/32470111222?text=Hallo%20ik%20wil%20graag%20bestellen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition"
          >
            Bestellen
          </a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Antwerp’s Finest Wingz & Thingz
        </h1>

        <p className="text-muted-foreground max-w-xl text-base sm:text-lg">
          Premium wings, bold flavors, and the ultimate comfort food experience.
        </p>

      </section>
    </>
  );
};

export default HeroSection;
