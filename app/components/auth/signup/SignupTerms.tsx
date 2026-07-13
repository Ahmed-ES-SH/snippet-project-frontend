import { UseFormRegisterReturn } from "react-hook-form";
import Checkbox from "@/app/components/UI/Checkbox";

interface SignupTermsProps {
  label: React.ReactNode;
  termsLinkLabel: string;
  register: UseFormRegisterReturn;
}

export default function SignupTerms({ label, termsLinkLabel, register }: SignupTermsProps) {
  return (
    <div className="flex items-start gap-sm py-sm">
      <Checkbox
        id="terms"
        name={register.name}
        ref={register.ref}
        onChange={register.onChange}
        onBlur={register.onBlur}
        label={
          <>
            {label}{" "}
            <a
              className="text-solar-orange hover:underline"
              href="#"
              aria-disabled="true"
            >
              {termsLinkLabel}
            </a>
          </>
        }
      />
    </div>
  );
}
