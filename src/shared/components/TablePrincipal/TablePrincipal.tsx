"use client";

interface TableProps<T> {
  rows: T[];
  columns: { key: keyof T; label: string }[];
  renderActions?: (row: T) => React.ReactNode;
  renderLeadingActions?: (row: T) => React.ReactNode;
  renderCell?: (row: T, column: { key: keyof T; label: string }) => React.ReactNode;
  keyExtractor?: (row: T, index: number) => string | number;
  emptyMessage?: string;
}

export default function TablePrincipal<T extends object>({
  rows,
  columns,
  renderActions,
  renderLeadingActions,
  renderCell,
  keyExtractor,
  emptyMessage = "No data available",
}: TableProps<T>) {
  if (rows.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 text-sm">{emptyMessage}</div>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left bg-gray-100 rounded-xl">
        <thead>
          <tr className="text-gray-900 text-sm">
            {renderLeadingActions && (
              <th className="px-3 py-1 h-[64px] text-center">Actions</th>
            )}
            {columns.map((column) => (
              <th key={String(column.key)} className="px-3 py-1 h-[64px]">
                {column.label}
              </th>
            ))}
            {renderActions && (
              <th className="px-3 py-1 h-[64px] text-center">Quick Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={keyExtractor ? keyExtractor(row, index) : index}
              className="bg-gray-50 hover:bg-gray-100 transition border-b border-gray-200"
            >
              {renderLeadingActions && (
                <td className="h-[68px] px-3 py-2 text-center">
                  {renderLeadingActions(row)}
                </td>
              )}
              {columns.map((column) => (
                <td key={String(column.key)} className="h-[68px] px-3 py-2">
                  {renderCell
                    ? renderCell(row, column)
                    : String(row[column.key] ?? "")}
                </td>
              ))}
              {renderActions && (
                <td className="h-[68px] px-3 py-2 text-center">
                  {renderActions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
