"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormSuccess(false);
    setFormError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        {
          formName: formName,
          formEmail: formEmail,
          formPhone: formPhone,
          formMessage: formMessage,
        },
        EMAILJS_USER_ID
      );
      setFormSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMessage('');
    } catch (err) {
      setFormError(true);
    } finally {
      setFormLoading(false);
    }
  };

  return (
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
                  <p>Facial Surgery Lomas, Tlaxcalancingo Puebla.</p> <br />
                </div>
              </a>
              <a href={"mailto:serenity.turismomed@gmail.com"}>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <p>serenity.turismomed@gmail.com</p> <br />
                </div>
              </a>
              <a href={"https://wa.me/16195695034?text=Hello%20Doctor%2C%20I%20found%20your%20website%20and%20I%20would%20like%20to%20schedule%20a%20consultation"}>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <p>+1 619 569 5034</p>
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
  );
};

export default ContactSection;
