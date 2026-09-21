import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dianko Sylla",
  jobTitle: "Importateur de véhicules et équipements depuis la Chine",
  worksFor: {
    "@type": "Organization",
    name: "Mamé Transport",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rufisque",
    addressRegion: "Dakar",
    addressCountry: "SN",
  },
  telephone: "+221710197055",
  description:
    "Entrepreneur sénégalais basé en France, spécialisé dans l'importation de véhicules et équipements depuis la Chine vers l'Afrique",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Values />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
