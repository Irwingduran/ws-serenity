"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import { DollarSign, Calendar, Building2, MessageCircle, ArrowRight, Sparkles, Package } from "lucide-react";
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
import StepByStepGuide from "../components/step-by-step-guide"
import QASection from "../components/qa-section";
import ContactSection from "../components/contact";
import AboutSection from "../components/about";
import VideoGallery from "../components/video-gallery";

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
  <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-36 text-center text-[#507775]">

    {/* Eyebrow / Contexto geográfico */}
    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#77B5B2] mb-4">
      Certified Bariatric & Plastic Surgery · Puebla, Mexico
    </p>

    {/* Marca como H1 principal */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Serenity Surgery Planner
    </h1>

    {/* Propuesta de valor como H2 */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed text-[#507775]/90">
      Safe, all-inclusive surgical plans with direct flights from{" "}
      <span className="font-semibold text-[#507775]">Houston & Dallas</span>.
    </h2>

    {/* CTA principal */}
    <a href="/plans/home">
      <Button className="mb-12 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg rounded-full transition-colors duration-200">
        See our surgical plans & what&apos;s included
      </Button>
    </a>

    {/* Separador visual */}
    <div className="border-t border-[#77B5B2]/30 pt-10 max-w-3xl mx-auto">

      {/* Beneficios en grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-left">
        {[
          "Board-Certified Bariatric & Plastic Surgeons",
          "100% English-Speaking Medical Staff & Personal Hosts",
          "Surgery in a Specialized Hospital",
          "VIP Transportation: Direct Pickup from PBC Airport",
        ].map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <span className="mt-0.5 text-[#77B5B2] shrink-0">✦</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Link secundario */}
      <p className="mt-8 text-sm sm:text-base text-[#507775]/70">
        We specialize in{" "}
        <Link href="#services" className="underline underline-offset-4 hover:text-[#507775] transition-colors">
          Plastic Surgery Services in Puebla, Mexico
        </Link>
        .
      </p>
    </div>

  </div>
</section>
      {/* About Section */}
      <AboutSection />

     <section>
      <Slides/>
     </section>

                  {/* Testimonial video Section 
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
    */}
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

    {/* Section Header */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
      Our Services in Puebla, Mexico
    </h2>
    <p className="text-white/80 text-center text-lg mb-16 max-w-2xl mx-auto">
      We offer comprehensive bariatric and plastic surgery procedures with
      all-inclusive plans designed for international patients.
    </p>

    <div className="space-y-14">

      {/* ── RUBRO 1: Weight Loss & Bariatric ── */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/30" />
          <h3 className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
            Weight Loss &amp; Bariatric Surgery
          </h3>
          <div className="h-px flex-1 bg-white/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Gastric Sleeve */}
          <a href="/GastricsleeveInPuebla" className="group">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <Image
                src="/service/img4.jpg"
                alt="Gastric Sleeve"
                width={80}
                height={80}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <h4 className="text-lg font-bold text-[#507775] group-hover:text-[#77B5B2] transition-colors">
                Gastric Sleeve
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                Sleeve Gastrectomy
              </p>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                The most commonly performed bariatric procedure worldwide.
                Reduces stomach size to limit food intake and promote lasting
                weight loss.
              </p>
              <span className="text-[#77B5B2] text-sm font-semibold mt-auto">
                Learn more →
              </span>
            </div>
          </a>

          {/* Bariatric Surgery / Gastric Bypass */}
          <a href="/BariatricsurgeryInPuebla" className="group">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <Image
                src="/service/img1.jpg"
                alt="Gastric Bypass"
                width={80}
                height={80}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <h4 className="text-lg font-bold text-[#507775] group-hover:text-[#77B5B2] transition-colors">
                Gastric Bypass
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                Roux-en-Y
              </p>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                A proven weight loss procedure that reroutes the digestive
                system to reduce calorie absorption and improve metabolic
                health.
              </p>
              <span className="text-[#77B5B2] text-sm font-semibold mt-auto">
                Learn more →
              </span>
            </div>
          </a>

          {/* Bariatric Revision */}
          <a href="/" className="group">
            <div className="bg-white rounded-xl p-6 h-full flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-lg font-bold text-[#507775]">
                Bariatric Revision Surgery
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                Corrective Procedures
              </p>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                Corrective procedures for patients who need adjustments to a
                previous bariatric surgery to restore or enhance weight loss
                results.
              </p>
                  <span className="text-[#77B5B2] text-sm font-semibold mt-auto">
                Learn more →
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* ── RUBRO 2: Plastic & Reconstructive ── */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/30" />
          <h3 className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
            Plastic &amp; Reconstructive Surgery
          </h3>
          <div className="h-px flex-1 bg-white/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Mommy Makeover */}
          <a href="/" className="group">
            <div className="bg-white rounded-xl p-6 flex gap-4 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="text-3xl shrink-0">🌸</div>
            <div>
              <h4 className="text-base font-bold text-[#507775] mb-1">
                Mommy Makeover
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Combined breast and abdominal procedures to restore your
                pre-pregnancy body in a single surgical plan.
              </p>
            </div>
          </div> 
          </a>

          {/* Breast Procedures */}
          <a href="/MammoplastyInPuebla" className="group">
            <div className="bg-white rounded-xl p-6 flex gap-4 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <Image
                src="/service/img33.jpg"
                alt="Breast Procedures"
                width={56}
                height={56}
                className="w-14 h-14 object-cover rounded-lg shrink-0"
              />
              <div>
                <h4 className="text-base font-bold text-[#507775] mb-1 group-hover:text-[#77B5B2] transition-colors">
                  Breast Procedures
                </h4>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                  Mammoplasty · Augmentation · Lift
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tailored surgical options to enhance, reduce, or reconstruct
                  the breasts according to your goals.
                </p>
              </div>
            </div>
          </a>

          {/* Body Contouring */}
          <a href="/LiposculptureInPuebla" className="group">
            <div className="bg-white rounded-xl p-6 flex gap-4 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <Image
                src="/service/img4.jpg"
                alt="Body Contouring"
                width={56}
                height={56}
                className="w-14 h-14 object-cover rounded-lg shrink-0"
              />
              <div>
                <h4 className="text-base font-bold text-[#507775] mb-1 group-hover:text-[#77B5B2] transition-colors">
                  Body Contouring
                </h4>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                  Liposculpture 360 · Tummy Tuck
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sculpt and redefine your silhouette targeting fat deposits
                  and loose skin across the midsection and beyond.
                </p>
              </div>
            </div>
          </a>

          {/* Facial Surgery */}
          <a href="/RhinoplastyInPuebla" className="group">
            <div className="bg-white rounded-xl p-6 flex gap-4 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <Image
                src="/service/img22.jpg"
                alt="Facial Surgery"
                width={56}
                height={56}
                className="w-14 h-14 object-cover rounded-lg shrink-0"
              />
              <div>
                <h4 className="text-base font-bold text-[#507775] mb-1 group-hover:text-[#77B5B2] transition-colors">
                  Facial Surgery
                </h4>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                  Rhinoplasty · Facelift
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Functional and cosmetic procedures of the head and face,
                  including nose reshaping and facial rejuvenation.
                </p>
              </div>
            </div>
          </a>

        </div>
      </div>

      {/* ── Other Specialized Procedures ── */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-white/20" />
          <h3 className="text-base font-semibold text-white/70 whitespace-nowrap uppercase tracking-widest">
            Other Specialized Procedures
          </h3>
          <div className="h-px flex-1 bg-white/20" />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Pubis Lift",
            "Arm Lift (Brachioplasty)",
            "Thigh Lift (Cruroplasty)",
            "Back Lift (Dorsoplasty)",
            "Torsoplasty",
            "Gluteoplasty",
            "Buttock Implant Removal",
            "Labiaplasty",
            "Vaginoplasty",
          ].map((proc) => (
            <span
              key={proc}
              className="bg-white/15 border border-white/25 text-white text-sm px-4 py-2 rounded-full"
            >
              {proc}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

     {/* Partner Doctors */}
     <section className="bg-white py-12 px-4" id="partners">
      <PartnerDoctors/>
    </section>

     {/* Videos Serenity */}
     <VideoGallery />

     {/* Surgeries most popular */}
     <section>
    <div className="flex flex-col min-h-screen">

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

        {/* Reviews Section 
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
         </section> */}

        {/* Contact Section */}
        <ContactSection />

      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
