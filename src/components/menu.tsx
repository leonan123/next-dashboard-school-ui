import Image from 'next/image'
import Link from 'next/link'

import { ROLE } from '@/lib/data'

import { MENU_ITEMS } from '../constants/menu'

export function Menu() {
  return (
    <div className="mt-4 text-sm">
      {MENU_ITEMS.map((i) => (
        <nav key={i.title} className="flex flex-col gap-2">
          <span className="my-4 hidden font-light text-gray-400 lg:block">
            {i.title}
          </span>

          {i.items.map((item) => {
            if (!item.visible.includes(ROLE)) {
              return null
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 hover:bg-lamaSkyLight md:px-2 lg:justify-start"
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="sr-only lg:not-sr-only">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      ))}
    </div>
  )
}
