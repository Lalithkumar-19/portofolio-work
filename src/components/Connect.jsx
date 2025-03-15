import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faWordpress,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Connect = () => {
  return (
    <div
      id="connect"
      className="font-[Montserrat] bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in">
          Let’s Connect
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          Whether you’re a startup, a corporate leader, or a creative visionary, I’m here to help you navigate the crossroads of legal strategy and technological innovation. Explore my portfolio, check out my latest blog posts, or join me on my upcoming podcast as we dive deep into the future of legal tech.
        </p>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          Connect with me on social media or drop a message to start a conversation about making law simpler, smarter, and more accessible.
        </p>


        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              href: "mailto:shail@ipgyan.com",
              icon: faEnvelope,
              text: "Email",
              color: "bg-red-500",
            },
            {
              href: "https://www.linkedin.com/in/shailbalatripathy/",
              icon: faLinkedin,
              text: "LinkedIn",
              color: "bg-blue-700",
            },
            {
              href: "https://x.com/Shail012Bala",
              icon: faTwitter,
              text: "Twitter",
              color: "bg-blue-500",
            },
            {
              href: "https://profiles.wordpress.org/shail12/",
              icon: faWordpress,
              text: "WordPress",
              color: "bg-gray-800",
            },
            {
              href: "https://www.ted.com/talks/shail_bala_tripathy_beyond_greenwashing",
              icon: faMicrophone,
              text: "TEDx",
              color: "bg-red-600",
            },
            {
              href: "https://shail012-tripathy.medium.com/",
              icon: faMedium,
              text: "Medium",
              color: "bg-black",
            },
            {
              href: "https://youtube.com/@keepingupwithshail?si=ss7EbrWFc6psEGS3",
              icon: faYoutube,
              text: "YouTube",
              color: "bg-red-700",
            },
          ].map(({ href, icon, text, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${color} text-white px-5 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl`}
            >
              <FontAwesomeIcon icon={icon} className="w-6 h-6" />
              <span className="text-lg font-semibold">{text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
