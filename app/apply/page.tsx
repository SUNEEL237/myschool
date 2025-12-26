'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

type FormData = {
  studentName: string;
  gender: string;
  dateOfBirth: string;
  fatherName: string;
  motherName: string;
  contactNumber: string;
  email: string;
  address: string;
  classApplyingFor: string;
  previousSchool: string;
  message: string;
};

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    gender: '',
    dateOfBirth: '',
    fatherName: '',
    motherName: '',
    contactNumber: '',
    email: '',
    address: '',
    classApplyingFor: '',
    previousSchool: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12 text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
              <CheckCircleIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Application Submitted Successfully!</h2>
            <p className="mt-4 text-lg text-gray-600">
              Thank you for applying to Rajput Public School. We've received your application and will review it shortly.
            </p>
            <p className="mt-2 text-gray-600">
              We'll contact you at <span className="font-medium">{formData.email}</span> for further steps.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Apply for Admission - Rajput Public School</title>
        <meta name="description" content="Apply for admission to Rajput Public School. Join our community of excellence in education." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Admission Application
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Join Rajput Public School - Nurturing Future Leaders
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-900 to-indigo-900">
            <h3 className="text-lg leading-6 font-medium text-white">
              Student Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-blue-100">
              Please fill in all the required details carefully.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Student Name */}
              <div className="sm:col-span-3">
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                  Student's Full Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="studentName"
                    id="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="sm:col-span-3">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="sm:col-span-3">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900"
                  />
                </div>
              </div>

              {/* Class Applying For */}
              <div className="sm:col-span-3">
                <label htmlFor="classApplyingFor" className="block text-sm font-medium text-gray-700">
                  Class Applying For <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <select
                    id="classApplyingFor"
                    name="classApplyingFor"
                    required
                    value={formData.classApplyingFor}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900"
                  >
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    {Array.from({length: 12}, (_, i) => i + 1).map(grade => (
                      <option key={grade} value={`class-${grade}`}>Class {grade}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Father's Name */}
              <div className="sm:col-span-3">
                <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fatherName"
                    id="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                  />
                </div>
              </div>

              {/* Mother's Name */}
              <div className="sm:col-span-3">
                <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">
                  Mother's Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="motherName"
                    id="motherName"
                    required
                    value={formData.motherName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="sm:col-span-3">
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    required
                    pattern="[0-9]{10}"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="sm:col-span-6 mt-2 sm:mt-0">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Complete Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                  />
                </div>
              </div>

              {/* Previous School */}
              <div className="sm:col-span-6 mt-2 sm:mt-0">
                <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">
                  Previous School (if any)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="previousSchool"
                    id="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="sm:col-span-6 mt-2 sm:mt-0">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Information or Special Requirements
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border text-gray-900 placeholder:text-black"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>

              {/* Form Submission */}
              <div className="sm:col-span-6 pt-4">
                <div className="flex items-start mt-2 sm:mt-0">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I certify that the information provided is accurate to the best of my knowledge.
                    </label>
                    <p className="text-gray-500">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy-policy" className="text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms" className="text-blue-600 hover:text-blue-500">
                        Terms of Service
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-900 to-indigo-900">
            <h3 className="text-lg leading-6 font-medium text-white">
              Admission Process
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium text-sm">1</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Submit Application</h4>
                  <p className="mt-1 text-sm text-gray-600">Fill out and submit the online application form.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium text-sm">2</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Document Verification</h4>
                  <p className="mt-1 text-sm text-gray-600">Our team will verify the submitted documents.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium text-sm">3</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Entrance Test & Interview</h4>
                  <p className="mt-1 text-sm text-gray-600">The student will be called for an assessment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-medium text-sm">4</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Admission Confirmation</h4>
                  <p className="mt-1 text-sm text-gray-600">Complete the admission formalities upon selection.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-900">Need Help?</h4>
              <p className="mt-1 text-sm text-gray-600">
                For any queries regarding admissions, please contact our admission office at{' '}
                <a href="mailto:admissions@rajputpublicschool.edu" className="text-blue-600 hover:text-blue-500">
                  admissions@rajputpublicschool.edu
                </a>
                {' '}or call us at +91-XXXXXXXXXX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}