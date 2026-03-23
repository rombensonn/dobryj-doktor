import { motion } from "framer-motion";
import { Check } from "lucide-react";

const categories = [
  {
    title: "Приём",
    items: [
      { name: "Первичный приём терапевта", price: "800 ₽" },
      { name: "Повторный приём терапевта", price: "400 ₽" },
      { name: "Приём врача-специалиста", price: "1 500 ₽" },
      { name: "Консультация по анализам", price: "400 ₽" },
      { name: "Выезд врача на дом", price: "от 1 200 ₽" },
    ],
  },
  {
    title: "Вакцинация",
    items: [
      { name: "Мультикан-6 (собаки)", price: "1 200 ₽" },
      { name: "Мультикан-8 + бешенство", price: "2 000 ₽" },
      { name: "Мультифел-4 (кошки)", price: "1 200 ₽" },
      { name: "Биофел + бешенство (Чехия)", price: "3 000 ₽" },
      { name: "Вакцинация кроликов", price: "500 ₽" },
    ],
  },
  {
    title: "Кастрация / Стерилизация",
    items: [
      { name: "Кастрация кота до 5 кг", price: "3 000 ₽" },
      { name: "Стерилизация кошки до 5 кг", price: "5 000 ₽" },
      { name: "Кастрация кобеля до 5 кг", price: "5 500 ₽" },
      { name: "Стерилизация суки до 5 кг", price: "7 000 ₽" },
      { name: "Кастрация кролика / хорька", price: "4 000 ₽" },
    ],
  },
  {
    title: "Диагностика",
    items: [
      { name: "УЗИ одной системы органов", price: "1 000 ₽" },
      { name: "Обзорное УЗИ брюшной полости", price: "2 000 ₽" },
      { name: "Рентген (одна проекция)", price: "900 ₽" },
      { name: "Анализ крови (мазок)", price: "500 ₽" },
      { name: "Чипирование", price: "1 200 ₽" },
    ],
  },
];

const PricingSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Цены</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Прозрачные цены на услуги</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Полная стоимость указана без скрытых доплат. Точную цену уточняйте при записи.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-lg border border-border overflow-hidden"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="px-6 py-4 border-b border-border bg-primary/5">
              <h3 className="font-display text-lg font-bold text-card-foreground">{cat.title}</h3>
            </div>
            <ul className="divide-y divide-border">
              {cat.items.map((item) => (
                <li key={item.name} className="px-6 py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm text-card-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item.name}
                  </span>
                  <span className="text-sm font-bold text-primary whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
