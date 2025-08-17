import Image from "next/image";
import Footer from '@/components/Footer';

export default function Home() {
  const featuredProjects = [
    {
      title: "AI Analytics Dashboard",
      description: "A powerful dashboard for real-time data analysis using artificial intelligence",
      image: "/window.svg",
      tech: ["React", "TensorFlow", "Next.js"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with seamless payment integration",
      image: "/globe.svg",
      tech: ["Next.js", "Stripe", "MongoDB"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Social Media App",
      description: "Real-time social networking platform with modern features",
      image: "/file.svg",
      tech: ["React", "Socket.io", "Node.js"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Innovation Through Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We create cutting-edge digital solutions that transform businesses and enhance user experiences.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                About Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                We are a team of passionate developers and designers dedicated to creating 
                exceptional digital experiences. With expertise in modern web technologies,
                we help businesses transform their ideas into reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-600 dark:text-gray-300">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  <span className="text-gray-600 dark:text-gray-300">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-600 dark:text-gray-300">100% Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">Pushing boundaries with cutting-edge solutions</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600 dark:text-gray-300">Delivering excellence in every project</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600 dark:text-gray-300">24/7 dedicated customer support</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Agility</h3>
                <p className="text-gray-600 dark:text-gray-300">Fast and flexible development process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Explore some of our recent work and innovations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mb-6`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-6 h-6 dark:invert"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
