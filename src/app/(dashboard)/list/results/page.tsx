import Image from 'next/image'
import Link from 'next/link'

import { Pagination } from '@/components/pagination'
import { Table } from '@/components/table'
import { TableSearch } from '@/components/table-search'
import { resultsData, ROLE } from '@/lib/data'

interface Result {
  id: number
  subject: string
  class: number
  teacher: number
  student: number
  type: 'exam' | 'assignment'
  date: string
  score: number
}

const columns = [
  {
    header: 'Subject Name',
    accessor: 'name',
  },
  {
    header: 'Student',
    accessor: 'student',
  },
  {
    header: 'Score',
    accessor: 'score',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
]

export default function ResultListPage() {
  function renderRow(item: Result) {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-lamaPurpleLight"
      >
        <td className="p-4">{item.subject}</td>
        <td>{item.student}</td>
        <td className="text-center md:text-left">{item.score}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>

        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="flex size-7 items-center justify-center rounded-full bg-lamaSky">
                <Image src="/edit.png" alt="" width={16} height={16} />
              </button>
            </Link>

            {ROLE === 'admin' && (
              <button className="flex size-7 items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    )
  }

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">All Results</h1>

        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />

          <div className="flex items-center gap-4 self-end">
            <button className="flex size-8 items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>

            <button className="flex size-8 items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>

            {ROLE === 'admin' && (
              <button className="flex size-8 items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      <Pagination />
    </div>
  )
}