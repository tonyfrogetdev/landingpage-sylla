"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Truck } from "lucide-react";
import Button from "@/components/ui/Button";

const stats = [
  {
    icon: Globe,
    title: "France x Chine x Sénégal",
    description: "Une présence internationale au service de vos projets",
  },
  {
    icon: Truck,
    title: "Multi-équipements",
    description: "Bus, camions, tuktuk, scooters, 4x4, refroidisseurs solaires",
  },
  {
    icon: Shield,
    title: "Sur mesure",
    description: "Un accompagnement avant, pendant et après l'achat",
  },
];

export default function About() {
  return (
    <section id="apropos" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 aspect-4/5 w-full overflow-hidden rounded-2xl bg-black shadow-xl shadow-primary/10 md:order-1 md:col-span-2"
          >
            <video
              src="/videos/diankosylla.mp4"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="order-1 md:order-2 md:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-text md:text-4xl"
            >
              Mon parcours
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 border-l-4 border-primary pl-6 font-display text-2xl font-bold italic leading-snug text-primary md:text-3xl"
            >
              Nous ne construisons pas seulement une entreprise. Nous
              bâtissons un héritage, des opportunités et un avenir.
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 space-y-4 text-text-muted"
            >
              <p>
                Mon parcours est guidé par une conviction simple :
                l&apos;entrepreneuriat est bien plus qu&apos;une activité,
                c&apos;est l&apos;art de créer de la valeur, de résoudre des
                problèmes et de laisser un impact durable.
              </p>
              <p>
                Chaque projet que j&apos;entreprends est construit sur des
                valeurs fortes : l&apos;excellence, l&apos;intégrité,
                l&apos;innovation et le respect des engagements.
              </p>
              <p>
                Mon objectif n&apos;est pas seulement de développer une
                entreprise, mais de bâtir une organisation solide, capable
                d&apos;accompagner ses partenaires et ses clients vers une
                croissance durable.
              </p>
            </motion.div>

            <Button href="#contact" variant="outline" className="mt-8">
              Me contacter
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6"
            >
              <stat.icon className="h-7 w-7 shrink-0 text-primary" />
              <div>
                <p className="font-display text-base font-bold text-text">
                  {stat.title}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
