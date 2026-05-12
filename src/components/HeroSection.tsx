import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <>
      {/* HEADER */}
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

          {/* CTA */}
          <a
            href="#menu"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition"
          >
            Bestel nu
          </a>

        </div>

        {/* INFO BAR */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-muted-foreground pb-3 px-4 text-center">

          <span>🚚 Gratis levering vanaf €20</span>

          <span className="flex items-center gap-1">
            👨‍🍳 Vers bereid op bestelling
          </span>

        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-8 pb-6 sm:pt-10 sm:pb-8">

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
