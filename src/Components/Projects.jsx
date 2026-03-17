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
    price: "£1,273,279",
    title: "Detached home in Bournemouth",
    address: "29 Terrace Rd, BH2 5EL",
    area: "1634 sqft",
    beds: "5 bed",
    baths: "3 bath",
  },
];

const Projects = () => {

  return (
    <div>
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

      <div className="">
  
         {project.map((item, index) => (
              <ProjectCard
                key={index}
                image={item.image}  
                price={item.price}
                title={item.title}
                address={item.address}
                area={item.area}
                beds={item.beds}
                baths={item.baths}
              />
            ))}


      </div>
    </div>
  );
};

export default Projects;
