import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-80 w-full mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/images/about-banner.jpg"
            alt="Team working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          </div>
        </div>
        <div className="space-y-16 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to our website! We are a dedicated team passionate about creating
            amazing digital experiences.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to deliver high-quality solutions that help businesses and
            individuals achieve their goals through innovative technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500"></div>
                <span className="text-gray-600 dark:text-gray-300">Innovation in everything we do</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500"></div>
                <span className="text-gray-600 dark:text-gray-300">Customer satisfaction first</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500"></div>
                <span className="text-gray-600 dark:text-gray-300">Continuous learning and improvement</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500"></div>
                <span className="text-gray-600 dark:text-gray-300">Transparent and honest communication</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Our Approach</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We believe in creating meaningful solutions that make a real difference. Our approach combines creativity with technical excellence to deliver outstanding results.</p>
              <p>Every project we undertake is an opportunity to push boundaries and explore new possibilities in technology and design.</p>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
