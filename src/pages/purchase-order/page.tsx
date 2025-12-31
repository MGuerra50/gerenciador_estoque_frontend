import Actions from "../../modules/purchase-order/components/Actions/Actions";
import OrderAwaitingApproval from "../../modules/purchase-order/components/OrderAwaitingApproval/OrderAwaitingApproval";
import PendingCard from "../../shared/components/PendingCard/PendingCard";
import ValueCard from "../../shared/components/ValueCard/ValueCard";

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
        <div style={{rowGap:"20px"}}>
          <PendingCard title="Pending issues" value="2" />
          <Actions />
        </div>
      </section>
    </>
  );
};

export default PurchaseOrder;
