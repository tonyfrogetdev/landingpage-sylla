"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const videoTestimonials = [
  { src: "/videos/temoignage-1.mp4", label: "Témoignage client" },
  { src: "/videos/temoignage-2.mp4", label: "Témoignage client" },
];

// TODO: Remplacer par les vrais témoignages clients
const testimonials = [
  {
    name: "Moussa Diallo",
    location: "Dakar, Sénégal",
    text: "Dianko m'a accompagné de A à Z pour l'achat de mes deux bus. Qualité irréprochable et livraison dans les délais. Je recommande.",
    stars: 5,
  },
  {
    name: "Fatou Mbaye",
    location: "Rufisque, Sénégal",
    text: "Très professionnel et à l'écoute. J'ai commandé trois tuktuks et tout s'est passé parfaitement. Un vrai partenaire de confiance.",
    stars: 5,
  },
  {
    name: "Ibrahim Sow",
    location: "Thiès, Sénégal",
    text: "Excellent rapport qualité-prix pour les camions. Dianko connaît son métier et tient ses engagements. Je travaille avec lui depuis deux ans.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl font-bold text-text md:text-4xl">
          Ce que disent mes clients
        </h2>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="aspect-9/16 w-full max-w-70 overflow-hidden rounded-2xl bg-black shadow-lg">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-text-muted">
                {video.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-black/5 bg-white p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mt-4 text-text-muted">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="mt-5 font-semibold text-text">{testimonial.name}</p>
              <p className="text-sm text-text-muted">{testimonial.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
