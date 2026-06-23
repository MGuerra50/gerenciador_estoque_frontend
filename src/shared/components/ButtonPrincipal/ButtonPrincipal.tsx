interface props {
  text?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "warning";
}

const variantClasses: Record<string, string> = {
  primary: "bg-[#22C55E] hover:bg-[#16A34A]",
  secondary: "bg-gray-400 hover:bg-gray-500",
  danger: "bg-[#EF4444] hover:bg-[#DC2626]",
  warning: "bg-[#F97316] hover:bg-[#EA580C]",
};

export default function ButtonPrincipal({
  text,
  width,
  height,
  children,
  onClick,
  disabled,
  type = "button",
  variant = "primary",
}: props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={
        width || height
          ? { width: width ? width + "px" : undefined, height: height ? height + "px" : undefined }
          : { width: "200px" }
      }
      className={`${variantClasses[variant]} rounded-lg text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
    >
      {text ? text : children}
    </button>
  );
}
