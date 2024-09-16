'use client'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import dayjs from 'dayjs'
import { useState } from 'react'
import { Calendar, dayjsLocalizer, type View, Views } from 'react-big-calendar'

import { calendarEvents } from '@/lib/data'

const localizer = dayjsLocalizer(dayjs)

export function BigCalendar() {
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  function handleOnChangeView(selectedView: View) {
    setView(selectedView)
  }

  return (
    <Calendar
      date={new Date(2024, 7, 12, 8, 0, 0)}
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      style={{ height: '97%' }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  )
}
