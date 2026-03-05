import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig as c } from "@/config/site";

import vibe1 from "@/assets/vibe-1.jpg";
import vibe2 from "@/assets/vibe-2.jpg";
import vibe3 from "@/assets/vibe-5.jpg";
import vibe4 from "@/assets/vibe-6.jpg";
import vibe5 from "@/assets/vibe-3.jpg";
import vibe6 from "@/assets/vibe-4.jpg";
import vibe7 from "@/assets/vibe-7.jpg";
import vibe8 from "@/assets/vibe-8.jpg";

const categories = [
  { label: "All", value: "all" },
  { label: "🏡 Ambiance", value: "ambiance" },
  { label: "🍽️ Food & Drinks", value: "food" },
];

const galleryImages = [
  { img: vibe1, category: "ambiance" },
  { img: vibe2, category: "ambiance" },
  { img: vibe3, category: "food" },
  { img: vibe4, category: "food" },
  { img: vibe5, category: "ambiance" },
  { img: vibe6, category: "ambiance" },
  { img: vibe7, category: "food" },
  { img: vibe8, category: "food" },
];

const GalleryPage = () => {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === active);

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="container relative z-10 text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Vibe</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3">
            Gallery
          </h1>
          <div className="section-divider max-w-xs mx-auto mt-6 bg-accent" />
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-10 pb-0">
        <div className="container">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  active === cat.value
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div key={i} className="break-inside-avoid">
                <ScrollReveal delay={i * 0.08}>
                  <div className="rounded-2xl overflow-hidden group bg-card border border-border shadow-sm relative">
                    <img
                      src={item.img}
                      alt={`${c.name} gallery ${i + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default GalleryPage;
