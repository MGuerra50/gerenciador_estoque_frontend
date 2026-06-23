import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";

interface ButtonWarningProps {
  text?: string;
  width?: number;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function ButtonWarning({
  text,
  width = 200,
  onClick,
  disabled,
  children,
}: ButtonWarningProps) {
  return (
    <ButtonPrincipal
      text={text}
      width={width}
      variant="warning"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonPrincipal>
  );
}
