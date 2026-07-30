"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Product } from "@/lib/products";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) return null;

  const hasMultipleImages = product.images.length > 1;

  const goToPrevious = () => {
    setImageIndex((current) =>
      current === 0 ? product.images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setImageIndex((current) =>
      current === product.images.length - 1 ? 0 : current + 1
    );
  };

  const handleClose = () => {
    setImageIndex(0);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(event) => event.stopPropagation()}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-text shadow-md"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative aspect-4/3 w-full bg-surface">
            <Image
              src={product.images[imageIndex]}
              alt={`${product.name} — photo ${imageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-cover"
            />
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Photo précédente"
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-text shadow-md"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Photo suivante"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-text shadow-md"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="p-6">
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              {product.category}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-text">
              {product.name}
            </h3>
            <p className="mt-2 text-text-muted">{product.description}</p>
            <a
              href="https://wa.me/221710197055"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-cta"
            >
              Contacter sur WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
