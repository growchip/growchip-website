import React from "react";
import OurService from "@/public/image/grow.jpg";
import Button from "../Buttons";
function HeroSection() {
  return (
    <>
      <section
        className=" relative min-h-[65vh] sm:min-h-[75vh] lg:min-h-screen flex items-center bg-black "
        style={{
          backgroundImage: `url(${OurService.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full">
          <div
            className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 "
          >
            <div className="text-center lg:text-left max-w-3xl">
              <h1
                className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white "
              >
                Our Services
              </h1>

              <p
                className=" mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 "
              >
                We are customers very satisfied
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <Button text="Contact us" link="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
