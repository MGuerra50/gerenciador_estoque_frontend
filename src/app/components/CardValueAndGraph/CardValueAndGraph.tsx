import LineGraph from "../LineGraph/LineGraph";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface props {
  title: string;
  value: string;
  width?: number;
}

export default function CardValueAndGraph({ title, value, width }: props) {
  return (
    <>
      <div style={width ? { width: width + "px", marginTop:"30px" } : { width: "auto", marginTop:"30px" }}>
        <WidgetsBase>
          <div className="text-lg font-semibold">
            <h2 className="pl-[5px]">{title}</h2>
            <div className="flex justify-center items-center text-[30px] mt-[20px] mb-[20px]">
              <span>{value}</span>
            </div>
          </div>
          <section className="w-[400px]">
            <LineGraph height={120} titleActivo={false} width={350} />
          </section>
        </WidgetsBase>
      </div>
    </>
  );
}
