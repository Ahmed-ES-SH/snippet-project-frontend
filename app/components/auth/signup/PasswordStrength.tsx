interface PasswordStrengthProps {
  password: string;
  strengthLabel: string;
}

function getStrengthLabel(strength: number): string {
  if (strength < 25) return "Weak";
  if (strength < 50) return "Fair";
  if (strength < 75) return "Strong";
  return "Excellent";
}

function getStrengthColor(strength: number): string {
  if (strength < 25) return "bg-error";
  if (strength < 50) return "bg-warning";
  if (strength < 75) return "bg-solar-orange";
  return "bg-success";
}

export { getStrengthLabel, getStrengthColor };

export default function PasswordStrength({ password, strengthLabel }: PasswordStrengthProps) {
  if (password.length === 0) return null;

  const strength = Math.min(100, (password.length / 12) * 100);

  return (
    <div className="mt-sm">
      <div className="flex justify-between items-center mb-xs">
        <span className="font-label-md text-body-sm text-outline-variant uppercase">
          {strengthLabel}
        </span>
        <span className="font-code-md text-body-sm text-outline-variant">
          {getStrengthLabel(strength)}
        </span>
      </div>
      <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor(strength)} transition-[width] duration-500`}
          style={{ width: `${strength}%` }}
        />
      </div>
    </div>
  );
}
