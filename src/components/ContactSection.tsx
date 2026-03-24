import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Контакты</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Как нас найти</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-card rounded-lg p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex gap-4 items-start mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-card-foreground mb-1">Адрес</h3>
                <p className="text-sm text-muted-foreground">г. Щёлково, ул. Краснознаменская, 17Б</p>
                <p className="text-xs text-muted-foreground mt-1">330 м от стадиона · Есть парковка</p>
              </div>
            </div>

            <div className="flex gap-4 items-start mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-card-foreground mb-1">Телефон</h3>
                <a href="tel:+74965627177" className="text-sm text-primary font-semibold hover:underline">
                  +7 (496) 562-71-77
                </a>
                <p className="text-xs text-muted-foreground mt-1">Администратор ответит на все вопросы</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-card-foreground mb-1">Часы работы</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Понедельник — Воскресенье: до 21:00</p>
                  <p className="text-xs">Ежедневно без выходных</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://yandex.ru/maps/-/CDxsb0mR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Navigation className="h-4 w-4" />
            Построить маршрут
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-lg overflow-hidden border border-border h-80 lg:h-auto min-h-[320px]"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=38.0038%2C55.9165&z=17&pt=38.0038%2C55.9165%2Cpm2rdm&text=%D0%A9%D1%91%D0%BB%D0%BA%D0%BE%D0%B2%D0%BE%2C%20%D1%83%D0%BB.%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2C%2017%D0%91"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Карта — Добрый Доктор"
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
