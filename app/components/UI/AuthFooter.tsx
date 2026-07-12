interface AuthFooterLink {
  label: string;
  href: string;
}

interface AuthFooterProps {
  links: AuthFooterLink[];
  className?: string;
}

export default function AuthFooter({ links, className = "" }: AuthFooterProps) {
  return (
    <div className={`flex justify-center gap-xl pt-lg ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          className="font-label-md text-label-md text-on-surface-variant/60 hover:text-solar-orange transition-colors uppercase"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
