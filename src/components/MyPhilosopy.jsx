import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const MyPhilosophy = () => {
  // Create refs for the elements to animate
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded before initializing animations
    const timer = setTimeout(() => {
      // Animation for the text content
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport
          end: "bottom 20%", // Animation ends when the bottom of the element hits 20% of the viewport
          toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
        },
      });

      // Animation for the image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
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
    <div id="my-philosophy" className="font-[Montserrat] bg-gradient-to-r from-blue-50 to-white py-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          My Philosophy: Legal Technology in Action
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div ref={textRef} className="flex-1 text-gray-600 text-lg leading-8">
            <p className="mb-6">
              I believe the future of law lies at the intersection of legal expertise and technological innovation. My passion for embedding legal design principles into everyday legal practice fuels my mission: to transform complex legal frameworks into accessible, user-friendly solutions.
            </p>
            <p>
              By integrating AI and deep tech into legal operations, I’m committed to building systems that are not only smarter but also more efficient for the digital age.
            </p>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex-1 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/front-view-young-attractive-lady-colorful-flower-designed-shirt-blue-skirt-white_140725-18475.jpg?t=st=1741973084~exp=1741976684~hmac=2589e80036c6dbab05246207daf530f889b3de43bb333e56feefc1333875e932&w=996"
              alt="Legal Technology in Action"
              className="w-full md:w-[400px] rounded-lg border-4 border-blue-500 p-2 shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};