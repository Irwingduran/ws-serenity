"use client"
import { useState } from "react"
import type React from "react"
import { Button } from "../components/ui/button"
import { Check, ChevronDown, Info } from "lucide-react"
import Link from "next/link"

interface ProcedureItemProps {
  icon: React.ReactNode
  title: string
  description: string
  included: boolean
}

const ProcedureItem = ({ icon, title, description, included = true }: ProcedureItemProps) => {
  return (
    <div
      className={`flex items-start p-4 rounded-lg transition-all ${
        included ? "bg-[#77B5B2]/5" : "bg-gray-50 opacity-70"
      }`}
    >
      <div
        className={`p-2 rounded-full mr-4 ${included ? "bg-[#77B5B2]/20 text-[#507775]" : "bg-gray-100 text-gray-400"}`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h4 className={`font-medium ${included ? "text-[#507775]" : "text-gray-400"}`}>{title}</h4>
          {included && <Check className="h-4 w-4 text-green-500 ml-2" />}
        </div>
        <p className={`text-sm mt-1 ${included ? "text-gray-600" : "text-gray-400"}`}>{description}</p>
      </div>
    </div>
  )
}

interface ProcedurePlanCardProps {
  title: string
  subtitle?: string
  description: string
  price?: string
  imageUrl: string
  items: {
    icon: React.ReactNode
    title: string
    description: string
    included: boolean
  }[]
  ctaLink: string
  popular?: boolean
}

const ProcedurePlanCard = ({
  title,
  subtitle,
  imageUrl,
  items,
  ctaLink,
  popular = false,
}: ProcedurePlanCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
      {popular && (
        <div className="bg-[#77B5B2] text-white text-center py-2 font-medium text-sm">Most Popular Plan</div>
      )}

      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
          {subtitle && <p className="text-white/90 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>

        <div className="space-y-3 mt-6">
          {items.slice(0, isExpanded ? items.length : 3).map((item, index) => (
            <ProcedureItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              included={item.included}
            />
          ))}
        </div>

        {items.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-[#77B5B2] hover:text-[#507775] mt-4 text-sm font-medium transition-colors"
          >
            {isExpanded ? "Show less" : `View ${items.length - 3} more services`}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href={ctaLink} className="flex-1">
            <Button className="w-full bg-[#77B5B2] hover:bg-[#507775] text-white">Book a Consultation</Button>
          </Link>
        </div>
      </div>
 
  )
}

export default ProcedurePlanCard
