import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface props {
  title: string;
  valeu: string;
  width?: number;
}

const PendingCard = ({ title, valeu, width }: props) => {
  return (
    <>
      <div style={width ? { width: width + "px" } : { width: "400px" }}>
        <WidgetsBase>
          <div className="text-lg font-semibold">
            <h2 className="pl-[5px]">{title}</h2>
            <div className="flex justify-center items-center text-[30px] mt-[30px] mb-[30px]">
              <span className="text-[#FF2A2A]">{valeu}</span>
            </div>
            <div className="w-full flex justify-center mb-[10px]">
              <ButtonPrincipal text="See more" />
            </div>
          </div>
        </WidgetsBase>
      </div>
    </>
  );
};

export default PendingCard;
