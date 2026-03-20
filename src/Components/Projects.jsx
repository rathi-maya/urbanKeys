import { useState, useEffect } from "react";
import Home1 from "../assets/Properties/House1.jpg";
import ProjectCard from "./ProjectCard";

const project = [
  {
    image: Home1,
    price: "£1,273,279",
    title: "Detached home in Bournemouth",
    address: "29 Terrace Rd, BH2 5EL",
    area: "1634 sqft",
    beds: "5 bed",
    baths: "3 bath",
  },
  {
    image: Home1,
    price: "£950,000",
    title: "Semi-detached in Manchester",
    address: "14 Oak Street, M1 2AB",
    area: "1200 sqft",
    beds: "4 bed",
    baths: "2 bath",
  },
  {
    image: Home1,
    price: "£2,100,000",
    title: "Luxury Villa in London",
    address: "8 Kensington Ave, W8 4PT",
    area: "3200 sqft",
    beds: "6 bed",
    baths: "5 bath",
  },
  {
    image: Home1,
    price: "£780,000",
    title: "Modern Flat in Bristol",
    address: "3 Harbour View, BS1 5TY",
    area: "900 sqft",
    beds: "3 bed",
    baths: "2 bath",
  },
  {
    image: Home1,
    price: "£1,450,000",
    title: "Countryside Cottage in Bath",
    address: "22 Meadow Lane, BA2 7RQ",
    area: "2100 sqft",
    beds: "5 bed",
    baths: "3 bath",
  },
];

const Projects1 = () => {
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
    <div>

      {/* Intro */}
      <div className="text-center px-3">
        <h1 className="text-4xl font-bold mb-4">
          Projects{" "}
          <span className="font-normal underline underline-offset-4 decoration-1">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 mb-6">
          Every completed project is a place where families start new memories.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative px-8 md:max-w-5xl sm:max-w-xl mx-auto">

        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border flex items-center justify-center transition-all
            ${currentIndex === 0
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white"
            }`}
        >
         <span className="text-xl font-bold">&lt;</span>
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
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border flex items-center justify-center transition-all
            ${currentIndex >= maxIndex
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white"
            }`}
        >
          <span className="text-xl font-bold">&gt;</span>
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

export default Projects1;
