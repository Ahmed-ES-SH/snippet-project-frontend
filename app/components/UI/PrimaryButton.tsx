import { IconType } from "react-icons";

interface PrimaryButtonProps {
  label: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  type?: "submit" | "button";
  className?: string;
  loading?: boolean;
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function PrimaryButton({
  label,
  icon: Icon,
  iconPosition = "right",
  type = "submit",
  className = "",
  loading = false,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      disabled={loading}
      className={`w-full bg-solar-orange text-on-primary-fixed font-headline-md text-headline-md py-4 rounded-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm group disabled:opacity-70 disabled:pointer-events-none ${className}`}
    >
      {loading ? (
        <>
          <Spinner />
          <span className="uppercase">{label}</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          )}
          <span className="uppercase">{label}</span>
          {Icon && iconPosition === "right" && (
            <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
        </>
      )}
    </button>
  );
}
