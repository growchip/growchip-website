import React from 'react'
import Image from 'next/image'
import Ceo from "@/public/image/ceo.webp"
function MeetOurTEAM() {
  return (
    <>
      <div className=' mt-20 max-h-screen h-5xl pb-40'>
        <div className=' text-center gap-6 p-30'>
          <h1 className='text-5xl  '> Meet Our Team</h1>
          <p className='text-xl'>
            A team of passionate innovators, problem-solvers, and tech experts driving excellence together.</p>
        </div>


        <div className='flex  justify-center gap-x-20 '>
        
        {/* Cards */}
          <div
            className="w-[340px] h-[420px] hover:scale-105 transition-transform duration-300  rounded-2xl overflow-hidden
                bg-zinc-900 border border-zinc-700 shadow-xl
              ">

            <Image

              alt=''
              className="h-60 w-full object-cover" width={300} height={400} src={Ceo.src} />

            {/* Content */}
            <div className="p-4 text-white">
              <h3 className="text-3xl font-extralight-">Abhinav Rawat</h3>
              <p className="text-sm text-zinc-400">Ceo of Growchip Ai Tecnology</p>
            </div>
          </div>
           {/* Cards */}
          <div
            className="w-[340px] h-[420px] hover:scale-105 transition-transform duration-300  rounded-2xl overflow-hidden
                bg-zinc-900 border border-zinc-700 shadow-xl
              ">

            <Image

              alt=''
              className="h-60 w-full object-cover" width={300} height={400} src={Ceo.src} />

            {/* Content */}
            <div className="p-4 text-white">
              <h3 className="text-3xl font-extralight-">Abhinav Rawat</h3>
              <p className="text-sm text-zinc-400">Ceo of Growchip Ai Tecnology</p>
            </div>
          </div>
           {/* Cards */}
          <div
            className="w-[340px] h-[420px] hover:scale-105 transition-transform duration-300  rounded-2xl overflow-hidden
                bg-zinc-900 border border-zinc-700 shadow-xl
              ">

            <Image

              alt=''
              className="h-60 w-full object-cover" width={300} height={400} src={Ceo.src} />

            {/* Content */}
            <div className="p-4 text-white">
              <h3 className="text-3xl font-extralight-">Abhinav Rawat</h3>
              <p className="text-sm text-zinc-400">Ceo of Growchip Ai Tecnology</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default MeetOurTEAM