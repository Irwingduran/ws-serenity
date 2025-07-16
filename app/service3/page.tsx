"use client"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { ChevronRight } from "lucide-react"
import RequiredStudies from "../../components/required-studies"

const Page = () => {
const [activeTab, setActiveTab] = useState("services")

return ( <div className="flex flex-col min-h-screen"> <Navbar />

  {/* Hero Section */}
  <section
    className="relative bg-[#77B5B2]/90 bg-blend-overlay"
    style={{ backgroundImage: "url('/service/img4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-black">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Refine Your Profile</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Rhinoplasty Procedures</h2>
      <h3 className="text-xl md:text-3xl font-medium mb-12">Achieve Facial Harmony and Boost Your Confidence</h3>
      <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
        Book Your Consultation
      </Button>
    </div>
  </section>

  {/* Services Section */}
  <section className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Rhinoplasty</h2>
      <p className="text-lg text-center mb-12">
        We specialize in nasal surgery to enhance both form and function. Discover how our rhinoplasty procedures can improve your facial aesthetics and breathing.
      </p>

      {/* Service Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Service Overview */}
        <div className="space-y-8">
          <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Rhinoplasty?</h3>
            <p className="text-gray-600 mb-4">
              Rhinoplasty, commonly called a "nose job," is a surgical procedure that changes the shape or improves the function of the nose. It can address cosmetic concerns, breathing issues, or both.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Enhances facial harmony and proportions</li>
              <li>Corrects breathing problems from structural abnormalities</li>
              <li>Can repair nasal trauma or congenital defects</li>
              <li>Provides natural-looking, long-lasting results</li>
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
                  <p className="text-gray-600">We evaluate your nasal structure, discuss goals, and create a surgical plan.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  2 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Anesthesia</h4> 
                  <p className="text-gray-600">Administered for your comfort during the procedure (general or local with sedation).</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  3 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Incisions</h4> 
                  <p className="text-gray-600">Made inside the nose (closed rhinoplasty) or across the columella (open rhinoplasty).</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  4 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Reshaping</h4> 
                  <p className="text-gray-600">Cartilage and bone are sculpted to achieve the desired shape.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  5 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Closure</h4> 
                  <p className="text-gray-600">Incisions are closed and nasal splints/tubes may be placed.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  6 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Recovery</h4> 
                  <p className="text-gray-600">Initial swelling subsides in weeks, with final results visible after a year.</p> 
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
                    Specialists with extensive experience in facial plastic surgery.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#507775]">Natural Results</h4>
                  <p className="text-gray-600">We focus on enhancing your natural beauty while maintaining nasal function.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#507775]">Personalized Approach</h4>
                  <p className="text-gray-600">Each procedure is customized to your unique facial structure and goals.</p>
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
          <h2 className="text-3xl font-bold text-[#507775] text-center mb-8">Rhinoplasty Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Primary Rhinoplasty",
              "Revision Rhinoplasty",
              "Ethnic Rhinoplasty",
              "Male Rhinoplasty",
              "Functional Rhinoplasty (for breathing issues)",
              "Septorhinoplasty (deviated septum correction)",
              "Tip Plasty (nasal tip refinement)",
              "Non-Surgical Rhinoplasty (filler-based)",
              "Open Rhinoplasty",
              "Closed Rhinoplasty",
              "Preservation Rhinoplasty",
              "Rhinoplasty with Cartilage Grafting",
              "Post-Traumatic Rhinoplasty",
              "Pediatric Rhinoplasty (for congenital defects)"
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
              <AccordionTrigger className="text-[#507775] font-medium">What is rhinoplasty?</AccordionTrigger>
              <AccordionContent>A surgical procedure to reshape or reconstruct the nose for cosmetic or functional purposes.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#507775] font-medium">
                How long does rhinoplasty surgery take?
              </AccordionTrigger>
              <AccordionContent>Typically 1-3 hours depending on complexity.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#507775] font-medium">
                What's the difference between open and closed rhinoplasty?
              </AccordionTrigger>
              <AccordionContent>
                Open involves an external incision for better visibility; closed uses only internal incisions with less visible scarring.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#507775] font-medium">
                How long is the recovery period?
              </AccordionTrigger>
              <AccordionContent>Initial swelling subsides in 2-3 weeks, but final results may take up to a year as subtle changes continue.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#507775] font-medium">Will there be visible scars?</AccordionTrigger>
              <AccordionContent>With closed rhinoplasty, no. With open, a small scar on the columella that typically fades well.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[#507775] font-medium">When can I return to work?</AccordionTrigger>
              <AccordionContent>Most patients return to non-strenuous work in 1-2 weeks.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-[#507775] font-medium">
                What are the risks of rhinoplasty?
              </AccordionTrigger>
              <AccordionContent>Bleeding, infection, breathing difficulties, or need for revision surgery.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-[#507775] font-medium">
                Can rhinoplasty fix breathing problems?
              </AccordionTrigger>
              <AccordionContent>Yes, functional rhinoplasty can correct structural issues like deviated septum.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-[#507775] font-medium">How long do results last?</AccordionTrigger>
              <AccordionContent>Permanent, though natural aging continues.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-[#507775] font-medium">
                What's the best age for rhinoplasty?
              </AccordionTrigger>
              <AccordionContent>After nasal growth is complete, typically after age 15-16 for girls, slightly later for boys.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-[#507775] font-medium">
                What is revision rhinoplasty?
              </AccordionTrigger>
              <AccordionContent>Surgery to correct or improve results from a previous rhinoplasty.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-[#507775] font-medium">
                How is ethnic rhinoplasty different?
              </AccordionTrigger>
              <AccordionContent>Focuses on preserving ethnic characteristics while refining the nose's appearance.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-[#507775] font-medium">
                When can I exercise after surgery?
              </AccordionTrigger>
              <AccordionContent>Light activity after 2-3 weeks, full activity after 4-6 weeks.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-[#507775] font-medium">
                Will I have packing in my nose?
              </AccordionTrigger>
              <AccordionContent>Sometimes, but we often use dissolvable packing or none at all.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-[#507775] font-medium">
                How much does rhinoplasty cost?
              </AccordionTrigger>
              <AccordionContent>Varies by procedure complexity - contact us for a personalized quote.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-[#507775] font-medium">
                Is rhinoplasty painful?
              </AccordionTrigger>
              <AccordionContent>Most patients report discomfort rather than severe pain, well-controlled with medication.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-17">
              <AccordionTrigger className="text-[#507775] font-medium">
                Can I see computer imaging of my potential results?
              </AccordionTrigger>
              <AccordionContent>Yes, we provide computer imaging during consultation to help visualize potential outcomes.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-18">
              <AccordionTrigger className="text-[#507775] font-medium">
                What's non-surgical rhinoplasty?
              </AccordionTrigger>
              <AccordionContent>Uses dermal fillers to temporarily alter nose shape, best for minor corrections.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-19">
              <AccordionTrigger className="text-[#507775] font-medium">
                How do I prepare for rhinoplasty?
              </AccordionTrigger>
              <AccordionContent>Avoid certain medications/supplements, stop smoking, and follow pre-op instructions carefully.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-20">
              <AccordionTrigger className="text-[#507775] font-medium">
                When can I wear glasses after surgery?
              </AccordionTrigger>
              <AccordionContent>Typically after 4-6 weeks to avoid pressure on the healing nose.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  </section>

  <RequiredStudies/>

  {/* Call to Action */}
  <section className="py-16 px-4 bg-[#77B5B2]/10">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#507775] mb-6">Ready to Enhance Your Profile?</h2>
      <p className="text-lg mb-8">
        Schedule a consultation with our expert surgeons to discuss your rhinoplasty goals and options.
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