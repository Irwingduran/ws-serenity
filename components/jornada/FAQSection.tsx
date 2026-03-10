"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué es la manga gástrica?",
    a: "Es una cirugía donde se reduce el tamaño del estómago, dejándolo con forma de tubo, para que comas menos y te sientas lleno más rápido.",
  },
  {
    q: "¿Cómo funciona para la pérdida de peso?",
    a: "Al reducir el estómago, comes porciones más pequeñas y te sientes saciado antes, lo que disminuye la ingesta de calorías.",
  },
  {
    q: "¿Quiénes son candidatos?",
    a: "Personas con obesidad severa (IMC alto) que no han tenido éxito con otras formas de perder peso.",
  },
  {
    q: "¿Cuáles son los beneficios?",
    a: "Pérdida de peso significativa, mejora de problemas de salud relacionados con la obesidad, y recuperación relativamente rápida.",
  },
  {
    q: "¿Cuánto peso puedo esperar perder?",
    a: "La mayoría pierde entre el 60-70% del exceso de peso en un año.",
  },
  {
    q: "¿Cómo es la recuperación?",
    a: "Los primeros días son con dieta líquida, luego blanda, y poco a poco se incorporan alimentos sólidos. Se requiere reposo y seguimiento médico.",
  },
  {
    q: "¿Cuánto tiempo dura la cirugía?",
    a: "Aproximadamente 1-2 horas.",
  },
  {
    q: "¿Qué preparación se requiere antes de la cirugía?",
    a: "Exámenes médicos, evaluación nutricional y psicológica, y seguir una dieta preoperatoria.",
  },
  {
    q: "¿Qué tipo de seguimiento post-operatorio otorgan?",
    a: "Se ofrece un acompañamiento continuo con nutriólogos y los cirujanos.",
  },
  {
    q: "¿Existen suplementos vitamínicos necesarios después?",
    a: "Sí, ya que el estómago absorbe menos nutrientes después de la cirugía.",
  },
  {
    q: "¿Cuánto tiempo necesito estar en Puebla?",
    a: "Dependerá del paquete de servicio que elija. Contáctenos para más detalles.",
  },
  {
    q: "¿La manga gástrica es reversible?",
    a: "No, es un procedimiento permanente.",
  },
  {
    q: "¿Cómo afecta mis niveles de azúcar en sangre?",
    a: "Generalmente los mejora, especialmente en personas con diabetes tipo 2.",
  },
  {
    q: "¿Qué cicatrices deja la cirugía?",
    a: "Son pequeñas cicatrices, ya que se realiza por laparoscopia.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre la manga gástrica
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
