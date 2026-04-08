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
        <span className="text-foreground/70 font-semibold">Includes:</span> {included}
      </div>
    </div>
  );
};

export const MenuSection = () => {
  const menus = [
    {
      title: "Classic Wings",
      description: "Golden crispy wings tossed in our signature classic seasoning. A timeless favorite.",
      icon: <Drumstick size={20} />,
      accentColor: "hsl(30, 95%, 55%)",
      included: "Wings + 2 Sides + 1 Drink",
    },
    {
      title: "Honey Wings",
      description: "Sweet and sticky honey-glazed wings with a perfect caramelized finish.",
      icon: <Droplets size={20} />,
      accentColor: "hsl(45, 95%, 50%)",
      included: "Wings + 2 Sides + 1 Drink",
    },
    {
      title: "Spicy Wings",
      description: "Fiery hot wings packed with bold spices. Not for the faint-hearted! 🔥",
      icon: <Flame size={20} />,
      accentColor: "hsl(0, 80%, 50%)",
      included: "Wings + 2 Sides + 1 Drink",
    },
    {
      title: "Lamb Chops",
      description: "Juicy, perfectly seasoned lamb chops grilled to perfection.",
      icon: <Drumstick size={20} />,
      accentColor: "hsl(15, 40%, 45%)",
      included: "Lamb Chops + 2 Sides + 1 Drink",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-2 text-gradient">
          Our Menus
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Pick your protein — each combo comes with 2 sides & a drink
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
