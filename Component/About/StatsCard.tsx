"use client";
import { useEffect, useState } from 'react'



function StatsCard() {

  const [count, setCount] = useState(1);
  const target = 200;
  const duration = 5000;
  const intervalTime = 50; 
  const step = Math.ceil((target * intervalTime) / duration);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div className="flex items-center justify-center max-h-screen  bg-amber-600  pt-30 bg-black">
        <div className="flex gap-6">
          {/* Card */}
          <div className="bg-[#141414] rounded-2xl px-10 py-8 flex items-center gap-4 shadow-lg w-fit">
            <span className="text-green-400 text-4xl font-bold">
              {count}
              <span className="ml-1">+</span>
            </span>

            <span className="text-gray-400 text-lg leading-tight">
              more <br /> clients
            </span>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default StatsCard