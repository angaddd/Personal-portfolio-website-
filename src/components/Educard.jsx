const Educard = ({
  image,
  degree,
  university,
  year,
  cgpa,
}) => {
  return (
    <div className="bg-[#f6f2ef] hover:bg-[#F5D484] rounded-2xl shadow-md p-6 border border-gray-200 h-full flex flex-col">
       {/* Image 
        <img
          src={image}
          alt={degree}
          className="w-16 h-16 mt-7 ml-5 mb-10 object-contain"
        />

      {/* Content */}
      <div className="flex flex-col flex-grow gap-4">
        
        {/* Degree + Year */}
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-base font-semibold leading-snug flex-1">
            {degree}
          </h3>

          <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
            {year}
          </span>
        </div>

        {/* University + CGPA */}
        <div className="flex justify-between items-center gap-3">
          <p className="text-gray-600 text-sm flex-1">
            {university}
          </p>

          <span className="text-sm font-medium text-pink-500 whitespace-nowrap flex-shrink-0">
            {cgpa}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Educard;