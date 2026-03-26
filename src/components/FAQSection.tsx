import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Какие виды животных вы принимаете?", a: "Мы принимаем кошек, собак, кроликов, хорьков, птиц и грызунов. Для каждого вида — свои специалисты и оборудование." },
  { q: "Нужна ли предварительная запись?", a: "Рекомендуем записаться заранее по телефону +7 (496) 562-71-77, чтобы вас принял нужный специалист без ожидания. Экстренный приём — без записи." },
  { q: "Есть ли у вас стационар?", a: "Да, у нас есть дневной стационар с постоянным наблюдением, оксигенотерапией и инфузионной терапией." },
  { q: "Сколько стоит первичный приём?", a: "Первичный приём терапевта — 800 ₽, приём врача-специалиста — 1 500 ₽. Повторный приём — со скидкой 50%." },
  { q: "Выезжаете ли вы на дом?", a: "Да, выезд по Щёлково — 1 200 ₽, за пределы города — от 1 400 ₽ в зависимости от расстояния." },
  { q: "Можно ли сделать анализы в тот же день?", a: "Многие экспресс-анализы (глюкоза, мазки, отодектоз) делаются сразу на приёме. Более сложные исследования — в течение 1-3 дней." },
];

const FAQSection = () => (
  <section id="faq" className="relative py-20 md:py-28 overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 animate-faq-gradient"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.12), hsl(var(--secondary)), hsl(var(--primary) / 0.06), hsl(var(--accent) / 0.1))",
          backgroundSize: "400% 400%",
        }}
      />
      {/* Decorative blurred circles */}
      <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-faq-float" />
      <div className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-faq-float-reverse" />
    </div>

    <div className="container max-w-3xl relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Частые вопросы</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Ответы на самые популярные вопросы наших клиентов</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem value={`faq-${i}`} className="bg-card/80 backdrop-blur-sm rounded-xl border border-border/60 px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-card-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
