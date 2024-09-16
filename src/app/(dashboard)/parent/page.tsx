import { Announcements } from '@/components/announcements'
import { BigCalendar } from '@/components/big-calendar'

export default function ParentPage() {
  return (
    <div className="flex h-full flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <Announcements />
      </div>
    </div>
  )
}
