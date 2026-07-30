"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment se passe une commande ?",
    answer:
      "Contactez-moi sur WhatsApp, on discute de vos besoins, je vous envoie un devis sous 24h. Une fois validé, je gère l'importation depuis la Chine jusqu'à la livraison.",
  },
  {
    question: "Les véhicules viennent directement de Chine ?",
    answer:
      "Oui, j'importe directement depuis des fabricants chinois certifiés pour garantir la qualité et les meilleurs prix du marché.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Les délais varient selon le véhicule et votre localisation. Je vous communique un délai précis lors de votre demande de devis. En général, comptez 4 à 8 semaines.",
  },
  {
    question: "Proposez-vous un accompagnement après achat ?",
    answer:
      "Oui, j'accompagne mes clients avant, pendant et après chaque achat pour garantir leur satisfaction et répondre à toutes leurs questions.",
  },
  {
    question: "Livrez-vous partout en Afrique ?",
    answer:
      "Je livre principalement au Sénégal mais je peux organiser la livraison dans d'autres pays africains sur demande. Contactez-moi pour discuter de votre situation.",
  },
  {
    question: "Les prix sont-ils négociables ?",
    answer:
      "Je propose des prix compétitifs issus d'une importation directe depuis la Chine. Pour des commandes en volume, des arrangements peuvent être envisagés.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-3xl font-bold text-text md:text-4xl">
          Questions fréquentes
        </h2>

        <div className="mt-12 flex flex-col divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-text">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-text-muted">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
