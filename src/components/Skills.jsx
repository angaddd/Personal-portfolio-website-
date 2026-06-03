import React from "react";

const skillsData = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "Java"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "React", "TensorFlow"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Redis"],
  },
  {
    title: "Backend & Web",
    skills: [
      "REST APIs",
      "HTTP",
      "JSON",
      "WebSockets",
      "Authentication",
      "JWT",
      "Sessions",
      "Cookies",
      "CORS",
      "CSRF Protection",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Event-driven Architecture",
      "Message Queues",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Figma", "Kaggle"],
  },
  {
    title: "Core CS",
    skills: [
      "DSA",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "System Design",
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-white relative mx-auto w-full  overflow-hidden px-8 py-24">

      {/* Background Logos */}

      <i className="fa-brands fa-python absolute left-10 top-10 text-[90px] text-[#3776ab]/10"></i>

      <i className="fa-brands fa-react absolute right-20 top-20 text-[100px] text-cyan-400/10"></i>

      <i className="fa-brands fa-js absolute bottom-16 left-20 text-[90px] text-yellow-400/10"></i>

      <i className="fa-brands fa-java absolute bottom-10 right-16 text-[90px] text-orange-400/10"></i>

      <i className="fa-brands fa-github absolute left-[40%] top-[65%] text-[80px] text-black/10"></i>

      <i className="fa-solid fa-database absolute left-[45%] top-[25%] text-[100px] text-pink-300/10"></i>

      {/* Doodles */}

      <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border-4 border-dashed border-pink-300 opacity-20"></div>

      <div className="absolute bottom-10 left-[35%] text-8xl text-purple-300/20">
        ✦
      </div>

      {/* Content */}

      <div className="bg-white z-10">

         <div className="flex items-center justify-center gap-8 mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-xl font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">
            My skills
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 ml-36 mr-36 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {skillsData.map((category, index) => (
            <div
              key={index}
              className="rounded-[10px] border border-black/5 bg-white/60 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="mb-5 text-2xl font-semibold text-black">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-pink-500"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;