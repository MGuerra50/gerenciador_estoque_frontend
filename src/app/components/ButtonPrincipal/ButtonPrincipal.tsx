interface props {
  text?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}
export default function ButtonPrincipal({ text, width, height, children }: props) {
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
