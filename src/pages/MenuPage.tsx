import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { siteConfig as c } from "@/config/site";
const PHONE    = c.phone;
const menuData = c.menu;

const MenuPage = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToCategory = (category: string) => {
    const el = sectionRefs.current[category];
    if (el) {
      const yOffset = -100; // Navbar height adjust
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="container">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Explore</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2">Our Menu</h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Fresh, authentic, and made with love — every single day
            </p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* ── Category Pills (Sticky) ── */}
        <div className="sticky top-[64px] z-30 bg-background/80 backdrop-blur-md py-3 mb-10 border-b border-border">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => scrollToCategory(cat.category)}
                className="flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shrink-0"
              >
                <span>{cat.emoji}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Menu Sections ── */}
        <div className="space-y-12 max-w-2xl mx-auto">
          {menuData.map((cat, catIdx) => (
            <ScrollReveal key={cat.category} delay={catIdx * 0.05}>
              <div
                ref={(el) => (sectionRefs.current[cat.category] = el)}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  {cat.category}
                </h2>
                <div className="space-y-1">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="flex justify-between items-start gap-4 p-3 rounded-xl hover:bg-secondary/60 transition-colors group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          {(item as any).popular && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-primary whitespace-nowrap bg-primary/5 px-3 py-1 rounded-full">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call CTA */}
        <ScrollReveal>
          <div className="text-center mt-16 p-8 rounded-2xl bg-secondary border border-border">
            <p className="text-muted-foreground text-sm mb-3">Want to order? Give us a call!</p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default MenuPage;
