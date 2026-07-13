interface SignupBrandHeaderProps {
  description: string;
}

export default function SignupBrandHeader({ description }: SignupBrandHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-xl">
      <div className="h-16 w-16 mb-md flex items-center justify-center text-solar-orange text-4xl font-bold font-code-md">
        &lt;/&gt;
      </div>
      <h1 className="font-headline-lg text-headline-lg text-solar-orange tracking-tighter uppercase font-bold">
        SnippetVault
      </h1>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-base">
        {description}
      </p>
    </div>
  );
}
