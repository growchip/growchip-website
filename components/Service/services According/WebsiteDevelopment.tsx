import React from "react";
import {
  ClipboardList,
  Settings,
  MousePointerClick,
  Users,
  Laptop,
} from "lucide-react";
import ServiceRow from "../ServiceRow";

const services = [
  {
    id: "01",
    title: "Wordpress Website Development",
    description:
      "We build fast, secure, and fully customized WordPress websites that are easy to manage and designed to grow your business.",
    src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767343372/wordpress_kpltur.png",
    color: "bg-red-700",
    side: "left",
  },
  {
    id: "02",
    title: "Shopify Website Development",
    description:
      "We offer expert Shopify website development services to build secure, scalable, and high-performing online stores.",
    src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767343566/Shopify_eudc7t.png",  
    color: "bg-orange-500",
    side: "right",
  },
  {
    id: "03",
    title: "Laravel WebApplication",
    description:
      "A Laravel-based web application built for performance, security, and scalability. It delivers a clean architecture, robust backend functionality, and seamless user experience for modern web solutions.",
      src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767354691/laravel-white_pp6xir.png",
    color: "bg-teal-400",
    side: "left",
  },

  {
    id: "04",
    title: "Nextjs WebApplication",
    description:
      "A Next.js web application built for speed, scalability, and performance, leveraging server-side rendering, static generation, and modern React architecture for an optimal user experience.",
   src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767355008/Next_mnhyco.png",
    color: "bg-sky-500",
    side: "right",
  },

  {
    id: "05",
    title: "E-commerce",
    slug: "device-solutions",
    
    description:
      "An e-commerce platform that offers a seamless online shopping experience with secure payments, fast delivery, and a wide range of quality products tailored to customer needs.",
    src:"https://res.cloudinary.com/dlb4q6oje/image/upload/v1767329360/Retail_E-commerce_ydwah8.png",
    color: "bg-blue-700",
    side: "left",
  }
  
  ,

  {
    id: "06",
    title: "Landing Page Desgin",
    slug: "device-solutions",
   
    description:
      "A visually appealing landing page designed to capture attention, communicate value quickly, and guide users toward a clear call to action. ",
    icon: Laptop,
    color: "bg-sky-700",
    side: "right",
  }
  
  ,

  {
    id: "07",
    title: "Blog",
    slug: "device-solutions",
    shortDescription: "Smart device and hardware-software solutions.",
    description:
      "We build and integrate smart device solutions that connect hardware with powerful software systems.",
    icon: Laptop,
    color: "bg-blue-700",
    side: "left",
  }
 
  ,{
    id: "08",
    title: "Bussiness Website Development",
    slug: "device-solutions",
    shortDescription: "Smart device and hardware-software solutions.",
    description:
      "We build and integrate smart device solutions that connect hardware with powerful software systems.",
    icon: Laptop,
    color: "bg-red-700",
    side: "right",
  }
]
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
  );
}

export default SeoServices;
