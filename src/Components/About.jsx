import React from "react";
import AboutImg from "../assets/About!.jpg";


const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "12+", label: "Projects Completed" },
  { value: "20+", label: "Mn. Sq. Ft. Delivered" },
  { value: "25+", label: "Ongoing Projects" },
];

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
          Who We Are
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          About{" "}
          <span className="font-normal italic underline underline-offset-8 decoration-1 text-gray-700">
            Our Brand
          </span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          We don't just sell properties — we help you find a place to call home.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg shrink-0">
          <img
            src={AboutImg}
            alt="About our brand"
            className="w-full h-90 sm:h-110 object-cover rounded-2xl shadow-2xl"
          />

          <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-blue-500 text-white px-5 py-4 rounded-2xl shadow-xl text-center min-w-22.5">
            <span className="block text-2xl font-bold leading-none">10+</span>
            <span className="block text-xs mt-1 opacity-80 tracking-wide">
              Years Trusted
            </span>
          </div>
        </div>

        <div className="pl-10 flex flex-col gap-8 flex-1 pt-6 lg:pt-0 w-full">
          {/* Stats */}
          <div className=" grid grid-cols-2 gap-x-8 gap-y-6 ">
            {stats.map((stat, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="w-16 h-0.5 bg-linear-to-r from-blue-500 to-gray-200 rounded-full" />
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-xl">
            <span className="font-semibold text-gray-900">
              Finding the right home
            </span>{" "}
            is one of life's most important decisions. We're here to make that
            journey{" "}
            <span className="font-semibold text-gray-900">
              simple, transparent, and rewarding
            </span>
            . With dedication and care, we help you discover a place{" "}
            <span className="font-semibold text-gray-900">
              where memories will grow and your future will begin
            </span>
            .
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 self-start bg-blue-500 hover:bg-blue-500 active:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
