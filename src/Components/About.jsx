import React from "react";
import AboutImg from "../Assets/About!.jpg";
function About() {
  return (
    <div>
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold mb-4">
          About{" "}
          <span className="font-normal underline underline-offset-4 decoration-1">
            Our Brand
          </span>
        </h1>
        <p className="text-gray-500">We don't just sell Properties</p>
        <p className="text-gray-500">We help you find a place to call home</p>
      </div>
      <section className=" flex  m-10 gap-10 md:justify-evenly">
        <div className="">
          <img className="w-80 h-120  sm:w-120" src={AboutImg} alt="" />
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-10"> 
          <div>
            <h1 className="text-4xl font-semibold">10+</h1>
            <p>Years of Excellence</p>
          </div>

          <div>
            <h1 className="text-4xl font-semibold">12+</h1>
            <p>Projects Completed</p>
          </div>

          <div>
            <h1 className="text-4xl font-semibold">20+</h1>
            <p>Mn. Sq. Ft.Delivered</p>
          </div>

          <div>
            <h1 className="text-4xl font-semibold">25+</h1>
            <p>ongoing Projects</p>
          </div> 
        </div>
        
            <p className="max-w-lg  text-gray-600 leading-relaxed mt-4 text-center">
              <span className="font-semibold">Finding the right home</span> is
              one of life’s most important decisions. We’re here to make that
              journey{" "}
              <span className="font-semibold">
                simple, transparent, and rewarding
              </span>
              . With dedication and care, we help you discover a place
              <span className="font-semibold">
                where memories will grow and your future will begin
              </span>
              .
            </p>
  
         </div>
      </section>
    </div>
  );
}

export default About;
