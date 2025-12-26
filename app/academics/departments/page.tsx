import Image from 'next/image';

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Science",
      description:
        "Fostering scientific temper and research skills through hands-on experiments and inquiry-based learning.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    },
    {
      name: "Humanities",
      description:
        "Exploring human culture, society, and thought to develop critical thinking and analytical skills.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3",
      subjects: ["History", "Geography", "Political Science", "Economics"],
    },
    {
      name: "Languages",
      description:
        "Mastering communication skills and exploring world literature and cultures.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3",
      subjects: ["English", "Hindi", "Sanskrit", "French"],
    },
    {
      name: "Commerce",
      description:
        "Preparing students for the world of business, finance, and entrepreneurship.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3",
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
    },
    {
      name: "Computer Science",
      description:
        "Developing computational thinking and programming skills for the digital age.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3",
      subjects: ["Computer Science", "Informatics Practices", "AI", "Web Development"],
    },
    {
      name: "Physical Education",
      description:
        "Promoting physical fitness, sportsmanship, and healthy lifestyle habits.",
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3",
      subjects: ["Sports", "Yoga", "Health Education", "First Aid"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Departments
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Specialized academic departments fostering excellence in education
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Academic Divisions
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Departments
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Each department is staffed by expert educators dedicated to student success
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0 h-48 overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {dept.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {dept.description}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900">
                    Key Subjects:
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {dept.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
