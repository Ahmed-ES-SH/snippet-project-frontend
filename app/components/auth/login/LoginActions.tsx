import { FaArrowRight } from "react-icons/fa";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import Checkbox from "@/app/components/UI/Checkbox";

interface LoginActionsProps {
  isSubmitting: boolean;
  persistLabel: string;
  signInLabel: string;
  signingInLabel: string;
  persistRegister: UseFormRegisterReturn;
  persistError?: FieldError;
}

export default function LoginActions({
  isSubmitting,
  persistLabel,
  signInLabel,
  signingInLabel,
  persistRegister,
}: LoginActionsProps) {
  return (
    <>
      <Checkbox
        id="persist"
        label={persistLabel}
        name={persistRegister.name}
        ref={persistRegister.ref}
        onChange={persistRegister.onChange}
        onBlur={persistRegister.onBlur}
      />
      <PrimaryButton
        label={isSubmitting ? signingInLabel : signInLabel}
        icon={FaArrowRight}
        iconPosition="right"
        type="submit"
        loading={isSubmitting}
      />
    </>
  );
}
