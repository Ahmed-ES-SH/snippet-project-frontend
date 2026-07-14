import { FaKey } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";

interface ResetPasswordConfirmFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
}

export default function ResetPasswordConfirmField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
}: ResetPasswordConfirmFieldProps) {
  return (
    <>
      <IconInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label={label}
        placeholder={placeholder}
        icon={FaKey}
        required
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="text-error text-body-sm" role="alert">
          {errorMessage}
        </p>
      )}
    </>
  );
}
