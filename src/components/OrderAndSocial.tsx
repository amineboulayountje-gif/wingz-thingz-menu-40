import { MessageCircle, X, ShoppingBag } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

/* =========================
   CLEAN CUSTOM ICONS
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
    <path d="M19 7a5 5 0 0 1-4-4V3h-3v12a3 3 0 1 1-3-3V9a6 6 0 1 0 6 6V9.5a5 5 0 0 0 4 1.5V7z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
  </svg>
);

/* =========================
   MAIN COMPONENT
========================= */

const OrderAndSocial = () => {
  const { order, isComplete, resetOrder } = useOrder();

  const whatsappNumber = "32483691967";
  const hasItems = !!order.menu;

  const parsePrice = (price?: string) => {
    if (!price) return 0;
    return parseFloat(price.replace("€", "").replace(",", "."));
  };

  const total = parsePrice(order.menu?.price);

  const missingStepMessage = !order.menu
    ? "Kies een gerecht"
    : order.sides.length < 2
    ? `Kies nog ${2 - order.sides.length} bijgerecht${order.sides.length === 1 ? "" : "en"}`
    : !order.drink
    ? "Kies een drankje"
    : "";

  const whatsappMessage = `
🍗 Wingz and Thingz bestelling

Gerecht: ${order.menu?.name ?? ""}
Bijgerechten: ${order.sides.join(", ")}
Drank: ${order.drink ?? ""}

Totaal: €${total.toFixed(2)}
`.trim();

  return (
    <>
      {/* STICKY ORDER BAR */}
      {hasItems && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg pb-[env(safe-area-inset-bottom)]">
          <div className="max-w-5xl mx-auto px-4 py-2 sm:py-3">
            <div className="flex items-start gap-3">

              {/* LEFT */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-primary mb-1 flex items-center gap-1.5">
                  <ShoppingBag size={14} />
                  Jouw bestelling
                </p>

                <div className="space-y-0.5 text-xs sm:text-sm text-foreground">
                  {order.menu && <p>{order.menu.name}</p>}
                  {order.sides.length > 0 && <p>{order.sides.join(", ")}</p>}
                  {order.drink && <p>{order.drink}</p>}
                </div>

                <p className="text-[10px] text-muted-foreground mt-1">
                  {missingStepMessage}
                </p>

                {order.menu && (
                  <p className="text-xs font-semibold text-primary mt-1">
                    Totaal: €{total.toFixed(2)}
                  </p>
                )}
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2 shrink-0">

                <button
                  onClick={resetOrder}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg ${
                    isComplete
                      ? "bg-[#25D366] hover:bg-[#20bd5a] text-white hover:scale-105"
                      : "bg-muted text-muted-foreground pointer-events-none"
                  }`}
                >
                  <MessageCircle size={18} />
                  Bestellen
                </a>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOCIAL SECTION */}
      <section className={`py-10 sm:py-16 px-4 ${hasItems ? "pb-40" : ""}`}>
        <div className="max-w-md mx-auto text-center space-y-6 sm:space-y-8">

          <p className="text-muted-foreground text-xs sm:text-sm">
            Volg ons
          </p>

          <div className="flex items-center justify-center gap-5">

            {/* Snapchat */}
            <a
              href="https://www.snapchat.com/add/wingz.andthingz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <SnapchatIcon />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@wingz.and.thingz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <TikTokIcon />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/wingzandthingz.antwerp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <InstagramIcon />
            </a>

          </div>

          <p className="text-muted-foreground text-xs pt-6 border-t border-border">
            © 2026 Wingz and Thingz
          </p>

        </div>
      </section>
    </>
  );
};

export default OrderAndSocial;
