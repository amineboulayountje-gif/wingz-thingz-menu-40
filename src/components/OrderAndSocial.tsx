import { useState } from "react";
import { MessageCircle, X, ShoppingBag, Pencil, Trash2 } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

/* =========================
   ICONS
========================= */

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fill="currentColor"
      d="M12 2.5c-3 0-5 2.2-5 5.2 0 2 1 3.4 1 4.8 0 .6-.5 1-1 1-.4 0-.8-.1-1.1.2-.3.3-.2.8.2 1 .9.5 1.8.7 2.4 1.4.5.6.5 1.4-.5 2.1-.5.3-1.3.5-2 .5-.6 0-1 .2-1 .7 0 .6 2 1 4 1 1.5 0 3-.5 4-1.4 1 .9 2.5 1.4 4 1.4 2 0 4-.4 4-1 0-.5-.4-.7-1-.7-.7 0-1.5-.2-2-.5-1-.7-1-1.5-.5-2.1.6-.7 1.5-.9 2.4-1.4.4-.2.5-.7.2-1-.3-.3-.7-.2-1.1-.2-.5 0-1-.4-1-1 0-1.4 1-2.8 1-4.8 0-3-2-5.2-5-5.2z"
    />
  </svg>
);

/* =========================
   MAIN
========================= */

const OrderAndSocial = () => {
  const {
    orders,
    currentOrder,
    addOrder,
    resetOrder,
    setMenu,
    toggleSide,
    setDrink,
  } = useOrder();

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const whatsappNumber = "32483691967";

  const hasItems = orders.length > 0 || !!currentOrder.menu;

  /* =========================
     PRICE
  ========================= */

  const parsePrice = (price?: string) =>
    price ? parseFloat(price.replace("€", "").replace(",", ".")) : 0;

  const total =
    orders.reduce((sum, o) => sum + parsePrice(o.menu?.price), 0) +
    parsePrice(currentOrder.menu?.price || "");

  /* =========================
     DELETE (SAFE)
  ========================= */

  const deleteOrder = (index: number) => {
    const updated = [...orders];
    updated.splice(index, 1);

    // SAFE reset approach (simple version)
    resetOrder();
    updated.forEach(() => addOrder());
  };

  /* =========================
     EDIT
  ========================= */

  const editOrder = (index: number) => {
    const selected = orders[index];
    if (!selected) return;

    resetOrder();

    setMenu(selected.menu);
    selected.sides.forEach((s) => toggleSide(s));
    setDrink(selected.drink);

    setEditIndex(index);
  };

  /* =========================
     WHATSAPP
  ========================= */

  const whatsappMessage = `
🍗 Wingz and Thingz bestelling

${orders
  .map(
    (o, i) => `
Bestelling ${i + 1}
Gerecht: ${o.menu?.name}
Bijgerechten: ${o.sides.join(", ")}
Drank: ${o.drink}
`
  )
  .join("\n")}

Totaal: €${total.toFixed(2)}
`.trim();

  /* =========================
     RENDER
  ========================= */

  return (
    <>
      {/* ORDER BAR */}
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

                      <div className="flex justify-between">
                        <p className="text-primary font-semibold">
                          Bestelling {i + 1}
                        </p>

                        <div className="flex gap-2">
                          <button onClick={() => editOrder(i)}>
                            <Pencil size={14} />
                          </button>
                          <button onClick={() => deleteOrder(i)}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>

                      <p>{o.menu?.name}</p>
                      <p className="text-muted-foreground">
                        {o.sides.join(", ")}
                      </p>
                      <p className="text-muted-foreground">{o.drink}</p>

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
                  disabled={!currentOrder.menu || currentOrder.sides.length !== 2 || !currentOrder.drink}
                  className="px-3 py-2 text-xs bg-primary text-black rounded-lg"
                >
                  {editIndex !== null ? "Update" : "+ Toevoegen"}
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

      {/* SOCIAL */}
      <section className="py-10 px-4 pb-40 text-center">
        <p className="text-sm text-muted-foreground mb-4">Volg ons</p>

        <div className="flex justify-center gap-5">
          <a className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
            <SnapchatIcon />
          </a>
        </div>
      </section>
    </>
  );
};

export default OrderAndSocial;
