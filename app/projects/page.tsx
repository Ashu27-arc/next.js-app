export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A cutting-edge web application built with Next.js and React",
      tech: ["Next.js", "React", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with seamless user experience",
      tech: ["React Native", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Project Three",
      description: "AI-powered data analytics dashboard",
      tech: ["Python", "TensorFlow", "React"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6">
          Our Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore our latest work and innovations in web development and technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
