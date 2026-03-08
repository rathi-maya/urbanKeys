import React from "react";
import { useState } from "react";

import Landing from "../Assets/Landing.jpg";
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative h-screen w-full">
      <img
        src={Landing}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black/50"></div>
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-white">
        <h1 className="text-2xl font-bold">Real Estate</h1>

        <ul className="hidden md:flex space-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Testimonials</li>
        </ul>

        <button className="bg-white hidden md:block text-black px-4 py-2 rounded">
          Sign Up
        </button>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
         <div className="absolute top-20 left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-6 py-6 md:hidden z-20">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <button className="bg-white text-black px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center -mt-10 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl">
          Explore homes that fit your dreams
        </h1>

        <div className="mt-8 flex space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded font-semibold">
            Projects
          </button>

          <button className="bg-blue-500 px-6 py-3 rounded font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
