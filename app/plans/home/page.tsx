"use client"
import React from "react";
import { useState } from "react"
import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import ProcedurePlanCard from "../../../components/procedure-plan-card"
import emailjs from 'emailjs-com';
import { Button } from "../../../components/ui/button"
import { Stethoscope, MapPinIcon, Mail, Plane, Car, Clipboard, Home, Calendar, HeartPulse, Phone, CheckCircle, Users } from "lucide-react"

export default function PlansPage() {

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

  const procedurePlans = [
    {
      title: "Liposculpture",
      subtitle: "360° Body Contouring",
      description: "Complete package to reshape your figure with the best specialists.",
      imageUrl: "/service/img4.jpg",
      popular: false,
      items: [
        {
          icon: <Stethoscope className="h-5 w-5" />,
          title: "Surgery",
          description: "Complete procedure with certified surgeons",
          included: true,
        },
        {
          icon: <Plane className="h-5 w-5" />,
          title: "Travel & Accommodation",
          description: "Hotel booking coordination with our partners",
          included: true,
        },
        {
          icon: <Car className="h-5 w-5" />,
          title: "Transportation",
          description: "Transfers between airport, hotel, and clinic",
          included: true,
        },
        {
          icon: <Clipboard className="h-5 w-5" />,
          title: "Pre-Surgery Procedures",
          description: "Initial exams and evaluations",
          included: true,
        },
        {
          icon: <Home className="h-5 w-5" />,
          title: "Transfer to Recovery Home/Hotel",
          description: "Safe transport after the procedure",
          included: true,
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Follow-Up Appointments",
          description: "Post-op consultations with specialists",
          included: true,
        },
        {
          icon: <HeartPulse className="h-5 w-5" />,
          title: "Long-Term Follow-Up",
          description: "Result monitoring for 12 months",
          included: true,
        },
      ],
      ctaLink: "#contact",
    },
    {
      title: "Augmentation Mammoplasty",
      subtitle: "Breast Enhancement",
      description: "Specialized breast augmentation with high-quality implants.",
      imageUrl: "/service/img3.jpg",
      items: [
        {
          icon: <Stethoscope className="h-5 w-5" />,
          title: "Surgery",
          description: "Complete procedure with certified surgeons",
          included: true,
        },
        {
          icon: <Plane className="h-5 w-5" />,
          title: "Travel & Accommodation",
          description: "Hotel booking coordination with our partners",
          included: true,
        },
        {
          icon: <Car className="h-5 w-5" />,
          title: "Transportation",
          description: "Transfers between airport, hotel, and clinic",
          included: true,
        },
        {
          icon: <Clipboard className="h-5 w-5" />,
          title: "Pre-Surgery Procedures",
          description: "Initial exams and evaluations",
          included: true,
        },
        {
          icon: <Home className="h-5 w-5" />,
          title: "Transfer to Recovery Home/Hotel",
          description: "Safe transport after the procedure",
          included: true,
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Follow-Up Appointments",
          description: "Post-op consultations with specialists",
          included: true,
        },
        {
          icon: <HeartPulse className="h-5 w-5" />,
          title: "Long-Term Follow-Up",
          description: "Result monitoring for 12 months",
          included: true,
        },
      ],
        ctaLink: "#contact",
    },
    {
      title: "Head and Neck Surgery",
      subtitle: "Facial Procedures",
      description: "Specialized procedures for facial rejuvenation and correction.",
      imageUrl: "/service/img2.jpg",
      items: [
        {
          icon: <Stethoscope className="h-5 w-5" />,
          title: "Surgery",
          description: "Complete procedure with certified surgeons",
          included: true,
        },
        {
          icon: <Plane className="h-5 w-5" />,
          title: "Travel & Accommodation",
          description: "Hotel booking coordination with our partners",
          included: true,
        },
        {
          icon: <Car className="h-5 w-5" />,
          title: "Transportation",
          description: "Transfers between airport, hotel, and clinic",
          included: true,
        },
        {
          icon: <Clipboard className="h-5 w-5" />,
          title: "Pre-Surgery Procedures",
          description: "Initial exams and evaluations",
          included: true,
        },
        {
          icon: <Home className="h-5 w-5" />,
          title: "Transfer to Recovery Home/Hotel",
          description: "Safe transport after the procedure",
          included: true,
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Follow-Up Appointments",
          description: "Post-op consultations with specialists",
          included: true,
        },
        {
          icon: <HeartPulse className="h-5 w-5" />,
          title: "Long-Term Follow-Up",
          description: "Result monitoring for 12 months",
          included: true,
        },
      ],
      ctaLink: "#contact",
    },
    {
      title: "Bariatric",
      subtitle: "Weight Loss Surgery",
      description: "Surgical solutions for weight loss and improved metabolic health.",
      imageUrl: "/service/img1.jpg",
      items: [
        {
          icon: <Stethoscope className="h-5 w-5" />,
          title: "Surgery",
          description: "Complete procedure with certified surgeons",
          included: true,
        },
        {
          icon: <Plane className="h-5 w-5" />,
          title: "Travel & Accommodation",
          description: "Hotel booking coordination with our partners",
          included: true,
        },
        {
          icon: <Car className="h-5 w-5" />,
          title: "Transportation",
          description: "Transfers between airport, hotel, and clinic",
          included: true,
        },
        {
          icon: <Clipboard className="h-5 w-5" />,
          title: "Pre-Surgery Procedures",
          description: "Initial exams and evaluations",
          included: true,
        },
        {
          icon: <Home className="h-5 w-5" />,
          title: "Transfer to Recovery Home/Hotel",
          description: "Safe transport after the procedure",
          included: true,
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Follow-Up Appointments",
          description: "Post-op consultations with specialists",
          included: true,
        },
        {
          icon: <HeartPulse className="h-5 w-5" />,
          title: "Long-Term Follow-Up",
          description: "Result monitoring for 12 months",
          included: true,
        },
        {
          icon: <Phone className="h-5 w-5" />,
          title: "Nutritional Support",
          description: "Specialized nutritional guidance for 6 months",
          included: true,
        },
      ],
          ctaLink: "#contact",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative bg-[#77B5B2]/90 bg-blend-overlay"
        style={{ backgroundImage: "url('/service/img4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Surgical Plans</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Complete packages designed for a hassle-free experience
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {procedurePlans.map((plan, index) => (
              <ProcedurePlanCard
                key={index}
                title={plan.title}
                subtitle={plan.subtitle}
                description={plan.description}
                imageUrl={plan.imageUrl}
                items={plan.items}
                ctaLink={plan.ctaLink}
                popular={plan.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#507775] text-center mb-12">Benefits of Our Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#77B5B2] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#507775] mb-4">All-Inclusive</h3>
              <p className="text-gray-600">
                Our plans cover all aspects of your medical journey, from surgery to accommodation and transportation.
              </p>
            </div>

            <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#77B5B2] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#507775] mb-4">Personalized Care</h3>
              <p className="text-gray-600">
                A dedicated coordinator will support you throughout the process to ensure your comfort and peace of mind.
              </p>
            </div>

            <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#77B5B2] rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartPulse className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#507775] mb-4">Comprehensive Follow-Up</h3>
              <p className="text-gray-600">
                It doesn't end with surgery. We offer post-op monitoring to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#77B5B2]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#507775] mb-6">Can’t find what you're looking for?</h2>
          <p className="text-lg mb-8">
            We can create a personalized plan that perfectly fits your specific needs.
          </p>
          <a href=""> 
          <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg">
            Request a Custom Plan
          </Button>
          </a>
        </div>
      </section>

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
                  <MapPinIcon className="w-6 h-6 mr-2" />
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
      
      <Footer />
    </div>
  )
}
