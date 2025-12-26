import Image from 'next/image';
import { notFound } from 'next/navigation';

type NewsItem = {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
};

// This would typically come from an API or database
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Annual Science Fair 2024 Showcases Student Innovation',
    content: 'Students presented groundbreaking projects at our annual science fair, demonstrating creativity and scientific thinking. The event featured over 50 projects from students across all grades, showcasing innovations in renewable energy, robotics, and environmental science.',
    excerpt: 'Students presented groundbreaking projects at our annual science fair, demonstrating creativity and scientific thinking.',
    date: 'December 10, 2024',
    category: 'Events',
    image: '/images/events/science-fair.jpg',
    slug: 'annual-science-fair-2024'
  },
  // Add other news items here...
];

const getNewsItem = (slug: string): NewsItem | undefined => {
  return newsItems.find(item => item.slug === slug);
};

// Generate static params for all news items at build time
export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const newsItem = getNewsItem(params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {newsItem.title}
            </h1>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {newsItem.category}
              </span>
              <span className="text-sm text-gray-500">
                {newsItem.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-indigo prose-lg text-gray-500">
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-xl text-gray-700 leading-8">
            {newsItem.content}
          </p>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/news"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              &larr; Back to all news
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
