"use client";

import { useEffect, useState } from "react";
import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "@/shared/components/WidgetHeader/WidgetHeader";
import FormField, { FormSelect } from "@/shared/components/FormField/FormField";
import { getFormOptions } from "../../services/purchaseOrderService";
import type { Address } from "../../types/purchaseOrder";

export interface CharacteristicsFormData {
  project: string;
  company: string;
  paymentConditions: string;
  deliveryConditions: string;
}

interface Props {
  data: CharacteristicsFormData;
  onChange: (data: CharacteristicsFormData) => void;
}

export default function OrderCharacteristicsForm({ data, onChange }: Props) {
  const [options, setOptions] = useState({
    projects: [] as string[],
    companies: [] as string[],
    paymentConditions: [] as string[],
    deliveryConditions: [] as string[],
  });

  useEffect(() => {
    getFormOptions().then((opts) => setOptions(opts));
  }, []);

  const update = (partial: Partial<CharacteristicsFormData>) => {
    onChange({ ...data, ...partial });
  };

  return (
    <WidgetsBase>
      <WidgetHeader title="Characteristics of the order" />
      <FormSelect
        label="Project"
        value={data.project}
        onChange={(v) => update({ project: v })}
        options={options.projects.map((p) => ({ value: p, label: p }))}
        placeholder="Select project"
      />
      <FormSelect
        label="Company"
        value={data.company}
        onChange={(v) => update({ company: v })}
        options={options.companies.map((c) => ({ value: c, label: c }))}
        placeholder="Select company"
      />
      <FormSelect
        label="Payment conditions"
        value={data.paymentConditions}
        onChange={(v) => update({ paymentConditions: v })}
        options={options.paymentConditions.map((p) => ({ value: p, label: p }))}
        placeholder="Select payment conditions"
      />
      <FormSelect
        label="Delivery conditions"
        value={data.deliveryConditions}
        onChange={(v) => update({ deliveryConditions: v })}
        options={options.deliveryConditions.map((d) => ({ value: d, label: d }))}
        placeholder="Select delivery conditions"
      />
    </WidgetsBase>
  );
}

export interface DetailsFormData {
  addressLabel: string;
  deliveryAddress: Address;
  email: string;
  phone: string;
}

interface DetailsProps {
  data: DetailsFormData;
  onChange: (data: DetailsFormData) => void;
}

export function OrderDetailsForm({ data, onChange }: DetailsProps) {
  const [addresses, setAddresses] = useState<
    { label: string; address: Address }[]
  >([]);

  useEffect(() => {
    getFormOptions().then((opts) => setAddresses(opts.addresses));
  }, []);

  const update = (partial: Partial<DetailsFormData>) => {
    onChange({ ...data, ...partial });
  };

  const updateAddress = (partial: Partial<Address>) => {
    onChange({
      ...data,
      deliveryAddress: { ...data.deliveryAddress, ...partial },
    });
  };

  const handleAddressSelect = (label: string) => {
    const found = addresses.find((a) => a.label === label);
    if (found) {
      onChange({
        ...data,
        addressLabel: found.label,
        deliveryAddress: found.address,
      });
    }
  };

  return (
    <WidgetsBase>
      <WidgetHeader title="Details of the order" />
      <FormSelect
        label="Delivery address"
        value={data.addressLabel}
        onChange={handleAddressSelect}
        options={addresses.map((a) => ({ value: a.label, label: a.label }))}
        placeholder="Select address"
      />
      <div className="grid grid-cols-2 gap-2 mb-3">
        <FormField
          label="Street"
          value={data.deliveryAddress.street}
          onChange={(v) => updateAddress({ street: v })}
        />
        <FormField
          label="Number"
          value={data.deliveryAddress.number}
          onChange={(v) => updateAddress({ number: v })}
        />
        <FormField
          label="Neighborhood"
          value={data.deliveryAddress.neighborhood}
          onChange={(v) => updateAddress({ neighborhood: v })}
        />
        <FormField
          label="Complement"
          value={data.deliveryAddress.complement}
          onChange={(v) => updateAddress({ complement: v })}
        />
        <FormField
          label="City"
          value={data.deliveryAddress.city}
          onChange={(v) => updateAddress({ city: v })}
        />
        <FormField
          label="State"
          value={data.deliveryAddress.state}
          onChange={(v) => updateAddress({ state: v })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Email"
          value={data.email}
          onChange={(v) => update({ email: v })}
          type="email"
          placeholder="Add email"
        />
        <FormField
          label="Phone"
          value={data.phone}
          onChange={(v) => update({ phone: v })}
          type="tel"
          placeholder="Add phone"
        />
      </div>
    </WidgetsBase>
  );
}
