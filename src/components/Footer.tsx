import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container text-center">
      <p className="font-display text-lg font-bold text-primary-foreground mb-2">Добрый Доктор</p>
      <p className="text-sm text-primary-foreground/50 mb-4">
        Ветеринарная клиника • Лаборатория • Аптека
      </p>
      <p className="text-xs text-primary-foreground/30 flex items-center justify-center gap-1">
        Сделано с <Heart className="h-3 w-3 fill-accent text-accent" /> для наших пациентов © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
