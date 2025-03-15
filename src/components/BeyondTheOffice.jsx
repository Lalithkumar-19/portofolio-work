import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BeyondTheOffice = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

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

      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        });
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="beyond-the-office" className="font-[Montserrat] bg-gradient-to-r from-blue-50 to-white py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Beyond the Office
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div ref={textRef} className="flex-1 text-gray-600 text-lg leading-8">
            <p className="mb-6">
              Outside of my legal practice, I am a thought leader and active public speaker. My TEDx talk, “Beyond Greenwashing” at IMI Kolkata, reflects my dedication to environmental advocacy and sustainable innovation. I also contribute to open-source projects, particularly within the WordPress community, and share my insights on Medium, fostering engaging discussions on law, technology, and society.
            </p>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex-1 flex justify-center">
            <img
              src="https://img.freepik.com/premium-photo/waist-up-portrait-uneasy-sad-gloomy-young-brunette-woman-glasses-looking-pointing_1258-21824.jpg?w=996"
              alt="Beyond the Office"
              className="w-full md:w-[400px] rounded-lg border-4 border-blue-500 p-2 shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Ventures & Impact Initiatives */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            Ventures & Impact Initiatives
          </h3>

          {/* Responsive Timeline */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "ipgyan Consulting LLP",
                  description: "Empowering clients to protect and grow their ventures with comprehensive legal services.",
                },
                {
                  title: "Ipgyan Technologies Private Limited",
                  description: "Pioneering legal tech solutions that simplify and innovate legal processes.",
                },
                {
                  title: "Cox Studio",
                  description: "A creative venture focused on brand building and marketing for forward-thinking creatives.",
                },
                {
                  title: "Podcast – “Keeping Up with Shail”",
                  description: "An upcoming series exploring the dynamic interplay between law, technology, and entrepreneurship.",
                },
                {
                  title: "Creators Legal Awareness Program (CLAP)",
                  description: "A pro bono initiative designed to equip creative minds with essential legal knowledge.",
                },
              ].map((item, index) => (
                <div key={index} className="timeline-item flex items-start gap-6">
                  {/* Timeline Indicator */}
                  <div className="w-10 h-10 flex-shrink-0 bg-blue-500 text-white flex items-center justify-center font-bold rounded-full shadow-lg">
                    {index + 1}
                  </div>

                  {/* Content Box */}
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 w-full">
                    <h4 className="text-xl font-semibold text-blue-600">{item.title}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
