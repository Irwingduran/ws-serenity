"use client"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { ChevronRight } from "lucide-react"

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Enhance Your Silhouette</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Breast Augmentation Procedures</h2>
          <h3 className="text-xl md:text-3xl font-medium mb-12">Achieve Beautiful, Natural-Looking Results</h3>
          <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Breast Augmentation</h2>
          <p className="text-lg text-center mb-12">
            We specialize in breast enhancement to help you achieve your desired look. Discover how our breast augmentation
            services can enhance your natural beauty and confidence.
          </p>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Service Overview */}
            <div className="space-y-8">
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Breast Augmentation?</h3>
                <p className="text-gray-600 mb-4">
                  Breast augmentation is a surgical procedure to enhance the size and shape of your breasts using implants.
                  It's ideal for women who want to improve their body proportions or restore breast volume.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Customized to your body type and goals</li>
                  <li>Provides a more balanced and feminine silhouette</li>
                  <li>Can improve self-confidence and body image</li>
                </ul>
              </div>

              {/* Procedure Steps */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#507775] mb-4">The Procedure</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Consultation</h4>
                      <p className="text-gray-600">We evaluate your goals and help you choose the right implant type and size.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Surgery</h4>
                      <p className="text-gray-600">Performed under general anesthesia, typically taking 1-2 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Travel and Accommodation</h4>
                      <p className="text-gray-600">We provide travel and accommodation assistance to make your experience comfortable.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Transportation</h4>
                      <p className="text-gray-600">We provide transportation assistance to and from the hospital.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Preoperative Procedures</h4>
                      <p className="text-gray-600">We provide preoperative procedures to ensure a safe and successful surgery.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Transfer to the Recovery House/Hotel</h4>
                      <p className="text-gray-600">We provide transfer assistance to the recovery house/hotel.</p>
                    </div>
                  </div>
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
                      <h4 className="font-semibold text-[#507775]">Board-Certified Surgeons</h4>
                      <p className="text-gray-600">
                        Specialists with extensive experience in breast augmentation procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Personalized Approach</h4>
                      <p className="text-gray-600">Customized treatment plans to meet your aesthetic goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#507775]">Premium Implant Options</h4>
                      <p className="text-gray-600">High-quality silicone or saline implants from trusted manufacturers.</p>
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
              <h2 className="text-3xl font-bold text-[#507775] text-center mb-8">All Breast Surgery Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Breast Augmentation",
                  "Breast Reduction",
                  "Mastopexy with or without implants",
                  "Implant Removal",
                  "Unilateral Capsular Contracture Correction",
                  "Bilateral Capsular Contracture Correction",
                  "Gynecomastia Correction with Liposuction",
                  "Breast Implant Revision",
                  "Breast Asymmetry Correction",
                  "Tuberous Breast Correction"
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
                  <AccordionTrigger className="text-[#507775] font-medium">What is breast augmentation?</AccordionTrigger>
                  <AccordionContent>It's a surgery to increase breast size using implants.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What types of implants are available?
                  </AccordionTrigger>
                  <AccordionContent>Silicone or saline implants in various shapes and sizes.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Where are the implants placed?
                  </AccordionTrigger>
                  <AccordionContent>Under the muscle or breast tissue, depending on your anatomy.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How long does the surgery take?
                  </AccordionTrigger>
                  <AccordionContent>Typically 1-2 hours under general anesthesia.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-[#507775] font-medium">How long is recovery?</AccordionTrigger>
                  <AccordionContent>Most patients need 1-2 weeks off work, with full recovery in 6-8 weeks.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-[#507775] font-medium">Are there visible scars?</AccordionTrigger>
                  <AccordionContent>Scars are small and placed in discreet locations (under breast, around areola, or in armpit).</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How much do breast implants cost?
                  </AccordionTrigger>
                  <AccordionContent>Varies by implant type, size, and surgical technique.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How long do implants last?
                  </AccordionTrigger>
                  <AccordionContent>Many years, but may need replacement after 10-15 years.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-[#507775] font-medium">Do implants affect breastfeeding?</AccordionTrigger>
                  <AccordionContent>Most women can breastfeed normally after augmentation.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What preparation is needed before surgery?
                  </AccordionTrigger>
                  <AccordionContent>Medical tests, mammograms if needed, and stopping certain medications.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    What post-operative care is required?
                  </AccordionTrigger>
                  <AccordionContent>
                    Special support bra, avoiding strenuous activity, and follow-up appointments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Can implants be replaced later?
                  </AccordionTrigger>
                  <AccordionContent>Yes, if you want to change size or if replacement is needed.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Are there risks with breast implants?
                  </AccordionTrigger>
                  <AccordionContent>Capsular contracture, implant rupture, or infection are possible risks.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Do implants increase cancer risk?
                  </AccordionTrigger>
                  <AccordionContent>No, studies show no increased risk of breast cancer.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    When will I see final results?
                  </AccordionTrigger>
                  <AccordionContent>After several months when swelling subsides and implants settle.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    How is implant size determined?
                  </AccordionTrigger>
                  <AccordionContent>Based on your body proportions and desired outcome.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-17">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Will implants feel natural?
                  </AccordionTrigger>
                  <AccordionContent>Modern implants feel very natural, especially when placed under the muscle.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-18">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    When can I exercise after surgery?
                  </AccordionTrigger>
                  <AccordionContent>Light activity after 2 weeks, full exercise after 6 weeks.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-19">
                  <AccordionTrigger className="text-[#507775] font-medium">
                    Can augmentation correct sagging breasts?
                  </AccordionTrigger>
                  <AccordionContent>For significant sagging, a breast lift may be needed with augmentation.</AccordionContent>
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
              

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#77B5B2]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#507775] mb-6">Ready to Enhance Your Confidence?</h2>
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