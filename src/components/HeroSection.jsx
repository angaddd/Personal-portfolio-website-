const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20 mb-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
      
      {/* LEFT SIDE */}
      <div className="relative flex justify-center">
        
        {/* Yellow Circle */}
        <div className="absolute w-[330px] h-[330px] bg-[#f6ce63] rounded-full top-10 left-50"></div>

        {/* Ring */}
        <div className="absolute w-[400px] h-[400px] border-[10px] border-[#f6ce63] rounded-full opacity-60"></div>

        {/* Image */}
        <img
          src="./girl.png"
          alt="profile"
          className="relative z-10 w-[300px] h-[300px]object-cover rounded-[40px] hover:shadow-3xl transition-shadow duration-300"
        />
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h1 className="text-[70px] leading-none font-black text-[#1b1325]">
          Hey There
        </h1>

        {/* Blue Line */}
        <div className="w-[350px] h-1 bg-[#59c3e6] rounded-full mt-2 mb-10"></div>

        <p className="text-[16px] leading-[1.75] text-[#616060] font-Inter">
          I'm Angad, an aspiring Software Engineer skilled in backend engineering, Object-Oriented Programming, and scalable system design,
with hands-on experience in building RESTful APIs, event-driven architectures, and full-stack applications using
Django, FastAPI, MySQL. Familiar with distributed systems, API integrations, and CRM workflows, and has solved
more than 700 DSA problems, demonstrating strong analytical and problem-solving abilities. Interested in backend
engineering and consulting-driven roles.
          <span className="font-semibold underline">
            {" "}
            Feel-Good Productivity.
          </span>
        </p>
        
        <a href= "https://drive.google.com/file/d/1wnhXDw-C_dzaFXsQNIjOk_H2k7uiJa_1/view">
        <button className="mt-8 px-8 py-4 bg-[#59c3e6] text-white text-xl font-semibold rounded-full hover:bg-[#4a9fbf] transition-colors duration-300">
          view my resume
        </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;