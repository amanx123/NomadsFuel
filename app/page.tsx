import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="max-w-[1500px] mx-auto">
        <nav className="flex flex-row justify-between items-center p-4 mx-20">
          <span className="text-xl font-bold text-orange-600">
            NomadsFuel
          </span>
          <span className="text-black font-bold text-sm">
            Login
          </span>
        </nav>
        <section className="mt-40 ml-24 h-[40vh] w-[40vw] text-3xl font-bold text-blue-950">
          <h1>The only Travel Itinerary planner you will ever need.</h1>
          <h1> Plan your travels like a pro.</h1>
          <div className="flex mt-10 text-base font-medium text-white gap-8 ">
            <Link href='/planner' className="relative bg-orange-600 hover:bg-orange-700 transition p-4 px-6 rounded-full">AI planner
              <span className="absolute bg-blue-200 text-blue-800 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">In Beta 📍</span>
            </Link>
            <Link href='/guides' className="text-orange-600 px-6 bg-red-100 p-4 transition hover:bg-red-200 rounded-full">Our Guides</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
