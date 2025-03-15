import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProfileImage = () => {

  const imageRef=useRef(null);
  useEffect(() => {
   
    const timer = setTimeout(() => {

      // Animation for the image
      gsap.from(imageRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, 100); 

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={imageRef} className="relative flex justify-center items-center bg-gradient-to-r from-blue-100 to-blue-300 p-10 rounded-lg">
      {/* Blue Square Frame */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 rounded-lg"></div>

      {/* Floating Dots Effect */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-2 left-5"></div>
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-16 right-8"></div>
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-6 left-12"></div>
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full bottom-10 right-5"></div>
      </div>

      {/* Profile Image */}
      <img
        src="https://img.freepik.com/premium-photo/portrait-young-woman-against-white-background_1048944-13095526.jpg?w=740"
        alt="Shail Bala Tripathy"
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg object-contain shadow-xl border-4 border-white"
      />
    </div>
  );
};

export default ProfileImage;
