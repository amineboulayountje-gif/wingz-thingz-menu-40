import { MessageCircle, X, ShoppingBag, Ghost, Music2, Instagram } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

const OrderAndSocial = () => {
  const { order, isComplete, resetOrder } = useOrder();

  const whatsappNumber = "32483691967";

  const hasItems = !!order.menu;

  const itemCount =
    (order.menu ? 1 : 0) + order.sides.length + (order.drink ? 1 : 0);

  const whatsappMessage = `
🍗 *Wingz and Thingz Order*

${order.menu ? `🍽️ Gerecht: ${order.menu.name} (${order.menu.price})` : ""}
${order.sides.length ? `🥗 Bijgerechten: ${order.sides.join(", ")}` : ""}
${order.drink ? `🥤 Drank: ${order.drink}` : ""}

🔥 Aantal items: ${itemCount}

Dank je voor je bestelling! 🙌
`.trim();

  return (
    <>
      {/* Sticky order bar */}
      {hasItems && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
          <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-primary mb-1 flex items-center gap-1.5">
                  <ShoppingBag size={14} />
                  Jouw bestelling ({itemCount} items)
                </p>

                <div className="space-y-0.5 text-xs sm:text-sm text-foreground">
                  {order.menu && (
                    <p>
                      🍗 {order.menu.name} ·{" "}
                      <span className="text-primary font-semibold">
                        {order.menu.price}
                      </span>
                    </p>
                  )}

                  {order.sides.length > 0 && (
                    <p className="text-muted-foreground">
                      🥗 {order.sides.join(", ")}
                    </p>
                  )}

                  {order.drink && (
                    <p className="text-muted-foreground">
                      🥤 {order.drink}
                    </p>
                  )}
                </div>

                {!isComplete && (
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {!order.menu
                      ? "Kies een gerecht"
                      : order.sides.length < 2
                      ? `Kies nog ${2 - order.sides.length} bijgerecht${
                          order.sides.length === 1 ? "" : "en"
                        }`
                      : "Kies een drankje"}
                  </p>
                )}
              </div>

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
                  Bestel via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social + footer */}
      <section className={`py-10 sm:py-16 px-4 ${hasItems ? "pb-32" : ""}`}>
        <div className="max-w-md mx-auto text-center space-y-6 sm:space-y-8">
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
              Volg ons
            </p>

            <div className="flex items-center justify-center gap-4 sm:gap-5">
              {/* Snapchat */}
              <a
                href="https://www.snapchat.com/add/wingz.andthingz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
                aria-label="Snapchat"
              >
                <Ghost />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@wingzandthingz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <Music2 />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/wingzandthingz.antwerp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <p className="text-muted-foreground text-xs pt-6 sm:pt-8 border-t border-border">
            © 2026 Wingz and Thingz. Alle rechten voorbehouden.
          </p>
        </div>
      </section>
    </>
  );
};

export default OrderAndSocial;
