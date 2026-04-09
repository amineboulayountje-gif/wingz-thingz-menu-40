import { Flame, Droplets, Drumstick } from "lucide-react";
import classicWingsImg from "@/assets/classic-wings.jpg";
import honeyWingsImg from "@/assets/honey-wings.jpg";
import spicyWingsImg from "@/assets/spicy-wings.jpg";
import lambChopsImg from "@/assets/lamb-chops.jpg";

interface MenuCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  included: string;
  image: string;
  price: string;
}

const MenuCard = ({ title, description, icon, accentColor, included, image, price }: MenuCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
      style={{ boxShadow: "var(--card-glow)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ backgroundColor: accentColor }}
      />
      <div className="h-36 sm:h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: accentColor + "22", color: accentColor }}
          >
            {icon}
          </div>
            <h3 className="text-xl sm:text-2xl font-display">{title}</h3>
          </div>
          <span className="text-lg sm:text-xl font-display text-primary">{price}</span>
        </div>
        <p className="text-muted-foreground mb-3 font-body text-xs sm:text-sm">{description}</p>
        <div className="text-xs text-muted-foreground border-t border-border pt-2 sm:pt-3">
          <span className="text-foreground/70 font-semibold">Inclusief:</span> {included}
        </div>
      </div>
    </div>
  );
};

export const MenuSection = () => {
  const menus = [
    {
      title: "Classic Wings",
      description: "Gouden krokante wings met onze kenmerkende klassieke kruiden. Een tijdloze favoriet.",
      icon: <Drumstick size={20} />,
      accentColor: "hsl(30, 95%, 55%)",
      included: "Wings + 2 Bijgerechten + 1 Drankje",
      image: classicWingsImg,
      price: "€14,99",
    },
    {
      title: "Honey Wings",
      description: "Zoete en plakkerige honing-geglazuurde wings met een perfect gekaramelliseerde afwerking.",
      icon: <Droplets size={20} />,
      accentColor: "hsl(45, 95%, 50%)",
      included: "Wings + 2 Bijgerechten + 1 Drankje",
      image: honeyWingsImg,
    },
    {
      title: "Spicy Wings",
      description: "Vurig pittige wings vol stoere kruiden. Niet voor doetjes! 🔥",
      icon: <Flame size={20} />,
      accentColor: "hsl(0, 80%, 50%)",
      included: "Wings + 2 Bijgerechten + 1 Drankje",
      image: spicyWingsImg,
    },
    {
      title: "Lamb Chops",
      description: "Sappige, perfect gekruide lamskoteletten op de grill bereid.",
      icon: <Drumstick size={20} />,
      accentColor: "hsl(15, 40%, 45%)",
      included: "Lamskoteletten + 2 Bijgerechten + 1 Drankje",
      image: lambChopsImg,
    },
  ];

  return (
    <section id="menu" className="py-10 sm:py-16 px-4 scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-center mb-1 sm:mb-2 text-gradient">
          Ons Menu
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-6 sm:mb-10">
          Kies je eiwit — elke combo komt met 2 bijgerechten & een drankje
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {menus.map((menu) => (
            <MenuCard key={menu.title} {...menu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
