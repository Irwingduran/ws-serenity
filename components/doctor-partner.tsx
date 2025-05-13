import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Doctor {
  name: string;
  specialty: string;
  id: string;
  imageUrl: string;
}

const doctors: Doctor[] = [
  { 
    name: "Dr. Irvin Hans Garduño", 
    specialty: "Rhinology & Facial Aesthetic Surgery", 
    id: "doctor1",
    imageUrl: "/dr-irvin.png" 
  },
  { 
    name: "Dr. Ricardo Blas", 
    specialty: "Bariatric Surgery", 
    id: "doctor2",
    imageUrl: "/blass.avif"
  },
  { 
    name: "Dr. Bruno Rubí", 
    specialty: "Prostate Surgery", 
    id: "doctor3",
    imageUrl: "/dr-bruno.png"
  },
  { 
    name: "Dr. Jesús Antonio Riaño", 
    specialty: "Plastic Surgery", 
    id: "doctor4",
    imageUrl: "/dr-jesus.jpg"
  }

];

export default function PartnerDoctors() {
  return (
    <section className="bg-white py-12 px-4" id="partners">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#77B5B2] text-center mb-12">Our Partner Doctors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface DoctorCardProps {
  doctor: Doctor;
}

function DoctorCard({ doctor }: DoctorCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden border-2 border-[#77B5B2] relative flex items-center justify-center">
            {imageError ? (
              <span className="text-4xl text-[#77B5B2] font-bold">
                {doctor.name.split(' ')[1].charAt(0)}
              </span>
            ) : (
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                priority={false}
              />
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-[#507775] text-center mb-1">
          {doctor.name}
        </h3>
        <p className="text-sm text-gray-500 text-center mb-4">
          {doctor.specialty}
        </p>
        
        <div className="text-center">
          <Link 
            href={`/doctors/${doctor.id}`}
            className="inline-flex items-center text-sm font-medium text-[#77B5B2] hover:text-[#5a9c99] transition-colors"
          >
            View Profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}