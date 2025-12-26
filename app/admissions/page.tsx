// src/app/admissions/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Admissions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center p-0">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/academics/admision.png"
              alt="School Campus"
              width={2560}
              height={1200}
              className="w-full h-full object-cover"
              priority
              quality={100}
              unoptimized={true}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              Admissions
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-lg">
              Begin your journey with Public School. Learn about our admission process, requirements, and important dates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900">Admission Process</h2>
            <div className="mt-6 space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">1. Application</h3>
                <p className="mt-2 text-gray-600">
                  Complete the online application form and submit the required documents. The application fee is $50 (non-refundable).
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">2. Assessment</h3>
                <p className="mt-2 text-gray-600">
                  Students will be invited for an assessment test and interview. The assessment helps us understand the student's academic level and learning needs.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">3. Review</h3>
                <p className="mt-2 text-gray-600">
                  Our admissions committee will review the application, assessment results, and any additional materials submitted.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">4. Decision</h3>
                <p className="mt-2 text-gray-600">
                  Families will be notified of the admission decision within two weeks of the assessment. Accepted students will receive an enrollment package.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Required Documents</h2>
              <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Completed application form</li>
                  <li>Copy of birth certificate</li>
                  <li>Copy of immunization records</li>
                  <li>Most recent school report card (if applicable)</li>
                  <li>Standardized test scores (if available)</li>
                  <li>Two passport-sized photographs</li>
                  <li>Any psychological or educational evaluations (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-indigo-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Important Dates</h3>
              <div className="mt-4 space-y-4">
                {[
                  { date: 'January 15, 2024', event: 'Application opens for new students' },
                  { date: 'March 1, 2024', event: 'Early application deadline' },
                  { date: 'April 15, 2024', event: 'Regular application deadline' },
                  { date: 'May 1, 2024', event: 'Financial aid application deadline' },
                  { date: 'May 15, 2024', event: 'Admission decisions released' },
                  { date: 'June 1, 2024', event: 'Enrollment deadline' },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-indigo-200 pl-4">
                    <p className="text-sm font-medium text-indigo-700">{item.date}</p>
                    <p className="text-sm text-gray-600">{item.event}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Tuition & Fees</h3>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">Kindergarten - Grade 5: $12,000/year</p>
                  <p className="text-sm text-gray-600">Grade 6 - Grade 8: $14,000/year</p>
                  <p className="text-sm text-gray-600">Grade 9 - Grade 12: $16,000/year</p>
                  <p className="mt-2 text-sm text-gray-500">* Financial aid and scholarships available</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact Admissions
                </Link>
                <Link
                  href="#"
                  className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Download Brochure
                </Link>
              </div>
            </div>

            <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Virtual Tour</h3>
              <div className="mt-4 aspect-w-16 aspect-h-9 bg-gray-100 rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">Take a virtual tour of our campus</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Virtual Tour
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                question: 'What is the student-to-teacher ratio?',
                answer: 'Our average class size is 18 students with a student-to-teacher ratio of 10:1, ensuring personalized attention for each student.'
              },
              {
                question: 'Do you offer financial aid?',
                answer: 'Yes, we offer need-based financial aid to qualified families. Approximately 30% of our students receive some form of financial assistance.'
              },
              {
                question: 'What are the school hours?',
                answer: 'School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Extended care is available before and after school for an additional fee.'
              },
              {
                question: 'Do you offer transportation?',
                answer: 'Yes, we provide bus transportation to various neighborhoods. Please contact our transportation office for routes and availability.'
              },
              {
                question: 'What extracurricular activities are available?',
                answer: 'We offer a wide range of extracurricular activities including sports, music, arts, robotics, debate, and various clubs to cater to diverse interests.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to apply?</span>
                <span className="block">Start your journey today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Join our community of learners and discover the difference of a Public School education.
              </p>
              <Link
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Students in classroom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}