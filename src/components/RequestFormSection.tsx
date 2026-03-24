import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Clock, MapPin, Heart, PawPrint } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const RequestFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Заявка отправлена!", description: "Мы перезвоним вам в ближайшее время." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="request-form" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-4">
              <Heart className="h-4 w-4" /> Запишитесь на приём
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Позаботьтесь о здоровье <span className="text-primary">вашего питомца</span> уже сегодня
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Оставьте заявку — мы перезвоним, ответим на вопросы и подберём удобное время для визита.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a href="tel:+74965627177" className="font-semibold text-foreground hover:text-primary transition-colors">
                    +7 (496) 562-71-77
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Время работы</p>
                  <p className="font-semibold text-foreground">Пн–Вс: 9:00 – 21:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-semibold text-foreground">Щёлково, ул. Краснознаменская, 17Б</p>
                </div>
              </div>
            </div>

            {/* Decorative paw prints */}
            <div className="mt-10 flex gap-3 opacity-20">
              {[...Array(5)].map((_, i) => (
                <PawPrint key={i} className="h-6 w-6 text-primary" style={{ transform: `rotate(${i * 15 - 30}deg)` }} />
              ))}
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="rounded-2xl bg-card border border-border p-8 md:p-10"
              style={{ boxShadow: "0 20px 60px -15px hsla(152, 45%, 38%, 0.15), 0 8px 24px -8px hsla(0, 0%, 0%, 0.08)" }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Оставить заявку</h3>
              <p className="text-muted-foreground text-sm mb-8">Заполните форму и мы свяжемся с вами</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя</label>
                    <Input
                      required
                      maxLength={100}
                      placeholder="Иван Иванов"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
                    <Input
                      required
                      type="tel"
                      maxLength={20}
                      placeholder="+7 (___) ___-__-__"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Питомец</label>
                  <Input
                    maxLength={100}
                    placeholder="Кот, собака, кролик…"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Опишите проблему</label>
                  <Textarea
                    maxLength={1000}
                    placeholder="Расскажите, что беспокоит вашего питомца…"
                    className="bg-background min-h-[110px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full text-base font-semibold gap-2"
                >
                  {loading ? "Отправка…" : (
                    <>
                      <Send className="h-4 w-4" />
                      Отправить заявку
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequestFormSection;
