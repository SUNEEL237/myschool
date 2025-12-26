import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="/images/academics/ground.png"
            alt="School building"
            width={1920}
            height={600}
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Empowering students with knowledge, skills, and values for a better tomorrow.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Established in 1990, Public School has been a beacon of excellence in education for over three decades. 
                What began as a small institution with just a handful of students has grown into a premier educational 
                institution known for academic excellence and holistic development.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Our journey has been marked by a commitment to providing quality education that goes beyond textbooks, 
                focusing on character building, critical thinking, and real-world skills.
              </p>
            </div>
            <div className="mt-12 relative lg:mt-0">
              <div className="relative mx-auto w-full rounded-lg shadow-lg">
                <Image
                  className="w-full rounded-lg"
                  src="/images/academics/acheavement.png"
                  alt="Our history"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <div className="mt-6">
                <p className="text-lg text-gray-500">
                  To provide a nurturing and stimulating learning environment that empowers students to achieve 
                  their full potential, develop a love for lifelong learning, and become responsible global citizens 
                  who contribute positively to society.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Vision
              </h2>
              <div className="mt-6">
                <p className="text-lg text-gray-500">
                  To be recognized as a center of excellence in education that develops innovative, 
                  compassionate, and ethical leaders who will shape a better future for our global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Our Core Values
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        These principles guide everything we do at Public School
      </p>
    </div>

    <div className="mt-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: 'Excellence',
            description: 'We strive for the highest standards in all aspects of education and personal development.',
            icon: (
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            name: 'Integrity',
            description: 'We uphold the highest standards of honesty, ethics, and moral principles.',
            icon: (
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )
          },
          {
            name: 'Respect',
            description: 'We value and appreciate the diversity and dignity of all individuals.',
            icon: (
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            name: 'Innovation',
            description: 'We embrace creativity and forward-thinking approaches to learning and teaching.',
            icon: (
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            name: 'Community',
            description: 'We foster a sense of belonging and responsibility towards our school and society.',
            icon: (
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )
          },
          {
            name: 'Lifelong Learning',
            description: 'We cultivate curiosity and a passion for continuous growth and development.',
            icon: (
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            )
          },
        ].map((value) => (
          <div key={value.name} className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:shadow-md transition-shadow duration-200">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    {value.icon}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
                <p className="mt-4 text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>

      {/* Leadership Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Meet the dedicated professionals leading our institution
            </p>
          </div>

          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Shri. Amar Singh',
                role: 'Principal',
                bio: 'With over 20 years of experience in education, Dr. Johnson leads with vision and dedication to academic excellence.',
                image: '/images/team/principal.jpg'
              },
              {
                name: 'Mrs. Shivani Rajput',
                role: 'Vice Principal',
                bio: 'An experienced educator focused on student development and innovative teaching methodologies.',
                image: '/images/team/vice-principal.jpg'
              },
              {
                name: 'Mrs. Sakshi Rajput',
                role: 'Teacher',
                bio: 'Passionate about curriculum development and ensuring the highest standards of teaching and learning.',
                image: '/images/team/academics.jpg'
              },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                  <p className="mt-2 text-gray-500">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Parents & Students Say
            </h2>
          </div>

          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Public School has provided an excellent learning environment for my child. The teachers are dedicated and caring.",
                author: 'Robert Johnson',
                role: 'Parent of Grade 5 Student'
              },
              {
                quote: "The school's focus on holistic development has helped my child grow not just academically but also as a responsible individual.",
                author: 'Maria Garcia',
                role: 'Parent of Grade 8 Student'
              },
              {
                quote: "As an alumnus, I can confidently say that the foundation I received at Public School prepared me well for college and beyond.",
                author: 'David Kim',
                role: 'Alumnus, Class of 2020'
              },
            ].map((testimonial, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="inline-block bg-indigo-500 rounded-lg p-2">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="mt-6 text-base text-gray-600 italic">"{testimonial.quote}"</p>
                    <div className="mt-6">
                      <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
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
