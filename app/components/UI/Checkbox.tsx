import { forwardRef, ReactNode } from "react";

interface CheckboxProps {
  id: string;
  label: ReactNode;
  className?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, className = "", name, checked, onChange, onBlur }, ref) => {
    return (
      <div className={`flex items-center gap-sm ${className}`}>
        <input
          ref={ref}
          className="w-4 h-4 mt-0.5 bg-surface-container-low border-outline-variant text-solar-orange rounded-sm focus:ring-0 focus:outline-2 focus:outline-solar-orange focus:outline-offset-2"
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          className="font-label-md text-label-md uppercase text-on-surface-variant cursor-pointer select-none min-h-[44px] flex items-center"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
