import AreaGraph from "../components/AreaGraph/AreaGraph";
import BarGraph from "../components/BarGraph/BarGraph";
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
            <ValueCard title="Today’s sales" valeu="R$ 7.555,32" />
          </div>
          <div className="mt-[30px]">
            <ValueCard title="Weekly sales" valeu="R$ 7.555,32" />
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
            <ValueCard title="Today’s payments" valeu="R$ 7.555,32" />
          </div>
          <div className="mt-[30px]">
            <ValueCard title="Current month's profit" valeu="R$ 7.555,32" />
          </div>
        </section>
      </div>
      <div>
        <PendingCard title="Pending shipments" valeu="2"/>
      </div>
    </>
  );
};

export default Dashboard;
