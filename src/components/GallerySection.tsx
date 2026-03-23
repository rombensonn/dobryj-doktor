import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Кот на приёме" },
  { src: g2, alt: "Щенок на осмотре" },
  { src: g3, alt: "Лаборатория" },
  { src: g4, alt: "Кролик у ветеринара" },
  { src: g5, alt: "Ветеринарная аптека" },
  { src: g6, alt: "Хирургия" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Галерея</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Наша клиника и пациенты</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-lg overflow-hidden aspect-square group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={640}
              height={640}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
