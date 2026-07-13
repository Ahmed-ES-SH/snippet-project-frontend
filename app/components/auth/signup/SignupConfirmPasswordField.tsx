import { FaKey } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";

interface SignupConfirmPasswordFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
}

export default function SignupConfirmPasswordField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
}: SignupConfirmPasswordFieldProps) {
  return (
    <div className="space-y-sm">
      <IconInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label={label}
        placeholder={placeholder}
        icon={FaKey}
        required
        autoComplete="new-password"
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="text-error text-body-sm" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
