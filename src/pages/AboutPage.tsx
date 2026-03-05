import { siteConfig as c } from "@/config/site";
import ScrollReveal from "@/components/ScrollReveal";

import cafeImg from "@/assets/hero-slide-3.jpg";
import heroFood from "@/assets/4.webp";
import gallery1 from "@/assets/1.webp";
import gallery2 from "@/assets/2.webp";
import heroSlide1 from "@/assets/hero.webp";
import heroSlide2 from "@/assets/hero 2.webp";

const AboutPage = () => {
  return (
    <div className="pt-24">

      {/* ── Hero Banner ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="container relative z-10 text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3">
            About {c.name}
          </h1>
          <div className="section-divider max-w-xs mx-auto mt-6 bg-accent" />
        </div>
      </section>

      {/* ── Main Image + Story ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Big Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={cafeImg}
                  alt="Cafe Ambiance"
                  className="rounded-2xl w-full h-[420px] object-cover shadow-xl"
                />
                <img
                  src={heroFood}
                  alt="Food"
                  className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg"
                />
              </div>
            </ScrollReveal>

            {/* Right - Story Text */}
            <ScrollReveal direction="right">
              <div className="md:pl-4 mt-8 md:mt-0">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Our Story
                </h2>
                {c.aboutStory.slice(0, 2).map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Remaining Story Paragraphs */}
          <div className="max-w-3xl mx-auto">
            {c.aboutStory.slice(2).map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">{para}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ── */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Vibe</span>
              <h2 className="text-3xl font-display font-bold mt-2">Inside {c.name}</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroSlide1, heroSlide2, gallery1, gallery2].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden aspect-square group">
                  <img
                    src={img}
                    alt={`${c.name} vibe ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Cards ── */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Stand For</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Our Values</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.valueCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center">
                  <h3 className="font-display text-xl font-bold mb-3 text-primary">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Contact */}
            <ScrollReveal direction="left">
              <div className="text-center md:text-left">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Visit Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Come Say Hello</h2>
                <p className="text-muted-foreground mb-2 text-lg">{c.addressFull}</p>
                <p className="text-muted-foreground mb-4 text-lg">{c.hours}</p>
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  {c.phoneDisplay}
                </a>
              </div>
            </ScrollReveal>

            {/* Right - Image */}
            <ScrollReveal direction="right">
              <img
                src={heroSlide1}
                alt={c.name}
                className="rounded-2xl w-full h-80 object-cover shadow-xl"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
