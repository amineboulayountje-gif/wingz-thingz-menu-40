import { MessageCircle, X, ShoppingBag } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

// 👉 IMPORT YOUR ICON IMAGES
import snapchatIcon from "@/assets/snapchat.png";
import tiktokIcon from "@/assets/tiktok.png";
import instagramIcon from "@/assets/insta.png";

const OrderAndSocial = () => {
  const { order, isComplete, resetOrder } = useOrder();

  const whatsappNumber = "32483691967";
 
  const hasItems = !!order.menu;

  // ✅ price parser ("€14,99" → 14.99)
  const parsePrice = (price?: string) => {
    if (!price) return 0;
    return parseFloat(price.replace("€", "").replace(",", "."));
  };

  const menuPrice = parsePrice(order.menu?.price);
  const total = menuPrice;

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

                {/* CLEAN SUMMARY */}
                <div className="space-y-0.5 text-xs sm:text-sm text-foreground">
                  {order.menu && <p>{order.menu.name}</p>}
                  {order.sides.length > 0 && <p>{order.sides.join(", ")}</p>}
                  {order.drink && <p>{order.drink}</p>}
                </div>

                {/* MISSING STEP MESSAGE */}
                <p className="text-[10px] text-muted-foreground mt-1">
                  {missingStepMessage}
                </p>

                {/* TOTAL */}
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
                  aria-label="Reset bestelling"
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
                  aria-disabled={!isComplete}
                  tabIndex={isComplete ? 0 : -1}
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

          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
            Volg ons
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-5">

            {/* Snapchat */}
            <a
              href="https://www.snapchat.com/add/wingz.andthingz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="Snapchat"
            >
              <img
                src={snapchatIcon}
                alt="Snapchat"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@wingzand.thingz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/wingzandthingz.antwerp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </a>

          </div>

          <p className="text-muted-foreground text-xs pt-6 sm:pt-8 border-t border-border">
            © 2026 Wingz and Thingz
          </p>

        </div>
      </section>
    </>
  );
};

export default OrderAndSocial;
