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
      <section className="relative bg-[#fff]/50 bg-blend-overlay" style={{ backgroundImage: "url('/service/img2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Refine Your Beauty</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Rhinoplasty Procedures</h2>
          <h3 className="text-xl md:text-3xl font-medium mb-12">Personalized for Your Unique Features</h3>
          <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Our Rhinoplasty Services</h2>
          <p className="text-lg text-center mb-12">We specialize in transforming lives through precision and artistry. Discover how our rhinoplasty services can enhance your natural beauty.</p>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Service Overview */}
            <div className="space-y-8">
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Rhinoplasty?</h3>
                <p className="text-gray-600 mb-4">
                  Rhinoplasty, commonly known as a "nose job," is a surgical procedure to reshape or resize the nose. It can address aesthetic concerns, improve breathing, or correct structural issues.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Enhances facial harmony</li>
                  <li>Improves breathing functionality</li>
                  <li>Boosts self-confidence</li>
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
                      <p className="text-gray-600">We assess your goals and create a personalized plan.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">2</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Surgery</h4>
                      <p className="text-gray-600">Performed under anesthesia, ensuring comfort and safety.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">3</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Recovery</h4>
                      <p className="text-gray-600">Guided aftercare for optimal healing and results.</p>
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
                      <p className="text-gray-600">Board-certified specialists with years of experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Personalized Care</h4>
                      <p className="text-gray-600">Tailored treatments to match your unique needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">State-of-the-Art Facility</h4>
                      <p className="text-gray-600">Modern technology for safe and effective procedures.</p>
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
                      <h4 className="font-semibold text-[#3B5998]">Maria L.</h4>
                      <p className="text-gray-600">"I finally feel confident in my own skin. Thank you, Aesthetic Harmony!"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#3B5998]">John D.</h4>
                      <p className="text-gray-600">"The results are amazing, and the care I received was exceptional."</p>
                    </div>
                  </div>
                </div>
              </div>
               */}

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
          <p className="text-lg mb-4">"Best decision I ever made! My confidence has soared." - Maria L.</p>
        </div>
      </section>
      */}
    </div>
  );
};

export default Page;