import Image from "next/image";

interface AuthBrandHeaderProps {
  description: string;
}

export default function AuthBrandHeader({ description }: AuthBrandHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-md">
      <div className="space-y-base">
        <Image
          src="/icon.png"
          alt="icon-logo"
          width={100}
          height={100}
          className="w-24 my-2 mx-auto"
        />
        <p className="font-body-md text-body-md text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}
