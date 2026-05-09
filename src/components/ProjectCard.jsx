const ProjectCard = ({ image, title, subtitle, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="w-full h-full p-4 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        {/* Image Section */}
        <div className="max-h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl group-hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-sm font-semibold text-[#1b1325] mb-2">
            {title}
          </h3>
          <p className="text-gray-500 text-xs">
            {subtitle}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
