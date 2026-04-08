import heroImg from "@/assets/hero-wings.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Delicious wings"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-gradient)" }}
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10 text-center px-4">
        <img
          src={logo}
          alt="Wingz and Thingz"
          className="mx-auto h-32 md:h-44 w-auto mb-4"
        />
        <p className="text-lg md:text-xl text-foreground/80 font-body tracking-wide">
          Wings • Lamb Chops • Sides • Drinks
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
