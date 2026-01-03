import React from 'react'
import Image from 'next/image'
import Ceo from "@/public/image/ceo.webp"
function MeetOurTEAM() {
  return (
    <>
      <section className="mt-16   max-w-7xl
      mx-auto sm:mt-20 pb-20">
  {/* Heading */}
  <div className="text-center px-4 sm:px-6 max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
    Meet Our Professional Team
    </h2>

    <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-400">
      A team of passionate innovators, problem-solvers, and tech experts driving
      excellence together.
    </p>
  </div>

  {/* Cards Grid */}
  <div
    className="
      mt-12 sm:mt-16
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      px-4 sm:px-6
      max-w-7xl
      mx-auto
    "
  >
    {/* Card */}
    {[1, 2, 3].map((_, index) => (
      <div
        key={index}
        className="
          w-full
          max-w-sm
          mx-auto
          hover:scale-105
          transition-transform duration-300
          rounded-2xl
          overflow-hidden
          bg-zinc-900
          border border-zinc-700
          shadow-xl
        "
      >
        <Image
          src={Ceo.src}
          alt="Team member"
          width={400}
          height={400}
          className="h-56 sm:h-60 w-full object-cover"
        />

        <div className="p-5 text-white">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Abhinav Rawat
          </h3>
          <p className="text-sm sm:text-base text-zinc-400">
            CEO of Growchip AI Technology
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  )
}

export default MeetOurTEAM