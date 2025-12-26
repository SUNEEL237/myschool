import Image from 'next/image';

export default function HistoryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Celebrating 30+ Years of Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">History</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-blue-100 leading-relaxed">
              A legacy of educational excellence spanning decades, shaping future leaders with knowledge, values, and innovation
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor">
            <path d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"></path>
          </svg>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Journey</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Milestones in Our History
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              From humble beginnings to becoming a leading educational institution
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: '1990',
                  title: 'Foundation',
                  description: 'Rajput Public School was founded with a vision to provide quality education to the local community, starting with just 50 students and 5 dedicated teachers.',
                  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  details: 'The foundation stone was laid by the local community leader with a vision to bring quality education to rural areas.'
                },
                {
                  year: '1995',
                  title: 'First Graduating Class',
                  description: 'Our first batch of students graduated, with many going on to prestigious universities and successful careers.',
                  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  details: 'All 15 students passed with flying colors, setting a high standard for future batches.'
                },
                {
                  year: '2005',
                  title: 'Campus Expansion',
                  description: 'We expanded our campus with new classrooms, science labs, and a library, enhancing our educational facilities.',
                  image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  details: 'The expansion was inaugurated by the Minister of Education, marking a new chapter in our growth.'
                },
                {
                  year: '2015',
                  title: 'Silver Jubilee',
                  description: 'Celebrated 25 years of educational excellence with various academic and cultural events throughout the year.',
                  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  details: 'The year-long celebration included seminars, cultural programs, and alumni reunions.'
                },
                {
                  year: '2020',
                  title: 'Digital Transformation',
                  description: 'Implemented comprehensive digital learning solutions, ensuring uninterrupted education during challenging times.',
                  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  details: 'Our digital transformation was recognized as a model for other educational institutions.'
                },
                {
                  year: '2023',
                  title: 'New Sports Complex',
                  description: 'Inaugurated a state-of-the-art sports complex to promote physical education and sports excellence.',
                  image: 'https://images.unsplash.com/photo-1541534741688-60713c12f21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                  details: 'The complex includes facilities for cricket, basketball, swimming, and indoor sports.'
                }
              ].map((item, index) => (
                <div key={item.year} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white font-bold shadow-lg">
                      {item.year}
                    </div>
                    <div className="absolute w-12 h-12 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Image Container */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                          <div className="aspect-w-16 aspect-h-9 h-64 md:h-80">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-semibold text-gray-700">{item.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`mt-8 md:mt-0 md:w-7/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="md:hidden mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      <p className="text-sm text-gray-500 italic">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Founders Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Legacy</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Founders
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Visionaries who laid the foundation of excellence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Er. Suneel Rajput',
                role: 'Founder & First Principal',
                description: 'A visionary educator with a passion for holistic development, he established the school with the motto "Knowledge is Power".',
                image: '/images/about/founder1.jpg',
                achievements: ['Pioneer in rural education', 'Established academic excellence', 'Promoted value-based education']
              },
              {
                name: 'Mr. Rahul Rajput',
                role: 'Co-Founder',
                description: 'A pioneer in women\'s education, she championed inclusive education and community development initiatives.',
                image: '/images/about/founder2.jpg',
                achievements: ['Advocate for girls\' education', 'Community development leader', 'Established scholarship programs']
              },
              {
                name: 'Mrs. Shivani Rajput',
                role: 'First Chairman',
                description: 'A respected academician who helped establish the school\'s reputation for academic excellence and discipline.',
                image: '/images/about/founder3.jpg',
                achievements: ['Educational policy expert', 'Research mentor', 'Infrastructure development']
              }
            ].map((person, index) => (
              <div key={person.name} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-600">Photo: {person.image.split('/').pop()}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">{person.role}</p>
                  <p className="text-gray-600 mb-4">{person.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Contributions</p>
                    <ul className="space-y-1">
                      {person.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Anthem Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our School Anthem</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-medium italic text-gray-700 leading-relaxed mb-6">
                  "Forward we march with hearts so true,<br />
                  In wisdom's light, our spirits grew.<br />
                  Rajput Public, proud and strong,<br />
                  In your shelter we belong."
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-600 mx-auto mb-6"></div>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Composed in 1992 by our first music teacher, the school anthem continues to inspire generations of students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}