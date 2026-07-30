export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Bus de transport",
    category: "Transport",
    description:
      "Bus de grande capacité pour le transport de personnes. Idéal pour les lignes urbaines et interurbaines au Sénégal.",
    images: ["/images/products/bus.jpg"],
  },
  {
    id: 2,
    name: "Camion",
    category: "Transport marchandises",
    description:
      "Camions robustes pour le transport de marchandises. Benne ou frigorifique selon vos besoins.",
    images: [
      "/images/products/camion1.jpg",
      "/images/products/camion2.jpg",
      "/images/products/camion3.jpg",
    ],
  },
  {
    id: 3,
    name: "Tuktuk",
    category: "Transport urbain",
    description:
      "Tuktuks pratiques et économiques pour le transport urbain et les courtes distances.",
    images: ["/images/products/tuktuk1.jpg", "/images/products/tuktuk2.jpg"],
  },
  {
    id: 4,
    name: "Scooter",
    category: "Deux roues",
    description:
      "Scooters de qualité pour la mobilité urbaine et les livraisons rapides.",
    images: [
      "/images/products/scooter1.jpg",
      "/images/products/scooter2.jpg",
      "/images/products/scooter3.jpg",
    ],
  },
  {
    id: 5,
    name: "Voiture 4x4",
    category: "Véhicule utilitaire",
    description:
      "4x4 robustes et confortables, parfaitement adaptés aux routes africaines.",
    images: [
      "/images/products/4x4-1.jpg",
      "/images/products/4x4-2.jpg",
      "/images/products/4x4-3.jpg",
    ],
  },
];
