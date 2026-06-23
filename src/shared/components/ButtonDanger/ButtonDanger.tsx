import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";

interface ButtonDangerProps {
  text?: string;
  width?: number;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function ButtonDanger({
  text,
  width = 200,
  onClick,
  disabled,
  children,
}: ButtonDangerProps) {
  return (
    <ButtonPrincipal
      text={text}
      width={width}
      variant="danger"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonPrincipal>
  );
}
