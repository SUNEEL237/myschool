// app/admissions/apply/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ApplyNowPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  interface StudentData {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    bloodGroup: string;
    nationality: string;
    religion: string;
    currentSchool: string;
    currentGrade: string;
    applyingForGrade: string;
    preferredCurriculum: string;
    previousSchool: string;
    reasonForLeaving: string;
  }

  interface ParentData {
    fatherName: string;
    fatherOccupation: string;
    fatherDesignation: string;
    fatherCompany: string;
    fatherQualification: string;
    fatherEmail: string;
    fatherPhone: string;
    fatherOfficePhone: string;
    motherName: string;
    motherOccupation: string;
    motherDesignation: string;
    motherCompany: string;
    motherQualification: string;
    motherEmail: string;
    motherPhone: string;
  }

  interface AddressData {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  }

  interface EmergencyData {
    contactName: string;
    relation: string;
    phone: string;
    alternatePhone: string;
  }

  interface MedicalData {
    hasMedicalCondition: string;
    medicalDetails: string;
    hasAllergy: string;
    allergyDetails: string;
    otherMedicalInfo: string;
  }

  interface DocumentsData {
    photo: File | null;
    birthCertificate: File | null;
    aadharCard: File | null;
    previousReportCard: File | null;
    transferCertificate: File | null;
    addressProof: File | null;
    casteCertificate: File | null;
  }

  interface DeclarationData {
    termsAgreed: boolean;
    informationAccurate: boolean;
  }

  interface FormData {
    student: StudentData;
    parent: ParentData;
    address: AddressData;
    emergency: EmergencyData;
    medical: MedicalData;
    documents: DocumentsData;
    declaration: DeclarationData;
  }

  const [formData, setFormData] = useState<FormData>({
    student: {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      bloodGroup: '',
      nationality: '',
      religion: '',
      currentSchool: '',
      currentGrade: '',
      applyingForGrade: '',
      preferredCurriculum: 'CBSE',
      previousSchool: '',
      reasonForLeaving: '',
    },
    parent: {
      fatherName: '',
      fatherOccupation: '',
      fatherDesignation: '',
      fatherCompany: '',
      fatherQualification: '',
      fatherEmail: '',
      fatherPhone: '',
      fatherOfficePhone: '',
      motherName: '',
      motherOccupation: '',
      motherDesignation: '',
      motherCompany: '',
      motherQualification: '',
      motherEmail: '',
      motherPhone: '',
    },
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India',
    },
    emergency: {
      contactName: '',
      relation: '',
      phone: '',
      alternatePhone: '',
    },
    medical: {
      hasMedicalCondition: 'no',
      medicalDetails: '',
      hasAllergy: 'no',
      allergyDetails: '',
      otherMedicalInfo: '',
    },
    documents: {
      photo: null,
      birthCertificate: null,
      aadharCard: null,
      previousReportCard: null,
      transferCertificate: null,
      addressProof: null,
      casteCertificate: null,
    },
    declaration: {
      termsAgreed: false,
      informationAccurate: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  interface FileNames {
    [key: string]: string | undefined;
    'documents.birthCertificate'?: string;
    // Add other document keys here as needed
  }
  
  const [fileNames, setFileNames] = useState<FileNames>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target;
    const [section, field] = name.split('.');
    const target = e.target as HTMLInputElement; // Type assertion for file inputs

    if (type === 'file') {
      const files = target.files;
      // Check if files exist and has at least one file
      if (files && files.length > 0) {
        setFormData(prev => ({
          ...prev,
          [section as keyof FormData]: {
            ...(prev[section as keyof FormData] as object),
            [field]: files[0]
          }
        } as FormData));
        
        // Store the file name for display
        setFileNames(prev => ({
          ...prev,
          [name]: files[0].name
        }));
      }
    } else if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [section as keyof FormData]: {
          ...(prev[section as keyof FormData] as object),
          [field]: checked
        }
      } as FormData));
    } else {
      setFormData(prev => ({
        ...prev,
        [section as keyof FormData]: {
          ...(prev[section as keyof FormData] as object),
          [field]: e.target.value
        }
      } as FormData));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 7));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div className="px-6 py-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Application Submitted Successfully!
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Thank you for applying to Rajput Public School. We have received your application and will review it shortly.
              </p>
              <p className="mt-4 text-gray-600">
                Our admissions team will contact you within 5-7 working days with the next steps.
              </p>
              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30" />
          {/* Add a subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              Apply Now
            </h1>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-xl text-blue-100 leading-relaxed">
                Begin your journey to academic excellence with Rajput Public School
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor">
            <path d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Application Progress</h2>
            <p className="text-sm text-gray-500">
              {Math.round((currentStep / 7) * 100)}% Complete
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            <span className={`text-xs ${currentStep >= 1 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Student Info</span>
            <span className={`text-xs ${currentStep >= 2 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Academic Info</span>
            <span className={`text-xs ${currentStep >= 3 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Parent Info</span>
            <span className={`text-xs ${currentStep >= 4 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Address</span>
            <span className={`text-xs ${currentStep >= 5 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Emergency</span>
            <span className={`text-xs ${currentStep >= 6 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Medical</span>
            <span className={`text-xs ${currentStep >= 7 ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Documents</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Student Information */}
            {currentStep === 1 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">1</span>
                    Student Information
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please provide the student's personal details.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="student.firstName" className="block text-sm font-medium text-gray-700">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.firstName"
                        id="student.firstName"
                        required
                        value={formData.student.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.firstName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter first name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.firstName' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student.lastName" className="block text-sm font-medium text-gray-700">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.lastName"
                        id="student.lastName"
                        required
                        value={formData.student.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.lastName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter last name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.lastName' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="student.gender" className="block text-sm font-medium text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="student.gender"
                      name="student.gender"
                      required
                      value={formData.student.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                    >
                      <option value="" className="text-gray-500">Select Gender</option>
                      <option value="male" className="text-gray-900">Male</option>
                      <option value="female" className="text-gray-900">Female</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="student.dateOfBirth" className="block text-sm font-medium text-gray-700">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="date"
                        name="student.dateOfBirth"
                        id="student.dateOfBirth"
                        required
                        value={formData.student.dateOfBirth}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900"
                      />
                      <div className="absolute right-0 top-0 mt-2 mr-2 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="student.bloodGroup" className="block text-sm font-medium text-gray-700">
                      Blood Group
                    </label>
                    <select
                      id="student.bloodGroup"
                      name="student.bloodGroup"
                      value={formData.student.bloodGroup}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                    >
                      <option value="" className="text-gray-500">Select Blood Group</option>
                      <option value="A+" className="text-gray-900">A+</option>
                      <option value="A-" className="text-gray-900">A-</option>
                      <option value="B+" className="text-gray-900">B+</option>
                      <option value="B-" className="text-gray-900">B-</option>
                      <option value="AB+" className="text-gray-900">AB+</option>
                      <option value="AB-" className="text-gray-900">AB-</option>
                      <option value="O+" className="text-gray-900">O+</option>
                      <option value="O-" className="text-gray-900">O-</option>
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student.nationality" className="block text-sm font-medium text-gray-700">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.nationality"
                        id="student.nationality"
                        required
                        value={formData.student.nationality}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.nationality')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter nationality"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.nationality' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student.religion" className="block text-sm font-medium text-gray-700">
                      Religion
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.religion"
                        id="student.religion"
                        value={formData.student.religion}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.religion')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter religion"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.religion' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Academic Information */}
            {currentStep === 2 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">2</span>
                    Academic Information
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Details about the student's current and previous education.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="student.currentSchool" className="block text-sm font-medium text-gray-700">
                      Current School <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.currentSchool"
                        id="student.currentSchool"
                        required
                        value={formData.student.currentSchool}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.currentSchool')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter current school name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.currentSchool' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student.currentGrade" className="block text-sm font-medium text-gray-700">
                      Current Grade/Class <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.currentGrade"
                        id="student.currentGrade"
                        required
                        value={formData.student.currentGrade}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.currentGrade')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter current grade/class"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.currentGrade' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student.applyingForGrade" className="block text-sm font-medium text-gray-700">
                      Applying for Grade/Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="student.applyingForGrade"
                      name="student.applyingForGrade"
                      required
                      value={formData.student.applyingForGrade}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                    >
                      <option value="" className="text-gray-500">Select Grade/Class</option>
                      <option value="Nursery" className="text-gray-900">Nursery</option>
                      <option value="LKG" className="text-gray-900">LKG</option>
                      <option value="UKG" className="text-gray-900">UKG</option>
                      <option value="I" className="text-gray-900">I</option>
                      <option value="II" className="text-gray-900">II</option>
                      <option value="III" className="text-gray-900">III</option>
                      <option value="IV" className="text-gray-900">IV</option>
                      <option value="V" className="text-gray-900">V</option>
                      <option value="VI" className="text-gray-900">VI</option>
                      <option value="VII" className="text-gray-900">VII</option>
                      <option value="VIII" className="text-gray-900">VIII</option>
                      <option value="IX" className="text-gray-900">IX</option>
                      <option value="X" className="text-gray-900">X</option>
                      <option value="XI (Science)" className="text-gray-900">XI (Science)</option>
                      <option value="XI (Commerce)" className="text-gray-900">XI (Commerce)</option>
                      <option value="XI (Humanities)" className="text-gray-900">XI (Humanities)</option>
                      <option value="XII (Science)" className="text-gray-900">XII (Science)</option>
                      <option value="XII (Commerce)" className="text-gray-900">XII (Commerce)</option>
                      <option value="XII (Humanities)" className="text-gray-900">XII (Humanities)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student.preferredCurriculum" className="block text-sm font-medium text-gray-700">
                      Preferred Curriculum <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="student.preferredCurriculum"
                      name="student.preferredCurriculum"
                      required
                      value={formData.student.preferredCurriculum}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                    >
                      <option value="CBSE" className="text-gray-900">CBSE</option>
                      <option value="ICSE" className="text-gray-900">ICSE</option>
                      <option value="State Board" className="text-gray-900">State Board</option>
                    </select>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="student.previousSchool" className="block text-sm font-medium text-gray-700">
                      Previous School (if any)
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="student.previousSchool"
                        id="student.previousSchool"
                        value={formData.student.previousSchool}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.previousSchool')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter previous school name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.previousSchool' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="student.reasonForLeaving" className="block text-sm font-medium text-gray-700">
                      Reason for leaving previous school (if applicable)
                    </label>
                    <div className="mt-1 relative">
                      <textarea
                        id="student.reasonForLeaving"
                        name="student.reasonForLeaving"
                        rows={3}
                        value={formData.student.reasonForLeaving}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('student.reasonForLeaving')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter reason for leaving previous school"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'student.reasonForLeaving' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Parent/Guardian Information */}
            {currentStep === 3 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">3</span>
                    Parent/Guardian Information
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please provide the parent's details.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Father's Information */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Father's Information
                    </h4>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label htmlFor="parent.fatherName" className="block text-sm font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.fatherName"
                            id="parent.fatherName"
                            required
                            value={formData.parent.fatherName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherName')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter father's full name"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherName' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherOccupation" className="block text-sm font-medium text-gray-700">
                          Occupation <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.fatherOccupation"
                            id="parent.fatherOccupation"
                            required
                            value={formData.parent.fatherOccupation}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherOccupation')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter occupation"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherOccupation' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherDesignation" className="block text-sm font-medium text-gray-700">
                          Designation
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.fatherDesignation"
                            id="parent.fatherDesignation"
                            value={formData.parent.fatherDesignation}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherDesignation')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter designation"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherDesignation' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherCompany" className="block text-sm font-medium text-gray-700">
                          Company/Organization
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.fatherCompany"
                            id="parent.fatherCompany"
                            value={formData.parent.fatherCompany}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherCompany')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter company/organization name"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherCompany' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherQualification" className="block text-sm font-medium text-gray-700">
                          Educational Qualification
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.fatherQualification"
                            id="parent.fatherQualification"
                            value={formData.parent.fatherQualification}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherQualification')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter educational qualification"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherQualification' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherEmail" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="email"
                            name="parent.fatherEmail"
                            id="parent.fatherEmail"
                            required
                            value={formData.parent.fatherEmail}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherEmail')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter email address"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherEmail' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherPhone" className="block text-sm font-medium text-gray-700">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="tel"
                            name="parent.fatherPhone"
                            id="parent.fatherPhone"
                            required
                            value={formData.parent.fatherPhone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherPhone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter mobile number"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherPhone' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.fatherOfficePhone" className="block text-sm font-medium text-gray-700">
                          Office Phone
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="tel"
                            name="parent.fatherOfficePhone"
                            id="parent.fatherOfficePhone"
                            value={formData.parent.fatherOfficePhone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.fatherOfficePhone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter office phone number"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.fatherOfficePhone' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mother's Information */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Mother's Information
                    </h4>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label htmlFor="parent.motherName" className="block text-sm font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.motherName"
                            id="parent.motherName"
                            required
                            value={formData.parent.motherName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherName')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter mother's full name"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherName' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.motherOccupation" className="block text-sm font-medium text-gray-700">
                          Occupation
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.motherOccupation"
                            id="parent.motherOccupation"
                            value={formData.parent.motherOccupation}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherOccupation')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter occupation"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherOccupation' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.motherDesignation" className="block text-sm font-medium text-gray-700">
                          Designation
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.motherDesignation"
                            id="parent.motherDesignation"
                            value={formData.parent.motherDesignation}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherDesignation')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter designation"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherDesignation' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.motherCompany" className="block text-sm font-medium text-gray-700">
                          Company/Organization
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.motherCompany"
                            id="parent.motherCompany"
                            value={formData.parent.motherCompany}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherCompany')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter company/organization name"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherCompany' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.motherQualification" className="block text-sm font-medium text-gray-700">
                          Educational Qualification
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="text"
                            name="parent.motherQualification"
                            id="parent.motherQualification"
                            value={formData.parent.motherQualification}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherQualification')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter educational qualification"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherQualification' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.motherEmail" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="email"
                            name="parent.motherEmail"
                            id="parent.motherEmail"
                            value={formData.parent.motherEmail}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherEmail')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter email address"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherEmail' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="parent.motherPhone" className="block text-sm font-medium text-gray-700">
                          Mobile Number
                        </label>
                        <div className="mt-1 relative">
                          <input
                            type="tel"
                            name="parent.motherPhone"
                            id="parent.motherPhone"
                            value={formData.parent.motherPhone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('parent.motherPhone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Enter mobile number"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                          />
                          {focusedField === 'parent.motherPhone' && (
                            <div className="absolute right-0 top-0 mt-2 mr-2">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Address Information */}
            {currentStep === 4 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">4</span>
                    Address Information
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please provide the current residential address.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="address.addressLine1" className="block text-sm font-medium text-gray-700">
                      Address Line 1 <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address.addressLine1"
                        id="address.addressLine1"
                        required
                        value={formData.address.addressLine1}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address.addressLine1')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter address line 1"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'address.addressLine1' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="address.addressLine2" className="block text-sm font-medium text-gray-700">
                      Address Line 2
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address.addressLine2"
                        id="address.addressLine2"
                        value={formData.address.addressLine2}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address.addressLine2')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter address line 2"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'address.addressLine2' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address.city" className="block text-sm font-medium text-gray-700">
                      City <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address.city"
                        id="address.city"
                        required
                        value={formData.address.city}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address.city')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter city"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'address.city' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address.state" className="block text-sm font-medium text-gray-700">
                      State <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address.state"
                        id="address.state"
                        required
                        value={formData.address.state}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address.state')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter state"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'address.state' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address.pincode" className="block text-sm font-medium text-gray-700">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address.pincode"
                        id="address.pincode"
                        required
                        value={formData.address.pincode}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address.pincode')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter pincode"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'address.pincode' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="address.country" className="block text-sm font-medium text-gray-700">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="address.country"
                        id="address.country"
                        required
                        value={formData.address.country}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('address.country')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter country"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'address.country' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Emergency Contact */}
            {currentStep === 5 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">5</span>
                    Emergency Contact
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please provide an emergency contact person other than parents.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="emergency.contactName" className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="emergency.contactName"
                        id="emergency.contactName"
                        required
                        value={formData.emergency.contactName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('emergency.contactName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter full name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'emergency.contactName' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="emergency.relation" className="block text-sm font-medium text-gray-700">
                      Relation <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="emergency.relation"
                        id="emergency.relation"
                        required
                        value={formData.emergency.relation}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('emergency.relation')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter relation to student"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'emergency.relation' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="emergency.phone" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="tel"
                        name="emergency.phone"
                        id="emergency.phone"
                        required
                        value={formData.emergency.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('emergency.phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter phone number"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'emergency.phone' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="emergency.alternatePhone" className="block text-sm font-medium text-gray-700">
                      Alternate Phone Number
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="tel"
                        name="emergency.alternatePhone"
                        id="emergency.alternatePhone"
                        value={formData.emergency.alternatePhone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('emergency.alternatePhone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter alternate phone number"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'emergency.alternatePhone' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Medical Information */}
            {currentStep === 6 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">6</span>
                    Medical Information
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please provide any relevant medical information about the student.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="medical.hasMedicalCondition" className="block text-sm font-medium text-gray-700">
                      Does the student have any medical conditions we should be aware of? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="medical.hasMedicalCondition"
                          value="yes"
                          checked={formData.medical.hasMedicalCondition === 'yes'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="medical.hasMedicalCondition"
                          value="no"
                          checked={formData.medical.hasMedicalCondition === 'no'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  {formData.medical.hasMedicalCondition === 'yes' && (
                    <div className="sm:col-span-6">
                      <label htmlFor="medical.medicalDetails" className="block text-sm font-medium text-gray-700">
                        Please provide details about the medical condition(s) <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 relative">
                        <textarea
                          id="medical.medicalDetails"
                          name="medical.medicalDetails"
                          rows={3}
                          required={formData.medical.hasMedicalCondition === 'yes'}
                          value={formData.medical.medicalDetails}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('medical.medicalDetails')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Enter medical condition details"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                        />
                        {focusedField === 'medical.medicalDetails' && (
                          <div className="absolute right-0 top-0 mt-2 mr-2">
                            <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="sm:col-span-6">
                    <label htmlFor="medical.hasAllergy" className="block text-sm font-medium text-gray-700">
                      Does the student have any allergies? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="medical.hasAllergy"
                          value="yes"
                          checked={formData.medical.hasAllergy === 'yes'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="medical.hasAllergy"
                          value="no"
                          checked={formData.medical.hasAllergy === 'no'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  {formData.medical.hasAllergy === 'yes' && (
                    <div className="sm:col-span-6">
                      <label htmlFor="medical.allergyDetails" className="block text-sm font-medium text-gray-700">
                        Please provide details about the allergy/allergies <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 relative">
                        <textarea
                          id="medical.allergyDetails"
                          name="medical.allergyDetails"
                          rows={3}
                          required={formData.medical.hasAllergy === 'yes'}
                          value={formData.medical.allergyDetails}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('medical.allergyDetails')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Enter allergy details"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                        />
                        {focusedField === 'medical.allergyDetails' && (
                          <div className="absolute right-0 top-0 mt-2 mr-2">
                            <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="sm:col-span-6">
                    <label htmlFor="medical.otherMedicalInfo" className="block text-sm font-medium text-gray-700">
                      Any other medical information we should know about?
                    </label>
                    <div className="mt-1 relative">
                      <textarea
                        id="medical.otherMedicalInfo"
                        name="medical.otherMedicalInfo"
                        rows={3}
                        value={formData.medical.otherMedicalInfo}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('medical.otherMedicalInfo')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter any other medical information"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-500"
                      />
                      {focusedField === 'medical.otherMedicalInfo' && (
                        <div className="absolute right-0 top-0 mt-2 mr-2">
                          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Documents Upload */}
            {currentStep === 7 && (
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl leading-6 font-medium text-gray-900 flex items-center">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">7</span>
                    Documents Upload
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please upload the required documents. (Max file size: 2MB per file)
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="documents.photo" className="block text-sm font-medium text-gray-700">
                      Passport Size Photograph <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">JPEG or PNG format, max 2MB</p>
                            {fileNames['documents.photo'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.photo']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.photo"
                            id="documents.photo"
                            required
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="documents.birthCertificate" className="block text-sm font-medium text-gray-700">
                      Birth Certificate <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, JPEG, or PNG format, max 2MB</p>
                            {fileNames['documents.birthCertificate'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.birthCertificate']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.birthCertificate"
                            id="documents.birthCertificate"
                            required
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="documents.aadharCard" className="block text-sm font-medium text-gray-700">
                      Aadhar Card <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, JPEG, or PNG format, max 2MB</p>
                            {fileNames['documents.aadharCard'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.aadharCard']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.aadharCard"
                            id="documents.aadharCard"
                            required
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="documents.previousReportCard" className="block text-sm font-medium text-gray-700">
                      Previous Year's Report Card <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, JPEG, or PNG format, max 2MB</p>
                            {fileNames['documents.previousReportCard'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.previousReportCard']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.previousReportCard"
                            id="documents.previousReportCard"
                            required
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="documents.transferCertificate" className="block text-sm font-medium text-gray-700">
                      Transfer Certificate (if applicable)
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, JPEG, or PNG format, max 2MB</p>
                            {fileNames['documents.transferCertificate'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.transferCertificate']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.transferCertificate"
                            id="documents.transferCertificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="documents.addressProof" className="block text-sm font-medium text-gray-700">
                      Address Proof <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, JPEG, or PNG format, max 2MB (Aadhar Card, Voter ID, etc.)</p>
                            {fileNames['documents.addressProof'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.addressProof']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.addressProof"
                            id="documents.addressProof"
                            required
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="documents.casteCertificate" className="block text-sm font-medium text-gray-700">
                      Caste Certificate (if applicable)
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, JPEG, or PNG format, max 2MB</p>
                            {fileNames['documents.casteCertificate'] && (
                              <p className="mt-2 text-sm text-blue-600">Selected: {fileNames['documents.casteCertificate']}</p>
                            )}
                          </div>
                          <input
                            type="file"
                            name="documents.casteCertificate"
                            id="documents.casteCertificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Declaration */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Declaration
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Please read and accept the following declarations.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="declaration.termsAgreed"
                          name="declaration.termsAgreed"
                          type="checkbox"
                          required
                          checked={formData.declaration.termsAgreed}
                          onChange={handleChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="declaration.termsAgreed" className="font-medium text-gray-700">
                          I declare that the information provided in this application is true and correct to the best of my knowledge. I understand that any false information may result in the cancellation of admission.
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="declaration.informationAccurate"
                          name="declaration.informationAccurate"
                          type="checkbox"
                          required
                          checked={formData.declaration.informationAccurate}
                          onChange={handleChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="declaration.informationAccurate" className="font-medium text-gray-700">
                          I understand that I am responsible for ensuring the accuracy of the information provided and will notify the school of any changes.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="px-6 py-4 bg-gray-50 flex justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <svg className="mr-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Next
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}