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
      <footer style={{ fontFamily: "Segoe UI, Arial, sans-serif" }} className=" m-auto">
        {/** this block of the code is the uppr footer */}
        <div className=" bg-[#363738] flex  justify-center  gap-52 text-lg font-light p-20">
          <div>
            {/** this is the contact Block  */}
            <h4 className=" text-3xl mb-10">Contact Us </h4>

            {/** This is piont of the desing  */}
            <div className="  flex justify-start gap-10 p-2 items-center ">
              {/* Replace with your PNG and GIF paths in public/logo/ */}
              <div>
                <HoverImage
                  pngSrc={locationPngImage.src}
                  gifSrc={locationGifimage.src}
                  alt="location"
                  className="w-10   p-1  rounded-3xl bg-white"
                />
              </div>
              <span>
                Plot No.72/1 Tyagi Road , Dehradun- 248001,
                <br /> Uttarakhand, India
              </span>
            </div>
            <div className="flex gap-10 justify-start items-center p-2">
              <div>
                <HoverImage
                  pngSrc={contactPngImage.src}
                  gifSrc={Contactgifimage.src}
                  alt="location"
                  className="w-10   p-1  rounded-4xl bg-white"
                />
              </div>
              <span>
                +91-7088014041
                <br />
                +91-7060249961
              </span>
            </div>

            <div className="flex gap-10 justify-start items-center p-2">
              <HoverImage
                pngSrc={emailPngImage.src}
                gifSrc={emailGifimage.src}
                alt="location"
                className="w-10   rounded-4xl  p-1 bg-white"
              />
              <span>
                <b>zoniclifeScience.sale@gmail.com</b>
                <br />

                <b>zoniclifeScience.med@gmail.com</b>
              </span>
            </div>

            {/**this is end of the first part of the footer */}
          </div>

          <div>
            {/* this is start  the Products block of this  */}
            <h4 className=" text-3xl mb-10"> Products</h4>
        <span className="text-xl">
              <a href="">About</a><br />
              <a href="">Contact</a><br />
              <a href="">Blogs</a><br />
              <a href="">Get Franchise</a> <br />
            </span>
            {/* this  is end  the product block of this   */}
          </div>

          <div>
            <h4 className="text-3xl mb-10"> Quick Links</h4>
            <span className="text-xl">
              <a href="">About</a><br />
              <a href="">Contact</a><br />
              <a href="">Blogs</a><br />
              <a href="">Get Franchise</a> <br />
            </span>
          </div>

          <div className=" flex gap-6">
            {/** this block  collection soical media icon  */}
          
            
              <div> <img src={faceBookIcon.src} alt="FaceBookIcon" />
              </div>
              <div>  <img src={twitterIcon.src} alt=" TwitterIcon" /></div>
              <div><img src={instagramIcon.src} alt="Instgram" /></div>
             
           
          </div>
        </div>
        <div className="flex bg-[#1c1e20]  justify-center items-center p-6 text-xl gap-6 ">
          <img src={copyrightIcon.src} alt="copyrightIcon" />{" "}
          <p>2025 Life Seciences. All rigth reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footers;
