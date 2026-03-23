import { motion } from "framer-motion";
import { PawPrint, Users, CalendarCheck, Award } from "lucide-react";

const stats = [
  { icon: PawPrint, value: "15 000+", label: "Пациентов ежегодно" },
  { icon: Users, value: "15+", label: "Врачей-специалистов" },
  { icon: CalendarCheck, value: "10+", label: "Лет опыта работы" },
  { icon: Award, value: "5.0", label: "Рейтинг на Яндекс Картах" },
];

const StatsSection = () => (
  <section className="py-16 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/15 flex items-center justify-center mx-auto mb-4">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{s.value}</p>
            <p className="text-sm text-primary-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
