import React from 'react'

import {
  ClipboardList,
  Settings,
  MousePointerClick,
  Users,
  Laptop,
} from "lucide-react";
import ServiceRow from "../ServiceRow";


function Webdevelopment() {
    const services = [
        {
          id: "01",
          title: "Customize ERP And CRM System Development",
          description:
            "Automate, manage, and scale your business efficiently. Custom ERP & CRM development with complete digital marketing solutions.",
            src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767355448/ERP_tqi5bg.png",
          color: "bg-red-700",
          side: "left",
        },
        {
          id: "02",
          title: "Custom Software / App Development ",
          description:
            "Turn your ideas into powerful digital products. Custom software and app development built to scale.",
          SRC:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329354/Manufacturing_s7dvmq.png", 
          color: "bg-orange-500",
          side: "right",
        },
        {
          id: "03",
          title: " Pos  Software Development ",
          description:
            "Simplify billing, inventory, and reporting in one system. Custom POS software designed for speed and accuracy. ",
          src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767356099/pos_uw2h7g.png" ,
          color: "bg-teal-400",
          side: "left",
        },
        {
          id: "04",
          title: "Customizing Software Development",
          description:
            "Software built around your business, not the other way around. Fully customized solutions for smarter operations. ",
            src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767356277/post_c7mxll.png", 
          color: "bg-sky-500",
          side: "right",
        },
        {
          id: "05",
          title: " Cousomizing hopitality Software  ",
          description:
            "Smart software solutions tailored for hotels and hospitality businesses. Manage reservations, billing, and guest services with ease.",
          src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329348/Enterprise_uqi96p.png",
          color: "bg-blue-700",
          side: "left",
        },
      ];
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

export default Webdevelopment