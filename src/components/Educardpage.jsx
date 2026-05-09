import Educard from "./Educard";

const Educardpage = () => {
  const education = [
    {
      id: 1,
      image: "/book.svg",
      institution: "CGC University, Mohali",
      degree: "B.tech CSE (AI & Data science)",
      year: "2023 - 2027",
      cgpa : "8.78"
    },
    {
      id: 2,
      image: "/earthg.svg",
      institution: "GMSSS Chandigarh Sec-22A",
      degree: "Non-Med (CBSE)",
      year: "2022 - 2023",
      cgpa : "72%"
    },
    {
      id: 3,
      image: "/lamplight.svg",
      institution: "Garden Valley International School",
      degree: "High School (CBSE)",
      year: "2020 - 2021",
      cgpa : "91%"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-20">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-xl font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">
            Education
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="h-full">
                <Educard
                  image={edu.image}
                  university={edu.institution}
                  degree={edu.degree}
                  year={edu.year}
                  cgpa={edu.cgpa}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Educardpage;
