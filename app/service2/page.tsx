"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar/>

      {/* Hero Section */}
      <section className="relative bg-[#fff]/50 bg-blend-overlay" style={{ backgroundImage: "url('/service/img3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Enhance Your Silhouette</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Breast Augmentation Procedures</h2>
          <h3 className="text-xl md:text-3xl font-medium mb-12">Personalized to Achieve Your Desired Look</h3>
          <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Our Breast Augmentation Services</h2>
          <p className="text-lg text-center mb-12">We specialize in helping you achieve the silhouette you’ve always dreamed of. Discover how our breast augmentation services can enhance your confidence and beauty.</p>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Service Overview */}
            <div className="space-y-8">
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Breast Augmentation?</h3>
                <p className="text-gray-600 mb-4">
                  Breast augmentation is a surgical procedure designed to enhance the size and shape of the breasts using implants or fat transfer. It’s ideal for those looking to restore volume, achieve better symmetry, or simply feel more confident in their appearance.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Enhances breast size and shape</li>
                  <li>Improves body proportions</li>
                  <li>Boosts self-esteem and confidence</li>
                </ul>
              </div>

              {/* Procedure Steps */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">The Procedure</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">1</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Consultation</h4>
                      <p className="text-gray-600">We discuss your goals and recommend the best approach.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">2</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Surgery</h4>
                      <p className="text-gray-600">Performed under anesthesia, ensuring a comfortable experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">3</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Recovery</h4>
                      <p className="text-gray-600">We provide detailed aftercare instructions for a smooth recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Benefits and Testimonials */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Expert Surgeons</h4>
                      <p className="text-gray-600">Board-certified specialists with extensive experience in breast augmentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Personalized Care</h4>
                      <p className="text-gray-600">Customized procedures to match your aesthetic goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">State-of-the-Art Facility</h4>
                      <p className="text-gray-600">Advanced technology for safe and natural-looking results.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials 
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#3B5998] mb-4">Patient Stories</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#3B5998]">Ana S.</h4>
                      <p className="text-gray-600">"I feel more confident than ever. The results are exactly what I wanted!"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#3B5998]">Laura M.</h4>
                      <p className="text-gray-600">"The team was amazing, and the recovery process was so smooth."</p>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>

      {/* Testimonials Section 
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B5998] mb-8">What Our Clients Say</h2>
          <p className="text-lg mb-4">"I couldn’t be happier with my results. Thank you for making me feel beautiful!" - Ana S.</p>
        </div>
      </section>
      */}
    </div>
  );
};

export default Page;