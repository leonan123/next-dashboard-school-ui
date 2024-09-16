export function Announcements() {
  return (
    <div className="rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div className="rounded-md bg-lamaSkyLight p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="rounded-md bg-white p-1 text-xs text-gray-400">
              2025-01-01
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            numquam autem fugit non modi tenetur, nostrum pariatur deleniti
            magnam
          </p>
        </div>

        <div className="rounded-md bg-lamaPurpleLight p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="rounded-md bg-white p-1 text-xs text-gray-400">
              2025-01-01
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            numquam autem fugit non modi tenetur, nostrum pariatur deleniti
            magnam
          </p>
        </div>

        <div className="rounded-md bg-lamaYellowLight p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="rounded-md bg-white p-1 text-xs text-gray-400">
              2025-01-01
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            numquam autem fugit non modi tenetur, nostrum pariatur deleniti
            magnam
          </p>
        </div>
      </div>
    </div>
  )
}
