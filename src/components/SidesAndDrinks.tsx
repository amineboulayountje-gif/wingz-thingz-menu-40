import { UtensilsCrossed, GlassWater } from "lucide-react";
import seasonedPotatoesImg from "@/assets/seasoned-potatoes.jpg";
import coleslawImg from "@/assets/coleslaw.jpg";
import macCheeseImg from "@/assets/mac-cheese.jpg";
import buttercornImg from "@/assets/buttercorn.jpg";
import cheesyGratinImg from "@/assets/cheesy-gratin.jpg";
import colaImg from "@/assets/cola.jpg";
import fantaImg from "@/assets/fanta.jpg";
import iceTeaImg from "@/assets/ice-tea.jpg";
import iceTeaGreenImg from "@/assets/ice-tea-green.jpg";
import waterImg from "@/assets/water.jpg";

const SidesAndDrinks = () => {
  const sides = [
    { name: "Seasoned Potatoes", image: seasonedPotatoesImg },
    { name: "Coleslaw", image: coleslawImg },
    { name: "Mac & Cheese", image: macCheeseImg },
    { name: "Buttercorn on the Cob", image: buttercornImg },
    { name: "Cheesy Gratin", image: cheesyGratinImg },
  ];

  const drinks = [
    { name: "Cola", image: colaImg },
    { name: "Fanta", image: fantaImg },
    { name: "Ice Tea", image: iceTeaImg },
    { name: "Ice Tea Green", image: iceTeaGreenImg },
    { name: "Water", image: waterImg },
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
                  key={side.name}
                  className="flex items-center gap-3 bg-card border border-border rounded-md px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-foreground font-body"
                >
                  <img
                    src={side.image}
                    alt={side.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover shrink-0"
                  />
                  {side.name}
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
                  key={drink.name}
                  className="flex items-center gap-3 bg-card border border-border rounded-md px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-foreground font-body"
                >
                  <img
                    src={drink.image}
                    alt={drink.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover shrink-0"
                  />
                  {drink.name}
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
