import Image from 'next/image';

export default function CurriculumPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Curriculum
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            A comprehensive and balanced educational program
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Academic Excellence
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Educational Framework
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Designed to nurture intellectual growth and personal development
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: "Primary School (I-V)",
                description:
                  "Focus on foundational literacy, numeracy, and holistic development through interactive learning methods.",
                features: [
                  "English, Hindi, Mathematics, EVS",
                  "Art, Music, and Physical Education",
                  "Computer Literacy",
                  "Value Education",
                ],
              },
              {
                name: "Middle School (VI-VIII)",
                description:
                  "Expanding knowledge base with introduction to new subjects and critical thinking skills.",
                features: [
                  "Science, Social Studies",
                  "Third Language (Sanskrit/Hindi)",
                  "Computer Applications",
                  "Life Skills Education",
                ],
              },
              {
                name: "Secondary (IX-X)",
                description:
                  "Preparing for board examinations with a balanced approach to academics and co-curricular activities.",
                features: [
                  "English, Hindi, Mathematics, Science, Social Science",
                  "Information Technology",
                  "Health and Physical Education",
                  "Work Education",
                ],
              },
              {
                name: "Senior Secondary (XI-XII)",
                description:
                  "Specialized streams to prepare students for higher education and career paths.",
                features: [
                  "Science Stream (PCM/PCB)",
                  "Commerce Stream",
                  "Humanities Stream",
                  "Vocational Courses",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
