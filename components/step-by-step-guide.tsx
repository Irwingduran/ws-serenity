"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "../components/ui/button"
import { Textarea } from "./ui/textarea"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

import {
  CheckCircle2,
  Calendar,
  Plane,
  Car,
  CreditCard,
  Stethoscope,
  HeartPulse,
  ChevronRight,
  ChevronDown,
  ClipboardCheck,
} from "lucide-react"

interface StepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  isActive: boolean
  isCompleted: boolean
  onClick: () => void
}

const Step = ({ number, title, description, icon, isActive, isCompleted, onClick }: StepProps) => {
  return (
    <div
      className={`relative flex items-start p-6 border-l-4 cursor-pointer transition-all duration-300 ${
        isActive
          ? "border-l-[#77B5B2] bg-[#77B5B2]/10"
          : isCompleted
            ? "border-l-green-500 bg-green-50"
            : "border-l-gray-200 hover:border-l-[#77B5B2]/50 hover:bg-[#77B5B2]/5"
      }`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0 ${
          isCompleted ? "bg-green-500 text-white" : isActive ? "bg-[#77B5B2] text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : number}
      </div>
      <div className="flex-1">
        <h3 className={`text-lg font-semibold ${isActive ? "text-[#507775]" : "text-gray-800"}`}>{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="ml-4">{icon}</div>
    </div>
  )
}

const StepByStepGuide = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [surgeryType, setSurgeryType] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  const steps = [
    {
      number: 1,
      title: "Eligibility Confirmation",
      description: "During the medical evaluation consultation",
      icon: <ClipboardCheck className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 2,
      title: "Quote Submission",
      description: "You'll receive a detailed budget for your procedure",
      icon: <ChevronRight className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 3,
      title: "Surgery Date Scheduling",
      description: "We'll select the ideal date for your procedure",
      icon: <Calendar className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 4,
      title: "Travel and Accommodation Coordination",
      description: "We'll help you plan your stay in Puebla",
      icon: <Plane className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 5,
      title: "Transportation Coordination",
      description: "We'll organize your local transportation during your stay",
      icon: <Car className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 6,
      title: "Deposit and Payment",
      description: "Secure payment process with multiple options",
      icon: <CreditCard className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 7,
      title: "Surgery",
      description: "Procedure performed by certified specialists",
      icon: <Stethoscope className="w-6 h-6 text-[#77B5B2]" />,
    },
    {
      number: 8,
      title: "Recovery and Follow-up",
      description: "Post-operative care and follow-up consultations",
      icon: <HeartPulse className="w-6 h-6 text-[#77B5B2]" />,
    },
  ]

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber)
  }

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setCompletedSteps([...completedSteps, activeStep])
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const isStepCompleted = (stepNumber: number) => {
    return completedSteps.includes(stepNumber)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-center py-10 text-[#507775]">Step-by-Step Guide for Your Surgery in Puebla</h2>
      <div className="bg-[#77B5B2] p-6 text-white">
        <h2 className="text-2xl font-bold">Complete process guide for your surgery</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Steps Navigation */}
        <div className="md:col-span-1 border-r border-gray-200 divide-y divide-gray-200">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={activeStep === step.number}
              isCompleted={isStepCompleted(step.number)}
              onClick={() => handleStepClick(step.number)}
            />
          ))}
        </div>

        {/* Step Content */}
        <div className="md:col-span-2 p-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#507775] mb-4">{steps[activeStep - 1].title}</h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mb-6">
              <div
                className="h-2 bg-[#77B5B2] rounded-full"
                style={{ width: `${(activeStep / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Step 1 Content */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  The first step is to determine if you're a suitable candidate for the procedure you want. This is done
                  during an evaluation consultation with our specialized medical team.
                </p>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#507775] flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-[#77B5B2]" />
                    During this consultation:
                  </h4>
                  <ul className="mt-2 space-y-2 pl-7">
                    <li className="list-disc text-gray-700">We'll evaluate your medical history</li>
                    <li className="list-disc text-gray-700">We'll perform necessary physical exams</li>
                    <li className="list-disc text-gray-700">We'll discuss your goals and expectations</li>
                    <li className="list-disc text-gray-700">We'll determine if the procedure is right for you</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Hide Form" : "Complete Initial Form"}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showForm ? "rotate-180" : ""}`} />
                  </Button>
                </div>

                {showForm && (
                  <div className="mt-6 p-6 border border-gray-200 rounded-lg">
                    <h4 className="text-xl font-semibold text-[#507775] mb-4">Initial Form</h4>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="surgery-type" className="text-gray-700 font-medium">
                          What type of surgery are you interested in?
                        </Label>
                        <RadioGroup value={surgeryType || ""} onValueChange={setSurgeryType} className="mt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bariatric" id="bariatric" />
                            <Label htmlFor="bariatric">Bariatric</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="plastic" id="plastic" />
                            <Label htmlFor="plastic">Plastic</Label>
                          </div>
                        </RadioGroup>

                        {surgeryType && (
                          <div className="mt-3">
                            <Label htmlFor="procedure" className="text-gray-700 font-medium">
                              Specify the desired procedure
                            </Label>
                            <Input
                              id="procedure"
                              placeholder="E.g.: 360 Liposculpture, Gastric Sleeve..."
                              className="mt-1"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="expectations" className="text-gray-700 font-medium">
                          What are your expectations regarding the surgery?
                        </Label>
                        <Textarea
                          id="expectations"
                          placeholder="Describe what results you expect to obtain..."
                          className="mt-1"
                        />
                      </div>

                      {surgeryType === "bariatric" && (
                        <div className="space-y-4">
                          <h5 className="font-medium text-[#507775]">For Bariatric Surgery:</h5>

                          <div>
                            <Label htmlFor="weight-loss" className="text-gray-700">
                              Have you tried to lose weight before? What methods have you used?
                            </Label>
                            <Textarea
                              id="weight-loss"
                              placeholder="Describe your previous experiences..."
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="nutrition" className="text-gray-700">
                              Do you have any eating disorders or conditions that affect proper nutrition?
                            </Label>
                            <Textarea
                              id="nutrition"
                              placeholder="Describe any relevant conditions..."
                              className="mt-1"
                            />
                          </div>
                        </div>
                      )}

                      {surgeryType === "plastic" && (
                        <div className="space-y-4">
                          <h5 className="font-medium text-[#507775]">For Plastic Surgery:</h5>

                          <div>
                            <Label htmlFor="body-area" className="text-gray-700">
                              Describe the body area you would like to treat.
                            </Label>
                            <Textarea id="body-area" placeholder="E.g.: Abdomen, arms, face..." className="mt-1" />
                          </div>

                          <div>
                            <Label htmlFor="concerns" className="text-gray-700">
                              Do you have any specific concerns about the procedure?
                            </Label>
                            <Textarea id="concerns" placeholder="Describe your concerns..." className="mt-1" />
                          </div>

                          <div>
                            <Label htmlFor="expected-results" className="text-gray-700">
                              What results do you expect?
                            </Label>
                            <Textarea
                              id="expected-results"
                              placeholder="Describe your expectations..."
                              className="mt-1"
                            />
                          </div>
                        </div>
                      )}

                      <Button className="w-full bg-[#77B5B2] hover:bg-[#507775] text-white">Submit Form</Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2 Content */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  Once your eligibility is confirmed, our team will prepare a detailed quote that includes all costs
                  associated with your procedure.
                </p>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#507775] flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-[#77B5B2]" />
                    The quote will include:
                  </h4>
                  <ul className="mt-2 space-y-2 pl-7">
                    <li className="list-disc text-gray-700">Cost of the surgical procedure</li>
                    <li className="list-disc text-gray-700">Medical fees</li>
                    <li className="list-disc text-gray-700">Hospital expenses</li>
                    <li className="list-disc text-gray-700">Necessary medications</li>
                    <li className="list-disc text-gray-700">Follow-up consultations</li>
                  </ul>
                </div>

                <div className="p-4 border border-[#77B5B2]/30 rounded-lg bg-[#77B5B2]/5">
                  <p className="text-gray-700 italic">
                    "You'll receive your personalized quote by email within 24-48 hours after your initial consultation.
                    Our team will be available to clarify any questions about the costs."
                  </p>
                </div>
              </div>
            )}

            {/* Step 3 Content */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  Once you've reviewed and accepted the quote, we'll proceed to schedule your surgery date according to
                  your availability and our medical team's schedule.
                </p>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#507775] flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-[#77B5B2]" />
                    Scheduling considerations:
                  </h4>
                  <ul className="mt-2 space-y-2 pl-7">
                    <li className="list-disc text-gray-700">Availability of the specialist surgeon</li>
                    <li className="list-disc text-gray-700">Time needed for pre-operative exams</li>
                    <li className="list-disc text-gray-700">Your personal and work schedule</li>
                    <li className="list-disc text-gray-700">Adequate time for recovery</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                  <p className="text-yellow-800 flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    We recommend scheduling your surgery at least 2-3 weeks in advance to ensure availability and allow
                    for proper pre-operative preparation.
                  </p>
                </div>
              </div>
            )}

            {/* Placeholder for other steps */}
            {activeStep > 3 && (
              <div className="space-y-6">
                <p className="text-gray-700">
                  Detailed information about step {activeStep}: {steps[activeStep - 1].title}
                </p>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#507775] flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-[#77B5B2]" />
                    Important aspects:
                  </h4>
                  <ul className="mt-2 space-y-2 pl-7">
                    <li className="list-disc text-gray-700">Our team will guide you through this entire process</li>
                    <li className="list-disc text-gray-700">You'll receive detailed instructions for each stage</li>
                    <li className="list-disc text-gray-700">You'll have personalized assistance at all times</li>
                  </ul>
                </div>

                <div className="p-4 border border-[#77B5B2]/30 rounded-lg bg-[#77B5B2]/5">
                  <p className="text-gray-700 italic">
                    "This content will be personalized according to your specific needs and the type of procedure you've
                    chosen."
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                className="border-[#77B5B2] text-[#507775]"
                onClick={handlePrevStep}
                disabled={activeStep === 1}
              >
                Previous Step
              </Button>
              <Button
                className="bg-[#77B5B2] hover:bg-[#507775] text-white"
                onClick={handleNextStep}
                disabled={activeStep === steps.length}
              >
                {activeStep === steps.length ? "Finish" : "Next Step"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-[#507775] mb-3">Need help with the process?</h3>
          <p className="text-gray-600 mb-4">
            Our team of coordinators is available to guide you through each step and answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white">Schedule an Informational Call</Button>
            <Button variant="outline" className="border-[#77B5B2] text-[#507775]">
              Contact via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepByStepGuide