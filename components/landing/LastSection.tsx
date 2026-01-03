import Image from "next/image";
import icon from "@/public/image/png/contact.png"

import {
    Brain,
    CheckCircle,
    Lightbulb,
    Users,
    ShieldCheck,
} from "lucide-react";

export default function TechnologiesSection() {
    return (
        <section className="w-full py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT SIDE */}
                <div className="">
                    <p className="text-white text-base leading-relaxed mb-10 max-w-xl">
                        Technology, Creativity, and Business, we thread them together and extract
                        best of the web for your brand with our experience, customer-first approach
                        and a team in love with web design technology.
                    </p>

                    <div className="grid md:grid-cols-2 h-[320px]   mt-20 gap-y-10 gap-x-56 ">
                        {/* this is the firt card */}
                        <div className="relative flex items-center w-[345px]   h-[120px] border border-cyan-200  hover:bg-cyan-800/60 rounded-full pl-20 pr-6 py-6 ">
                            {/* OVERLAPPING CIRCLE */}
                            <div
                                className={`absolute -left-10  text-white  bg-cyan-400
                                                             rounded-full w-32 h-32 flex items-center justify-center text-2xl`}>
                                <Image src={icon} alt="brain" height={56} width={56} />
                            </div>

                            {/* TEXT */}
                            <p className="text-sm pl-4  leading-relaxed">
                                Technology, Creativity, and Business, we thread them together and extract best of the web for
                            </p>
                        </div>

                          {/* this is the firt card */}
                        <div className="relative flex items-center w-[345px]  h-[120px] border border-cyan-200  hover:bg-cyan-800/60 rounded-full pl-20 pr-6 py-6 ">
                            {/* OVERLAPPING CIRCLE */}
                            <div
                                className={`absolute -left-10  text-white  bg-cyan-400
                                                             rounded-full w-32 h-32 flex items-center justify-center text-2xl`}>
                                <Image src={icon} alt="brain" height={56} width={56} />
                            </div>

                            {/* TEXT */}
                            <p className="text-sm pl-4  leading-relaxed">
                                Technology, Creativity, and Business, we thread them together and extract best of the web for
                            </p>
                        </div>

                          {/* this is the firt card */}
                        <div className="relative flex items-center w-[345px]   h-[120px] border border-cyan-200  hover:bg-cyan-800/60 rounded-full pl-20 pr-6 py-6 ">
                            {/* OVERLAPPING CIRCLE */}
                            <div
                                className={`absolute -left-10  text-white  bg-cyan-400
                                                             rounded-full w-32 h-32 flex items-center justify-center text-2xl`}>
                                <Image src={icon} alt="brain" height={56} width={56} />
                            </div>

                            {/* TEXT */}
                            <p className="text-sm pl-4  leading-relaxed">
                                Technology, Creativity, and Business, we thread them together and extract best of the web for
                            </p>
                        </div>

                          {/* this is the firt card */}
                        <div className="relative flex items-center w-[345px] h-[120px] border border-cyan-200  hover:bg-cyan-800/60 rounded-full pl-20 pr-6 py-6 ">
                            {/* OVERLAPPING CIRCLE */}
                            <div
                                className={`absolute -left-10  text-white  bg-cyan-400
                                                             rounded-full w-32 h-32 flex items-center justify-center text-2xl`}>
                                <Image src={icon} alt="brain" height={56} width={56} />
                            </div>

                            {/* TEXT */}
                            <p className="text-sm pl-4  leading-relaxed">
                                Technology, Creativity, and Business, we thread them together and extract best of the web for
                            </p>
                        </div>
                 </div>      
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex justify-center   w-[40^%items-center">

                    {/* BLUE CIRCLE */}
                    <div className="relative w-[360px] h-[360px] rounded-full bg-[#0B2C52] flex flex-col items-center justify-center text-white">

                        <h3 className="text-lg font-medium mb-4">Our</h3>
                        <h2 className="text-2xl font-bold mb-6">Technologies</h2>

                        {/* TECH ICONS */}
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center">
                                <Image src={icon} alt="tech" width={36} height={36} />
                            </div>
                        </div>

                        {/* WOMAN IMAGE */}
                        <Image
                            src="/woman.png" // place image in public folder
                            alt="Professional Woman"
                            width={220}
                            height={420}
                            className="absolute -right-10 bottom-0"
                        />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}



/* TECH ICON LIST */
const techIcons = [
    "/tech/html5.png",
    "/tech/css3.png",
    "/tech/wordpress.png",
    "/tech/php.png",
    "/tech/joomla.png",
    "/tech/drupal.png",
    "/tech/magento.png",
    "/tech/mysql.png",
];