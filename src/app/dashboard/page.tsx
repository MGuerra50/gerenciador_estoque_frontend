import AreaGraph from "../components/AreaGraph/AreaGraph";
import BarGraph from "../components/BarGraph/BarGraph";
import CardValueAndGraph from "../components/CardValueAndGraph/CardValueAndGraph";
import LowStockTable from "../components/LowStockTable/LowStockTable";
import PendingCard from "../components/PendingCard/PendingCard";
import PizzaGraph from "../components/PizzaGraph/PizzaGraph";
import ValueCard from "../components/ValueCard/ValueCard";
import WidgetsBase from "../components/WidgetsBase/WidgetsBase";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-[30px]">
        <AreaGraph />
        <section>
          <div>
            <ValueCard title="Today’s sales" value="R$ 7.555,32" />
          </div>
          <div className="mt-[30px]">
            <ValueCard title="Weekly sales" value="R$ 7.555,32" />
          </div>
        </section>
      </div>
      <div className="flex gap-[30px]">
        <section className="w-[1000px] h-[100%]">
          <WidgetsBase>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "45% 2% 53%",
                height: "375px",
                paddingRight: "15px",
              }}
            >
              <PizzaGraph />
              <section className="h-ful flex items-center">
                <div className="border-l h-[80%] mx-4 border-gray-300" />
              </section>
              <BarGraph />
            </div>
          </WidgetsBase>
        </section>
        <section>
          <div>
            <ValueCard title="Today’s payments" value="R$ 7.555,32" />
          </div>
          <div className="mt-[30px]">
            <ValueCard title="Current month's profit" value="R$ 7.555,32" />
          </div>
        </section>
      </div>
      <div className="flex gap-[30px] w-full items-stretch">
        <section>
          <PendingCard title="Pending shipments" value="2" />
          <CardValueAndGraph
            title="Inventory value "
            value="R$ 100.429,01"
            width={400}
          />
        </section>
        <section className="flex-1 h-full">
          <LowStockTable height={463}/>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
