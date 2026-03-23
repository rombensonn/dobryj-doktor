import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, HeartHandshake, Microscope } from "lucide-react";

const reasons = [
  { icon: Award, title: "Хорошее место 2026", desc: "Награда Яндекс Карт за лучшее место по отзывам пользователей" },
  { icon: Users, title: "15+ специалистов", desc: "Терапевты, хирурги, офтальмологи, онкологи, дерматологи и другие" },
  { icon: Clock, title: "Работаем ежедневно", desc: "Удобный график работы без выходных, выезд на дом" },
  { icon: Shield, title: "Рейтинг 5.0", desc: "692 отзыва довольных клиентов — стабильная пятёрка" },
  { icon: HeartHandshake, title: "Индивидуальный подход", desc: "Каждый пациент получает персональный план лечения" },
  { icon: Microscope, title: "Своя лаборатория", desc: "Результаты анализов в кратчайшие сроки прямо в клинике" },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Почему мы</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Доверие, подтверждённое результатами</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <r.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
