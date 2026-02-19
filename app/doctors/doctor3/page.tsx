"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const doctor = {
    name: "Dr. Bruno Rubi Lopez",
    specialty: "Prostate Surgery",
    facility: "Hospital Angeles Puebla",
    location: "Puebla, Mexico",
    languages: "English & Spanish",
    licenseSpecialty: "CP: 9505148 / CE: 12831401",
    bio: "Dr. Rubi completed a Bachelor's Degree at Tecnologico de Monterrey Campus Monterrey and a Specialty in General Surgery and Urology at Centro Medico Lic. Adolfo Lopez Mateos endorsed by the UAEMEX. He also completed a course in Advanced Laparoscopy at Lap Mentor Training Systems and obtained a training in Holmium Laser Enucleation of the Prostate (HOLEP). Currently Dr. Rubi is a member of the most important Urological Societies in the country and the world.",
    procedures: ["HOLEP (Prostate Laser Surgery)", "Malignant diseases of the urinary system", "Benign diseases of the urinary system"]
  };

const Page = () => {
  return (
    <>
    <Navbar/>
<div className="bg-white min-h-screen">
    
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link href="/#partners" className="inline-flex items-center text-sm font-medium text-[#77B5B2] hover:text-[#5a9c99]">
                Doctor's
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Dr. Rubí</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Doctor Header */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
         {/* Doctor Photo */}
<div className="w-full md:w-1/3 lg:w-1/4">
  <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
    <Image
      src="/dr-bruno.png" // Replace with your actual image path
      alt="Doctor profile photo"
      width={300}
      height={300}
      className="w-full h-full object-cover"
    />
  </div>
</div>

          {/* Doctor Info */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-3xl font-bold text-[#507775] mb-2">{doctor.name}</h1>
            <p className="text-xl text-[#77B5B2] mb-6">{doctor.specialty}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Surgical Facility</h3>
                <p className="text-lg text-gray-800">{doctor.facility}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Location</h3>
                <p className="text-lg text-gray-800">{doctor.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Languages</h3>
                <p className="text-lg text-gray-800">{doctor.languages}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Medical License (Specialty)</h3>
                <p className="text-lg text-gray-800">{doctor.licenseSpecialty}</p>
              </div>
            </div>
{/* 
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-2 border border-[#77B5B2] text-[#77B5B2] rounded-lg hover:bg-[#77B5B2] hover:text-white transition-colors">
                SEE CERTIFICATES
              </button>
              <button className="px-6 py-2 border border-[#77B5B2] text-[#77B5B2] rounded-lg hover:bg-[#77B5B2] hover:text-white transition-colors">
                SEE PROCEDURES
              </button>
              <button className="px-6 py-2 border border-[#77B5B2] text-[#77B5B2] rounded-lg hover:bg-[#77B5B2] hover:text-white transition-colors">
                SEE DOCTOR'S BIO
              </button>
            </div>
            */}

          </div>
        </div>
      </section>

      {/* Hospital Info */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#507775] mb-4">{doctor.facility}</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-600 max-w-2xl">
            Hospital Angeles Puebla considered the most exclusive and equipped hospital in the State of Puebla.
            </p>
            <Link 
              href="https://www.findoctor.com.mx/doctores/bruno-rubi-lopez" 
              className="px-6 py-3 bg-[#77B5B2] text-white rounded-lg hover:bg-[#5a9c99] transition-colors font-medium"
            >
              Findoctor Profile →
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info Sections */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Procedures */}
          <div>
            <h3 className="text-xl font-semibold text-[#507775] mb-4">Common Procedures</h3>
            <ul className="space-y-2">
              {doctor.procedures.map((procedure, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[#77B5B2] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{procedure}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-[#507775] mb-4">About Dr. Rubí</h3>
            <p className="text-gray-700 mb-4">{doctor.bio}</p>
            {/* Bio 
            <Link href="#" className="text-[#77B5B2] hover:text-[#5a9c99] font-medium inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            */}
          </div>
        </div>
      </section>
    </div>
      <Footer/>
    </>
  );
};

export default Page