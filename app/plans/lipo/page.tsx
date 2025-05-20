'use client'
import React, { useState } from 'react'
import { Check, X } from "lucide-react"
import ProcedurePlanCard from '../../../components/procedure-plan-card'

interface PlanFeature {
  name: string
  liposuction: boolean
  mammoplasty: boolean
  headNeck: boolean
  bariatric: boolean
}

  const features: PlanFeature[] = [
    {
      name: "Cirugía",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Viaje y Alojamiento",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Transporte",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Procedimientos Pre-Cirugía",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Traslado a Casa/Hotel de Recuperación",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Citas de Seguimiento",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Seguimiento a Largo Plazo",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
    {
      name: "Soporte Nutricional",
      liposuction: true,
      mammoplasty: true,
      headNeck: true,
      bariatric: true,
    },
  ]

const LipoPage = () => {
      const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
     
  return (
   <div>
        {/* Test  */ }
        <section>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-[#77B5B2] p-6 text-white">
        <h2 className="text-2xl font-bold">Comparación de Planes</h2>
        <p className="mt-2 opacity-90">Encuentra el plan perfecto para tu procedimiento</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-4 px-6 text-left text-gray-500 font-medium">Características</th>
              <th className="py-4 px-6 text-center">
               
                  <div className="font-bold text-[#507775]">Liposculpture</div>
      
          
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`border-t border-gray-100 ${
                  selectedPlan && feature[selectedPlan as keyof Omit<PlanFeature, "name">] ? "bg-[#77B5B2]/5" : ""
                }`}
              >
                <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                <td className="py-4 px-6 text-center">
                  {feature.liposuction ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  )}
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </section>
    
   </div>
  )
}

export default LipoPage