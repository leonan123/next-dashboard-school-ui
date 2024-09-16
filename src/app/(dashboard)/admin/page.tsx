import { Announcements } from '@/components/announcements'
import { AttendanceChart } from '@/components/attendance-chart'
import { CountChart } from '@/components/count-chart'
import { EventCalendar } from '@/components/event-calendar'
import { FinanceChart } from '@/components/finance-chart'
import { UserCard } from '@/components/user-card'

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChart />
          </div>

          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>

        <div className="h-[500px] w-full">
          <FinanceChart />
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}
