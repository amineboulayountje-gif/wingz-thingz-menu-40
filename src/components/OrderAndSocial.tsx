import { useState } from "react";
import { MessageCircle, X, ShoppingBag } from "lucide-react";
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
   MAIN COMPONENT
========================= */

const OrderAndSocial = () => {
  const {
    currentOrder,
    addOrder,
    resetOrder,
    isComplete,
  } = useOrder();

  const whatsappNumber = "32483691967";

  /* =========================
     PRICE
  ========================= */

  const parsePrice = (price?: string) =>
    price ? parseFloat(price.replace("€", "").replace(",", ".")) : 0;

  const total = parsePrice(currentOrder.menu?.price || "");

  /* =========================
     LIVE CHECK
  ========================= */

  const hasItems =
    !!currentOrder.menu ||
    currentOrder.sides.length > 0 ||
    !!currentOrder.drink;

  /* =========================
     WHATSAPP MESSAGE
  ========================= */

  const whatsappMessage = `
🍗 Wingz and Thingz bestelling

Gerecht: ${currentOrder.menu?.name || ""}
Bijgerechten: ${currentOrder.sides.join(", ")}
Drank: ${currentOrder.drink || ""}

Totaal: €${total.toFixed(2)}
`.trim();

  /* =========================
     COMPLETE ORDER
  ========================= */

  const handleComplete = () => {
    if (!isComplete) return;

    addOrder();
    resetOrder();

    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <>
      {/* STICKY ORDER BAR */}
      {hasItems && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-card/95 border-t border-border backdrop-blur-md">

          <div className="max-w-5xl mx-auto px-4 py-3">

            <div className="flex gap-3">

              {/* LEFT */}
              <div className="flex-1">

                <p className="text-xs font-semibold text-primary flex items-center gap-2">
                  <ShoppingBag size={14} />
                  Jouw bestelling
                </p>

                {/* LIVE ORDER DISPLAY */}
                <div className="mt-2 text-xs space-y-1">

                  {currentOrder.menu && (
                    <p>{currentOrder.menu.name}</p>
                  )}

                  {currentOrder.sides.length > 0 && (
                    <p>{currentOrder.sides.join(", ")}</p>
                  )}

                  {currentOrder.drink && (
                    <p>{currentOrder.drink}</p>
                  )}

                </div>

                <p className="text-xs font-semibold text-primary mt-2">
                  Totaal: €{total.toFixed(2)}
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-2">

                <button
                  onClick={resetOrder}
                  className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
                >
                  <X size={16} />
                </button>

                <button
                  onClick={handleComplete}
                  disabled={!isComplete}
                  className="px-3 py-2 text-xs bg-black text-white rounded-lg"
                >
                  Afronden
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
