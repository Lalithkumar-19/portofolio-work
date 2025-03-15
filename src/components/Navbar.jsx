import React, { useEffect, useState } from 'react'
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
        setIsMenuOpen(false); // Close menu after clicking a link
      });
    });
  }, []);
''
  useEffect(()=>{
   const handleScroll=()=>{
        setIsMenuOpen(false);
    }
    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);



  return (
    <>
     <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0 z-50">
        <div className="text-xl font-semibold text-blue-600">Shail Bala Tripathy</div>

        <div className="hidden lg:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</a>
          <a href="#who-am-i" className="text-gray-700 hover:text-blue-500 transition duration-300">Who Am I</a>
          <a href="#what-i-do" className="text-gray-700 hover:text-blue-500 transition duration-300">What I Do</a>
          <a href="#my-philosophy" className="text-gray-700 hover:text-blue-500 transition duration-300">My Philosophy</a>
          <a href="#beyond-the-office" className="text-gray-700 hover:text-blue-500 transition duration-300">Beyond The Office</a>
          <a href="#connect" className="text-gray-700 hover:text-blue-500 transition duration-300">Connect </a>
          
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-white shadow-md p-5 space-y-4 absolute w-full top-16 left-0 z-40">
         <a href="#home" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</a>
          <a href="#who-am-i" className="text-gray-700 hover:text-blue-500 transition duration-300">Who Am I</a>
          <a href="#what-i-do" className="text-gray-700 hover:text-blue-500 transition duration-300">What I Do</a>
          <a href="#my-philosophy" className="text-gray-700 hover:text-blue-500 transition duration-300">My Philosophy</a>
          <a href="#beyond-the-office" className="text-gray-700 hover:text-blue-500 transition duration-300">Beyond The Office</a>
          <a href="#connect" className="text-gray-700 hover:text-blue-500 transition duration-300">Connect </a>
         
        </div>
      )}
      </>
  )
}

export default Navbar