import React from "react";
import mainImage from "@/public/image/mainImage.png";
import Buttons from "@/Component/Buttons";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div
        className=" max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0 pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 pb-20 sm:pb-24 md:pb-28 lg:pb-36 xl:pb-40 text-center">
        <div
          className=" w-full  border-x-2 rounded-4xl bg-radial-[at_50%_75%] from-[#2596BE]/0 via-[#2596BE]/20 to-black/30 to-90% rounded-2xl sm:rounded-[32px] md:rounded-[40px] lg:rounded-[56px] xl:rounded-[70px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 flex flex-col items-center justify-center overflow-hidden "
          style={{ backgroundBlendMode: "color" }}>
          {/* Heading */}
          <h1
           
            className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight pb-4 sm:pb-6 md:pb-8 lg:pb-10">
            Solutions <br />
            that drive <span className="text-green-600 font-bold">Growth</span>
          </h1>

          {/* Subtext */}
          <p
            className=" text-sm sm:text-base md:text-lg lg:text-xl pb-6 sm:pb-8 md:pb-10 font-light max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl "
          >
            Transform your business with Chandigarh’s leading IT services company.
          </p>

          {/* Button */}
          <button
            className=" cssbuttons-io-button text-sm sm:text-base md:text-lg "
          >
            Schedule Meet
            <span className="icon">
              <Link href="/contact">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
