import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Clock, MapPin, Heart, PawPrint, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ConsentCheckbox from "@/components/ConsentCheckbox";

const RequestFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="request-form" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-3">
              <Heart className="h-4 w-4" /> Запишитесь на приём
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Позаботьтесь о здоровье <span className="text-primary">вашего питомца</span> уже сегодня
            </h2>
            <p className="text-muted-foreground text-base mb-6 max-w-md">
              Оставьте заявку — мы перезвоним, ответим на вопросы и подберём удобное время для визита.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Телефон</p>
                  <a href="tel:+74965627177" className="font-semibold text-sm text-foreground hover:text-primary transition-colors">
                    +7 (496) 562-71-77
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Время работы</p>
                  <p className="font-semibold text-sm text-foreground">Пн–Вс: 9:00 – 21:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Адрес</p>
                  <p className="font-semibold text-sm text-foreground">Щёлково, ул. Краснознаменская, 17Б</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 opacity-20">
              {[...Array(5)].map((_, i) => (
                <PawPrint key={i} className="h-5 w-5 text-primary" style={{ transform: `rotate(${i * 15 - 30}deg)` }} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="rounded-2xl bg-card border border-border p-7 md:p-9"
              style={{ boxShadow: "0 20px 60px -15px hsla(152, 45%, 38%, 0.15), 0 8px 24px -8px hsla(0, 0%, 0%, 0.08)" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Спасибо за заявку!</h3>
                    <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                      Мы получили вашу заявку и перезвоним в течение 15 минут. Ожидайте звонка!
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => { setSubmitted(false); setConsent(false); }}
                      className="gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Отправить ещё одну заявку
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">Оставить заявку</h3>
                    <p className="text-muted-foreground text-sm mb-6">Заполните форму и мы свяжемся с вами</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-1 block">Ваше имя</label>
                          <Input required maxLength={100} placeholder="Иван Иванов" className="bg-background" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-1 block">Телефон</label>
                          <Input required type="tel" maxLength={20} placeholder="+7 (___) ___-__-__" className="bg-background" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Питомец</label>
                        <Input maxLength={100} placeholder="Кот, собака, кролик…" className="bg-background" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Опишите проблему</label>
                        <Textarea maxLength={1000} placeholder="Расскажите, что беспокоит вашего питомца…" className="bg-background min-h-[100px] resize-none" />
                      </div>
                      <ConsentCheckbox id="request-consent" checked={consent} onCheckedChange={setConsent} />
                      <Button type="submit" size="lg" disabled={loading || !consent} className="w-full text-base font-semibold gap-2">
                        {loading ? (
                          <motion.span
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              className="inline-block"
                            >
                              <Send className="h-4 w-4" />
                            </motion.span>
                            Отправка…
                          </motion.span>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Отправить заявку
                          </>
                        )}
                      </Button>
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

export default RequestFormSection;
