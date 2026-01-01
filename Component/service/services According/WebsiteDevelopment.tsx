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
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    icon: ClipboardList,
    color: "bg-red-700",
    side: "left",
  },
  {
    id: "02",
    title: "Shopify Website Development",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    icon: Settings,
    color: "bg-orange-500",
    side: "right",
  },
  {
    id: "03",
    title: "Laravel WebApplication",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    icon: MousePointerClick,
    color: "bg-teal-400",
    side: "left",
  },

  {
    id: "04",
    title: "Nextjs WebApplication",
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
    title: "E-commerce",
    slug: "device-solutions",
    shortDescription: "Smart device and hardware-software solutions.",
    description:
      "We build and integrate smart device solutions that connect hardware with powerful software systems.",
    icon: Laptop,
    color: "bg-blue-700",
    side: "left",
  }
  
  ,

  {
    id: "06",
    title: "Landing Page Desgin",
    slug: "device-solutions",
    shortDescription: "Smart device and hardware-software solutions.",
    description:
      "We build and integrate smart device solutions that connect hardware with powerful software systems.",
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
