"use client";

import { motion } from "framer-motion";
import { Hospital, Pill, Stethoscope, Apple, Brain, HeartPulse } from "lucide-react";

const includes = [
  { icon: Hospital, text: "1 noche de hospitalización" },
  { icon: Pill, text: "Insumos y medicamentos necesarios durante la cirugía" },
  { icon: Stethoscope, text: "Honorarios médicos — Bariatra certificado, anestesia y enfermería" },
  { icon: Apple, text: "Valoración nutricional antes y después de la cirugía" },
  { icon: Brain, text: "Valoración psicológica prequirúrgica" },
  { icon: HeartPulse, text: "Valoración por Medicina Interna con electrocardiograma" },
];

const IncludesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            ¿Qué incluye?
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia segura y completa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {includes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-sans font-medium leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
