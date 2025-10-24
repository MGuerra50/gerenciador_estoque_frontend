interface props {
  text?: string;
  children?: React.ReactNode;
  width?: number;
  height?: number;
}
export default function ButtonPrincipal({
  text,
  width,
  height,
  children,
}: props) {
  return (
    <>
      <button
        style={
          width || height
            ? { width: width + "px", height: height + "px" }
            : { width: "200px" }
        }
        className="bg-[#22C55E] rounded-lg text-white hover:cursor-pointer"
      >
        {text ? text : children}
      </button>
    </>
  );
}
