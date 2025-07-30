"use client"
import { useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  src: string;
  category: string;
  alt: string;
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const galleryImages: GalleryImage[] = [
        { src: "/gallery/rino/rino1.jpg", category: "Rino", alt: " injury " },
    { src: "/gallery/bariatric/bariatric1.jpg", category: "Bariatric", alt: "before and after" },
    { src: "/gallery/bariatric/bariatric2.jpg", category: "Bariatric", alt: "before and after" },
    { src: "/gallery/bariatric/bariatric3.jpg", category: "Bariatric", alt: "before and after" },
    { src: "/gallery/bariatric/bariatric4.jpg", category: "Bariatric", alt: "before and after" },
    { src: "/gallery/bariatric/bariatric5.jpg", category: "Bariatric", alt: "before and after" },
    { src: "/gallery/bariatric/bariatric6.jpg", category: "Bariatric", alt: "before and after" },
   { src: "/gallery/bariatric/bariatric7.jpg", category: "Bariatric", alt: "before and after" },
   { src: "/gallery/bariatric/bariatric8.jpg", category: "Bariatric", alt: "before and after" },
   { src: "/gallery/bariatric/bariatric9.jpg", category: "Bariatric", alt: "before and after" },     
    { src: "/gallery/bariatric/bariatric11.jpg", category: "Bariatric", alt: "before and after" },
   { src: "/gallery/bariatric/bariatric12.jpg", category: "Bariatric", alt: "before and after" },        

    // Add more images with appropriate categories
  ];

  const categories = [
    { id: 'all', name: 'All Procedures' },
    { id: 'Rino', name: 'Rino' },
    { id: 'Bariatric', name: 'Bariatric' },
   // { id: 'Prostate', name: 'Prostate' },
 //   { id: 'Facial Surgery', name: 'Facial Surgery' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-[#77B5B2]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Our Gallery</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-white text-[#507775]'
                  : 'bg-[#507775] text-white hover:bg-[#3a5a58]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium capitalize">
                  {image.category} procedure
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-white">
            <p className="text-xl">No images available for this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;