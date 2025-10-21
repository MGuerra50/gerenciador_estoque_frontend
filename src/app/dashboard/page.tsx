import AreaGraph from "../components/AreaGraph/AreaGraph";
import PizzaGraph from "../components/PizzaGraph/PizzaGraph";
import ValueCard from "../components/ValueCard/ValueCard";
import WidgetsBase from "../components/WidgetsBase/WidgetsBase";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-[30px]">
        <AreaGraph />
        <section>
          <ValueCard title="Today’s sales" valeu="R$ 7.555,32" />
          <ValueCard title="Today’s sales" valeu="R$ 7.555,32" />
        </section>
      </div>
      <div className="flex gap-[30px]">
        <section className="w-[1000px]">
          <WidgetsBase>
            <PizzaGraph />
          </WidgetsBase>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
