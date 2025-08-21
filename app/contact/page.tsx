'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-80 w-full mb-12 rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 shadow-xl">
          <Image
            src="/images/contact-banner.jpg"
            alt="Contact us"
            fill
            className="object-cover scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto pb-16">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-8 border border-gray-200/60 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:ring-1 hover:ring-blue-500/20">
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100' 
                  : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur"
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur"
                  required
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-purple-600/25 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-200 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
