"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import emailjs from 'emailjs-com';
import { DollarSign, Calendar, Building2, MessageCircle, MapPin, Mail, Phone, ArrowRight, Sparkles, Package } from "lucide-react";
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
import QASection from "../components/qa-section";

export default function Home() {
  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  // Replace with your actual EmailJS values
  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormSuccess(true);
    setFormError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        {
          from_name: formName,
          from_email: formEmail,
          from_phone: formPhone,
          message: formMessage,
        },
        EMAILJS_USER_ID
      );
      setFormSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMessage('');
    } catch (err) {
      setFormError(false);
    } finally {
      setFormLoading(false);
    }
  };

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

  const [activeIndex, setActiveIndex] = useState(0)
  const plans = [
    {
      name: "Liposuction",
      description: "360° Body Contouring",
      highlight: "Most Popular",
    },
    {
      name: "Augmentation Mammoplasty",
      description: "Breast Enhancement",
      highlight: "",
    },
    {
      name: "Rhinoplasty",
      description: "Facial Procedures",
      highlight: "",
    },
    {
      name: "Bariatric",
      description: "Weight Loss Surgery",
      highlight: "Comprehensive Care",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % plans.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [plans.length])


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
          At Serenity Surgery Planner, we specialize in coordinating safe, high-quality bariatric and plastic surgeries in Puebla, Mexico — designed especially
           for international patients from the U.S. and South America. Our certified surgeons, personalized care, and all-inclusive planning make your medical
            journey seamless, from first contact to full recovery. Trusted by patients from Texas, South America and beyond, we offer confidence, professionalism,
             and human warmth in every step of your transformation.
          </p>

          <div className="mt-12 relative aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/about-us.png"
              alt="About us"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
       
          </div>
        </div>
      </section>

     <section>
      <Slides/>
     </section>

                  {/* Testimonial video Section */}
   <section className="py-16 px-4 bg-white" id="about">
   <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">
      Testimonial of our patient that visited us in Puebla
    </h2>

    <div className="mt-12 relative" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
      <iframe 
        src="https://player.vimeo.com/video/1101370377?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} 
        title="Testimonial: Virginia Alicia"
      ></iframe>
     </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
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
            <h3 className="text-2xl font-bold text-[#507775] mb-4">Rhinoplasty</h3>
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
    <section className="py-16 px-4 bg-gradient-to-r from-[#77B5B2]/20 to-[#507775]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-[#77B5B2] mr-2" />
              <span className="text-sm font-semibold text-[#77B5B2] uppercase tracking-wider">All-Inclusive Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Surgical Packages for Your Transformation
            </h2>
            <p className="text-gray-600 mb-8">
              Our carefully designed plans include everything you need: surgery, travel arrangements, accommodation,
              transportation, and follow-up care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/plans/home">
                <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white px-6 py-2">
                  View All Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" className="border-[#77B5B2] text-[#507775] hover:bg-[#77B5B2]/10 px-6 py-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Rotating Plans */}
          <div className="w-full md:w-1/2 bg-[#507775] p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white transform translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Sparkles className="h-5 w-5 mr-2 text-[#77B5B2]" />
                <span className="text-sm font-medium">Featured Plans</span>
              </div>

              <div className="h-48">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 w-full ${
                      index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
                  >
                    {plan.highlight && (
                      <span className="inline-block bg-[#77B5B2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {plan.highlight}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/80 mb-3">{plan.description}</p>
                   
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex space-x-2 mt-8">
                {plans.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-white w-6" : "bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${plans[index].name} plan`}
                  ></button>
                ))}
              </div>
            </div>
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



      {/* Step by Step Guide Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <StepByStepGuide />
        </div>
      </section>
 

         {/* Location Section */}
         <section className="py-16 px-4 bg-[#3B5998]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">Our Location</h2>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.2938690298042!2d-98.26749012479635!3d19.00676808218361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAwJzI0LjQiTiA5OMKwMTUnNTMuNyJX!5e0!3m2!1ses-419!2smx!4v1752640959990!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section> 

    

         {/* Carousel Section */}
        <Carousel/>

        {/* QA Section */}
        <QASection/>

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

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white" id="contact">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#77B5B2] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-4">We&apos;d love to hear from you! Reach out to us for any inquiries or to schedule an appointment.</p>
              <div className="space-y-4">
                <a href={"https://maps.app.goo.gl/2NC9r8PKYcahpgdL7"}>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <p>2P4P+P24 San Bernardino Tlaxcalancingo, Puebla.</p>
                </div> 
                </a>
                <a href={"mailto:irvinhans@hotmail.com"}>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <p>irvinhans@hotmail.com</p>
                </div>
                </a>
                <a href={"https://wa.me/5212221116401?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20schedule%20a%20consultation"}>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <p>+52 222 111 6401</p>
                </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#507775] mb-4">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded"
                  value={formEmail}
                  onChange={e => setFormEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="(+1) 123-456-789"
                  className="w-full p-2 border rounded"
                  value={formPhone}
                  onChange={e => setFormPhone(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border rounded"
                  rows={4}
                  value={formMessage}
                  onChange={e => setFormMessage(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-2 rounded" disabled={formLoading}>
                  {formLoading ? 'Sending...' : 'Send Message'}
                </Button>
                {formSuccess && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
                {formError && (
                  <p className="text-red-600">Something went wrong. Please try again.</p>
                )}
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
