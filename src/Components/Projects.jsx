import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Home1 from "../assets/Properties/House1.jpg";
import Home2 from "../assets/Properties/House2.jpg";
import Home3 from "../assets/Properties/House3.jpg";
import Home4 from "../assets/Properties/House4.jpg";
import Home5 from "../assets/Properties/House5.jpg";
import Home6 from "../assets/Properties/House6.jpg";
import Home7 from "../assets/Properties/House7.jpg";
import ProjectCard from "./ProjectCard";

const project = [
  {
    id: 1,
    price: "£780,000",
    title: " Cozy Home in Birmingham",
    address: "3 Harbour View, BS1 5TY",
    area: "900 sqft",
    beds: "3 bed",
    baths: "2 bath",
    image: Home1
  },
  {
    id: 2,
    price: "£650,000",
    title: "Luxury Villa in Manchester",
    address: "12 Green Park, M14 6PL",
    area: "1200 sqft",
    beds: "4 bed",
    baths: "3 bath",
    image: Home2
  },
  {
    id: 3,
    price: "£520,000",
    title: "Modern mansion in Bristol",
    address: "8 Maple Street, B15 2TT",
    area: "850 sqft",
    beds: "3 bed",
    baths: "2 bath",
    image: Home3
  },
  {
    id: 4,
    price: "£890,000",
    title: "Premium House in London",
    address: "22 Oxford Road, W1D 1BS",
    area: "1400 sqft",
    beds: "5 bed",
    baths: "4 bath",
    image: Home4
  },
  {
    id: 5,
    price: "£430,000",
    title: "Family House in Leeds",
    address: "5 Rose Avenue, LS1 4AB",
    area: "780 sqft",
    beds: "2 bed",
    baths: "1 bath",
    image: Home5
  },
  {
    id: 6,
    price: "£710,000",
    title: "Elegant Home in Liverpool",
    address: "10 River View, L3 5RT",
    area: "1000 sqft",
    beds: "3 bed",
    baths: "2 bath",
    image: Home6
  },
  {
    id: 7,
    price: "£980,000",
    title: "Luxury Mansion in Cambridge",
    address: "1 King Street, CB2 1TN",
    area: "1800 sqft",
    beds: "6 bed",
    baths: "5 bath",
    image: Home7
  }
];
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);      // lg
      else if (window.innerWidth >= 768) setVisibleCount(2);  // md
      else setVisibleCount(1);                                 // sm
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  const maxIndex = Math.max(0, project.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <div className="mb-16">

      {/* Intro */}
         <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
         OUR JOURNEY OF SUCCESS 
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Projects{" "}
          <span className="font-normal italic underline underline-offset-8 decoration-1 text-gray-700">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Every completed project is a place where families start new memories.
        </p>
      </div>

      {/*  slider*/}
      <div className="relative px-8 md:max-w-5xl sm:max-w-xl mx-auto">

        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border flex items-center justify-center transition-all
            ${currentIndex === 0
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white"
            }`}
        >
           <ChevronLeft/>

        
        </button>

       
        <div className="overflow-hidden mx-6">

          {/* Track — slides left/right via translateX */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {project.map((item, index) => (
              <div
                key={index}
                className="shrink-0 px-2"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <ProjectCard
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  address={item.address}
                  area={item.area}
                  beds={item.beds}
                  baths={item.baths}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Next Button */}
        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className={` cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border flex items-center justify-center transition-all
            ${currentIndex >= maxIndex
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white"
            }`}
        >
         <ChevronRight/>
        </button>
      </div>

      {/* Dot slider */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-5 bg-gray-800" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
