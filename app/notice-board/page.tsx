"use client";

import { useState } from 'react';
import { format } from 'date-fns';

type Notice = {
  id: number;
  title: string;
  date: Date;
  category: 'announcement' | 'event' | 'holiday' | 'exam';
  content: string;
  isImportant: boolean;
};

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState<'all' | 'announcement' | 'event' | 'holiday' | 'exam'>('all');

  const notices: Notice[] = [
    {
      id: 1,
      title: 'Winter Break Announcement',
      date: new Date(2023, 11, 20),
      category: 'holiday',
      content: 'The school will remain closed for winter break from December 25, 2023 to January 5, 2024. Classes will resume on January 8, 2024.',
      isImportant: true
    },
    {
      id: 2,
      title: 'Annual Sports Day 2023',
      date: new Date(2023, 11, 15),
      category: 'event',
      content: 'Join us for our Annual Sports Day on December 20, 2023. Various competitions and activities will be organized for all students.',
      isImportant: true
    },
    {
      id: 3,
      title: 'Mid-Term Examination Schedule',
      date: new Date(2023, 11, 10),
      category: 'exam',
      content: 'Mid-term examinations for all classes will be conducted from January 10-20, 2024. The detailed timetable will be shared soon.',
      isImportant: false
    },
    {
      id: 4,
      title: 'Parent-Teacher Meeting',
      date: new Date(2023, 11, 5),
      category: 'event',
      content: 'The next parent-teacher meeting is scheduled for December 15, 2023, from 2:00 PM to 5:00 PM. Please make sure to attend.',
      isImportant: false
    },
    {
      id: 5,
      title: 'School Reopening After Summer Break',
      date: new Date(2023, 5, 1),
      category: 'announcement',
      content: 'School will reopen on June 15, 2023, after the summer break. All students are expected to be present on the first day.',
      isImportant: false
    }
  ];

  const filteredNotices = activeTab === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === activeTab);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'announcement':
        return 'bg-blue-100 text-blue-800';
      case 'event':
        return 'bg-green-100 text-green-800';
      case 'holiday':
        return 'bg-yellow-100 text-yellow-800';
      case 'exam':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Notice Board</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Stay updated with the latest announcements, events, and important dates.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                All Notices
              </button>
              {['announcement', 'event', 'holiday', 'exam'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {getCategoryName(tab)}s
                </button>
              ))}
            </nav>
          </div>

          {/* Notices List */}
          <div className="space-y-6">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <div 
                  key={notice.id} 
                  className={`bg-white overflow-hidden shadow rounded-lg border-l-4 ${
                    notice.isImportant ? 'border-red-500' : 'border-indigo-500'
                  }`}
                >
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(notice.category)}`}>
                            {getCategoryName(notice.category)}
                          </span>
                          {notice.isImportant && (
                            <span className="ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              Important
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                          {notice.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {format(new Date(notice.date), 'MMMM d, yyyy')}
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">{notice.content}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
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
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No notices found</h3>
                <p className="mt-1 text-sm text-gray-500">There are currently no notices in this category.</p>
              </div>
            )}
          </div>

          {/* Archived Notices */}
          <div className="mt-12">
            <h2 className="text-lg font-medium text-gray-900">Archived Notices</h2>
            <p className="mt-1 text-sm text-gray-500">
              Looking for older notices? Check our archive for previous announcements and events.
            </p>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Archive
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            <span className="block">Stay Updated</span>
            <span className="block text-indigo-600">Subscribe to our newsletter</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}