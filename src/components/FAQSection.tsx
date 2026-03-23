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
  <section id="faq" className="py-20 md:py-28 bg-secondary">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Частые вопросы</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-card-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
