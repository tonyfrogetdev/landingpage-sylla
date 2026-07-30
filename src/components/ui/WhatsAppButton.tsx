import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/221710197055"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Dianko Sylla sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-110 animate-pulse"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
