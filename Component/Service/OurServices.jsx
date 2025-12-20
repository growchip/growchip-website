
 "use client";
import { ClipboardList, Settings, MousePointerClick, Users, Laptop } from "lucide-react";
import { useState  } from "react";  

export default function OurServices() {
  const services = [
    {
      id: "01",
      title: "Optimization",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: ClipboardList,
      color: "bg-red-700",
      side: "left",
    },
    {
      id: "02",
      title: "Operations",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: Settings,
      color: "bg-orange-500",
      side: "right",
    },
    {
      id: "03",
      title: "Online",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: MousePointerClick,
      color: "bg-teal-400",
      side: "left",
    },
    {
      id: "04",
      title: "Consulting",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: Users,
      color: "bg-sky-500",
      side: "right",
    },
    {
      id: "05",
      title: "Devices",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco.Ut enim ad minim veniam, quis nostrud exercitation ullamco. ",
      icon: Laptop,
      color: "bg-blue-700",
      side: "left",
    },
  ];

  return (
    <section className="w-full    py-20 my-40">
      <div className="max-w-6xl mx-auto px-4">
      
        <div className="relative flex flex-col items-center gap-14">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service }) {
const isRight = service.side === "right";
  const Icon = service.icon;

  return (
    <div className="relative w-full flex items-center  justify-center">
      {/* Left card */}
   
      <div
        className={`absolute w-[350px] h-1  hover:scale-105 hover:h-2  transition-transform duration-300 bg-gray-400 
        ${isRight ? "right-[8%]" : "left-[8%]"}`}
      />

      <div
        className={`absolute max-w-xs bg-transparent shadow-md rounded-md  bg-white  hover:scale-105  transition-transform duration-300 p-4  text-left
        ${isRight ? "right-[-20.5%]" : " left-[-20.5%]"}`} 
      >
        <h4 className="text- text-center font-semibold text-slate-700 mb-1">
          {service.title.toUpperCase()}
        </h4>
        <p className="text-[15px] text-gray-500">
          {service.description}
        </p>
      </div>

      {/* Center diamond */}
      <div className="relative ">
        <div
          className={`w-70 border-8 hover:scale-105 transition-transform duration-300  h-70 my-10 rotate-45 rounded-lg flex items-center justify-center inset-shadow-2xl shadow-lg ${service.color}`}
        >
          <div className="-rotate-45 text-white  ">
            <Icon className="w-20 h-20 hover:scale-150  transition-transform duration-300 " />
          </div>
        </div>
        <span className={`absolute -bottom-3  ${(service.side ==="right"?"-right-1":"-left-0.5")} hover:scale-150  transition-transform duration-300 text-black
 hover:font-semibold


bg-white text-xL rounded-full w-15 h-15 flex items-center justify-center`}>
        {service.id}
        </span>
      </div>

     
    </div>
  );
}
