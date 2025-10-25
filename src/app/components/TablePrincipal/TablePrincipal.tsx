"use client";

interface TableProps<T> {
  rows: T[];
  columns: { key: keyof T; label: string }[];
  renderActions?: (row: T) => React.ReactNode;
}

export default function TablePrincipal<T extends object>({
  rows,
  columns,
  renderActions,
}: TableProps<T>) {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left bg-gray-100 rounded-xl">
          <thead>
            <tr className="text-gray-900 text-sm">
              {columns.map((column)=>(
                <th key={String(column.key)} className="px-3 py-1 h-[64px]">
                  {column.label}
                </th>
              ))}
              {renderActions && (
                <th className="px-3 py-1 h-[64px] text-center">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition border-b border-gray-200"
              >

                {columns.map((column)=>(
                  <td key={String(column.key)} className="h-[68px] px-3 py-2">
                    {String(row[column.key])}
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
    </>
  );
}
