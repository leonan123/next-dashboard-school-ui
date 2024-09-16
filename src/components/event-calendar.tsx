'use client'

import 'react-calendar/dist/Calendar.css'

import Image from 'next/image'
import { useState } from 'react'
import Calendar from 'react-calendar'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
]

export function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div className="rounded-md bg-white p-4">
      <Calendar onChange={onChange} value={value} locale="en" />

      <div className="flex items-center justify-between">
        <h1 className="my-4 text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="rounded-md border-2 border-t-4 border-gray-200 p-5 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>

            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
