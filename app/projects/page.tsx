import Footer from '@/components/Footer';
import Image from 'next/image';

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
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 w-full mb-12 rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 shadow-xl">
          <Image
            src="/images/project-banner.jpg"
            alt="Projects showcase"
            fill
            className="object-cover scale-[1.02]"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Our Projects</h1>
          </div>
        </div>
        
        <div className="pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Explore our latest work and innovations in web development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-8 border border-gray-200/60 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:ring-1 hover:ring-blue-500/20 h-full flex flex-col"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative flex-grow">
                  <div className="h-48 w-full mb-6 rounded-xl overflow-hidden border border-gray-200/60 dark:border-white/10">
                    <Image
                      src={`/images/projects/project-${index + 1}.png`}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-base">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-full text-sm bg-gray-100/80 dark:bg-white/10 text-gray-700 dark:text-gray-300 backdrop-blur hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
