import { motion } from "framer-motion";

const specialists = [
  { role: "Терапевт", name: "Диагностика, профилактика, лечение" },
  { role: "Хирург", name: "Плановые и экстренные операции" },
  { role: "Офтальмолог", name: "Заболевания глаз, операции на веках" },
  { role: "Дерматолог", name: "Кожные заболевания, аллергии" },
  { role: "Онколог", name: "Диагностика и лечение новообразований" },
  { role: "Стоматолог", name: "Чистка, удаление, санация" },
  { role: "Анестезиолог", name: "Наркоз и контроль состояния" },
  { role: "Реаниматолог", name: "Экстренная помощь и интенсивная терапия" },
  { role: "Гинеколог", name: "Репродуктивное здоровье" },
  { role: "УЗИ-диагност", name: "Ультразвуковые исследования" },
  { role: "Рентгенолог", name: "Рентгенологическая диагностика" },
  { role: "Ратолог", name: "Специалист по грызунам и кроликам" },
];

const TeamSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Наша команда</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Специалисты клиники</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Более 15 врачей узкого профиля с многолетним опытом работы с животными всех видов
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialists.map((s, i) => (
          <motion.div
            key={s.role}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="bg-card rounded-lg p-5 border border-border text-center hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="font-display text-lg font-bold text-primary">
                {s.role.charAt(0)}
              </span>
            </div>
            <h3 className="font-display text-sm font-bold text-card-foreground mb-1">{s.role}</h3>
            <p className="text-xs text-muted-foreground">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
