'use client'

import Image from 'next/image'
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },
]

export function CountChart() {
  return (
    <div className="size-full rounded-xl bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="relative h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/maleFemale.png"
          width={50}
          height={50}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="size-5 rounded-full bg-lamaSky" />

          <h1 className="mt-1 font-bold leading-none">1,234</h1>
          <h2 className="text-sm text-gray-400">Boys (55%)</h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="size-5 rounded-full bg-lamaYellow" />

          <h1 className="mt-1 font-bold leading-none">1,234</h1>
          <h2 className="text-sm text-gray-400">Girls (45%)</h2>
        </div>
      </div>
    </div>
  )
}
