import { FaLock } from "react-icons/fa";
import { FieldError } from "react-hook-form";
import IconInput from "@/app/components/UI/IconInput";
import Link from "next/link";

interface LoginPasswordFieldProps {
  error?: FieldError;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  errorMessage?: string;
  forgotPasswordLabel: string;
}

export default function LoginPasswordField({
  error,
  value,
  onChange,
  label,
  placeholder,
  errorMessage,
  forgotPasswordLabel,
}: LoginPasswordFieldProps) {
  return (
    <div className="space-y-sm">
      <div className="flex justify-between items-center">
        <Link
          className="font-label-md w-fit ml-auto text-label-md text-solar-orange hover:underline uppercase transition-opacity"
          href="/forgot-password"
        >
          {forgotPasswordLabel}
        </Link>
      </div>
      <IconInput
        id="password"
        name="password"
        type="password"
        label={label}
        placeholder={placeholder}
        icon={FaLock}
        required
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
