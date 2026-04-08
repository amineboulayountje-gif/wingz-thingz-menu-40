import { UtensilsCrossed, GlassWater } from "lucide-react";

const SidesAndDrinks = () => {
  const sides = [
    "Seasoned Potatoes",
    "Coleslaw",
    "Mac & Cheese",
    "Buttercorn on the Cob",
    "Cheesy Gratin",
  ];

  const drinks = [
    "Cola",
    "Fanta",
    "Ice Tea",
    "Ice Tea Green",
    "Water",
  ];

  return (
    <section className="py-10 sm:py-16 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {/* Sides */}
          <div id="sides" className="scroll-mt-16">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <UtensilsCrossed size={18} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">Bijgerechten</h2>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Kies er 2 bij elk menu</p>
            <ul className="space-y-2 sm:space-y-3">
              {sides.map((side) => (
                <li
                  key={side}
                  className="flex items-center gap-3 bg-card border border-border rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground font-body"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {side}
                </li>
              ))}
            </ul>
          </div>

          {/* Drinks */}
          <div id="drinks" className="scroll-mt-16">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <GlassWater size={18} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">Dranken</h2>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Kies er 1 bij elk menu</p>
            <ul className="space-y-2 sm:space-y-3">
              {drinks.map((drink) => (
                <li
                  key={drink}
                  className="flex items-center gap-3 bg-card border border-border rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground font-body"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {drink}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidesAndDrinks;
