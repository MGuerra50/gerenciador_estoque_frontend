import type { PurchaseOrderDetail } from "../types/purchaseOrder";
import type { PurchaseOrderProduct } from "../types/purchaseOrderProduct";

const defaultProducts: PurchaseOrderProduct[] = [
  {
    id: "1",
    sku: "SKU-001",
    productName: "Mouse Gamer Logitech",
    costPrice: 10.5,
    quantity: 100,
    model: "G502",
    version: "v2",
    color: "Black",
    lineTotal: 1050,
  },
  {
    id: "2",
    sku: "SKU-002",
    productName: "Mouse Gamer Logitech",
    costPrice: 10.5,
    quantity: 100,
    model: "G502",
    version: "v2",
    color: "Blue",
    lineTotal: 1050,
  },
];

const defaultAddress = {
  street: "Av. Paulista",
  number: "1000",
  neighborhood: "Bela Vista",
  complement: "Floor 10",
  city: "São Paulo",
  state: "SP",
};

export const mockOrderDetails: Record<number, PurchaseOrderDetail> = {
  10: {
    id: 10,
    orderCode: 10,
    supplier: "Technology supplier",
    status: "pending_approval",
    dateOfIssue: "10/09/2024",
    totalValue: 500431,
    project: "Tech expansion",
    company: "High technology .tech",
    paymentConditions: "P1MAD-CI",
    deliveryConditions: "DMP1M-ASA",
    deliveryAddress: defaultAddress,
    addressLabel: "01 - Address - High technology .tech",
    contacts: {
      email: "HighTechnology@tech.com",
      phone: "(99) 9 9999-9999",
    },
    products: defaultProducts,
    taxes: { ipiIcms: 7555.32, subtotal: 17309.16, totalNet: 128841.55 },
    supplierObservation:
      "We are currently experiencing stock shortages for the requested items.",
  },
  9: {
    id: 9,
    orderCode: 9,
    supplier: "Electronics supplier",
    status: "pending_approval",
    dateOfIssue: "28/07/2024",
    totalValue: 129743.9,
    project: "Tech expansion",
    company: "High technology .tech",
    paymentConditions: "P1MAD-CI",
    deliveryConditions: "DMP1M-ASA",
    deliveryAddress: defaultAddress,
    addressLabel: "01 - Address - High technology .tech",
    contacts: {
      email: "HighTechnology@tech.com",
      phone: "(99) 9 9999-9999",
    },
    products: defaultProducts,
    taxes: { ipiIcms: 7555.32, subtotal: 17309.16, totalNet: 128841.55 },
  },
  975: {
    id: 975,
    orderCode: 975,
    supplier: "Supplier",
    status: "pending_approval",
    dateOfIssue: "10/08/2023",
    totalValue: 250000,
    project: "Tech expansion",
    company: "High technology .tech",
    paymentConditions: "P1MAD-CI",
    deliveryConditions: "DMP1M-ASA",
    deliveryAddress: defaultAddress,
    contacts: {
      email: "HighTechnology@tech.com",
      phone: "(99) 9 9999-9999",
    },
    products: defaultProducts,
    taxes: { ipiIcms: 5000, subtotal: 12000, totalNet: 250000 },
    supplierObservation:
      "We are currently experiencing stock shortages for the requested items. We can offer alternative products.",
  },
};

export function getMockOrderDetail(id: number): PurchaseOrderDetail {
  if (mockOrderDetails[id]) {
    return { ...mockOrderDetails[id] };
  }
  return {
    id,
    orderCode: id,
    supplier: "Technology supplier",
    status: "pending_approval",
    dateOfIssue: "01/01/2024",
    totalValue: 128841.55,
    project: "Tech expansion",
    company: "High technology .tech",
    paymentConditions: "P1MAD-CI",
    deliveryConditions: "DMP1M-ASA",
    deliveryAddress: defaultAddress,
    addressLabel: "01 - Address - High technology .tech",
    contacts: {
      email: "HighTechnology@tech.com",
      phone: "(99) 9 9999-9999",
    },
    products: defaultProducts,
    taxes: { ipiIcms: 7555.32, subtotal: 17309.16, totalNet: 128841.55 },
  };
}

export const mockProjects = ["Tech expansion", "Office renovation", "Warehouse upgrade"];
export const mockCompanies = ["High technology .tech", "Business Corp", "General Ltd"];
export const mockPaymentConditions = ["P1MAD-CI", "P30D-CI", "P60D-CI"];
export const mockDeliveryConditions = ["DMP1M-ASA", "DMP2M-ASA", "FOB"];
export const mockAddresses = [
  {
    label: "01 - Address - High technology .tech",
    address: defaultAddress,
  },
  {
    label: "02 - Address - Business Corp",
    address: {
      street: "Rua das Flores",
      number: "200",
      neighborhood: "Centro",
      complement: "Sala 5",
      city: "Rio de Janeiro",
      state: "RJ",
    },
  },
];
