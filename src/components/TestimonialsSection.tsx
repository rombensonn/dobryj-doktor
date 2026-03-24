import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Екатерина К.",
    date: "Октябрь 2025",
    text: "В клинику уже обращались ранее и с разными питомцами. Лет 10 назад вытащили с того света моего любимого цвергшнауцера, в молодости чуть не пал подхватив энцефалитного клеща. Огромная благодарность всей команде!",
    rating: 5,
  },
  {
    name: "Ольга Меньшина",
    date: "Март 2026",
    text: "Нашей кошечке Стеше делали операцию по удалению опухоли. Я долго искала, читала отзывы и выбрала ветеринарную клинику «Добрый Доктор». Результат превзошёл все ожидания — кошка полностью восстановилась!",
    rating: 5,
  },
  {
    name: "Надежда Соколова",
    date: "Февраль 2026",
    text: "Хочу выразить огромную благодарность всей команде ветеринарной клиники! Обращались с нашей любимой кошечкой Лапой, и остались под самым приятным впечатлением. Внимательные врачи, чистота и забота.",
    rating: 5,
  },
  {
    name: "Алексей Д.",
    date: "Январь 2026",
    text: "Привозили собаку на УЗИ и анализы. Всё сделали быстро, результаты отдали в тот же день. Врач подробно всё объяснил и назначил лечение. Цены адекватные, персонал вежливый.",
    rating: 5,
  },
  {
    name: "Марина В.",
    date: "Декабрь 2025",
    text: "Кастрировали кота — всё прошло отлично. Врачи позвонили после операции, рассказали, как ухаживать. Кот через два дня уже бегал как ни в чём не бывало. Рекомендую!",
    rating: 5,
  },
  {
    name: "Ирина П.",
    date: "Ноябрь 2025",
    text: "Вызывали врача на дом для вакцинации кролика. Приехал вовремя, всё сделал аккуратно, кролик даже не испугался. Очень удобный сервис, особенно для тех, кому сложно возить питомца.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Отзывы</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Что говорят наши клиенты
        </h2>
        <p className="text-muted-foreground mt-4">692 отзыва с оценкой 5.0 на Яндекс Картах</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-lg p-6 border border-border relative"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Quote className="h-8 w-8 text-primary/15 absolute top-4 right-4" />
            <div className="flex mb-3">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">{r.text}</p>
            <div className="border-t border-border pt-3">
              <p className="text-sm font-semibold text-card-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
