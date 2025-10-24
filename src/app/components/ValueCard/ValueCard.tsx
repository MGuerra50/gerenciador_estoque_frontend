import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface props {
  title: string;
  value: string;
  width?: number;
}

const ValueCard = ({ title, value, width }: props) => {
  return (
    <>
      <div style={width ? { width: width + "px" } : { width: "400px" }}>
        <WidgetsBase>
          <div className="text-lg font-semibold">
            <h2 className="pl-[5px]">{title}</h2>
            <div className="flex justify-center items-center text-[30px] mt-[40px] mb-[40px]">
              <span>{value}</span>
            </div>
          </div>
        </WidgetsBase>
      </div>
    </>
  );
};

export default ValueCard;
