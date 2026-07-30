import { Award, Handshake, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Un seul standard dans chaque transaction",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "La confiance se construit acte par acte",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Toujours chercher la meilleure solution",
  },
  {
    icon: Handshake,
    title: "Engagement",
    description: "Avant, pendant et après chaque achat",
  },
];

export default function Values() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl font-bold text-white md:text-4xl">
          Ce en quoi je crois
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center"
            >
              <value.icon className="mx-auto h-8 w-8 text-white" />
              <p className="mt-4 font-display text-lg font-bold text-white">
                {value.title}
              </p>
              <p className="mt-2 text-sm text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
