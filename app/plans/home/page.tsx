import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import ProcedurePlanCard from "../../../components/procedure-plan-card"
import { Button } from "../../../components/ui/button"
import { Stethoscope, Plane, Car, Clipboard, Home, Calendar, HeartPulse, Phone, CheckCircle, Users } from "lucide-react"

export default function PlansPage() {
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
      ctaLink: "/services/liposuction",
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
          included: false,
        },
      ],
      ctaLink: "/services/augmentation-mammoplasty",
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
          included: false,
        },
      ],
      ctaLink: "/services/head-neck-surgery",
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
      ctaLink: "/services/bariatric",
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
          <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg">
            Request a Custom Plan
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
