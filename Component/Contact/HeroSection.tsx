import React from "react";
import Image from "next/image";
import Contact from "@/public/image/Hero Section Image.png"
import { url } from "inspector";
import Link from "next/link";

function HeroSection() {
    return (
        <>
            <section className=" flex justify-evenly items-center mt-28 ">
                <section style={{

                }}>
                    <h1 className=" text-5xl mb-10 hover:scale-105  hover:scale-105 transition-transform duration-300    "> Contact Us Now </h1>
                    <p className=" overflow-hidden w-xl"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, explicabo iure. Excepturi quam nam tempore sapiente fugit sed iure perferendis dolor repudiandae, voluptates aperiam nisi ut, nihil quod, magnam officia saepe incidunt in. Libero porro cupiditate inventore quod dolore est praesentium delectus vel odio harum earum saepe, temporibus neque consequuntur tempore dolores consequatur omnis quos culpa similique. Accusantium, repellendus praesentium neque in aspernatur numquam quasi aperiam beatae quo placeat quam laboriosam, debitis consectetur dolores odio! Porro quidem natus ipsa quasi sapiente itaque quod dolorum distinctio, fugiat dignissimos voluptatibus, enim in hic molestias est reiciendis reprehenderit illum obcaecati, voluptate vero. Quidem? </p>
                    <button className=' text-start bg-linear-to-r from-[#84DA2E] to-[#2596BE] px-30 py-3 mt-10
                         rounded-2xl  hover:scale-105 transition-transform duration-300    text-3xl capitalize' >
                         <Link href="/" className="hover:text-blue-500 "> Explore</Link>
                         </button>
                </section>
                <section> <Image src={Contact.src} className="w-4xl" alt="Contact Iamge " width={500} height={500} /></section>
            </section>
        </>
    );
}

export default HeroSection;
