import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mametransport.com"),
  title: "Dianko Sylla — Importateur de véhicules Chine Afrique | Mamé Transport",
  description:
    "Dianko Sylla, fondateur de Mamé Transport. Importation de véhicules et machines depuis la Chine vers l'Afrique. Bus, camions, tuktuk, scooters, 4x4. Basé en France, livraison au Sénégal.",
  keywords: [
    "importateur véhicules chine afrique",
    "mamé transport sénégal",
    "dianko sylla",
    "bus import chine sénégal",
    "tuktuk sénégal",
    "camion import afrique",
    "véhicules chine rufisque",
    "scooter chine sénégal",
    "import export véhicules afrique",
  ],
  openGraph: {
    title: "Dianko Sylla — Mamé Transport",
    description:
      "Importateur de véhicules et machines depuis la Chine vers l'Afrique",
    url: "https://mametransport.com",
    siteName: "Mamé Transport",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dianko Sylla — Mamé Transport",
    description: "Importateur de véhicules depuis la Chine vers l'Afrique",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
