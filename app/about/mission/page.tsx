import Image from 'next/image';
import Link from 'next/link';

export default function MissionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Mission
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Empowering students to achieve excellence in education and become responsible global citizens.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Purpose</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shaping the Future Through Education
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At Rajput Public School, our mission is to provide a transformative educational experience that nurtures the intellectual, social, and emotional growth of every student.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Academic Excellence */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Academic Excellence</h3>
              <p className="mt-2 text-base text-gray-500">
                We strive for academic distinction through innovative teaching methods, comprehensive curriculum, and a commitment to lifelong learning.
              </p>
            </div>

            {/* Character Development */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Character Development</h3>
              <p className="mt-2 text-base text-gray-500">
                We foster integrity, respect, and responsibility, helping students develop strong moral character and ethical values.
              </p>
            </div>

            {/* Community Engagement */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Community Engagement</h3>
              <p className="mt-2 text-base text-gray-500">
                We actively engage with our community, promoting service, leadership, and global citizenship among our students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Guiding Principles
            </p>
            <p className="mt-4 text-xl text-gray-500">
              These core values guide everything we do at Rajput Public School
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Excellence',
                  description: 'We pursue the highest standards in academic achievement and character development.',
                },
                {
                  name: 'Integrity',
                  description: 'We uphold the highest standards of honesty, fairness, and ethical behavior.',
                },
                {
                  name: 'Respect',
                  description: 'We value diversity and treat all individuals with dignity and compassion.',
                },
                {
                  name: 'Responsibility',
                  description: 'We take ownership of our actions and their impact on our community and environment.',
                },
                {
                  name: 'Innovation',
                  description: 'We embrace creativity and continuous improvement in teaching and learning.',
                },
                {
                  name: 'Collaboration',
                  description: 'We work together as a community to achieve our common goals.',
                },
              ].map((value) => (
                <div key={value.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Join Our Community</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Be part of an educational institution that values excellence, integrity, and community.
          </p>
          <Link
            href="/apply"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
