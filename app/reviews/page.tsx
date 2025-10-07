'use client'
import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import SocialMediaButtons from '../../components/social-media';

const ReviewsPage = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SocialMediaButtons />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#77B5B2]/20 to-[#507775]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#507775] mb-4">
            Patient Reviews
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Real stories from real patients. See their gastric sleeve surgery journeys and transformations.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
            {/* Review 1 */}
            <div className="flex flex-col items-center w-full max-w-[540px]">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink="https://www.instagram.com/reel/DO9wy_vkfxS/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)' }}>
              </blockquote>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col items-center w-full max-w-[540px]">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink="https://www.instagram.com/reel/DPP4uickaHF/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)' }}>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#77B5B2]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg mb-8">
            Join hundreds of satisfied patients who have achieved their weight loss goals with our expert team.
          </p>
          <a href="/#contact">
            <button className="bg-white text-[#507775] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Consultation
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
