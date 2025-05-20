"use client"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { ChevronRight } from "lucide-react"
import RequiredStudiesPage from "../../components/required-studies"

const Page = () => {
  const [activeTab, setActiveTab] = useState("services")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-[#77B5B2]/90 bg-blend-overlay"
        style={{ backgroundImage: "url('/service/img4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Body</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Liposculpture 360 Procedures</h2>
          <h3 className="text-xl md:text-3xl font-medium mb-12">Achieve a Sculpted and Harmonious Figure</h3>
          <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Liposculpture 360</h2>
          <p className="text-lg text-center mb-12">
            We specialize in body contouring to help you achieve your desired silhouette. Discover how our Lipoescultura
            360 services can enhance your natural curves.
          </p>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Service Overview */}
            <div className="space-y-8">
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Liposculpture 360?</h3>
                <p className="text-gray-600 mb-4">
                  Liposculpture 360 is an advanced body contouring technique that removes excess fat and sculpts the
                  body from all angles. It is ideal for achieving a toned and proportionate figure.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Targets multiple areas of the body</li>
                  <li>Provides a more defined and athletic appearance</li>
                  <li>Minimally invasive with quick recovery</li>
                </ul>
              </div>

              {/* Procedure Steps */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">The Procedure</h3>
                <div className="space-y-4">
{/* Procedure Steps */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Consultation</h4>
                      <p className="text-gray-600">We evaluate your goals and design a customized treatment plan.</p>
                    </div>
                  </div>
{/* Procedure Steps */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Surgery</h4>
                      <p className="text-gray-600">Performed under anesthesia, ensuring a comfortable experience.</p>
                    </div>
                  </div>
{/* Procedure Steps */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Travel and Accommodation</h4>
                      <p className="text-gray-600">We provide travel and accommodation assistance to make your experience comfortable.</p>
                    </div>
                  </div>
{/* Procedure Steps */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Transportation</h4>
                      <p className="text-gray-600">We provide transportation assistance to and from the hospital. </p>
                    </div>
                  </div>
{/* Procedure Steps */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Preoperative Procedures</h4>
                      <p className="text-gray-600">We provide preoperative procedures to ensure a safe and successful surgery.</p>
                    </div>
                  </div>
                {/* Procedure Steps */}
                <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Transfer to the Recovery House/Hotel</h4>
                      <p className="text-gray-600">We provide transfer assistance to the recovery house/hotel.</p>
                    </div>
                  </div>
                   {/* Procedure Steps */}
                <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Follow-up Appointments</h4>
                      <p className="text-gray-600">We provide follow-up appointments to monitor your progress and ensure a healthy recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Benefits and Testimonials */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Expert Surgeons</h4>
                      <p className="text-gray-600">
                        Certified specialists with extensive experience in body contouring.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Personalized Care</h4>
                      <p className="text-gray-600">Tailored treatments to meet your unique body goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">State-of-the-Art Facility</h4>
                      <p className="text-gray-600">Advanced technology for safe and effective procedures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 px-4 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button
                className={`px-6 py-3 text-lg font-medium ${activeTab === "services" ? "bg-[#77B5B2] text-white" : "bg-white text-[#507775]"}`}
                onClick={() => setActiveTab("services")}
              >
                Our Services
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium ${activeTab === "faq" ? "bg-[#77B5B2] text-white" : "bg-white text-[#507775]"}`}
                onClick={() => setActiveTab("faq")}
              >
                FAQ
              </button>
            </div>
          </div>

          {activeTab === "services" && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#507775] text-center mb-8">All Liposuction Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "360 Liposculpture",
                  "360 Liposculpture with fat transfer to the buttocks and hips (Brazilian Butt Lift)",
                  "360 Liposculpture + Breast Augmentation",
                  "360 Liposculpture + Conventional Mastopexy",
                  "Arm Liposuction (Brachioplasty)",
                  "Neck Liposuction",
                  "Localized liposuction for a specific area",
                  "Calf Liposuction",
                  '"Buffalo Hump" Liposuction',
                  "Liposuction for BBL reduction",
                  "Fat transfer to breasts",
                  "Fat transfer to calves",
                  "Fat transfer to labia majora (genital area)",
                  "J-Plasma Laser",
                ].map((service, index) => (
                  <div key={index} className="flex items-start p-4 border-b border-gray-100">
                    <ChevronRight className="h-5 w-5 text-[#77B5B2] mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#507775] text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#507775] font-medium">What is liposculpture?</AccordionTrigger>
                  <AccordionContent>It is a surgery to remove localized fat and reshape the body.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Which areas of the body can be treated?
                  </AccordionTrigger>
                  <AccordionContent>Abdomen, thighs, arms, neck, etc.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How long does the surgery take?
                  </AccordionTrigger>
                  <AccordionContent>
                    It depends on the areas being treated; it can take between 1 and 3 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What type of anesthesia is used?
                  </AccordionTrigger>
                  <AccordionContent>Local anesthesia with sedation or general anesthesia.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-[#507775] font-medium">How long is the recovery?</AccordionTrigger>
                  <AccordionContent>A few weeks, with swelling and discomfort.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-[#507775] font-medium">Are there visible scars?</AccordionTrigger>
                  <AccordionContent>The scars are small and usually well hidden.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How much fat can be removed?
                  </AccordionTrigger>
                  <AccordionContent>It depends on the patient and the area being treated.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How much does liposculpture cost?
                  </AccordionTrigger>
                  <AccordionContent>It varies greatly depending on how many areas are treated.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-[#507775] font-medium">Are the results permanent?</AccordionTrigger>
                  <AccordionContent>Yes, if a stable weight is maintained.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Does liposculpture help with weight loss?
                  </AccordionTrigger>
                  <AccordionContent>No, it's not for losing weight but for body contouring.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What preparation is needed before surgery?
                  </AccordionTrigger>
                  <AccordionContent>Medical tests and stopping certain medications.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What kind of post-operative care is required?
                  </AccordionTrigger>
                  <AccordionContent>
                    Wearing a compression garment, receiving massages, and avoiding strenuous activity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Can liposculpture correct cellulite?
                  </AccordionTrigger>
                  <AccordionContent>
                    It can improve the appearance, but it doesn't eliminate it completely.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Are there risks with liposculpture?
                  </AccordionTrigger>
                  <AccordionContent>Yes—bleeding, infection, and skin irregularities.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Can liposculpture be combined with other surgeries?
                  </AccordionTrigger>
                  <AccordionContent>Yes, it's commonly combined with tummy tucks or other procedures.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How long until I see the final results?
                  </AccordionTrigger>
                  <AccordionContent>Several months, as swelling gradually goes down.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-17">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Can fat return to the treated areas?
                  </AccordionTrigger>
                  <AccordionContent>Yes, if weight is gained.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-18">
                  <AccordionTrigger className="text-[#507775] font-medium">Is liposculpture painful?</AccordionTrigger>
                  <AccordionContent>There may be discomfort, but it's manageable with medication.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-19">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    When can I return to exercising?
                  </AccordionTrigger>
                  <AccordionContent>After a few weeks, gradually.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-20">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What is high-definition liposuction?
                  </AccordionTrigger>
                  <AccordionContent>A technique used to highlight the abdominal muscles.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </section>

       {/* Testimonials 
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#3B5998] mb-4">Patient Stories</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#3B5998]">Ana R.</h4>
                      <p className="text-gray-600">"I’ve lost over 50 pounds and feel healthier than ever. Thank you!"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#3B5998]">Carlos M.</h4>
                      <p className="text-gray-600">"The team was supportive throughout my journey. Highly recommend!"</p>
                    </div>
                  </div>
                </div>
              </div>
              */}

              <RequiredStudiesPage/>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#77B5B2]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] mb-6">Ready to Transform Your Body?</h2>
          <p className="text-lg mb-8">
            Schedule a consultation with our expert team to discuss your goals and create a personalized treatment plan.
          </p>
          <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            Book Your Consultation Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
