import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

const ConsentCheckbox = ({ id, checked, onCheckedChange, className }: ConsentCheckboxProps) => (
  <div className={cn("flex items-start gap-2.5", className)}>
    <Checkbox
      id={id}
      checked={checked}
      onCheckedChange={(v) => onCheckedChange(v === true)}
      required
      className="mt-0.5 shrink-0"
    />
    <label htmlFor={id} className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none">
      Нажимая кнопку, я подтверждаю, что ознакомлен(а) и согласен(на) с{" "}
      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
        Политикой обработки персональных данных
      </a>{" "}
      и даю свое{" "}
      <a href="/consent" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
        согласие на обработку моих персональных данных
      </a>
    </label>
  </div>
);

export default ConsentCheckbox;
