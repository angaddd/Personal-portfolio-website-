import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      id: 1,
      link : "https://github.com/angaddd/AI-based-sales-representative-crm-model",
      image: "https://i.pinimg.com/736x/1f/b0/e7/1fb0e7271263d3870c93d20821966559.jpg",
      title: "AI-powered customer conversion Platform",
      subtitle: "Django | React | Tailwind | MySql | Celery"
    },
    {
      id: 2,
      link : "https://github.com/angaddd/chat_application",
      image: "https://i.pinimg.com/1200x/da/a9/2b/daa92b998250a7db5986a84ccdf8567c.jpg",
      title: "Chat Application",
      subtitle: "Django | Channels | React | Redis"
    },
    {
      id: 3,
      link : "https://github.com/angaddd/Social-media-project",
      image: "https://i.pinimg.com/1200x/29/45/ae/2945aefdb047a4970f2871b71745d0fa.jpg",
      title: "Social Media Project",
      subtitle: "Django | React | MySql"
    },
    {
      id: 4,
      link : "https://github.com/angaddd/django_course_project",
      image: "https://i.pinimg.com/1200x/ce/af/a7/ceafa72cfaaa93debe88189d21a8959b.jpg",
      title: "Course Selling Application",
      subtitle: "Django | React | MySql"
    },
    {
      id: 5,
      link : "https://github.com/angaddd/The-CRUD-operation-app",
      image: "https://i.pinimg.com/1200x/bc/5b/67/bc5b67fb6815fedeb8ba818ac14faeb4.jpg",
      title: "CRUD operation app",
      subtitle: "Django | React | MySql"
    },
    {
      id: 6,
      link : "https://github.com/angaddd/N-Queens-Visualiser-",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXFZVM5Rv4TNvqMRXwoPhHnImtX4I4kv1Sg&s",
      title: "N-Queens Visualiser",
      subtitle: "Python | Javascript"
    }
  ];

  return (
    <section className="py-20 bg-[#f6f2ef]">
      <div className="max-w-7xl mx-auto px-20">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-xl font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">
            Some of my latest work
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
          {projects.map((project) => (
            <ProjectCard
              link={project.link}
              key={project.id}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
