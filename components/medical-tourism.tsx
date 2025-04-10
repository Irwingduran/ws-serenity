import Image from 'next/image';
import Link from 'next/link';

export default function MedicalTourismSection() {
  return (
    <section className="bg-white py-16 px-4" id="medical-tourism">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#77B5B2] mb-4">Medical Tourism Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            World-class healthcare combined with the perfect recovery environment in Mexico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#507775] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/medical-tour" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#77B5B2] hover:bg-[#5a9c99] transition-colors shadow-sm"
          >
            Discover Our Medical Tourism Program
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
    {
        id: 1,
        title: "Puebla Cathedral",
        description: "Recover near this architectural masterpiece, where peaceful cloisters and spiritual ambiance enhance healing.",
        image: "/puebla/catedral.webp"
      },
      {
        id: 2,
        title: "Great Pyramid of Cholula",
        description: "Convalesce at the world's largest pyramid, where ancient healing energy meets modern rehabilitation.",
        image: "/puebla/piramode.jpeg"
      },
      {
        id: 3,
        title: "Forts of Loreto and Guadalupe",
        description: "Historic Battle of Puebla (May 5) transformed into recovery spaces with panoramic city views.",
        image: "/puebla/fuertes.webp"
      },
];