interface FormFieldProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: "text" | "number" | "email" | "tel" | "date";
  placeholder?: string;
}

export default function FormField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: FormFieldProps) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:border-green-500"
      />
    </div>
  );
}

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function FormSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select...",
}: FormSelectProps) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:border-green-500"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
