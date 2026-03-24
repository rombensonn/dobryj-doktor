import { Heart, Phone, MapPin, Clock } from "lucide-react";

const VKIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.368 1.259 2.183 1.815.616.42 1.084.328 1.084.328l2.175-.03s1.14-.07.6-.964c-.045-.073-.32-.659-1.644-1.864-1.386-1.262-1.2-1.058.468-3.243.908-1.18 1.474-2.2 1.474-2.2s.2-.377-.128-.55c-.33-.174-1.544-.03-1.544-.03l-2.405.015s-.18-.024-.312.055c-.13.077-.214.258-.214.258s-.384 1.022-.896 1.89c-1.08 1.834-1.512 1.93-1.688 1.816-.41-.266-.307-1.07-.307-1.64 0-1.783.27-2.526-.527-2.718-.265-.064-.46-.106-1.137-.113-.868-.009-1.603.003-2.018.207-.276.136-.49.438-.36.455.16.02.522.098.714.359.248.337.24 1.09.24 1.09s.142 2.098-.332 2.358c-.326.178-.772-.186-1.73-1.853-.49-.854-.86-1.798-.86-1.798s-.072-.176-.2-.27c-.154-.114-.37-.15-.37-.15l-2.286.015s-.343.01-.47.159c-.112.133-.009.408-.009.408s1.807 4.228 3.853 6.357c1.878 1.953 4.012 1.824 4.012 1.824h.968z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-foreground pt-14 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 — About */}
        <div>
          <p className="font-display text-xl font-bold text-primary-foreground mb-3">Добрый Доктор</p>
          <p className="text-sm text-primary-foreground/60 mb-4 leading-relaxed">
            Ветеринарная клиника, лаборатория и аптека в&nbsp;г.&nbsp;Щёлково. Заботимся о здоровье ваших питомцев с&nbsp;любовью и&nbsp;профессионализмом.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://vk.com/dobriy_doktor_vet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <VKIcon />
            </a>
            <a
              href="https://wa.me/74960951777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Column 2 — Contacts */}
        <div>
          <p className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">Контакты</p>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div>
                <a href="tel:+74965627177" className="hover:text-primary transition-colors">+7 (496) 562-71-77</a>
                <p className="text-xs text-primary-foreground/40 mt-0.5">Администратор</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>г.&nbsp;Щёлково, ул.&nbsp;Краснознаменская,&nbsp;17Б</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>Ежедневно: 9:00 – 21:00</span>
            </li>
          </ul>
        </div>

        {/* Column 3 — Documents */}
        <div>
          <p className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">Документы</p>
          <ul className="space-y-2.5 text-sm text-primary-foreground/60">
            <li>
              <a href="/privacy-policy" className="hover:text-primary transition-colors">Политика обработки персональных данных</a>
            </li>
            <li>
              <a href="/consent" className="hover:text-primary transition-colors">Согласие на обработку персональных данных</a>
            </li>
          </ul>
        </div>

        {/* Column 4 — Map */}
        <div>
          <p className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">На карте</p>
          <div className="rounded-lg overflow-hidden border border-primary-foreground/10 h-40">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=38.0038%2C55.9165&z=16&pt=38.0038%2C55.9165%2Cpm2rdm&text=%D0%A9%D1%91%D0%BB%D0%BA%D0%BE%D0%B2%D0%BE%2C%20%D1%83%D0%BB.%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2C%2017%D0%91"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта — Добрый Доктор"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Legal info */}
      <div className="border-t border-primary-foreground/10 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-primary-foreground/30 leading-relaxed max-w-2xl">
            <p>ООО&nbsp;«Добрый Доктор» · ИНН&nbsp;5050141940 · ОГРН&nbsp;1195081009498</p>
            <p className="mt-1">Юридический адрес: 141100, Московская область, г.&nbsp;Щёлково, ул.&nbsp;Краснознаменская, д.&nbsp;17Б</p>
          </div>
          <p className="text-xs text-primary-foreground/30 flex items-center gap-1 shrink-0">
            Сделано с <Heart className="h-3 w-3 fill-accent text-accent" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
