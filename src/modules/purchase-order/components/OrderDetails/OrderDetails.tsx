import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "@/shared/components/WidgetHeader/WidgetHeader";
import InfoField from "@/shared/components/InfoField/InfoField";
import type { Address, PurchaseOrderContacts } from "../../types/purchaseOrder";

interface Props {
  addressLabel?: string;
  deliveryAddress: Address;
  contacts: PurchaseOrderContacts;
}

export default function OrderDetails({
  addressLabel,
  deliveryAddress,
  contacts,
}: Props) {
  return (
    <WidgetsBase>
      <WidgetHeader title="Details of the order" />
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 mb-2">Delivery address</p>
        {addressLabel && (
          <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm mb-2 font-medium">
            {addressLabel}
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 bg-gray-50 rounded-lg p-3">
          <InfoField label="Street" value={deliveryAddress.street} />
          <InfoField label="Number" value={deliveryAddress.number} />
          <InfoField label="Neighborhood" value={deliveryAddress.neighborhood} />
          <InfoField label="Complement" value={deliveryAddress.complement} />
          <InfoField label="City" value={deliveryAddress.city} />
          <InfoField label="State" value={deliveryAddress.state} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InfoField label="Email" value={contacts.email} />
        <InfoField label="Phone" value={contacts.phone} />
      </div>
    </WidgetsBase>
  );
}
