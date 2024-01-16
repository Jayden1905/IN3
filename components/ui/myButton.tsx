"use client";
import { cn } from "@/utils";
import { Button } from "./button";
import { useRouter } from "next/navigation";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
};

export default function MyButton({ label, icon, className, href }: Props) {
  const router = useRouter();

  function goToLink() {
    href && router.push(href);
  }

  return (
    <Button
      onClick={() => goToLink()}
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
