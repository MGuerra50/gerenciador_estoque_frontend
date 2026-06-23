interface InfoFieldProps {
  label: string;
  value: string;
}

export default function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">{value}</div>
    </div>
  );
}
