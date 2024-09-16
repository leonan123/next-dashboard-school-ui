import Image from 'next/image'

export function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden h-8 items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex">
        <Image
          src="/search.png"
          width={14}
          height={14}
          alt=""
          className="shrink-0"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>

      <div className="flex w-full items-center justify-end gap-6">
        <div className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image src="/message.png" width={20} height={20} alt="" />
        </div>

        <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image src="/announcement.png" width={20} height={20} alt="" />
          <div className="absolute -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-purple-500 text-sm text-white">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium leading-3">John Doe</span>
          <span className="text-right text-xs text-gray-500">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  )
}
