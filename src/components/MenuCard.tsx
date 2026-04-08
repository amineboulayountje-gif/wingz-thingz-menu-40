import { Flame, Droplets, Drumstick } from "lucide-react";

interface MenuCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  included: string;
}

const MenuCard = ({ title, description, icon, accentColor, included }: MenuCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-lg p-4 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300"
      style={{ boxShadow: "var(--card-glow)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
        style={{ backgroundColor: accentColor }}
      />
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center shrink-0"
          style={{ backgroundColor: accentColor + "22", color: accentColor }}
        >
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-display">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-3 sm:mb-4 font-body text-xs sm:text-sm">{description}</p>
      <div className="text-xs text-muted-foreground border-t border-border pt-2 sm:pt-3">
        <span className="text-foreground/70 font-semibold">Inclusief:</span> {included}
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
    },
    {
      title: "Honey Wings",
      description: "Zoete en plakkerige honing-geglazuurde wings met een perfect gekaramelliseerde afwerking.",
      icon: <Droplets size={20} />,
      accentColor: "hsl(45, 95%, 50%)",
      included: "Wings + 2 Bijgerechten + 1 Drankje",
    },
    {
      title: "Spicy Wings",
      description: "Vurig pittige wings vol stoere kruiden. Niet voor doetjes! 🔥",
      icon: <Flame size={20} />,
      accentColor: "hsl(0, 80%, 50%)",
      included: "Wings + 2 Bijgerechten + 1 Drankje",
    },
    {
      title: "Lamb Chops",
      description: "Sappige, perfect gekruide lamskoteletten op de grill bereid.",
      icon: <Drumstick size={20} />,
      accentColor: "hsl(15, 40%, 45%)",
      included: "Lamskoteletten + 2 Bijgerechten + 1 Drankje",
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
