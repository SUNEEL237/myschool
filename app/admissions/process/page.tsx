// app/admissions/process/page.tsx
export default function AdmissionProcessPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Admission Process
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Your journey to academic excellence starts here
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            How to Apply
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Admission Procedure
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow these simple steps to secure your child's future with us
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Inquiry & Registration",
                description: "Submit an online inquiry form or visit our campus to collect the prospectus and registration form.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "School Visit & Interaction",
                description: "Schedule a campus tour and meet with our admission counselors to learn more about our programs.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Submit Application",
                description: "Complete the application form with all required documents and submit it before the deadline.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                step: "04",
                title: "Assessment & Interaction",
                description: "Students may be required to take an assessment test and attend an interaction session.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              },
              {
                step: "05",
                title: "Admission Decision",
                description: "Receive the admission decision and complete the enrollment process upon acceptance.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={`lg:flex items-center w-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-5/12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-2/12">
                    <div className="flex items-center justify-center h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <div className="lg:hidden mt-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="lg:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin?</h3>
            <p className="text-gray-600 mb-6">
              Start your child's educational journey with us today. Our admission team is here to guide you through every step of the process.
            </p>
            <a
              href="/admissions/apply"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Apply Now
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}