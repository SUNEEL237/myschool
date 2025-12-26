// src/app/facilities/page.tsx
import Image from 'next/image';

export default function Facilities() {
  const facilities = [
    {
      name: 'Modern Classrooms',
      description: 'Spacious, well-lit classrooms equipped with smart boards and modern teaching aids to enhance the learning experience.',
      image: '/images/facilities/classroom.jpg'
    },
    {
      name: 'Science Laboratories',
      description: 'Fully equipped labs for Physics, Chemistry, and Biology with the latest equipment and safety measures in place.',
      image: '/images/facilities/lab.jpg'
    },
    {
      name: 'Library',
      description: 'A vast collection of books, periodicals, and digital resources in a quiet, comfortable environment for study and research.',
      image: '/images/facilities/library.jpg'
    },
    {
      name: 'Sports Complex',
      description: 'State-of-the-art sports facilities including indoor and outdoor courts, swimming pool, and athletic tracks.',
      image: '/images/facilities/sports.jpg'
    },
    {
      name: 'Auditorium',
      description: 'A 500-seat auditorium with advanced audio-visual equipment for school events and performances.',
      image: '/images/facilities/auditorium.jpg'
    },
    {
      name: 'Cafeteria',
      description: 'A clean and hygienic dining area serving nutritious meals and snacks for students and staff.',
      image: '/images/facilities/cafeteria.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover opacity-30"
            src="/images/facilities/hero.jpg"
            alt="School facilities"
            width={1920}
            height={600}
            priority
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Facilities</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            World-class infrastructure designed to provide the best learning environment for our students.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">World-Class Infrastructure</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our campus is equipped with modern facilities to support academic excellence and overall development.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0 h-48 relative">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {facility.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Tour */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Experience Our Campus</span>
            <span className="block text-indigo-200">Schedule a tour today</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Book a Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}