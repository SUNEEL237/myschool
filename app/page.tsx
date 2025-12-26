"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section with Fully Transparent Text */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src="/images/academics/ground.png"
              alt="School campus"
              fill
              priority
              style={{ objectPosition: 'center' }}
            />
            {/* Video Play Button with Pulsing Animation */}
            <div className="absolute bottom-8 right-8 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoOpen(true);
                }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group relative"
                aria-label="Play video"
              >
                {/* Pulsing Ring Effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          {/* A subtle dark overlay to make the text pop more */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                aria-label="Close video"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full rounded-lg shadow-2xl"
                  controls
                  autoPlay
                >
                  <source src="/videos/0_Family_Children_3840x2160.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
        <div className="relative z-10 flex items-start h-full pt-32 md:pt-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Text with shadow for readability, no background */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                Welcome to
                <span className="block text-indigo-200">Public School</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 drop-shadow-lg">
                Nurturing young minds with excellence in education, character building, and holistic development since 1990.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admissions"
                  className="px-8 py-4 bg-indigo-600/80 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Apply Now
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Better Way to Learn and Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our school provides an environment where students can thrive academically, socially, and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Experienced Faculty',
                description: 'Our dedicated team of experienced educators is committed to student success.',
                icon: '👨‍🏫',
                bgClass: 'from-blue-400 to-blue-600'
              },
              {
                name: 'Modern Facilities',
                description: 'State-of-the-art classrooms, labs, and sports facilities for holistic development.',
                icon: '🏫',
                bgClass: 'from-purple-400 to-purple-600'
              },
              {
                name: 'Extracurricular Activities',
                description: 'Wide range of sports, arts, and cultural activities to nurture diverse talents.',
                icon: '⚽',
                bgClass: 'from-green-400 to-green-600'
              },
              {
                name: 'Technology Integration',
                description: 'Smart classrooms and digital learning resources for 21st-century education.',
                icon: '💻',
                bgClass: 'from-red-400 to-red-600'
              },
              {
                name: 'Inclusive Education',
                description: 'Supportive environment for students with diverse learning needs.',
                icon: '♿',
                bgClass: 'from-yellow-400 to-yellow-600'
              },
              {
                name: 'Career Guidance',
                description: 'Comprehensive counseling and career guidance programs for students.',
                icon: '🎯',
                bgClass: 'from-indigo-400 to-indigo-600'
              },
            ].map((feature) => (
              <div key={feature.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${feature.bgClass}`}></div>
                <div className="p-8">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Achievements Section */}
      <div className="relative py-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover"
            src="/images/academics/acheavement.png"
            alt="School achievements"
            fill
            priority
            style={{ objectPosition: 'center', opacity: 0.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-xl text-white/90">Board Exam Pass Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-xl text-white/90">State Level Awards</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-xl text-white/90">Successful Alumni</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/achievements"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition duration-300 shadow-xl"
            >
              View All Achievements
            </Link>
          </div>
        </div>
      </div>

      {/* Latest News Section with Google Images */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest News & Announcements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings at Public School.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Annual Sports Day 2023',
                description:
                  'Join us for our annual sports day event featuring various competitions and activities for students of all ages.',
                date: 'Nov 12, 2023',
                category: 'Event',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              },
              {
                title: 'New Science Lab Inauguration',
                description: 'Our new state-of-the-art science lab is now open, equipped with modern equipment for practical learning.',
                date: 'Nov 5, 2023',
                category: 'Facilities',
                image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              },
              {
                title: 'Summer Camp Registrations Open',
                description: 'Enroll your child in our exciting summer camp program with various activities and learning opportunities.',
                date: 'Oct 28, 2023',
                category: 'Programs',
                image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              },
            ].map((post) => (
              <div key={post.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    className="w-full h-full object-cover"
                    src={post.image}
                    alt={post.title}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.date}</span>
                    <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}