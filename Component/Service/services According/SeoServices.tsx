import React from 'react'
import {
  ClipboardList,
  Settings,
  MousePointerClick,
  Users,
  Laptop,
} from "lucide-react";
import ServiceRow from '../Service';

 const services = [
  {
    id: "01",
    title: "Optimization",
    slug: "optimization-services",
    shortDescription: "Improve performance, speed, and efficiency of your systems.",
    description:
      "We provide advanced optimization services to improve application performance, scalability, and user experience using industry best practices.",
    icon: ClipboardList,
color: "bg-red-700",
      side: "left",
    
  },

  {
    id: "02",
    title: "Operations",
    slug: "operations-management",
    shortDescription: "Streamline operations for maximum productivity.",
    description:
      "Our operations services help businesses automate workflows, reduce costs, and improve operational efficiency.",
    icon: Settings,
    color: "bg-orange-500",
      side: "right",
  },

  {
    id: "03",
    title: "Online",
    slug: "online-digital-solutions",
    shortDescription: "Powerful online and digital growth solutions.",
    description:
      "We deliver digital and online solutions that enhance customer engagement and drive measurable growth.",
    icon: MousePointerClick,
    color: "bg-teal-400",
    side: "left",

   
  },

  {
    id: "04",
    title: "Consulting",
    slug: "business-consulting",
    shortDescription: "Expert consulting for smart decision-making.",
    description:
      "Our consulting services provide strategic insights to help businesses innovate, scale, and succeed.",
    icon: Users,
    color: "bg-sky-500",
    side: "right",

   
  },

  {
    id: "05",
    title: "Devices",
    slug: "device-solutions",
    shortDescription: "Smart device and hardware-software solutions.",
    description:
      "We build and integrate smart device solutions that connect hardware with powerful software systems.",
    icon: Laptop,
    color: "bg-blue-700",
    side: "left",

    
  },
];
function SeoServices() {
  return (
   <>
    <section className="w-full py-20 overflow-hidden">
         <div className="max-w-6xl mx-auto px-4">
           <div className="relative flex flex-col items-center gap-20">
             {services.map((service) => (
               <ServiceRow key={service.id} service={service} />
             ))}
           </div>
         </div>
       </section>
   </>
  )
}

export default SeoServices