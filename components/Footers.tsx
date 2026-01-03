"use client";
import React from "react";
import locationPngImage from "../public/image/png/google-maps.png";
import locationGifimage from "../public/image/gif/google-maps.gif";
import emailPngImage from "../public/image/png/email.png";
import emailGifimage from "../public/image/gif/email.gif";
import contactPngImage from "../public/image/png/contact.png";
import Contactgifimage from "../public/image/gif/contact.gif";
import faceBookIcon from "../public/image/png/facebook.png";
import instagramIcon from "../public/image/png/instagram.png";
import twitterIcon from "../public/image/png/twitter (1).png";
import copyrightIcon from "../public/image/png/copyright.png";

// Example usage: <HoverImage pngSrc="/logo/location.png" gifSrc="/logo/location.gif" alt="location" className="w-10" />

interface HoverImageProps {
  pngSrc: string;
  gifSrc: string;
  alt: string;
  className?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  pngSrc,
  gifSrc,
  alt,
  className,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <img
      src={hovered ? gifSrc : pngSrc}
      alt={alt}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    />
  );
};

function Footers() {
  return (
    <>
  <footer
  style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}
  className=" bg-[#363738] text-white pt- sm:pt-28 lg:pt-10 overflow-x-hidden"
>

 <h2 className="
 max-w-7xl mx-auto px-4 pt-4 md:pt-6 sm:pt-5 sm:px-8 lg:px-16  text-sm sm:text-base lg:text-lg font-bold tracking-widest">  GROWCHIP AI TECHNOLOGIES  PVT. LTD.</h2>
  {/* Upper Footer */}
  <div
    className=" max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 sm:py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 text-sm sm:text-base lg:text-sm font-light "
  >
    
    {/* Contact Block */}
    <div>
      <h4 className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
        Contact Us
      </h4>

      <div className="flex items-center gap-3 sm:gap-4 py-2">
        <HoverImage
          pngSrc={locationPngImage.src}
          gifSrc={locationGifimage.src}
          alt="location"
          className="w-7 sm:w-9 p-1 rounded-xl bg-white flex-shrink-0"
        />
        <span className="leading-relaxed">
         <b> Registered Office:-</b>  0-f 602 T Violet Bollywood Hb, Zirakpur Mohali, Punjab - 140603  
          <br /> 
        </span>
      </div>
        <div className="flex items-center gap-3 sm:gap-4 py-2">
        <HoverImage
          pngSrc={locationPngImage.src}
          gifSrc={locationGifimage.src}
          alt="location"
          className="w-7 sm:w-9 p-1 rounded-xl bg-white flex-shrink-0"
        />
        <span className="leading-relaxed">
         <b> Head Office:-</b>  1 <sup>st</sup> Floor , Paras Downtown Saquare Mall, Mohali, Chandigarh - 140603 
         <br />
        </span>
      </div>
        <div className="flex items-center gap-3 sm:gap-4 py-2">
        <HoverImage
          pngSrc={locationPngImage.src}
          gifSrc={locationGifimage.src}
          alt="location"
          className="w-7 sm:w-9 p-1 rounded-xl bg-white flex-shrink-0"
        />
        <span className="leading-relaxed">
         <b> Regional Office:-</b>  137-D, Mohabewala industrial Area Near Windlas BioTech Limited, Dehradun, Uttarkhand - 248001   
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 py-2">
        <HoverImage
          pngSrc={contactPngImage.src}
          gifSrc={Contactgifimage.src}
          alt="phone"
          className="w-7 sm:w-9 p-1 rounded-xl bg-white flex-shrink-0"
        />
        <span className="leading-relaxed">
          +91-6398530495
          <br />
          +91-8439821578
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 py-2">
        <HoverImage
          pngSrc={emailPngImage.src}
          gifSrc={emailGifimage.src}
          alt="email"
          className="w-7 sm:w-9 p-1 rounded-xl bg-white flex-shrink-0"
        />
        <span className="break-all sm:break-words leading-relaxed">
          <b>info@growchip.in</b>
        </span>
      </div>
    </div>

    {/* Products */}
    <div>
      <h4 className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
        Our Services 
      </h4>
      <ul className="space-y-1.5 sm:space-y-2">
        <li><a href="#" className="hover:text-blue-400">Website Development </a></li>
        <li><a href="#" className="hover:text-blue-400">Custom Software Development  </a></li>
        <li><a href="#" className="hover:text-blue-400">E-commerce Website  Development  </a></li>
        <li><a href="#" className="hover:text-blue-400">Search Engine Optimization (SEO)</a></li>
        <li><a href="#" className="hover:text-blue-400">Social Media optimization (SMO)</a></li>
        <li><a href="#" className="hover:text-blue-400">Google Ads </a></li>
        <li><a href="#" className="hover:text-blue-400">Meta Ads </a></li>
        <li><a href="#" className="hover:text-blue-400">Email Marketing </a></li>
        <li><a href="#" className="hover:text-blue-400">Whatsapp Marketing  </a></li>
        <li><a href="#" className="hover:text-blue-400">AI Video Creation</a></li>
        
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
        Quick Links
      </h4>
      <ul className="space-y-1.5 sm:space-y-2">
        <li><a href="#" className="hover:text-blue-400">About</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
        
      </ul>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 sm:gap-5 lg:gap-6">
      <img src={faceBookIcon.src} alt="Facebook" className="w-7 h-8   sm:w-9 sm:h-10 sm:w-9 lg:" />
      <img src={twitterIcon.src} alt="Twitter" className="w-7  h-8    sm:w-9 sm:h-10 sm:w-9 lg:" />
      <img src={instagramIcon.src} alt="Instagram" className="w-7 h-8 sm:w-9 sm:h-10 sm:w-9 lg:" />
    </div>
  </div>

  {/* Bottom Footer */}
  <div
    className=" bg-[#1c1e20] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-4 sm:py-5 text-xs sm:text-sm lg:text-base "
  >
    <img
      src={copyrightIcon.src}
      alt="copyright"
      className="w-4 sm:w-5"
    />
    <p className="text-center ">
      2026 Growchip AI Technologies   Pvt. Ltd. All Rights Reserved. 
    </p>
  </div>
</footer>

    </>
  );
}

export default Footers;
