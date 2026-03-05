import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";
import { siteConfig as c } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-4">
              <span className="text-primary">{c.nameParts?.white}</span>
              <span className="text-accent"> {c.nameParts?.accent}</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              {c.footerDescription}
            </p>
            <div className="flex gap-3">
              <a
                href={c.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/",        label: "Home"    },
                { to: "/menu",    label: "Menu"    },
                { to: "/about",   label: "About"   },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-background/60 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Items */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Popular</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {c.popularItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <a href={c.mapsLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-accent transition-colors">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  {c.addressFull}
                </a>
              </li>
              <li>
                <a href={`tel:${c.phone}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={16} className="shrink-0 text-primary" />
                  {c.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">© {new Date().getFullYear()} {c.name}. All rights reserved.</p>
          <p className="text-xs text-background/40">{c.hours}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
