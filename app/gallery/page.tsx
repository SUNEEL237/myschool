"use client";

import { useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  id: number;
  src: string;
  category: string;
  title: string;
};

const categories = [
  'All',
  'Events',
  'Sports',
  'Academics',
  'Arts',
  'Campus Life'
];

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/id/180/800/600', category: 'Events', title: 'Annual Day Celebration' },
  { id: 2, src: 'https://picsum.photos/id/96/800/600', category: 'Sports', title: 'Sports Meet 2023' },
  { id: 3, src: 'https://picsum.photos/id/26/800/600', category: 'Academics', title: 'Science Fair' },
  { id: 4, src: 'https://picsum.photos/id/28/800/600', category: 'Arts', title: 'Art Exhibition' },
  { id: 5, src: 'https://picsum.photos/id/29/800/600', category: 'Campus Life', title: 'Campus View' },
  { id: 6, src: 'https://picsum.photos/id/31/800/600', category: 'Events', title: 'Independence Day' },
  { id: 7, src: 'https://picsum.photos/id/34/800/600', category: 'Sports', title: 'Basketball Tournament' },
  { id: 8, src: 'https://picsum.photos/id/36/800/600', category: 'Academics', title: 'Robotics Workshop' },
  { id: 9, src: 'https://picsum.photos/id/42/800/600', category: 'Arts', title: 'Music Concert' },
  { id: 10, src: 'https://picsum.photos/id/43/800/600', category: 'Campus Life', title: 'Library' },
  { id: 11, src: 'https://picsum.photos/id/47/800/600', category: 'Events', title: 'Graduation Day' },
  { id: 12, src: 'https://picsum.photos/id/49/800/600', category: 'Sports', title: 'Athletics Competition' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="/images/gallery/gallary.png"
            alt="Gallery"
            width={1920}
            height={600}
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Photo Gallery</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Capturing memorable moments from our school community.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">{image.title}</div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="relative h-[70vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">{selectedImage.title}</h3>
                  <p className="text-sm text-gray-500">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}