import { FaTerminal } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";

interface SignupUsernameFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
}

export default function SignupUsernameField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
}: SignupUsernameFieldProps) {
  return (
    <div className="space-y-sm">
      <IconInput
        id="username"
        name="username"
        type="text"
        label={label}
        placeholder={placeholder}
        icon={FaTerminal}
        required
        autoComplete="username"
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
