import { UtensilsCrossed, GlassWater, Check } from "lucide-react";
import { useOrder } from "@/context/OrderContext";
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
  const { order, toggleSide, setDrink } = useOrder();

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

  const selectedSidesCount = order?.sides?.length ?? 0;

  const handleToggleSide = (sideName: string) => {
    toggleSide(sideName);
  };

  return (
    <section className="py-6 sm:py-8 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">

          {/* SIDES */}
          <div id="sides" className="scroll-mt-16">
            <div className="text-center sm:text-left mb-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                Stap 2
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  <UtensilsCrossed size={18} />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">
                  Bijgerechten
                </h2>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm">
                Kies er 2 — {selectedSidesCount}/2 geselecteerd
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              {sides.map((side) => {
                const isSelected = order.sides.includes(side.name);
                const isDisabled = !isSelected && selectedSidesCount >= 2;

                return (
                  <li key={side.name}>
                    <button
                      type="button"
                      onClick={() => handleToggleSide(side.name)}
                      disabled={isDisabled}
                      className={`w-full flex items-center gap-3 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base transition-all duration-200 ${
                        isSelected
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-card border border-border hover:border-primary/50"
                      } ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
                    >
                      <img
                        src={side.image}
                        alt={side.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
                      />

                      <span className="flex-1 text-left">{side.name}</span>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check size={14} />
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* DRINKS */}
          <div id="drinks" className="scroll-mt-16">
            <div className="text-center sm:text-left mb-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                Stap 3
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  <GlassWater size={18} />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display">
                  Dranken
                </h2>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm">
                Kies er 1 {order.drink ? "— gekozen" : ""}
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              {drinks.map((drink) => {
                const isSelected = order.drink === drink.name;

                return (
                  <li key={drink.name}>
                    <button
                      type="button"
                      onClick={() => setDrink(drink.name)}
                      className={`w-full flex items-center gap-3 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 transition-all ${
                        isSelected
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-card border border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
                      />

                      <span className="flex-1 text-left">{drink.name}</span>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check size={14} />
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SidesAndDrinks;
