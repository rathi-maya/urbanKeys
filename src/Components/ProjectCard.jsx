const ProjectCard = ({ image, price, title, address, area, beds, baths }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[320px] mb-6">
      <img src={image} alt="" className="w-full h-40 object-cover rounded-t-3xl " />
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold">{price}</h2>
        <p className="font-semibold text-gray-700">{title}</p>
        <p className="text-sm text-gray-500">{address}</p>
        <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
          <span>📐 {area} </span>
          <span> 🛏️ {beds}</span>
          <span>🛁 {baths}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
