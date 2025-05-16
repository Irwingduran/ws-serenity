"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { DollarSign, Calendar, CheckCircle2 } from "lucide-react"

interface ProcedureProps {
  name: string
  price: string
  includes?: string
  highlighted?: boolean
}

const ProcedureRow = ({ name, price, includes, highlighted = false }: ProcedureProps) => {
  return (
    <div
      className={`grid grid-cols-3 ${
        highlighted ? "bg-[#77B5B2]/20" : "bg-gray-50"
      } border-b border-gray-200 hover:bg-[#77B5B2]/10 transition-colors`}
    >
      <div className="p-4 font-medium text-gray-800">{name}</div>
      <div className="p-4 font-bold text-[#507775] text-center">${price}</div>
      <div className="p-4 text-gray-700">{includes || ""}</div>
    </div>
  )
}

const PricingTable = () => {
  const [currency, setCurrency] = useState<"usd" | "mxn">("usd")

  // Exchange rate (for demonstration)
  const exchangeRate = 17.5

  const procedures = [
    {
      name: "Rhinoplasty",
      priceUSD: "3,900",
      priceMXN: (3900 * exchangeRate).toLocaleString(),
      includes: "74,000",
    },
    {
      name: "Breast Augmentation",
      priceUSD: "3,900",
      priceMXN: (3900 * exchangeRate).toLocaleString(),
      includes: "With implants",
    },
    {
      name: "360 Lipo with Fat Transfer to Buttocks and Hips (Brazilian Butt Lift)",
      priceUSD: "6,600",
      priceMXN: (6600 * exchangeRate).toLocaleString(),
      includes:
        "Abdomen, pubic area, upper and lower back. Not included: Arm, thigh, or underarm liposuction.",
    },
    {
      name: "Conventional Lipoabdominoplasty (Tummy Tuck)",
      priceUSD: "5,900",
      priceMXN: (5900 * exchangeRate).toLocaleString(),
      includes: "",
    },
    {
      name: "Conventional Lipoabdominoplasty + Breast Augmentation or Lift (Mommy Makeover)",
      priceUSD: "10,900",
      priceMXN: (10900 * exchangeRate).toLocaleString(),
      includes: "",
    },
    {
      name: "Laparoscopic Gastric Sleeve",
      priceUSD: "4,200",
      priceMXN: (4200 * exchangeRate).toLocaleString(),
      includes: "",
      highlighted: true,
    },
    {
      name: "Spatz or BIB Intragastric Balloon",
      priceUSD: "2,900",
      priceMXN: (2900 * exchangeRate).toLocaleString(),
      includes: "",
    },
    {
      name: "Mini Gastric Bypass",
      priceUSD: "5,600",
      priceMXN: (5600 * exchangeRate).toLocaleString(),
      includes: "",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8 bg-[#77B5B2] text-white">
        <h2 className="text-3xl font-bold text-center">MOST COMMON SURGERIES</h2>
        <p className="text-center mt-2 opacity-90">Competitive prices for high-quality procedures</p>
      </div>

      <div className="p-4 bg-white flex justify-end">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setCurrency("usd")}
            className={`px-4 py-2 text-sm font-medium ${
              currency === "usd" ? "bg-[#507775] text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-200 rounded-l-lg`}
          >
            USD
          </button>
          <button
            onClick={() => setCurrency("mxn")}
            className={`px-4 py-2 text-sm font-medium ${
              currency === "mxn" ? "bg-[#507775] text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-200 rounded-r-lg`}
          >
            MXN
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#507775] text-white font-semibold">
            <div className="p-4">SURGERY</div>
            <div className="p-4 text-center">PRICE IN {currency.toUpperCase()}</div>
            <div className="p-4">WHAT’S INCLUDED</div>
          </div>

          {/* Table Body */}
          {procedures.map((procedure, index) => (
            <ProcedureRow
              key={index}
              name={procedure.name}
              price={currency === "usd" ? procedure.priceUSD : procedure.priceMXN}
              includes={procedure.includes}
              highlighted={procedure.highlighted}
            />
          ))}
        </div>
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <DollarSign className="h-6 w-6 text-[#77B5B2] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#507775]">Financing Options</h3>
              <p className="text-sm text-gray-600">
                Flexible payment plans available for all procedures
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Calendar className="h-6 w-6 text-[#77B5B2] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#507775]">Free Consultation</h3>
              <p className="text-sm text-gray-600">Schedule your initial evaluation at no cost</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-6 w-6 text-[#77B5B2] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#507775]">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">All procedures include post-operative follow-up</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#77B5B2]/10 text-center">
        <p className="text-gray-700 mb-4">
          Interested in one of our procedures? Contact us for more information or to schedule a consultation.
        </p>
        <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white px-6 py-2 rounded-s-lg">Request Information</Button>
      </div>
    </div>
  )
}

export default PricingTable
