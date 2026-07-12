import { IconType } from "react-icons";

interface IconInputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder: string;
  icon: IconType;
  required?: boolean;
  className?: string;
}

export default function IconInput({
  id,
  name,
  type = "text",
  label,
  placeholder,
  icon: Icon,
  required = false,
  className = "",
}: IconInputProps) {
  return (
    <div className={`space-y-sm ${className}`}>
      <label
        className="font-label-md text-label-md uppercase block text-on-surface-variant"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-icon-input">
          <Icon className="w-5 h-5" />
        </div>
        <input
          className="w-full bg-surface-container-low border border-outline-variant rounded-sm py-3 pl-11 pr-md text-on-surface font-body-md focus:ring-0 focus:border-solar-orange focus:outline-none transition-colors"
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      </div>
    </div>
  );
}
