import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileImage from "./ProfileImage";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Create refs for the elements to animate
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      // Animation for the text content

      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // Animation starts when the top of the element hits 80% of the viewport
          end: "bottom 20%", // Animation ends when the bottom of the element hits 20% of the viewport
          toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
        },
      });

      // Animation for the image
      gsap.from(imageRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, 100); 

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-[Montserrat] bg-gradient-to-r from-blue-50 to-white">
      {/* Hero Section */}
      <div id="home" className="flex gap-10 flex-col-reverse lg:flex-row place-items-center justify-between p-10 md:p-20 bg-gradient-to-r from-blue-50 to-white">
        {/* Text Content */}
        <div ref={textRef} className="text-center md:text-left max-w-[700px] mt-10 md:mt-0 flex flex-col place-items-center">
          <h3 className="text-sm uppercase text-gray-500 tracking-widest w-full md:text-center lg:text-start">This is me</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800 md:text-center lg:text-start w-full">Shail Bala Tripathy</h1>
          <span className="mt-4 block text-lg text-gray-600 md:text-center lg:text-start w-full">Legal Technologist | Entrepreneur | AI Advocate</span>
          <p className="text-gray-600 mt-4 leading-8 text-justify md:text-pretty lg:text-start">
            Welcome to my professional space where law converges with innovation. I’m Shail Bala Tripathy—a lawyer reimagined as a legal technologist and designer, committed to transforming the legal landscape through cutting-edge technology.
          </p>
          <div className="w-full flex place-content-center lg:place-content-start">
            
          <a  href="#who-am-i" class="bg-blue-400 mt-5 cursor-pointer text-white border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" >
            <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Discover Now
          </a>

          </div>
        </div>

        {/* Image */}
        {/* <div ref={imageRef} className="w-full md:w-auto md:mb-10">
          <img
            src="https://img.freepik.com/free-photo/front-view-young-attractive-lady-colorful-flower-designed-shirt-blue-skirt-white_140725-18475.jpg?t=st=1741973084~exp=1741976684~hmac=2589e80036c6dbab05246207daf530f889b3de43bb333e56feefc1333875e932&w=996"
            alt="Shail Bala Tripathy"
            className="w-full md:w-[500px] rounded-lg border-4 border-blue-500 p-2 shadow-lg transform transition duration-300"
          />
        </div> */}

        <ProfileImage/>
      </div>
    </div>
  );
};

export default Hero;