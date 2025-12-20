"use client";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/public/logo/logo.jpg"
import Buttons from './Buttons';

function Headers() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300
        ${scrolled ? "bg-black shadow-md" : "bg-transparent"}
      `}
      >
        <nav className=" mx-auto   flex items-center justify-around py-4">



          <Image src={Logo.src} alt="logo" width={300} height={250} className="max-w-xl" />



          <ul className="hidden md:flex items-center gap-8 font-medium  text-xl">
            <Link href="/" className="hover:text-blue-500 ">Home</Link>
            <Link href="/About" className="hover:text-blue-500 ">About</Link>
            <Link href="/Service" className="hover:text-blue-500 ">Services</Link>
            <Link href="/Contact" className="hover:text-blue-500 ">Contact</Link>
          </ul>
          <Link
            href="/Contact"
            className="hidden md:inline-block text-white rounded-full "
          >
             <Buttons text="Explore" />
          </Link>
        </nav>

       
      </header>

    </>
  )
}

export default Headers











//  
