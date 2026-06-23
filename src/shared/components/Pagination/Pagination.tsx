import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <ButtonPrincipal
        text="Previous"
        width={120}
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      />
      <span className="font-semibold text-sm">
        {page} / {totalPages}
      </span>
      <ButtonPrincipal
        text="Next"
        width={120}
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      />
    </div>
  );
}
