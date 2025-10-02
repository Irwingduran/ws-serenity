'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: '1101370377',
      title: 'Testimonial: Virginia Alicia'
    },
    {
      id: '1124030481',
      title: 'Testimonial: Tania Orozco'
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-16 px-4 bg-white" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">
          About Us
        </h2>

        <p className="text-lg mb-4">
          At Serenity Surgery Planner, we specialize in coordinating safe, high-quality bariatric and plastic surgeries in Puebla, Mexico — designed especially
          for international patients from the U.S. and South America. Our certified surgeons, personalized care, and all-inclusive planning make your medical
          journey seamless, from first contact to full recovery. Trusted by patients from Texas, South America and beyond, we offer confidence, professionalism,
          and human warmth in every step of your transformation.
        </p>

        {/* Video Carousel */}
        <div className="mt-12 relative">
          <div className="relative" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
            <iframe
              key={videos[currentVideo].id}
              src={`https://player.vimeo.com/video/${videos[currentVideo].id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              title={videos[currentVideo].title}
            ></iframe>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevVideo}
              className="bg-[#77B5B2] hover:bg-[#507775] text-white p-2 rounded-full transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-center">
              <p className="text-[#507775] font-medium">{videos[currentVideo].title}</p>
              <p className="text-gray-500 text-sm">
                {currentVideo + 1} / {videos.length}
              </p>
            </div>

            <button
              onClick={nextVideo}
              className="bg-[#77B5B2] hover:bg-[#507775] text-white p-2 rounded-full transition-colors"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentVideo ? 'bg-[#77B5B2]' : 'bg-gray-300'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
