import React from "react";
import { useState } from "react";

import Landing from "../assets/Landing.webP";
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section id="/home">
    <div className="relative h-screen w-full">
      <img
        src={Landing}
         alt="Find Your Perfect Home with UrbanKey"
          loading="eager"
  fetchPriority="high"
  decoding="async"
        className="absolute w-full h-full object-cover"
        
      />
      <div className="absolute w-full h-full bg-black/50  "></div>
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-white">
        <h1 className="text-2xl font-bold">UrbanKeys</h1>

        <ul className="hidden md:flex space-x-8">
          <a href="#home"><li className="hover:text-gray-400 bg-shadow-lg">Home</li></a>
          <a href="#about"><li className="hover:text-gray-400">About</li></a>
          <a href="#projects"><li className="hover:text-gray-400">Projects</li></a>
          <a href="#testimonials"><li className="hover:text-gray-400">Testimonials</li></a>
           <a href="#contact"><li className="hover:text-gray-400">Contact</li></a>
        </ul>

        <button className="bg-white hidden md:block text-black px-4 py-2 rounded cursor-pointer hover:bg-blue-500 hover:text-white">
          Sign Up
        </button>

        <button 
          className="cursor-pointer md:hidden text-3xl "
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-6 py-6 md:hidden z-20 list-none">
          <a className="hover:text-gray-400" href="#home"><li>Home</li></a>
          <a className="hover:text-gray-400" href="#about"><li>About</li></a>
          <a className="hover:text-gray-400" href="#projects"><li>Projects</li></a>
          <a className="hover:text-gray-400" href="#testimonials"><li>Testimonials</li></a>
            <a className="hover:text-gray-400" href="#contact"><li>Contact</li></a>
          <button className="cursor-pointer bg-white text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
            Sign Up
          </button>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center -mt-16  text-white px-4  pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl">
          Explore homes that fit your dreams
        </h1>

        <div className="mt-8 flex space-x-4 pointer-events-auto">
          <a href="#projects">
            <button className="cursor-pointer bg-white text-black px-6 py-3 rounded font-semibold transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
              Projects
            </button>
          </a>

          <a href="#contact">
            <button className="cursor-pointer bg-blue-500 px-6 py-3 rounded font-semibold transition-all duration-300 ease-in-outhover hover:bg-blue-600 hover:scale-105 hover:shadow-xl">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Home;
