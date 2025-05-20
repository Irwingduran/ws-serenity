"use client"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Info, ChevronDown } from "lucide-react"

interface StudyRow {
  procedure: string
  cost: string
  notes: string
  details?: string
}

const RequiredStudiesTable = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState(false)

  const studies: StudyRow[] = [
    {
      procedure: "Pre-surgical labs: Plastic Surgery",
      cost: "PENDING",
      notes: "CBC, Basic Metabolic Panel (BMP), Coagulation times, VDRL, HIV, Blood type and RH, Pregnancy test",
      details:
        "These tests are necessary to evaluate your general health and ensure you are in optimal condition for plastic surgery. Results must be no older than 30 days before your procedure date.",
    },
    {
      procedure: "Pre-surgical labs: Bariatric Surgery",
      cost: "PENDING",
      notes:
        "CBC, BMP, Coagulation times, VDRL, HIV, Blood type and RH, Pregnancy test, Liver Function Tests (LFTs), HBA1C, Lipid Profile.",
      details:
        "For bariatric procedures, additional tests are required to evaluate liver function and blood sugar levels. These tests are essential to determine your eligibility for surgery and to develop a personalized treatment plan.",
    },
    {
      procedure: "Preoperative Evaluation by Internal Medicine",
      cost: "PENDING",
      notes: "PLASTIC SURGERY: AGE 40 OR AS INDICATED BY EVALUATING PHYSICIAN\nBARIATRIC SURGERY: ALL PATIENTS",
      details:
        "The evaluation by internal medicine is a crucial step in the preoperative process. For plastic surgeries, it is mandatory for patients over 40 years old or when deemed necessary by the physician. For bariatric procedures, it is mandatory for all patients without exception.",
    },
  ]

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="bg-[#77B5B2] p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-[#77B5B2] font-bold">REQUIRED STUDIES FOR EACH PROCEDURE</h2>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#507775]/20"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {showInfo && (
          <div className="p-4 bg-[#f5f9e8] border-b border-[#507775]/30">
            <p className="text-[#507775] font-semibold">
              The following studies are required before your surgical procedure. It is important to complete them in advance so our medical team can review them. The cost of these studies is not included in the price of the surgical procedure and may vary depending on the laboratory of your choice.
            </p>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#77B5B2]/10">
              <th className="py-4 px-6 text-left text-[#507775] font-bold">PROCEDURE</th>
              <th className="py-4 px-6 text-center text-[#507775] font-bold">COST (USD)</th>
              <th className="py-4 px-6 text-left text-[#507775] font-bold">NOTES</th>
              <th className="py-4 px-6 text-center text-[#507775] font-bold w-24">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {studies.map((study, index) => (
              <>
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#77B5B2]/20" : "bg-[#507775]/20"} hover:bg-[#77B5B2]/30 transition-colors`}
                >
                  <td className="py-4 px-6 text-[#507775] font-medium">{study.procedure}</td>
                  <td className="py-4 px-6 text-center text-[#507775] font-medium">{study.cost}</td>
                  <td className="py-4 px-6 text-[#507775]">
                    {study.notes.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#507775] hover:text-[#507775] hover:bg-[#77B5B2]/20"
                      onClick={() => toggleRow(index)}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${expandedRow === index ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </td>
                </tr>
                {expandedRow === index && (
                  <tr className={`${index % 2 === 0 ? "bg-[#77B5B2]/30" : "bg-[#507775]/30"}`}>
                    <td colSpan={4} className="py-4 px-6 text-[#507775] border-t border-[#507775]/20">
                      <div className="p-4 bg-white/50 rounded-lg">{study.details}</div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default RequiredStudiesTable
