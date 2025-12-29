"use client";
import { useEffect, useState } from "react";

function StatsCard() {
  const [count, setCount] = useState(1);
  const target = 100;
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
      <div
        className="max-w-7xl mx-auto bg-black flex items-center justify-center  py-12 sm:py-16 lg:py-24">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
          {/* Card */}
          <div
            className="
         bg-[#141414]
           rounded-xl sm:rounded-2xl
           px-6 sm:px-8 lg:px-10
           py-5 sm:py-6 lg:py-8
           flex items-center gap-3 sm:gap-4
           shadow-lg
      "
          >
            <span
              className="
          text-green-400
          text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
          font-bold
      "
            >
              {count}
              <span className="ml-1">+</span>
            </span>

            <span
              className="
          text-gray-400
          text-sm sm:text-base lg:text-lg
          leading-tight
           "
            >
              more <br /> clients
            </span>
          </div>
          <div
            className="
         bg-[#141414]
           rounded-xl sm:rounded-2xl
           px-6 sm:px-8 lg:px-10
           py-5 sm:py-6 lg:py-8
           flex items-center gap-3 sm:gap-4
           shadow-lg
      "
          >
            <span
              className="
          text-green-400
          text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
          font-bold
      "
            >
              {count}
              <span className="ml-1">+</span>
            </span>

            <span
              className="
          text-gray-400
          text-sm sm:text-base lg:text-lg
          leading-tight
           "
            >
              more <br /> clients
            </span>
          </div>
          <div
            className="
         bg-[#141414]
           rounded-xl sm:rounded-2xl
           px-6 sm:px-8 lg:px-10
           py-5 sm:py-6 lg:py-8
           flex items-center gap-3 sm:gap-4
           shadow-lg
      "
          >
            <span
              className="
          text-green-400
          text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
          font-bold
      "
            >
              {count}
              <span className="ml-1">+</span>
            </span>

            <span
              className="
          text-gray-400
          text-sm sm:text-base lg:text-lg
          leading-tight
           "
            >
              more <br /> clients
            </span>
          </div>
          <div
            className="
         bg-[#141414]
           rounded-xl sm:rounded-2xl
           px-6 sm:px-8 lg:px-10
           py-5 sm:py-6 lg:py-8
           flex items-center gap-3 sm:gap-4
           shadow-lg
      "
          >
            <span
              className="
          text-green-400
          text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
          font-bold
      "
            >
              {count}
              <span className="ml-1">+</span>
            </span>

            <span
              className="
          text-gray-400
          text-sm sm:text-base lg:text-lg
          leading-tight
           "
            >
              more <br /> clients
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
