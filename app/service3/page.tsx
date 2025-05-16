"use client"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { ChevronRight } from "lucide-react"

const Page = () => {
const [activeTab, setActiveTab] = useState("services")

return ( <div className="flex flex-col min-h-screen"> <Navbar />

  {/* Hero Section */}
  <section
    className="relative bg-[#77B5B2]/90 bg-blend-overlay"
    style={{ backgroundImage: "url('/service/img4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center text-black">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Health</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">Expert Bariatric Surgery Procedures</h2>
      <h3 className="text-xl md:text-3xl font-medium mb-12">Achieve Sustainable Weight Loss and Improved Wellbeing</h3>
      <Button className="mt-8 bg-[#77B5B2] hover:bg-[#507775] text-white px-8 py-6 text-lg rounded-full">
        Book Your Consultation
      </Button>
    </div>
  </section>

  {/* Services Section */}
  <section className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#507775] text-center mb-8">Bariatric Surgery</h2>
      <p className="text-lg text-center mb-12">
        We specialize in weight loss surgery to help you achieve lasting results. Discover how our bariatric
        procedures can transform your health and quality of life.
      </p>

      {/* Service Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Service Overview */}
        <div className="space-y-8">
          <div className="bg-[#F5F7FA] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#507775] mb-4">What is Bariatric Surgery?</h3>
            <p className="text-gray-600 mb-4">
              Bariatric surgery refers to various procedures that help with weight loss by making changes to your digestive system. These surgeries are life-changing solutions for individuals struggling with obesity.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Proven long-term weight loss results</li>
              <li>Improvement or remission of obesity-related conditions</li>
              <li>Minimally invasive techniques with faster recovery</li>
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
                  <h4 className="font-semibold text-[#507775]">Comprehensive Evaluation</h4> 
                  <p className="text-gray-600">We assess your health status and design a personalized treatment plan.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  2 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Surgery</h4> 
                  <p className="text-gray-600">Performed laparoscopically under general anesthesia for minimal invasiveness.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  3 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Hospital Stay</h4> 
                  <p className="text-gray-600">Typically 1-2 nights for monitoring and initial recovery.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  4 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Nutritional Transition</h4> 
                  <p className="text-gray-600">Gradual progression from liquids to solid foods under guidance.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  5 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Recovery Support</h4> 
                  <p className="text-gray-600">We provide comprehensive post-operative care instructions.</p> 
                </div> 
              </div>
              
              {/* Procedure Steps */} 
              <div className="flex items-start space-x-4"> 
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  6 
                </div> 
                <div> 
                  <h4 className="font-semibold text-[#507775]">Long-term Follow-up</h4> 
                  <p className="text-gray-600">Regular check-ins to monitor progress and nutritional status.</p> 
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
                    Specialists with extensive experience in bariatric procedures.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#507775]">Multidisciplinary Team</h4>
                  <p className="text-gray-600">Nutritionists, psychologists and physicians working together for your success.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#77B5B2] text-white rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#507775]">Comprehensive Care</h4>
                  <p className="text-gray-600">From pre-op evaluation to long-term follow-up for optimal results.</p>
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
          <h2 className="text-3xl font-bold text-[#507775] text-center mb-8">Bariatric Surgery Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Roux-en-Y Gastric Bypass",
              "Mini Gastric Bypass",
              "Laparoscopic Sleeve Gastrectomy",
              "Endoscopic Sleeve Gastrectomy",
              "Single Port Sleeve Gastrectomy",
              "Intragastric Balloon (Spatz or BIB)",
              "Intragastric Balloon Removal",
              "Intragastric Balloon Adjustment",
              "Sleeve to Bypass Conversion",
              "Hiatal Hernia Repair with Bariatric Surgery",
              "Umbilical Hernia Repair with Bariatric Surgery",
              "Patients with BMI > 50",
              "Preoperative Endoscopy",
              "Intraoperative Endoscopy"
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
              <AccordionTrigger className="text-[#507775] font-medium">What is sleeve gastrectomy?</AccordionTrigger>
              <AccordionContent>A surgery that reduces stomach size to help you eat less and feel full faster.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#507775] font-medium">
                How does sleeve gastrectomy work for weight loss?
              </AccordionTrigger>
              <AccordionContent>By reducing stomach capacity, you consume smaller portions and feel satisfied with less food.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#507775] font-medium">
                Who are candidates for sleeve gastrectomy?
              </AccordionTrigger>
              <AccordionContent>
                Individuals with severe obesity (high BMI) who haven't succeeded with other weight loss methods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#507775] font-medium">
                What are the benefits of sleeve gastrectomy?
              </AccordionTrigger>
              <AccordionContent>Significant weight loss, improvement of obesity-related health problems, and relatively quick recovery.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#507775] font-medium">What are the risks?</AccordionTrigger>
              <AccordionContent>As with any surgery, risks include bleeding, infection, stomach leaks and long-term complications.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[#507775] font-medium">How much weight can I expect to lose?</AccordionTrigger>
              <AccordionContent>Most patients lose 60-70% of excess weight within one year.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-[#507775] font-medium">
                What is the recovery process like?
              </AccordionTrigger>
              <AccordionContent>Begins with liquid diet, then soft foods, gradually introducing solids. Requires rest and medical follow-up.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-[#507775] font-medium">
                What diet should I follow after surgery?
              </AccordionTrigger>
              <AccordionContent>Strict low-fat, low-sugar, high-protein diet to maximize weight loss and avoid complications.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-[#507775] font-medium">How long does the surgery take?</AccordionTrigger>
              <AccordionContent>Approximately 1-2 hours.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-[#507775] font-medium">
                What preparation is needed before surgery?
              </AccordionTrigger>
              <AccordionContent>Medical tests, nutritional and psychological evaluation, and following a pre-op diet.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-[#507775] font-medium">
                What is the cost of sleeve gastrectomy?
              </AccordionTrigger>
              <AccordionContent>Price varies - please contact us for updated pricing information.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-[#507775] font-medium">
                What kind of post-op follow-up do you provide?
              </AccordionTrigger>
              <AccordionContent>Continuous support with nutritionists and surgeons.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-[#507775] font-medium">
                What complications might occur?
              </AccordionTrigger>
              <AccordionContent>Leaks, strictures, reflux, and nutritional deficiencies.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-[#507775] font-medium">
                Are vitamin supplements necessary after surgery?
              </AccordionTrigger>
              <AccordionContent>Yes, since the stomach absorbs fewer nutrients post-surgery.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-[#507775] font-medium">
                How long do I need to stay in Puebla for the process?
              </AccordionTrigger>
              <AccordionContent>Depends on the service package chosen by the client.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-[#507775] font-medium">
                How is payment for surgery made?
              </AccordionTrigger>
              <AccordionContent>By bank transfer or credit card.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-17">
              <AccordionTrigger className="text-[#507775] font-medium">
                What psychological support do you provide?
              </AccordionTrigger>
              <AccordionContent>Psychological follow-up throughout the entire process.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-18">
              <AccordionTrigger className="text-[#507775] font-medium">
                How does sleeve gastrectomy affect blood sugar levels?
              </AccordionTrigger>
              <AccordionContent>Generally improves them, especially for people with type 2 diabetes.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-19">
              <AccordionTrigger className="text-[#507775] font-medium">
                When can I exercise after surgery?
              </AccordionTrigger>
              <AccordionContent>Light walks soon, more intense exercise after a few weeks.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-20">
              <AccordionTrigger className="text-[#507775] font-medium">
                What is gastric bypass?
              </AccordionTrigger>
              <AccordionContent>A procedure that reduces stomach size and connects it directly to the small intestine.</AccordionContent>
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
      <h2 className="text-3xl md:text-4xl font-bold text-[#507775] mb-6">Ready to Transform Your Health?</h2>
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