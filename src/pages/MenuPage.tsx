import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

import { siteConfig as c } from "@/config/site";
const PHONE    = c.phone;
const menuData = c.menu;

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? menuData
    : menuData.filter((cat) => cat.category === activeCategory);

  return (
    <div className="relative min-h-screen">
      
      {/* ── BULLETPROOF CATEGORY BAR (FIXED) ── */}
      {/* We use 'fixed' so it ignores parent overflow bugs. 
          top-16 (64px) and md:top-20 (80px) places it exactly under the Navbar. */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40 w-full bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            
            {/* All Button */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 shrink-0 ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md"
              }`}
            >
              🍽️ All
            </button>

            {/* Category Buttons */}
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 shrink-0 ${
                  activeCategory === cat.category
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN PAGE CONTENT ── */}
      {/* The pt-[140px] md:pt-[160px] calculates the height of the Navbar + Category Bar 
          so your "Our Menu" header doesn't hide underneath them. */}
      <div className="pt-[140px] md:pt-[160px] pb-20 container">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 mt-2">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Explore</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2">Our Menu</h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Fresh, authentic, and made with love — every single day
            </p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* ── Menu Sections ── */}
        <div className="space-y-12 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, delay: catIdx * 0.05 }}
              >
                <ScrollReveal delay={catIdx * 0.05}>
                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
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
              </motion.div>
            ))}
          </AnimatePresence>
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