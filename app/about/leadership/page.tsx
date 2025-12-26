import Image from 'next/image';

type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  achievements?: string[];
  email: string;
};

export default function LeadershipPage() {
  const leadershipTeam: Leader[] = [
    {
      name: 'Mr. Amar Singh',
      role: 'Principal',
      bio: 'With over 20 years of experience in education, Dr. Singh has been leading our institution with a vision for academic excellence and holistic development.',
      image: '/images/leadership/principal.jpg',
      qualifications: [
        'M.Ed. in School Administration',
        'B.Ed. with Distinction'
      ],
      achievements: [
        'National Award for Excellence in Education (2020)',
        'Author of 3 books on Educational Psychology',
        'Keynote speaker at 15+ international education conferences'
      ],
      email: 'principal@rajputpublicschool.edu'
    },
    {
      name: 'Mrs. Shivani Rajput',
      role: 'Vice Principal (Academics)',
      bio: 'Mrs. Shivani Rajput oversees the academic programs and ensures the implementation of innovative teaching methodologies across all grades.',
      image: '/images/leadership/vp-academics.jpg',
      qualifications: [
        'M.A. in English Literature',
        'B.Ed. with Specialization in Curriculum Development',
        'Certified in Advanced Teaching Methodologies'
      ],
      email: 'academics@rajputpublicschool.edu'
    },
    {
      name: 'Mrs. Sakshi Rajput',
      role: 'Vice Principal (Administration)',
      bio: 'Mrs. Sakshi Rajput the school infrastructure, resources, and administrative operations to create an optimal learning environment.',
      image: '/images/leadership/vp-admin.jpg',
      qualifications: [
        'M.A in School Management',
        'Diploma in Financial Management',
        'Certified in Educational Leadership'
      ],
      email: 'admin@rajputpublicschool.edu'
    },
    {
      name: 'Mrs. Shipli Rajput',
      role: 'Head of Academics (Primary)',
      bio: 'Mrs. Shipli Rajput leads our primary education program with a focus on foundational learning and child development.',
      image: '/images/leadership/primary-head.jpg',
      qualifications: [
        'B.Ed. in Primary Education',
        'Montessori Certification'
      ],
      email: 'primary@rajputpublicschool.edu'
    },
    {
      name: 'Mr. Rahul Rajput',
      role: 'Head of Academics (Secondary & Senior Secondary)',
      bio: 'Mr. Rahul Rajput oversees the secondary and senior secondary curriculum, ensuring academic rigor and college readiness.',
      image: '/images/leadership/secondary-head.jpg',
      qualifications: [
        'L.L.B in Educational Leadership',
        'B.Ed. in Science Education',
        'Certified in STEM Education'
      ],
      email: 'secondary@rajputpublicschool.edu'
    },
    {
      name: 'Mrs. Neha Rajput',
      role: 'Head of Student Welfare',
      bio: 'Mrs. Neha Rajput focuses on student well-being, counseling services, and extracurricular development programs.',
      image: '/images/leadership/welfare-head.jpg',
      qualifications: [
        'M.A. in Counseling Psychology',
        'B.Ed. in Special Education',
        'Certified Child Counselor',
        'Diploma in Student Welfare'
      ],
      email: 'welfare@rajputpublicschool.edu'
    }
  ];

  const boardMembers = [
    {
      name: 'Mr. Subhash Rajput',
      role: 'Chairman',
      designation: 'Renowned Educationist',
      image: '/images/board/chairman.jpg'
    },
    {
      name: 'Mr. Kalyan Singh',
      role: 'Vice Chairperson',
      designation: 'Social Worker & Philanthropist',
      image: '/images/board/vice-chair.jpg'
    },
    {
      name: 'Mr.Rahul Rajput',
      role: 'Treasurer',
      designation: 'Chartered Accountant',
      image: '/images/board/treasurer.jpg'
    },
    {
      name: 'Mrs. Shivani Rajput',
      role: 'Member',
      designation: 'Professor of Education',
      image: '/images/board/member1.jpg'
    },
    {
      name: 'Mrs. Skashi Rajput',
      role: 'Member',
      designation: 'Business Leader',
      image: '/images/board/member2.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Leadership Team
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Meet the dedicated professionals guiding our institution towards excellence
          </p>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Administration</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Senior Leadership Team
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experienced educators and administrators guiding our institution
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                  <p className="text-blue-200">{leader.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{leader.bio}</p>
                
                <h4 className="font-medium text-gray-900 mt-6 mb-2">Qualifications</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {leader.qualifications.map((qualification) => (
                    <li key={qualification} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {qualification}
                    </li>
                  ))}
                </ul>

                {leader.achievements && (
                  <>
                    <h4 className="font-medium text-gray-900 mt-6 mb-2">Notable Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {leader.achievements.map((achievement, index) => (
                        <li key={index} className="flex">
                          <span className="text-yellow-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-6">
                  <a 
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {leader.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Board of Directors */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Governance</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Board of Directors
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Distinguished individuals guiding our vision and strategic direction
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {boardMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="h-40 w-40 mx-auto bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    <span className="text-sm">Photo: {member.image.split('/').pop()}</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="text-sm text-gray-500">{member.designation}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Our Leadership Philosophy</h3>
            <div className="prose prose-blue max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                At Rajput Public School, we believe that effective leadership is about service, vision, and commitment to excellence. 
                Our leadership team works collaboratively to create an environment where every student can thrive academically, 
                socially, and emotionally. We are committed to:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Fostering a culture of continuous improvement and innovation in education</li>
                <li>Ensuring the highest standards of academic excellence and student achievement</li>
                <li>Promoting values of integrity, respect, and social responsibility</li>
                <li>Building strong partnerships with parents and the community</li>
                <li>Creating a safe, inclusive, and nurturing learning environment for all students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
