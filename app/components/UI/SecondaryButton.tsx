import { IconType } from "react-icons";

interface SecondaryButtonProps {
  label: string;
  icon: IconType;
  type?: "submit" | "button";
  className?: string;
}

export default function SecondaryButton({
  label,
  icon: Icon,
  type = "button",
  className = "",
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`w-full border border-outline-variant text-on-surface font-label-md text-label-md py-3 rounded-sm flex items-center justify-center gap-md hover:bg-surface-container-high transition-colors active:scale-[0.99] ${className}`}
    >
      <Icon className="w-5 h-5" />
      <span className="uppercase">{label}</span>
    </button>
  );
}
