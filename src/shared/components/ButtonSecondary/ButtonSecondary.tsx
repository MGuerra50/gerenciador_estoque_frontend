import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";

interface ButtonSecondaryProps {
  text: string;
  width?: number;
  onClick?: () => void;
  disabled?: boolean;
}

export default function ButtonSecondary({
  text,
  width = 160,
  onClick,
  disabled,
}: ButtonSecondaryProps) {
  return (
    <ButtonPrincipal
      text={text}
      width={width}
      variant="secondary"
      onClick={onClick}
      disabled={disabled}
    />
  );
}
