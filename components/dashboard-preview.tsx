import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-48px)] md:w-[800px] lg:w-[900px]">
      <div className="bg-primary-light/50 rounded-2xl p-1.5 shadow-2xl">
        <Image
          src="/images/dashboard-preview.png"
          alt="Dashboard preview"
          width={900}
          height={540}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
