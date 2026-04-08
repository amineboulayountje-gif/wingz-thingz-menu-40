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
      className="group relative bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300"
      style={{ boxShadow: "var(--card-glow)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
        style={{ backgroundColor: accentColor }}
      />
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center"
          style={{ backgroundColor: accentColor + "22", color: accentColor }}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-display">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4 font-body text-sm">{description}</p>
      <div className="text-xs text-muted-foreground border-t border-border pt-3">
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
    <section id="menu" className="py-16 px-4 scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-2 text-gradient">
          Ons Menu
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Kies je eiwit — elke combo komt met 2 bijgerechten & een drankje
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menus.map((menu) => (
            <MenuCard key={menu.title} {...menu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
