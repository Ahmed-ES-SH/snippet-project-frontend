interface CheckboxProps {
  id: string;
  label: string;
  className?: string;
}

export default function Checkbox({ id, label, className = "" }: CheckboxProps) {
  return (
    <div className={`flex items-center gap-sm ${className}`}>
      <input
        className="w-4 h-4 bg-surface-container-low border-outline-variant text-solar-orange rounded-sm focus:ring-0"
        id={id}
        type="checkbox"
      />
      <label
        className="font-label-md text-label-md uppercase text-on-surface-variant cursor-pointer select-none"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
