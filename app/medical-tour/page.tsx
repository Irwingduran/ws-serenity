import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

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
const HospitalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const CurrencyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const benefits = [
  {
    id: 1,
    title: "Internationally Accredited Hospitals",
    description: "Our partner facilities meet the highest global healthcare standards",
    icon: HospitalIcon
  },
  {
    id: 2,
    title: "60-70% Cost Savings",
    description: "High-quality care at a fraction of US and European prices",
    icon: CurrencyIcon
  },
  {
    id: 3,
    title: "Cultural Recovery Experience",
    description: "Heal while exploring Puebla's UNESCO World Heritage sites",
    icon: GlobeIcon
  }
];


const attractions = [
  {
    id: 1,
    title: "Puebla Cathedral",
    description: "The Cathedral Basilica of Puebla, dedicated to Our Lady of the Immaculate Conception, is the episcopal seat of the archdiocese of Puebla. It was the first sumptuous temple built in America with good designs, consecrated in 1649. Founded by Philip II of Spain, it's a centerpiece of Puebla's UNESCO World Heritage historic center.",
    image: "/Puebla/catedral.webp"
  },
  {
    id: 2,
    title: "Forts of Loreto and Guadalupe",
    description: "These 19th century military fortifications were originally chapels built on the Acueyametepec hill. They became famous as the scene of the Battle of Puebla during the French Intervention in Mexico. Now housing site museums, they offer panoramic views of the city.",
    image: "/Puebla/fuertes.webp"
  },
  {
    id: 3,
    title: "International Baroque Museum",
    description: "This innovative museum creates dialogues between Baroque art and contemporary works through interactive exhibits. The architecture itself is a modern interpretation of Baroque style.",
    location: "Boulevard Atlixcáyotl 2501, Reserva Territorial Atlixcáyotl",
    hours: "Tuesday to Sunday, 10:00 to 19:00",
    admission: "$100 General / $50 Puebla residents / Free on Sundays",
    image: "/Puebla/baroco.jpg"
  },
  {
    id: 4,
    title: "Santa Monica Ex-Convent",
    description: "This former Augustinian convent, converted to a Religious Art Museum in 1935, showcases Mexico's richest collection of colonial-era religious art. The museum preserves the atmosphere of Puebla's conventual life with works by famous artists like Miguel Cabrera.",
    image: "/Puebla/convento.jpeg"
  },
  {
    id: 5,
    title: "Great Pyramid of Cholula",
    description: "Considered the largest pyramid in the world by volume, this ancient temple was built in layers over centuries. Visitors can explore its tunnels to see preserved murals and appreciate how each civilization built over the previous structure.",
    admission: "$80",
    image: "/Puebla/piramode.jpeg"
  },
  {
    id: 6,
    title: "Barrio de los Sapos",
    description: "This colorful neighborhood in Puebla's historic center is famous for its antique shops, art galleries, and traditional 'pasita' liqueur. The perfect place to find unique souvenirs while enjoying colonial architecture.",
    image: "/Puebla/b-sapos.webp"
  }
];