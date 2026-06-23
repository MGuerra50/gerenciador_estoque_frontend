import type { PendingIssue } from "../types/purchaseOrder";

export const mockPendingIssues: PendingIssue[] = [
  {
    id: 975,
    orderCode: 975,
    label: "975 - Supplier",
    status: "Under evaluation",
    dateOfIssue: "10/08/2023",
    supplierObservation:
      "We are currently experiencing stock shortages for the requested items. We can offer alternative products with similar specifications. Please let us know if you would like to proceed with the alternatives or wait for restocking.",
  },
  {
    id: 103,
    orderCode: 103,
    label: "103B - Business",
    status: "Under evaluation",
    dateOfIssue: "05/08/2023",
    supplierObservation:
      "Delivery timeline may be extended by 5 business days due to logistics constraints in the region.",
  },
  {
    id: 220,
    orderCode: 220,
    label: "220 - General",
    status: "Under evaluation",
    dateOfIssue: "01/08/2023",
    supplierObservation:
      "Price adjustment required for 2 items due to recent market changes. Updated quote attached.",
  },
  {
    id: 743,
    orderCode: 743,
    label: "743 - Supplier",
    status: "Under evaluation",
    dateOfIssue: "28/07/2023",
    supplierObservation:
      "Partial shipment available. Remaining items expected within 15 days.",
  },
];
