import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
          Parlons de votre projet
        </h2>
        <p className="mt-4 text-text-muted">
          Premier échange gratuit. Je vous réponds sous 24 heures sur WhatsApp.
        </p>

        <a
          href="https://wa.me/221710197055"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition-colors duration-300 hover:bg-cta"
        >
          <MessageCircle className="h-6 w-6" />
          Discuter sur WhatsApp
        </a>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4">
          <a
            href="tel:+221710197055"
            className="flex items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-text hover:border-primary/30"
          >
            <Phone className="h-5 w-5 text-primary" />
            +221 71 019 70 55
          </a>
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-text">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            Rufisque, Quartier Yen Kao, Sénégal
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-text-muted hover:text-primary"
          >
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-text-muted hover:text-primary"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        </div>

        <div className="mx-auto mt-10 w-fit rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
          Réponse garantie sous 24 heures
        </div>
      </div>
    </section>
  );
}
