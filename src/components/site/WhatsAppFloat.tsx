import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918777080798?text=Hi%20ABSolute%20Fitness%2C%20I%27d%20like%20to%20book%20a%20free%20trial."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-2xl animate-pulse-glow"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
