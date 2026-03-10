"use client";

import { motion } from "framer-motion";
import { Video, FlaskConical, Plane, Hospital, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Consulta Virtual",
    desc: "Revisamos tu historial médico, peso, medicamentos y determinamos tu candidatura.",
  },
  {
    icon: FlaskConical,
    title: "Preparación",
    desc: "Laboratorios en tu país, dieta prequirúrgica con nutrióloga y evaluación psicológica virtual.",
  },
  {
    icon: Plane,
    title: "Viaje a Puebla",
    desc: "Vuelo al Aeropuerto de Puebla, transporte coordinado al hotel La Quinta by Wyndham.",
  },
  {
    icon: Hospital,
    title: "Cirugía",
    desc: "Operación en hospitales certificados con equipo de anestesia y monitoreo continuo.",
  },
  {
    icon: HeartHandshake,
    title: "Recuperación",
    desc: "2 noches de hospitalización, seguimiento postoperatorio virtual al regresar a casa.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Un proceso estructurado, seguro y sin improvisación
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 relative"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-primary/30" />
                )}
              </div>

              <div className="pb-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  Paso {i + 1}: {step.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
