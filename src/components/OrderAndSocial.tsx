import { useState } from "react";
import { MessageCircle, X, ShoppingBag, Pencil, Trash2 } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

const OrderAndSocial = () => {
  const {
    orders = [],
    currentOrder,
    addOrder,
    resetOrder,
    setMenu,
    toggleSide,
    setDrink,
  } = useOrder();

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const whatsappNumber = "32483691967";

  const safeOrder = currentOrder || {
    menu: null,
    sides: [],
    drink: null,
  };

  const hasItems = orders.length > 0 || !!safeOrder.menu;

  const parsePrice = (price?: string) =>
    price ? parseFloat(price.replace("€", "").replace(",", ".")) : 0;

  const total = orders.reduce(
    (sum, o) => sum + parsePrice(o.menu?.price),
    0
  );

  const missingStepMessage = !safeOrder.menu
    ? "Kies een gerecht"
    : safeOrder.sides.length < 2
    ? `Kies nog ${2 - safeOrder.sides.length} bijgerecht(en)`
    : !safeOrder.drink
    ? "Kies een drankje"
    : "";

  const whatsappMessage = `
🍗 Wingz and Thingz bestelling

${orders
  .map(
    (o, i) => `
Bestelling ${i + 1}
Gerecht: ${o.menu?.name ?? "-"}
Bijgerechten: ${o.sides.join(", ")}
Drank: ${o.drink ?? "-"}
`
  )
  .join("\n")}

Totaal: €${total.toFixed(2)}
`.trim();

  return (
    <>
      {hasItems && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-card/95 border-t border-border backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 py-3">

            <div className="flex gap-3">

              {/* LEFT */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-primary flex items-center gap-2">
                  <ShoppingBag size={14} />
                  Bestellingen ({orders.length})
                </p>

                <div className="max-h-44 overflow-y-auto space-y-2 mt-2 pr-1">
                  {orders.map((o, i) => (
                    <div key={i} className="bg-secondary/50 p-2 rounded-lg text-xs">
                      <p className="font-semibold text-primary">
                        Bestelling {i + 1}
                      </p>
                      <p>{o.menu?.name ?? "-"}</p>
                      <p>{o.sides.join(", ")}</p>
                      <p>{o.drink ?? "-"}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-primary mt-2 font-semibold">
                  Totaal: €{total.toFixed(2)}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-2">

                <button
                  onClick={resetOrder}
                  className="w-8 h-8 bg-secondary rounded-full"
                >
                  <X size={16} />
                </button>

                <button
                  onClick={addOrder}
                  disabled={
                    !safeOrder.menu ||
                    safeOrder.sides.length !== 2 ||
                    !safeOrder.drink
                  }
                  className="px-3 py-2 text-xs bg-primary text-black rounded-lg"
                >
                  + Toevoegen
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  className="px-3 py-2 text-xs bg-green-500 text-white rounded-lg text-center"
                >
                  <MessageCircle size={14} /> Bestellen
                </a>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderAndSocial;
