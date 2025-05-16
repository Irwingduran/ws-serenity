"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, DollarSign, Calendar, Building2, MessageCircle, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import SocialMediaButtons from "../components/social-media";
import Slides from "../components/slides";
import PartnerDoctors from "../components/doctor-partner";
import MedicalTourismSection from "../components/medical-tourism";
import GallerySection from "../components/gallery";
import WelcomeModal from "../components/modal";
import PricingTable from "../components/pricing-table"
import StepByStepGuide from "../components/step-by-step-guide"

export default function Home() {
  const scrollLeft = (id: string) => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (id: string) => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const images = [
   // "/gallery/img1.jpeg",
    "/gallery/img2.jpeg",
    "/gallery/img3.jpeg",
    "/gallery/img4.jpeg",
    "/gallery/img5.jpeg",
    "/gallery/img6.jpeg",
    "/gallery/img7.jpeg",
    "/gallery/img8.jpeg",
    "/gallery/img9.jpeg",
    "/gallery/img10.jpeg",
    "/gallery/img11.jpeg",
    "/gallery/img12.jpeg",
    "/gallery/img13.jpeg",
    "/gallery/img14.jpeg",
    "/gallery/img15.jpeg",
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <SocialMediaButtons/>
      <WelcomeModal/>
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section
        className="relative bg-[#F5F7FA]/80 bg-blend-overlay"
        style={{
          backgroundImage: "url('/img-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-[#507775]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Serenity Surgery Planner</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Specialists in Puebla, Mexico</h2>

          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl">Surgeries offered 7 days a week</p>
            <p className="text-lg md:text-xl">5-Star hotel stay included</p>
            <p className="text-lg md:text-xl">Driver & guide including airport pickup / drop-off</p>
          </div>

          <p className="mt-8 text-lg">
            We specialize in 
            <Link href="#services" className="underline ml-1">
              Plastic Surgery Services
            </Link>
            .
          </p>

          <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            See princing & what&apos;s included
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white" id="about">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">
           About Us
          </h2>

          <p className="text-lg mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quo ut ipsa veniam neque pariatur ipsum iusto ea blanditiis dolorum. Exercitationem ea sit maxime ex aliquam possimus impedit rem! Suscipit?
            <Link href="#" className="text-[#4A90E2] font-medium">
              {" "}
              robotic sleeve gastrectomy{" "}
            </Link>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero, nisi eveniet dignissimos praesentium similique voluptatum ratione exercitationem ea, necessitatibus voluptas soluta nam veniam officia molestias illo animi iusto obcaecati!
          </p>

          <div className="mt-12 relative aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="About us"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center cursor-pointer">
                <Play className="w-10 h-10 text-c ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

     <section>
      <Slides/>
     </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#77B5B2] rounded-lg p-8 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">27,503</h3>
              <p className="text-white uppercase tracking-wider font-medium">Surgeries Performed</p>
            </div>

            <div className="bg-[#77B5B2] rounded-lg p-8 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">5</h3>
              <p className="text-white uppercase tracking-wider font-medium">Hours from Houston, TX</p>
            </div>

            <div className="bg-[#77B5B2] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
              <p className="text-white uppercase tracking-wider font-medium">Best Value, All-Inclusive Package</p>
            </div>

            <div className="bg-[#77B5B2] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <p className="text-white uppercase tracking-wider font-medium">Surgeries 7 Days a Week</p>
            </div>

            <div className="bg-[#77B5B2] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <p className="text-white uppercase tracking-wider font-medium">5-Star Hotel Stay Included</p>
            </div>

            <div className="bg-[#77B5B2] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <p className="text-white uppercase tracking-wider font-medium">English Speaking Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-16 px-4 bg-[#77B5B2]" id="services">
      <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">Our Services</h2>

    <p className="text-white text-center text-lg mb-12">
      We offer the following bariatric weight loss procedures in addition to various weight loss revision
      surgeries and body contouring procedures.
    </p>

    <div className="space-y-10">
      <a href="/service1">
        <div className="bg-white m-4 rounded-lg p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/service/img4.jpg"
              alt="Gastric Sleeve Illustration"
              width={200}
              height={200}
              className="w-40 h-40"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#507775] mb-4">Liposculpture 360</h3>
            <p className="text-gray-700">
              A comprehensive body contouring procedure that targets fat deposits around the entire midsection, helping patients achieve a more sculpted and balanced figure.
            </p>
          </div>
        </div>
      </a>
      
      <a href="/service2">
        <div className="bg-white m-4 rounded-lg p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/service/img3.jpg"
              alt="Gastric Bypass Illustration"
              width={200}
              height={200}
              className="w-40 h-40"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#507775] mb-4">Mammoplasty</h3>
            <p className="text-gray-700">
              Surgical procedures to enhance, reduce, or reconstruct the breasts, tailored to the patient's aesthetic goals or medical needs.
            </p>
          </div>
        </div>
      </a>
      
      <a href="/service3">
        <div className="bg-white m-4 rounded-lg p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/service/img2.jpg"
              alt="Gastric Bypass Illustration"
              width={200}
              height={200}
              className="w-40 h-40"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#507775] mb-4">Head & Neck Surgery</h3>
            <p className="text-gray-700">
              Specialized surgeries addressing both functional and cosmetic concerns of the head and neck, including rhinoplasty and facial contouring.
            </p>
          </div>
        </div>
      </a>
      
      <a href="/service4">
        <div className="bg-white m-4 rounded-lg p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/service/img1.jpg"
              alt="Gastric Bypass Illustration"
              width={200}
              height={200}
              className="w-40 h-40"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#507775] mb-4">Bariatric Surgery</h3>
            <p className="text-gray-700">
              Weight loss procedures designed to help individuals manage obesity and improve overall health through surgical intervention.
            </p>
          </div>
        </div>
      </a>

      {/* Additional Services Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Other Specialized Procedures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Pubis Lift</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Arm Lift (Brachioplasty)</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Thigh Lift (Cruroplasty)</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Back Lift (Dorsoplasty)</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Torsoplasty</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Gluteoplasty</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Buttock Implant Removal</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Labiaplasty</h4>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-semibold text-[#507775] mb-2">Vaginoplasty</h4>
          </div>
        </div>
      </div>
    </div>
      </div>
      </section>

     {/* Partner Doctors */}
     <section className="bg-white py-12 px-4" id="partners">
      <PartnerDoctors/>
    </section>

     {/* Surgeries most popular */}
     <section>
    <div className="flex flex-col min-h-screen">
    {/* Pricing Table Section */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <PricingTable />
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#507775] text-center mb-12">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#77B5B2] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#507775] mb-4">Certified Surgeons</h3>
            <p className="text-gray-600">
              Our team is composed of surgeons with national and international certifications and years of experience.
            </p>
          </div>

          <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#77B5B2] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#507775] mb-4">State-of-the-Art Facilities</h3>
            <p className="text-gray-600">
              We have cutting-edge technology and follow the highest standards of safety and hygiene.
            </p>
          </div>

          <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#77B5B2] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#507775] mb-4">Personalized Care</h3>
            <p className="text-gray-600">
              Each patient receives a personalized treatment plan and full follow-up before, during, and after the procedure.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
     </section>

     {/* Medical Tour */}
     <section className="bg-white py-12 px-4" id="partners">
      <MedicalTourismSection/>
    </section>

     {/* Gallery Section */}
    <section >
     <GallerySection/>
    </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-[#3B5998]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">Our Location</h2>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888244552345!2d-99.169485684526!3d19.42702074608145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1633031670013!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

       {/* Reviews Section */}
       <section className="py-16 px-4 bg-white" id="reviews">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">What Our Clients Say</h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft('reviews-carousel')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 p-2 rounded-full shadow-md z-10"
            >
              &#10094;
            </button>
            <button
              onClick={() => scrollRight('reviews-carousel')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 p-2 rounded-full shadow-md z-10"
            >
              &#10095;
            </button>
            <div
              id="reviews-carousel"
              className="flex overflow-x-auto space-x-4 scrollbar-hide"
            >
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex-shrink-0 w-72 bg-gray-100 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-[#F5A623]"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <p className="text-sm text-gray-500">- Client {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     <Carousel/>

      {/* Step by Step Guide Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <StepByStepGuide />
        </div>
      </section>

       {/* About Section */}
       <section className="py-16 px-4 bg-white" id="about">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">
           Testimonial of our patient that visited us in Puebla
          </h2>

          <div className="mt-12 relative aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Patient in Puebla"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center cursor-pointer">
                <Play className="w-10 h-10 text-c ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white" id="contact">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#77B5B2] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-4">We&apos;d love to hear from you! Reach out to us for any inquiries or to schedule an appointment.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <p>123 Serenity St, Mexico City, Mexico</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <p>info@serenitycompany.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <p>+52 55 1234 5678</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#507775] mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4} />
                <Button type="submit" className="bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-2 rounded">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}