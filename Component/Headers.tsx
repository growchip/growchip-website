import React from "react";

function Headers() {
  return (
   
    <>
      <div className="navbar bg-transparent">
        <nav className=" flex justify-between items-center p-4">
          <div className="flex items-center">
           
            <span className="ml-2 text-6xl font-bold" >GrowChip</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 text-3xl">Home</a>
            <a href="#" className="hover:text-blue-500 text-3xl">About</a>
            <a href="#" className="hover:text-blue-500 text-3xl">Services</a>
            <a href="#" className="hover:text-blue-500 text-3xl">Contact</a>
          </div>
        </nav>
        </div>
        <hr  className=" h-2 bg-linear-90 from-[#84DA2E]   via-black to-[#2596BE]"/>
    </>
  );
}

export default Headers;