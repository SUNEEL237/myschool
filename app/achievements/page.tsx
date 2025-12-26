import Image from 'next/image';
import Link from 'next/link';

export default function AchievementsPage() {
  const achievements = [
    {
      year: '2023',
      title: 'National Excellence in Education Award',
      description: 'Recognized for outstanding academic performance and innovative teaching methods.',
      image: '/images/academics/acheavement.png',
    },
    {
      year: '2022',
      title: 'Sports Championship Winners',
      description: 'Our school team won the inter-school sports championship for the third consecutive year.',
      image: '/images/academics/acheavement.png',
    },
    {
      year: '2021',
      title: 'Best Science Project Award',
      description: 'Our students won first place in the national science fair with their innovative project.',
      image: '/images/academics/acheavement.png',
    },
    {
      year: '2020',
      title: 'Green School Certification',
      description: 'Awarded for our commitment to environmental sustainability and eco-friendly practices.',
      image: '/images/academics/acheavement.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/academics/acheavement.png"
            alt="School Achievements"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Achievements</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Celebrating excellence, innovation, and success in education
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-xl font-medium text-gray-900">Board Exam Pass Rate</div>
              <p className="text-gray-600 mt-2">Consistently high academic performance</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-xl font-medium text-gray-900">State Level Awards</div>
              <p className="text-gray-600 mt-2">Recognized for excellence in various fields</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">2000+</div>
              <div className="text-xl font-medium text-gray-900">Successful Alumni</div>
              <p className="text-gray-600 mt-2">Making a difference worldwide</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey of Excellence</h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative group">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 -ml-px">
                    <div className="absolute top-0 left-1/2 w-4 h-4 -ml-2 rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors"></div>
                  </div>
                  <div className="ml-8">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="md:w-1/3">
                          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <Image
                              src={achievement.image}
                              alt={achievement.title}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <div className="text-sm font-semibold text-indigo-600">{achievement.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mt-1">{achievement.title}</h3>
                          <p className="mt-2 text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Be Part of Our Success Story</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of learners and achievers. Together, we can create more success stories.
            </p>
            <Link
              href="/admissions"
              className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}