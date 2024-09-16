import Image from 'next/image'

interface UserCardProps {
  type: string
}

export function UserCard({ type }: UserCardProps) {
  return (
    <div className="min-w-32 flex-1 rounded-2xl p-4 odd:bg-lamaPurple even:bg-lamaYellow">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-xxs text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>

      <h1 className="my-4 text-2xl font-semibold">1,234</h1>
      <h2 className="text-sm font-medium capitalize text-gray-500">{type}</h2>
    </div>
  )
}
