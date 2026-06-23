import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "@/shared/components/WidgetHeader/WidgetHeader";
import InfoField from "@/shared/components/InfoField/InfoField";

interface Props {
  project: string;
  company: string;
  paymentConditions: string;
  deliveryConditions: string;
}

export default function OrderCharacteristics({
  project,
  company,
  paymentConditions,
  deliveryConditions,
}: Props) {
  return (
    <WidgetsBase>
      <WidgetHeader title="Characteristics of the order" />
      <InfoField label="Project" value={project} />
      <InfoField label="Company" value={company} />
      <InfoField label="Payment conditions" value={paymentConditions} />
      <InfoField label="Delivery conditions" value={deliveryConditions} />
    </WidgetsBase>
  );
}
