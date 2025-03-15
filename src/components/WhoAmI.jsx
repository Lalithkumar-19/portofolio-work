import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const WhoAmI = () => {
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
    }, 100); // Delay of 100ms to ensure the DOM is ready

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="who-am-i" className="font-[Montserrat] bg-gradient-to-r from-blue-50 to-white py-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Who I Am
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Text Content */}
          <div ref={textRef} className="flex-1 text-gray-600 text-lg leading-8">
            <p className="mb-6">
              I’m not your traditional lawyer. With extensive experience in intellectual property law, media and entertainment, technology law, and corporate matters, I’ve dedicated my career to integrating legal expertise with technological innovation.
            </p>
            <p className="mb-6">
              In 2019, I founded <span className="font-semibold text-blue-600">ipgyan Consulting LLP</span>, a full-service legal consultancy that provides robust advisory support across intellectual property, media, technology, commercial litigation, taxation, labor law, ESG compliance, and corporate audits.
            </p>
            <p>
              In 2024, I ventured further into the world of innovation by establishing <span className="font-semibold text-blue-600">Ipgyan Technologies Private Limited</span>. This enterprise focuses on developing legal tech products designed to simplify complex legal processes and enhance accessibility. My work now also embraces AI to streamline operations and boost data compliance for businesses across the globe.
            </p>
          </div>

          {/* Image Section */}
          {/* <div ref={imageRef} className="flex-1">
            <img
              src="https://img.freepik.com/premium-photo/portrait-young-woman-against-white-background_1048944-13095526.jpg?w=740"
              alt="Shail Bala Tripathy"
              className="w-full max-h-[700px] rounded-full p-2 shadow-lg"
            />
          </div> */}
          <div ref={imageRef} className="relative flex-1 flex items-center justify-center">
  {/* Background SVG */}
  <div className="absolute inset-0">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill="none"
    >
      <path
        fill="url(#grad1)"
        d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,144C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
      ></path>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ff6b6b", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ffcc5c", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  </div>

  {/* Profile Image */}
  <img
    src="https://img.freepik.com/premium-photo/portrait-young-woman-against-white-background_1048944-13095526.jpg?w=740"
    alt="Shail Bala Tripathy"
    className="relative z-10 w-full max-h-[500px] md:max-h-[700px] rounded-full p-4 shadow-2xl border-8 border-white"
  />
</div>

        </div>
      </div>
    </div>
  );
};