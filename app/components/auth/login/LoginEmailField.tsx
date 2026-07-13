import { FaAt } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";

interface LoginEmailFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
}

export default function LoginEmailField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
}: LoginEmailFieldProps) {
  return (
    <>
      <IconInput
        id="email"
        name="email"
        type="email"
        label={label}
        placeholder={placeholder}
        icon={FaAt}
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
