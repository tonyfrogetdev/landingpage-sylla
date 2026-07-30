import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Produits", href: "#produits" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/images/logos/mame-transport.jpg"
            alt="Mamé Transport"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
          <p className="mt-4 font-display text-xl font-bold">Mamé Transport</p>
          <p className="mt-3 text-sm text-white/60">
            L&apos;homme qui connecte la Chine à l&apos;Afrique
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Mamé Transport"
              className="text-white/70 hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Mamé Transport"
              className="text-white/70 hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/221710197055"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Mamé Transport"
              className="text-white/70 hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/60">Navigation</p>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/60">Contact</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
            <li>
              <a href="tel:+221710197055" className="hover:text-white">
                +221 71 019 70 55
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/221710197055"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>Rufisque, Sénégal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">
        <p>
          © 2025 Dianko Sylla — Mamé Transport. Tous droits réservés.
          <br />
          Site créé par{" "}
          <a
            href="https://afrikontent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Afrikontent
          </a>
        </p>
      </div>
    </footer>
  );
}
