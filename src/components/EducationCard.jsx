const EducationCard = ({
  image,
  institution,
  degree,
  field,
  year,
  description
}) => {
  return (
    <div className="bg-[#FCF9F7] rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">

      {/* Image at top */}
      <img
        src={image}
        alt=""
        className="w-16 h-16 mb-5 object-contain"
      />

      {/* Text content */}
      <div className="mb-4">
        <h3 className="text-2xl font-lora text-[#1b1325] mb-2">
          {degree}
        </h3>

        <p className="text-[#59c3e6] font-semibold text-lg">
          {institution}
        </p>
      </div>

      <div className="mb-4 space-y-2">
        <p className="text-gray-600">
          <span className="font-semibold"></span> {field}
        </p>

        <p className=" text-xs text-gray-600">
          <span className="font-semibold"></span> {year}
        </p>
      </div>

      <p className=" text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default EducationCard;
