import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <>
      {/* HEADER (UNCHANGED) */}
      <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          
          {/* BRAND */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Wingz and Thingz"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <span className="text-lg font-bold tracking-wide block">
                Wingz & Thingz
              </span>
              <span className="text-xs text-muted-foreground">
                Antwerpen
              </span>
            </div>
          </div>

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/32470111222?text=Hallo%20ik%20wil%20graag%20contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition"
          >
            Contact
          </a>

        </div>

        {/* INFO BAR */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-muted-foreground pb-3 px-4">
          <span>🚚 Gratis levering vanaf €20</span>
          <span>🍗 Vers bereid op bestelling</span>
        </div>
      </header>

      {/* HERO SECTION (FIXED PADDING = 20px approx) */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-5 sm:py-5">

        <div className="max-w-2xl w-full">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Antwerp’s Finest Wingz & Thingz
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            🍗 Verse wings, lamb chops en unieke huisgemaakte sides
          </p>

        </div>

      </section>
    </>
  );
};

export default HeroSection;
