"use client";

import { useState } from "react";
import Image from "next/image";
import Contact from "@/public/image/Contact 2.png";
import BasicFrom from "./BasicFrom";

export default function ContactPage() {


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
       <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={Contact.src}
            alt="Contact Image"
            width={900}
            height={900}
            className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain "
            priority
          />
        </div>
        <BasicFrom/>
      
        {/* RIGHT: IMAGE */}
      </div>
    </section>
  );
}
