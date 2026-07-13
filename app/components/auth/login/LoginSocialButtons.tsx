import { FaGithub, FaGoogle } from "react-icons/fa";
import Divider from "@/app/components/UI/Divider";
import SecondaryButton from "@/app/components/UI/SecondaryButton";
import Link from "next/link";
import { AUTH_API } from "@/app/constants/auth.api";

interface LoginSocialButtonsProps {
  dividerLabel: string;
  githubLabel: string;
  googleLabel: string;
}

export default function LoginSocialButtons({
  dividerLabel,
  githubLabel,
  googleLabel,
}: LoginSocialButtonsProps) {
  return (
    <>
      <Divider label={dividerLabel} />
      <div className="flex flex-col gap-4">
        <Link href={process.env.NEXT_PUBLIC_API_BASE_URL + AUTH_API.GITHUB}>
          <SecondaryButton label={githubLabel} icon={FaGithub} />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_API_BASE_URL + AUTH_API.GOOGLE}>
          <SecondaryButton label={googleLabel} icon={FaGoogle} />
        </Link>
      </div>
    </>
  );
}
