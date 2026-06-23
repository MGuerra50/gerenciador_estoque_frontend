import ValueCard from "@/shared/components/ValueCard/ValueCard";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  ipiIcms: number;
  subtotal: number;
  totalNet: number;
}

export default function FinancialSummary({ ipiIcms, subtotal, totalNet }: Props) {
  const hasValues = ipiIcms > 0 || subtotal > 0 || totalNet > 0;

  return (
    <section className="flex w-full justify-between items-center gap-[30px]">
      <ValueCard
        title="IPI + ICMS"
        value={hasValues ? formatCurrency(ipiIcms) : "R$ -"}
      />
      <ValueCard
        title="Subtotal"
        value={hasValues ? formatCurrency(subtotal) : "R$ -"}
      />
      <ValueCard
        title="Total net value"
        value={hasValues ? formatCurrency(totalNet) : "R$ -"}
      />
    </section>
  );
}
