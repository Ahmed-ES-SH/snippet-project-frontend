import { FaKey } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";
import PasswordStrength from "./PasswordStrength";

interface SignupPasswordFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
  strengthLabel: string;
}

export default function SignupPasswordField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
  strengthLabel,
}: SignupPasswordFieldProps) {
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
        autoComplete="new-password"
        value={value}
        onChange={onChange}
      />
      <PasswordStrength password={value} strengthLabel={strengthLabel} />
      {error && (
        <p className="text-error text-body-sm" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
