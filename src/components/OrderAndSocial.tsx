import { MessageCircle, X, ShoppingBag } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

/* =========================
   ICONS
========================= */

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fill="currentColor"
      d="M12 2.5c-3 0-5 2.2-5 5.2 0 2 1 3.4 1 4.8 0 .6-.5 1-1 1-.4 0-.8-.1-1.1.2-.3.3-.2.8.2 1
      .9.5 1.8.7 2.4 1.4.5.6.5 1.4-.5 2.1-.5.3-1.3.5-2 .5-.6 0-1 .2-1 .7 0 .6 2 1 4 1
      1.5 0 3-.5 4-1.4 1 .9 2.5 1.4 4 1.4 2 0 4-.4 4-1 0-.5-.4-.7-1-.7-.7 0-1.5-.2-2-.5-1-.7-1-1.5-.5-2.1
      .6-.7 1.5-.9 2.4-1.4.4-.2.5-.7.2-1-.3-.3-.7-.2-1.1-.2-.5 0-1-.4-1-1 0-1.4 1-2.8 1-4.8
      0-3-2-5.2-5-5.2z"
    />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 7a5 5 0 0 1-4-4V3h-3v12a3 3 0 1 1-3-3V9a6 6 0 1 0 6 6V9.5a5 5 0 0 0 4 1.5V7z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);

/* =========================
   COMPONENT
========================= */

const OrderAndSocial = () => {
  const {
    order,
    orders,
    addOrder,
    submitOrders,
    isComplete,
    isSubmitted,
    resetOrder,
  } = useOrder();

  const whatsappNumber = "32483691967";

  const hasItems = orders.length > 0 || !!order.menu;

  const parsePrice = (price?: string) => {
    if (!price) return 0;
    return parseFloat(price.replace("€", "").replace(",", "."));
  };

  const total =
    orders.reduce(
      (sum, o) => sum + parsePrice(o.menu?.price),
      0
    ) + parsePrice(order.menu?.price);

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

${order.menu ? `
HUIDIGE BESTELLING
Gerecht: ${order.menu?.name}
Bijgerechten: ${order.sides.join(", ")}
Drank: ${order.drink}
` : ""}

Totaal: €${total.toFixed(2)}
`.trim();

  return (
    <>
      {/* ORDER BAR */}
      {hasItems && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-card/95 backdrop-blur-md border-t border-border pb-[env(safe-area-inset-bottom)]">

          <div className="max-w-5xl mx-auto px-4 py-3">

            <div className="flex items-start gap-3">

              {/* LEFT */}
              <div className="flex-1">

                <p className="text-xs font-semibold text-primary flex items-center gap-1.5 mb-2">
                  <ShoppingBag size={14} />
                  Jouw bestelling ({orders.length})
                </p>

                <div className="text-xs text-foreground space-y-2 max-h-40 overflow-y-auto pr-1">

                  {orders.map((o, i) => (
                    <div key={i} className="bg-secondary/50 p-2 rounded-lg">
                      <p className="text-primary font-semibold">
                        Bestelling {i + 1}
                      </p>
                      <p>{o.menu?.name}</p>
                      <p className="text-muted-foreground">{o.sides.join(", ")}</p>
                      <p className="text-muted-foreground">{o.drink}</p>
                    </div>
                  ))}

                  {order.menu && (
                    <div className="border border-dashed border-primary/40 p-2 rounded-lg">
                      <p className="text-primary font-semibold">
                        Huidige bestelling
                      </p>
                      <p>{order.menu.name}</p>
                      <p className="text-muted-foreground">{order.sides.join(", ")}</p>
                      <p className="text-muted-foreground">{order.drink}</p>
                    </div>
                  )}

                </div>

                <p className="text-xs text-muted-foreground mt-2">
                  {isSubmitted
                    ? "Bestelling afgerond"
                    : !order.menu
                    ? "Kies een gerecht"
                    : ""}
                </p>

                <p className="text-xs font-semibold text-primary mt-1">
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

                {/* ADD ORDER */}
                {!isSubmitted && (
                  <button
                    onClick={addOrder}
                    className={`px-3 py-2 text-sm rounded-lg font-semibold ${
                      isComplete
                        ? "bg-primary text-black"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    + Voeg toe
                  </button>
                )}

                {/* SUBMIT */}
                {!isSubmitted && (
                  <button
                    onClick={submitOrders}
                    disabled={orders.length === 0}
                    className="px-3 py-2 text-sm rounded-lg bg-black text-white"
                  >
                    Afronden
                  </button>
                )}

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  className={`px-3 py-2 text-sm rounded-lg text-center ${
                    isSubmitted
                      ? "bg-[#25D366] text-white"
                      : "bg-muted text-muted-foreground pointer-events-none"
                  }`}
                >
                  <MessageCircle size={16} className="inline mr-1" />
                  Bestellen
                </a>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOCIAL */}
      <section className="py-10 px-4 pb-40">
        <div className="text-center space-y-4">

          <p className="text-muted-foreground text-sm">Volg ons</p>

          <div className="flex justify-center gap-5">

            <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <SnapchatIcon />
            </a>

            <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <TikTokIcon />
            </a>

            <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <InstagramIcon />
            </a>

          </div>

          <p className="text-xs text-muted-foreground pt-6 border-t border-border">
            © 2026 Wingz and Thingz
          </p>

        </div>
      </section>
    </>
  );
};

export default OrderAndSocial;
