import Image from 'next/image'

export function TableSearch() {
  return (
    <div className="flex h-8 w-full items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:w-auto">
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
  )
}
