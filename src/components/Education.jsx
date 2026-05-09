import EducationCard from "./EducationCard";

const Education = () => {
  const education = [
    {
      id: 1,
      image: "/book.svg",
      institution: "Devhive ",
      degree: "Technical head",
      field: "College Technical Club",
      year: "2025 - 2026",
      description: "Designed and curated DSA problems for the 100 Days Coding Challenge, promoting consistent coding practice. Organised many technical events."
    },
    {
      id: 2,
      image: "/earthg.svg",
      institution: "Wiztron",
      degree: "Technical Head",
      field: "College Technical Club",
      year: "2024 - 2025",
      description: "Contributed to machine learning and deep learning projects within the college IoT technical club.Built ML models using regression, classification, and neural networks.Participated in workshops on model training, evaluation, and deployment"
    },
    {
      id: 3,
      image: "/lamplight.svg",
      institution: "CGC university",
      degree: "Among Top 5% students",
      field: "B.tech CSE",
      year: "2023 - 2027",
      description: "Ranked among the top 5% of students in the department for academic excellence. Among Top 50 students in CSE branch (includes Specialisation) under DCPD "
    },
     {
      id: 4,
      image: "/paperplane.svg",
      institution: "(5 offline, 4 online)",
      degree: "Participated in 9+ Hackathons",
      field: "Technical events",
      year: "2023 - Present",
      description: "Participated in 9 hackathons (5 offline, 4 online), building prototypes under tight timelines at different colleges and universities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-20">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-xl font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">
            Volunteering Experience
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {education.filter((_, index) => index % 2 === 0).map((edu) => (
              <EducationCard
                key={edu.id}
                image={edu.image}
                institution={edu.institution}
                degree={edu.degree}
                field={edu.field}
                year={edu.year}
                description={edu.description}
              />
            ))}
          </div>

          {/* Right Column - Offset by half card height */}
          <div className="space-y-8 lg:mt-32">
            {education.filter((_, index) => index % 2 === 1).map((edu) => (
              <EducationCard
                key={edu.id}
                image={edu.image}
                institution={edu.institution}
                degree={edu.degree}
                field={edu.field}
                year={edu.year}
                description={edu.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
