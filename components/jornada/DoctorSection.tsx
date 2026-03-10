"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, MapPin, Globe, BookOpen } from "lucide-react";

const DoctorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Doctor photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-primary shadow-xl">
                <Image
                  src="/jornadamangagastrica/dr-serrano-real.jpg"
                  alt="Dr. Edgar Serrano García"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Doctor info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            <h2 className="text-4xl font-extrabold text-foreground">
              Dr. Edgar Serrano García
            </h2>
            <p className="text-xl text-primary font-bold uppercase tracking-wide">
              Cirujano Bariatra & Metabólico Certificado
            </p>

            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Fellowship en Cirugía Bariátrica y Metabólica — Centro Médico Nacional 20 de Noviembre (UNAM)</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Certificado por el Consejo Mexicano de Cirugía General</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Miembro activo de IFSO, CMCOEM, AMCE y AMCG</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Participación en IFSO World Congress Miami, congresos internacionales de cirugía bariátrica</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Opera en Puebla y Tijuana, México</span>
              </div>
            </div>

            <p className="text-foreground leading-relaxed pt-2">
              El Dr. Serrano trata la obesidad como una enfermedad metabólica crónica, no una condición
              cosmética. Cada paciente pasa por evaluación médica integral, valoración nutricional,
              estratificación de riesgo por laboratorio y preparación preoperatoria estructurada.
              Su práctica integra protocolos bariátricos basados en evidencia, vías de recuperación
              mejorada y técnicas laparoscópicas avanzadas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Manga Gástrica
              </span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Bypass Gástrico
              </span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Cirugía de Revisión
              </span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Balón Intragástrico
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
