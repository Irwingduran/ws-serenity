import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { HospitalIcon, CurrencyIcon, GlobeIcon, } from 'lucide-react';


export default function MedicalTourismLanding() {
  return (
    <div className="bg-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-[#77B5B2] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Tourism in Puebla, Mexico</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            World-class healthcare combined with cultural recovery in Mexico's most beautiful colonial city
          </p>
          <Link 
            href="#contact" 
            className="inline-block bg-white text-[#507775] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Plan Your Medical Journey
          </Link>
        </div>
      </section>

      {/* Why Puebla Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#77B5B2] mb-4">Why Choose Puebla for Your Medical Care?</h2>
          <div className="w-24 h-1 bg-[#507775] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#77B5B2] rounded-full flex items-center justify-center text-white">
            
              </div>
              <h3 className="text-xl font-semibold text-[#507775] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Recovery Destinations */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#77B5B2] mb-4">Recover in Puebla's Cultural Treasures</h2>
          <div className="w-24 h-1 bg-[#507775] mx-auto"></div>
        </div>

        <div className="space-y-12">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`relative h-64 rounded-xl overflow-hidden ${attraction.id % 2 === 0 ? 'md:order-last' : ''}`}>
                <Image src={attraction.image} alt={attraction.title} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#507775] mb-3">{attraction.title}</h3>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                {attraction.hours && (
                  <div className="mb-2">
                    <span className="font-medium">Hours:</span> {attraction.hours}
                  </div>
                )}
                {attraction.admission && (
                  <div className="mb-2">
                    <span className="font-medium">Admission:</span> {attraction.admission}
                  </div>
                )}
                {attraction.location && (
                  <div>
                    <span className="font-medium">Location:</span> {attraction.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-[#77B5B2] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Medical Journey to Puebla?</h2>
          <p className="text-xl mb-8">Our team will handle all arrangements for your treatment and recovery stay</p>
          <form className="max-w-md mx-auto">
            <div className="grid gap-4 mb-6">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg" />
              <input type="email" placeholder="Email Address" className="px-4 py-3 rounded-lg" />
     
            </div>
            <button type="submit" className="bg-[#507775] hover:bg-[#3a5a58] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Personalized Consultation
            </button>
          </form>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

// Icons (you would import these from your icon library)
const benefits = [
  {
    id: 1,
    title: "Internationally Accredited Hospitals",
    description: "Our partner facilities meet the highest global healthcare standards",
    icon: <HospitalIcon/>
  },
  {
    id: 2,
    title: "60-70% Cost Savings",
    description: "High-quality care at a fraction of US and European prices",
    icon: <CurrencyIcon/>
  },
  {
    id: 3,
    title: "Cultural Recovery Experience",
    description: "Heal while exploring Puebla's UNESCO World Heritage sites",
    icon: <GlobeIcon/>
  }
];


const attractions = [
  {
    id: 1,
    title: "Puebla Cathedral",
    description: "The Cathedral Basilica of Puebla, dedicated to Our Lady of the Immaculate Conception, is the episcopal seat of the archdiocese of Puebla. It was the first sumptuous temple built in America with good designs, consecrated in 1649. Founded by Philip II of Spain, it's a centerpiece of Puebla's UNESCO World Heritage historic center.",
    image: "/puebla/catedral.webp"
  },
  {
    id: 2,
    title: "Angelopolis",
    description: "Angelopolis area has an approximate area of 15 km2. It is notorious for the high purchasing power of most of its residents and the amount of skyscrapers, where the tallest building in Puebla is the Torre Adamant II, located on the side of the Atlixcáyotl Avenue. There are also several hospitals; private as the Puebla Hospital, the Ángeles Hospital and Torres Médicas, and public, as Cholula General Hospital and Hospital para el Niño Poblano.",
    image: "/puebla/angelopolis.jpg"
  },
  {
    id: 3,
    title: "International Baroque Museum",
    description: "This innovative museum creates dialogues between Baroque art and contemporary works through interactive exhibits. The architecture itself is a modern interpretation of Baroque style.",
    location: "Boulevard Atlixcáyotl 2501, Reserva Territorial Atlixcáyotl",
    hours: "Tuesday to Sunday, 10:00 to 19:00",
    admission: "$100 General / $50 Puebla residents / Free on Sundays",
    image: "/puebla/baroco.jpg"
  },
  {
    id: 4,
    title: "Santa Monica Ex-Convent",
    description: "This former Augustinian convent, converted to a Religious Art Museum in 1935, showcases Mexico's richest collection of colonial-era religious art. The museum preserves the atmosphere of Puebla's conventual life with works by famous artists like Miguel Cabrera.",
    image: "/puebla/convento.jpeg"
  },
  {
    id: 5,
    title: "Solesta",
    description: "Bright shopping center with dome, stores, movies and eclectic choices of casual and modern dishes.",
    image: "/puebla/solesta.jpg"
  },
  {
    id: 6,
    title: "Star of Puebla",
    description: "The wheel received the Guinness World Record for the largest portable observation wheel in the world, with a diameter of 69.8 meters (229 feet) and a height of 80 meters. La Estrella de Puebla is part of a tourist complex that includes the Parque Lineal, Jardín del Arte, Eco Parque Metropolitano, Paseo del Río Atoyac, as well as the Museo Internacional del Barroco (International Museum of the Baroque).",
    image: "/puebla/ange.png"
  }
];