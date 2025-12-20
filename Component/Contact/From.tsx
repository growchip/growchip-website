 "use client";

import React, { ChangeEvent, FormEvent, useState } from 'react'
import FromImage from "@/public/image/From Image.png"
import Image from 'next/image'
import { form } from 'framer-motion/client'




function From() {
  return (
    <>
 <section className=' flex justify-around mt-20 items-center'>
   
    <section>
         
            <Image src={FromImage.src} alt='from Image' width={500} height={500} className=' w-4xl '/>
    </section>
     <section>
         <form
   
      className="max-w-xl bg-black text-white p-8 rounded-2xl space-y-6"
    >
      <h2 className="text-3xl font-bold">Contact Us</h2>

      
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
      />

   
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#84DA2E] to-[#2596BE]
                   py-3 rounded-xl text-lg font-semibold
                   hover:scale-105 transition-transform duration-300
                   disabled:opacity-50"
      >
    Submit
      </button>
    </form>
  
    </section>
 </section>
        </>
  )
}

export default From


