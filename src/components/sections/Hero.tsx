"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="#8B1A2B"
          strokeWidth="120"
          opacity="0.06"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Importateur de véhicules depuis la Chine
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 font-display text-3xl font-bold leading-tight text-text md:text-5xl"
          >
            Dianko Sylla <br /> L&apos;homme qui connecte la Chine à l&apos;Afrique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg text-text-muted"
          >
            Fondateur de Mamé Transport. J&apos;importe des véhicules et
            machines de qualité depuis la Chine pour les entrepreneurs et
            transporteurs africains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="https://wa.me/221710197055" external>
              Contactez-moi sur WhatsApp
            </Button>
            <Button href="#produits" variant="outline">
              Voir mes produits
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20"
        >
          <Image
            src="/images/hero/sylla1.png"
            alt="Dianko Sylla dans son bureau, partenariats internationaux Sénégal-Chine"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
