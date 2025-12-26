'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// Client component that uses search params
function NewsList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  content: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Annual Science Fair 2024 Showcases Student Innovation',
    excerpt: 'Students presented groundbreaking projects at our annual science fair, demonstrating creativity and scientific thinking.',
    content: 'Students presented groundbreaking projects at our annual science fair, demonstrating creativity and scientific thinking. The event featured over 50 projects from students across all grades, showcasing innovations in renewable energy, robotics, and environmental science.',
    date: 'December 10, 2024',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    slug: 'annual-science-fair-2024'
  },
  {
    id: 2,
    title: 'School Ranked Among Top 10 in State for Academic Excellence',
    excerpt: 'We are proud to announce that our school has been ranked among the top 10 schools in the state for academic performance.',
    content: 'We are proud to announce that our school has been ranked among the top 10 schools in the state for academic performance. This achievement reflects our commitment to excellence in education and the hard work of our students and staff.',
    date: 'November 28, 2024',
    category: 'Achievements',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    slug: 'top-10-school-ranking'
  },
  {
    id: 3,
    title: 'New Sports Facilities Now Open for Students',
    excerpt: 'Our newly renovated sports complex is now open, featuring state-of-the-art equipment and facilities for all students.',
    content: 'Our newly renovated sports complex is now open, featuring state-of-the-art equipment and facilities for all students. The complex includes a new swimming pool, basketball courts, and a fully equipped gymnasium.',
    date: 'November 15, 2024',
    category: 'Facilities',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    slug: 'new-sports-facilities'
  },
  {
    id: 4,
    title: 'Winter Break Announcement: Important Dates',
    excerpt: 'Important information regarding the upcoming winter break schedule and school closure dates.',
    content: 'Important information regarding the upcoming winter break schedule and school closure dates. Please make note of these important dates and plan accordingly.',
    date: 'November 5, 2024',
    category: 'Announcements',
    image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    slug: 'winter-break-announcement'
  },
  {
    id: 5,
    title: 'School Wins Environmental Sustainability Award',
    excerpt: 'Recognized for our green initiatives and commitment to environmental education.',
    content: 'Recognized for our green initiatives and commitment to environmental education. This award highlights our efforts to create a more sustainable future through various programs and initiatives.',
    date: 'October 22, 2024',
    category: 'Achievements',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    slug: 'environmental-sustainability-award'
  },
  {
    id: 6,
    title: 'Parent-Teacher Conference Schedule Released',
    excerpt: 'Mark your calendars for the upcoming parent-teacher conferences scheduled for next month.',
    content: 'Mark your calendars for the upcoming parent-teacher conferences scheduled for next month. This is a great opportunity to discuss your child\'s progress and address any concerns.',
    date: 'October 15, 2024',
    category: 'Announcements',
    image: 'https://images.unsplash.com/photo-1571265529820-0ee07a7bcd06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    slug: 'parent-teacher-conference-schedule'
  }
];

const categories = ['All', ...new Set(newsItems.map(item => item.category))];

  const itemsPerPage = 6;
  
  // Sync URL with state
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('All');
    }
    
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
    } else {
      setCurrentPage(1);
    }
  }, [searchParams]);

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Latest News & Updates
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-100">
            Stay informed with the latest news, events, and announcements from our school community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedNews.map((item) => (
            <article key={item.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 h-48 relative">
                <Image
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                  fill
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {item.category}
                  </p>
                  <Link href={`/news/${item.slug}`} className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Date</span>
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 border ${
                    currentPage === page
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                  } text-sm font-medium rounded-md`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-indigo-50 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Want to stay updated?</span>
            <span className="block text-indigo-600">Subscribe to our newsletter.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <div className="relative">
                <input
                  type="email"
                  className="px-5 py-3 border border-gray-300 rounded-l-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function NewsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    }>
      <NewsList />
    </Suspense>
  );
}
