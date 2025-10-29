import Actions from "../components/Actions/Actions";
import FilterPurchaseOrder from "../components/FilterPurchaseOrder/FilterPurchaseOrder";
import OrderAwaitingApproval from "../components/OrderAwaitingApproval/OrderAwaitingApproval";
import PendingCard from "../components/PendingCard/PendingCard";
import ValueCard from "../components/ValueCard/ValueCard";

const PurchaseOrder = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ValueCard title="Today’s orders" value="R$ 7.555,32" />
        <ValueCard title="Today’s orders" value="R$ 7.555,32" />
        <ValueCard title="Today’s orders" value="R$ 7.555,32" />
      </section>
      <section className="flex flex-1 gap-[30px]">
        <OrderAwaitingApproval width={960} />
        <div style={{ rowGap: "20px" }}>
          <PendingCard title="Pending issues" value="2" />
          <Actions />
        </div>
      </section>
      <section>
        <FilterPurchaseOrder />
      </section>
    </>
  );
};

export default PurchaseOrder;
