// app/admissions/scholarships/page.tsx
export default function ScholarshipsPage() {
  const scholarships = [
    {
      name: "Merit Scholarship",
      description: "Awarded to students who demonstrate exceptional academic performance in their previous academic year.",
      amount: "Up to 50% tuition fee waiver",
      eligibility: "Minimum 90% marks in previous class",
      deadline: "April 30, 2025"
    },
    {
      name: "Sports Excellence Scholarship",
      description: "For students who have represented at district/state/national level in any sports.",
      amount: "25-75% tuition fee waiver",
      eligibility: "Sports achievements at district level or above",
      deadline: "Rolling"
    },
    {
      name: "Sibling Scholarship",
      description: "Special discount for families with multiple children enrolled in our school.",
      amount: "15% fee concession for the second child, 25% for third child",
      eligibility: "Siblings currently enrolled in the school",
      deadline: "N/A"
    },
    {
      name: "Single Parent Scholarship",
      description: "Financial assistance for students from single-parent families.",
      amount: "Up to 30% tuition fee waiver",
      eligibility: "Valid proof of single parent status",
      deadline: "May 15, 2025"
    },
    {
      name: "Alumni Scholarship",
      description: "For children of our alumni who wish to continue the legacy.",
      amount: "20% tuition fee waiver",
      eligibility: "Parent must be an alumnus of our school",
      deadline: "April 30, 2025"
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Scholarships
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Making quality education accessible to deserving students
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Financial Aid
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Scholarship Programs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We believe in rewarding excellence and supporting deserving students
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{scholarship.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{scholarship.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-gray-900">Amount:</span> {scholarship.amount}
                    </div>
                    <div className="mt-2 flex items-start text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span><span className="font-medium text-gray-900">Eligibility:</span> {scholarship.eligibility}</span>
                    </div>
                    {scholarship.deadline !== "N/A" && (
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-gray-900">Deadline:</span> {scholarship.deadline}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/admissions/apply?scholarship=true"
                    className="text-base font-medium text-blue-600 hover:text-blue-500"
                  >
                    Apply for scholarship <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for Scholarships</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Check Eligibility</h4>
                  <p className="mt-1 text-gray-600">Review the eligibility criteria for each scholarship to ensure you qualify.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Prepare Documents</h4>
                  <p className="mt-1 text-gray-600">Gather all necessary documents, including academic records, proof of income, and any required recommendation letters.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Submit Application</h4>
                  <p className="mt-1 text-gray-600">Complete the online application form and upload all required documents before the deadline.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium mr-4 flex-shrink-0">4</span>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Interview (if required)</h4>
                  <p className="mt-1 text-gray-600">Some scholarships may require an interview as part of the selection process.</p>
                </div>
              </li>
            </ol>
            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us for More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}