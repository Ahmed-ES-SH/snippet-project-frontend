interface DividerProps {
  label: string;
  className?: string;
}

export default function Divider({ label, className = "" }: DividerProps) {
  return (
    <div className={`relative flex items-center py-md ${className}`}>
      <div className="flex-grow border-t border-outline-variant" />
      <span className="flex-shrink mx-4 font-label-md text-label-md text-on-surface-variant/40 uppercase">
        {label}
      </span>
      <div className="flex-grow border-t border-outline-variant" />
    </div>
  );
}
