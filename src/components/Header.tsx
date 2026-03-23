import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Услуги", href: "#services" },
    { label: "Почему мы", href: "#why-us" },
    { label: "Галерея", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          Добрый Доктор
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Phone className="h-4 w-4 text-primary" />
          <a href="tel:+74965627177" className="text-sm font-semibold text-foreground">
            +7 (496) 562-71-77
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:+74965627177" className="text-sm font-semibold text-primary py-2">
                +7 (496) 562-71-77
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
