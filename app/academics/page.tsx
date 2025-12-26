// src/app/academics/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Academics() {
  const programs = [
    {
      name: 'Elementary School',
      description: 'Building strong foundations in core subjects while fostering creativity and curiosity.',
      grades: 'Kindergarten - Grade 5',
      image: '/images/academics/elementary.jpg'
    },
    {
      name: 'Middle School',
      description: 'Encouraging exploration and critical thinking through an engaging curriculum.',
      grades: 'Grade 6 - Grade 8',
      image: '/images/academics/middle.jpg'
    },
    {
      name: 'High School',
      description: 'Preparing students for college and beyond with advanced coursework and career guidance.',
      grades: 'Grade 9 - Grade 12',
      image: '/images/academics/highschool.jpg'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: '🧮' },
    { name: 'Science', icon: '🔬' },
    { name: 'Language Arts', icon: '📚' },
    { name: 'Social Studies', icon: '🌍' },
    { name: 'Foreign Languages', icon: '🗣️' },
    { name: 'Computer Science', icon: '💻' },
    { name: 'Visual & Performing Arts', icon: '🎨' },
    { name: 'Physical Education', icon: '⚽' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover opacity-30"
            src="/images/academics/hero.jpg"
            alt="Students in classroom"
            width={1920}
            height={600}
            priority
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Academics</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Excellence in education through innovative teaching and personalized learning experiences.
          </p>
        </div>
      </div>

      {/* Academic Programs */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Academic Programs</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We offer a comprehensive curriculum designed to challenge and inspire students at every level.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0 h-48 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={program.image}
                    alt={program.name}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {program.grades}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {program.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {program.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more<span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Curriculum</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A balanced and comprehensive curriculum that prepares students for success in college and beyond.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="col-span-1 flex flex-col text-center bg-white shadow rounded-lg p-6">
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="text-gray-900 text-sm font-medium">{subject.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Approach */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Teaching Approach</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe in fostering a love for learning through innovative teaching methods.
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Student-Centered Learning',
                  description: 'Our classrooms are designed around the needs of each student, with personalized learning plans and differentiated instruction.',
                  icon: '👥'
                },
                {
                  name: 'Project-Based Learning',
                  description: 'Students engage in hands-on projects that connect classroom learning to real-world applications.',
                  icon: '🔍'
                },
                {
                  name: 'Technology Integration',
                  description: 'We incorporate the latest educational technology to enhance learning and prepare students for the digital age.',
                  icon: '💻'
                },
                {
                  name: 'Collaborative Learning',
                  description: 'Students work together to solve problems, share ideas, and learn from one another in a supportive environment.',
                  icon: '🤝'
                }
              ].map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to learn more about our academics?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Contact our academic office to schedule a tour or speak with our faculty.
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}