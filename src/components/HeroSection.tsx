import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Left: Logo + Name */}
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

        {/* Right: CTA Button */}
        <a
          href="#menu"
          className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition"
        >
          Bestellen
        </a>

      </div>
    </header>
  );
};

export default HeroSection;
