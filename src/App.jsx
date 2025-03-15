import { useState, useEffect } from "react";
import './App.css';
import { BeyondTheOffice } from './components/BeyondTheOffice';
import { Connect } from './components/Connect';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { WhatIDo } from './components/WhatIDo';
import { WhoAmI } from './components/WhoAmI';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { MyPhilosophy } from "./components/MyPhilosopy";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowScroll(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='w-full flex flex-col bg-gradient-to-r from-blue-50 to-white overflow-x-hidden'>
      <Navbar />
      <Hero />
      <WhoAmI />
      <WhatIDo />
      <MyPhilosophy/>
      <BeyondTheOffice />
      <Connect />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
