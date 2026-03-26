import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Clock, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-vet.jpg";
import ConsentCheckbox from "@/components/ConsentCheckbox";

const HeroSection = () => {
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Ветеринарная клиника Добрый Доктор" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-primary-foreground/80">5.0 — 692 отзыва</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Забота о вашем питомце — наша главная миссия
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body">
              Ветеринарная клиника, лаборатория и аптека в Щёлково. Более 15 специалистов, современное оборудование и любовь к каждому пациенту.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Щёлково, ул. Краснознаменская, 17Б
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Ежедневно до 21:00
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-6 md:p-8" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="h-14 w-14 text-primary mb-3" />
                    </motion.div>
                    <h2 className="font-display text-xl font-bold text-card-foreground mb-2">Спасибо!</h2>
                    <p className="text-sm text-muted-foreground mb-5 max-w-xs">
                      Мы получили вашу заявку и перезвоним в течение 15 минут.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setConsent(false); }}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">Запишитесь на приём</h2>
                    <p className="text-sm text-muted-foreground mb-6">Перезвоним в течение 15 минут</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        required
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Номер телефона"
                        className="w-full px-4 py-3 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      />
                      <select className="w-full px-4 py-3 rounded-md bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm">
                        <option value="">Выберите услугу</option>
                        <option>Первичный приём</option>
                        <option>Вакцинация</option>
                        <option>Хирургия</option>
                        <option>УЗИ / Рентген</option>
                        <option>Стерилизация / Кастрация</option>
                        <option>Лабораторные анализы</option>
                        <option>Другое</option>
                      </select>
                      <textarea
                        placeholder="Опишите проблему (необязательно)"
                        rows={3}
                        className="w-full px-4 py-3 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                      />
                      <ConsentCheckbox id="hero-consent" checked={consent} onCheckedChange={setConsent} />
                      <button
                        type="submit"
                        disabled={!consent || loading}
                        className="w-full py-3 rounded-md font-semibold text-sm text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        {loading ? "Отправка…" : "Записаться на приём"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
