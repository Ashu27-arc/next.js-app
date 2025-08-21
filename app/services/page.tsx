import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Responsive, SEO-friendly, and performant web apps using Next.js and modern stacks.',
      icon: '/window.svg',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile apps with great UX and reliable performance.',
      icon: '/globe.svg',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'UI/UX Design',
      description: 'Human-centered design, wireframes, and high-fidelity prototypes.',
      icon: '/file.svg',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Consulting',
      description: 'Architecture reviews, audits, roadmaps, and team enablement.',
      icon: '/globe.svg',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'SEO & Performance',
      description: 'Improve Core Web Vitals, accessibility, and search visibility.',
      icon: '/window.svg',
      gradient: 'from-indigo-500 to-sky-500',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable infra, CI/CD, and observability on modern cloud platforms.',
      icon: '/file.svg',
      gradient: 'from-rose-500 to-fuchsia-500',
    },
  ];

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative h-80 w-full mb-12 rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 shadow-xl">
          <Image
            src="/images/services-banner.png"
            alt="Our Services"
            fill
            className="object-cover scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
          </div>
        </div>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            End-to-end product development, design, and consulting to help you ship faster and smarter.
          </p>
        </div>

        {/* Services grid */}
        <section className="pb-8 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-8 border border-gray-200/60 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-blue-500/20">
                <div className={`w-12 h-12 bg-gradient-to-r ${s.gradient} rounded-full flex items-center justify-center mb-6`}>
                  <Image src={s.icon} alt={s.title} width={24} height={24} className="w-6 h-6 dark:invert" />
                </div>
                <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16">
          <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-8 border border-gray-200/60 dark:border-white/10 shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Ready to start?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Tell us about your project and we'll get back to you with a plan.</p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-purple-600/25 ring-1 ring-white/20 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
