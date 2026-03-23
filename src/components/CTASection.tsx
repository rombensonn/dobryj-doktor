import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Запишите вашего питомца сегодня
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Позвоните нам или оставьте заявку — мы перезвоним и подберём удобное время для визита
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="tel:+74965627177"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-card text-foreground font-semibold text-sm hover:bg-card/90 transition-colors"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <Phone className="h-4 w-4" />
            +7 (496) 562-71-77
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Оставить заявку
          </a>
        </div>

        <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4" /> Щёлково, ул. Краснознаменская, 17Б
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
