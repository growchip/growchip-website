"use client";
import { useEffect, useState } from "react";

function StatsCard() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const target = 100;
  const target1 = 50;
  const target2 = 300;
  const target3 = 200;
  const duration = 2000;
  const intervalTime = 50;
  const step = Math.ceil((target * intervalTime) / duration);
  const step1 = Math.ceil((target1 * intervalTime) / duration);
  const step2 = Math.ceil((target2 * intervalTime) / duration);
  const step3 = Math.ceil((target3 * intervalTime) / duration);

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

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= target1) {
          clearInterval(interval1);
          return target1;
        }
        return prev + step1;
      });
    }, intervalTime);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCount2((prev) => {
        if (prev >= target2) {
          clearInterval(interval2);
          return target2;
        }
        return prev + step2;
      });
    }, intervalTime);

    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setCount3((prev) => {
        if (prev >= target3) {
          clearInterval(interval3);
          return target3;
        }
        return prev + step3;
      });
    }, intervalTime);

    return () => clearInterval(interval3);
  }, []);





  return (
    <>
      <div
        className="max-w-7xl mx-auto bg-black flex items-center justify-center  py-12 sm:py-16 lg:py-24">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-6">
        
        {/* First Card */}
          <div className="bg-[#141414]  rounded-xl sm:rounded-2xl   px-4 sm:px-8 lg:px-4  py-2 sm:py-3 lg:py-4   shadow-lg">
            <div className=" flex  gap-3 sm:gap-2  items-center">
              <span
                className=" text-green-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ">
                {count}
                <span className="ml-1">+</span>
              </span>

              <span className="  text-white text-sm sm:text-base lg:text-lg  leading-tight">
                Websites <br />  Delivered
              </span>

            </div>
           
          </div>

          {/* Second Card */}
          <div className="bg-[#141414]  rounded-xl sm:rounded-2xl  px-4 sm:px-8 lg:px-4  py-2 sm:py-3 lg:py-4   shadow-lg">
            <div className=" flex  gap-3 sm:gap-2  items-center">
              <span
                className=" text-green-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ">
                {count1}
                <span className="ml-1">+</span>
              </span>

              <span className="  text-white text-sm sm:text-base lg:text-lg  leading-tight">
                Clients <br />  Globally 
              </span>

            </div>
            
          </div>



          
          {/* third Card */}
          <div className="bg-[#141414]  rounded-xl sm:rounded-2xl  px-4 sm:px-8 lg:px-4  py-2 sm:py-3 lg:py-4  shadow-lg">
            <div className=" flex  gap-3 sm:gap-2  items-center">
              <span
                className=" text-green-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ">
                {count2}
                <span className="ml-1">+</span>
              </span>

              <span className="  text-white text-sm sm:text-base lg:text-lg  leading-tight">
                Average Lead <br /> Growth
              </span>

            </div>
           
          </div>

              
          {/* fourths Card */}
          <div className="bg-[#141414]  rounded-xl sm:rounded-2xl  px-4 sm:px-8 lg:px-4  py-2 sm:py-3 lg:py-4  shadow-lg">
            <div className=" flex  gap-3 sm:gap-2  items-center">
              <span
                className=" text-green-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ">
                {count3}
                <span className="ml-1">+</span>
              </span>

              <span className="  text-white text-sm sm:text-base lg:text-lg  leading-tight">
                AI Videos <br />   Created 
              </span>

            </div>
      
          </div>



        </div>
      </div>
    </>
  );
}
  
export default StatsCard;
