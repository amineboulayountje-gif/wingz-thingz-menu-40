import { MessageCircle } from "lucide-react";

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.12-.042.195-.063.27-.063a.53.53 0 0 1 .38.152c.36.344-.18.69-.27.749-.105.075-.39.195-.705.315a2.3 2.3 0 0 0-.405.195c-.12.09-.18.18-.195.315-.015.134.06.374.21.72.36.81 1.05 1.665 2.04 2.19.18.09.345.18.375.344.045.255-.36.48-.735.614-.195.075-.42.135-.645.195-.15.045-.3.09-.435.15-.24.105-.27.3-.285.45a1.3 1.3 0 0 0 .135.6c.075.12.12.24.075.36-.06.165-.24.27-.42.36-.36.165-.78.255-1.2.3-.21.015-.375.09-.465.225-.105.15-.12.375-.135.6-.015.21-.03.435-.135.615-.24.42-.78.555-1.275.67-.3.075-.615.135-.84.255-.18.105-.285.255-.39.39-.195.255-.42.54-.87.72-.21.075-.45.12-.69.12-.36 0-.72-.105-.99-.21a4.7 4.7 0 0 0-.57-.195c-.21-.06-.435-.105-.66-.105s-.45.045-.66.105a4.7 4.7 0 0 0-.57.195c-.345.135-.735.27-1.14.21a1.8 1.8 0 0 1-.54-.165c-.42-.21-.63-.48-.81-.72-.105-.135-.21-.285-.39-.39-.225-.12-.54-.18-.84-.255-.495-.12-1.035-.255-1.275-.67-.105-.18-.12-.405-.135-.615-.015-.225-.03-.45-.135-.6-.09-.135-.255-.21-.465-.225-.42-.045-.84-.135-1.2-.3-.18-.09-.36-.195-.42-.36-.045-.12 0-.24.075-.36a1.3 1.3 0 0 0 .135-.6c-.015-.15-.045-.345-.285-.45-.135-.06-.285-.105-.435-.15-.225-.06-.45-.12-.645-.195-.375-.135-.78-.36-.735-.614.03-.164.195-.254.375-.344.99-.525 1.68-1.38 2.04-2.19.15-.345.225-.585.21-.72-.015-.135-.075-.225-.195-.315a2.3 2.3 0 0 0-.405-.195c-.315-.12-.6-.24-.705-.315-.09-.06-.63-.405-.27-.749a.53.53 0 0 1 .38-.152c.075 0 .15.021.27.063.263.094.622.23.922.214.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.23 8.23 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.22Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
  </svg>
);

const OrderAndSocial = () => {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const orderMessage = encodeURIComponent(
    "Hoi! Ik wil graag een bestelling plaatsen bij Wingz and Thingz 🍗"
  );

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Order Button */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-gradient">
            Klaar om te bestellen?
          </h2>
          </h2>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${orderMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle size={24} />
            Bestel via WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-muted-foreground text-sm mb-4">Volg ons</p>
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="Snapchat"
            >
              <SnapchatIcon />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-xs pt-8 border-t border-border">
          © 2026 Wingz and Thingz. Alle rechten voorbehouden.
        </p>
      </div>
    </section>
  );
};

export default OrderAndSocial;
