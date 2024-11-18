/* eslint-disable @typescript-eslint/no-explicit-any */

interface TableProps {
  columns: {
    header: string
    accessor: string
    className?: string
  }[]
  renderRow: (item: any) => JSX.Element
  data: any[]
}

export function Table({ columns, renderRow, data }: TableProps) {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-left text-sm text-gray-500">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  )
}
