import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-16"
      style={{
        background:
          "linear-gradient(160deg, hsl(45, 70%, 55%) 0%, hsl(160, 35%, 40%) 50%, hsl(10, 65%, 45%) 100%)",
      }}
    >
      <div className="relative z-10 text-center px-4">
        <img
          src={logo}
          alt="Wingz and Thingz"
          className="mx-auto h-40 md:h-56 w-auto mb-4 drop-shadow-2xl"
        />
        <p className="text-lg md:text-xl font-body tracking-wide font-semibold text-primary-foreground/90 drop-shadow">
          Wings • Lamb Chops • Sides • Drinks
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
