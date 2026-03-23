import { motion } from "framer-motion";
import { Stethoscope, Syringe, FlaskConical, Scissors, Heart, Microscope, ScanEye, Bone } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Терапия", desc: "Диагностика и лечение заболеваний любой сложности", price: "от 800 ₽" },
  { icon: Syringe, title: "Вакцинация", desc: "Полный спектр вакцин для кошек, собак, кроликов и хорьков", price: "от 500 ₽" },
  { icon: Heart, title: "Хирургия", desc: "Плановые и экстренные операции с анестезией и стационаром", price: "от 3 000 ₽" },
  { icon: FlaskConical, title: "Лаборатория", desc: "Анализы крови, мочи, соскобы, ПЦР и экспресс-тесты", price: "от 200 ₽" },
  { icon: Scissors, title: "Груминг", desc: "Стрижка, чистка ушей, обработка когтей и антицарапки", price: "от 350 ₽" },
  { icon: ScanEye, title: "УЗИ и Рентген", desc: "Ультразвуковая и рентгенологическая диагностика", price: "от 900 ₽" },
  { icon: Microscope, title: "Офтальмология", desc: "Лечение глаз, операции на веках и конъюнктиве", price: "от 1 000 ₽" },
  { icon: Bone, title: "Стоматология", desc: "Удаление зубного камня, лечение и удаление зубов", price: "от 100 ₽" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Наши услуги</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Полный спектр ветеринарной помощи</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Более 200 услуг для здоровья и комфорта вашего питомца — от профилактики до сложных операций
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all group"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
            <span className="text-sm font-bold text-primary">{s.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
