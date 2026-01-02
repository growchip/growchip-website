import React from "react";
import Image from "next/image";
import Contact from "@/public/image/Hero Section Image.png"
import { url } from "inspector";
import Link from "next/link";
import Button from "../Buttons";
import From from "./From";

function HeroSection() {
  return (
    <>
      <section className="  max-w-7xl
      mx-auto sm:pt-20 lg:mt-8 px-4 sm:px-8 lg:px-16">
        <div
          className=" max-w-screen-2xl sm:my-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center "
        >
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              className=" text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl mb-6 hover:scale-105 transition-transform duration-300 "
            >
              Contact Us Now
            </h1>

            <p
              className=" text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 "
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              explicabo iure. Excepturi quam nam tempore sapiente fugit sed iure
              perferendis dolor repudiandae.
            </p>

            <Button text="Explore" link="#" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329544/Hero_Section_Image_hp39dv.png"
              alt="Contact Image"
              width={500}
              height={500}
              className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
