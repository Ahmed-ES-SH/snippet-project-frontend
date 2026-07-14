import { FaKey } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";

interface ResetPasswordNewFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
  strengthLabel: string;
}

export default function ResetPasswordNewField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
  strengthLabel,
}: ResetPasswordNewFieldProps) {
  const strength = Math.min(100, (value.length / 12) * 100);
  const getStrengthColor = () => {
    if (strength < 33) return "bg-error";
    if (strength < 66) return "bg-warning";
    return "bg-success";
  };
  const getStrengthLabel = () => {
    if (strength < 33) return "Weak";
    if (strength < 66) return "Fair";
    return "Strong";
  };

  return (
    <div className="space-y-sm">
      <IconInput
        id="password"
        name="password"
        type="password"
        label={label}
        placeholder={placeholder}
        icon={FaKey}
        required
        value={value}
        onChange={onChange}
      />
      {value.length > 0 && (
        <div className="space-y-xs">
          <div className="flex justify-between items-center">
            <span className="font-label-md text-label-md uppercase text-on-surface-variant">
              {strengthLabel}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {getStrengthLabel()}
            </span>
          </div>
          <div className="h-1 bg-surface-container rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${getStrengthColor()}`}
              style={{ width: `${strength}%` }}
            />
          </div>
        </div>
      )}
      {error && (
        <p className="text-error text-body-sm" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
