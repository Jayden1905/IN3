import { cn } from "@/utils";
import { Button } from "./button";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function MyButton({ label, icon, onClick, className }: Props) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "btn-shadow bg-dark flex items-center gap-3 rounded px-5 py-4 text-xl tracking-wide text-white transition-all duration-150 ease-in-out active:translate-y-1",
        className
      )}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {label && <span>{label}</span>}
    </Button>
  );
}
