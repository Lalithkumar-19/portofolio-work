import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the timeline styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faFilm, faLaptopCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const WhatIDo = () => {
  // Create refs for the timeline elements
  const timelineRef = useRef(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded before initializing animations
    const timer = setTimeout(() => {
      // Select all timeline elements
      const timelineElements = gsap.utils.toArray(".vertical-timeline-element");

      // Animate each timeline element
      timelineElements.forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport
            end: "bottom 20%", // Animation ends when the bottom of the element hits 20% of the viewport
            toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
          },
        });
      });
    }, 100); // Delay of 100ms to ensure the DOM is ready

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="what-i-do" className="font-[Montserrat] bg-gradient-to-r from-blue-50 to-white py-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          What I Do
        </h2>

        {/* Timeline */}
        <VerticalTimeline layout="1-column" lineColor="#3b82f6" ref={timelineRef}>
          {/* Intellectual Property */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#ffffff", color: "#1e293b", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faLightbulb} />}
          >
            <h3 className="text-xl font-semibold text-blue-600">Intellectual Property</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>
                <span className="font-medium">IP Filings & Registrations:</span>
                <span className="p-2">
                  Guiding startups, MSMEs, and established companies to secure and manage their trademarks, copyrights, and patents.
                </span>
              </li>
              <li>
                <span className="font-medium">Litigation & Portfolio Strategy:</span> Defending and leveraging IP assets through meticulous management, audits, and strategic litigation support.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Media & Entertainment Law */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#ffffff", color: "#1e293b", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faFilm} />}
          >
            <h3 className="text-xl font-semibold text-blue-600">Media & Entertainment Law</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>
                <span className="font-medium">Contract Negotiation:</span> Advising film studios, creative agencies, and other entertainment professionals on drafting and negotiating contracts that capture both creative and commercial value.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Tech & Data Compliance */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#ffffff", color: "#1e293b", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="text-xl font-semibold text-blue-600">Tech & Data Compliance</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>
                <span className="font-medium">AI & Data:</span> Utilizing artificial intelligence to enhance data security, streamline compliance, and optimize legal operations both locally and internationally.
              </li>
              <li>
                <span className="font-medium">Technology Compliance:</span> Offering tailored advice to ensure that tech-centric companies adhere to evolving regulatory standards.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Commercial & Corporate Advisory */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#ffffff", color: "#1e293b", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="text-xl font-semibold text-blue-600">Commercial & Corporate Advisory</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>
                <span className="font-medium">Strategic Guidance:</span> Delivering customized legal counsel to mid-sized companies across industries such as FMCG, fashion, and health tech.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};