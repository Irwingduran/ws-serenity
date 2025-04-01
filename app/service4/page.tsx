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
      <section className="relative bg-[#77B5B2]/90 bg-blend-overlay" style={{ backgroundImage: "url('/service/img1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Life</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Gastric Sleeve Procedures</h2>
          <h3 className="text-xl md:text-3xl font-medium mb-12">Personalized for Your Health and Wellness</h3>
          <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Our Gastric Sleeve Services</h2>
          <p className="text-lg text-center mb-12">We specialize in helping you achieve a healthier lifestyle through advanced bariatric surgery. Discover how our gastric sleeve procedures can transform your life.</p>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Service Overview */}
            <div className="space-y-8">
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Gastric Sleeve Surgery?</h3>
                <p className="text-gray-600 mb-4">
                  Gastric sleeve surgery, also known as sleeve gastrectomy, is a minimally invasive procedure that reduces the size of the stomach to help with weight loss. It is an effective solution for individuals struggling with obesity and related health conditions.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Promotes significant weight loss</li>
                  <li>Improves obesity-related health conditions</li>
                  <li>Enhances quality of life</li>
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
                      <p className="text-gray-600">We evaluate your health and create a personalized treatment plan.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">2</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Surgery</h4>
                      <p className="text-gray-600">Performed laparoscopically, ensuring minimal scarring and faster recovery.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">3</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Recovery</h4>
                      <p className="text-gray-600">Comprehensive aftercare to support your weight loss journey.</p>
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
                      <p className="text-gray-600">Board-certified bariatric specialists with extensive experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Personalized Care</h4>
                      <p className="text-gray-600">Tailored treatment plans to meet your health goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">✓</div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">State-of-the-Art Facility</h4>
                      <p className="text-gray-600">Advanced technology for safe and effective procedures.</p>
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
                      <h4 className="font-semibold text-[#3B5998]">Ana R.</h4>
                      <p className="text-gray-600">"I’ve lost over 50 pounds and feel healthier than ever. Thank you!"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#3B5998]">Carlos M.</h4>
                      <p className="text-gray-600">"The team was supportive throughout my journey. Highly recommend!"</p>
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
          <p className="text-lg mb-4">"Life-changing experience! I feel like a new person." - Ana R.</p>
        </div>
      </section>
       */}
    </div>
  );
};

export default Page;