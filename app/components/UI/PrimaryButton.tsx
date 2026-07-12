import { IconType } from "react-icons";

interface PrimaryButtonProps {
  label: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  type?: "submit" | "button";
  className?: string;
}

export default function PrimaryButton({
  label,
  icon: Icon,
  iconPosition = "right",
  type = "submit",
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`w-full bg-solar-orange text-on-primary-fixed font-headline-md text-headline-md py-4 rounded-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm group ${className}`}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      )}
      <span className="uppercase">{label}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}
