"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Globe } from "lucide-react";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-teal-dark text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <Image
            src="/jornadamangagastrica/logo-serenity-real.png"
            alt="Serenity Surgery Planner"
            width={96}
            height={96}
            className="w-24 mx-auto mb-4 brightness-0 invert"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Da el primer paso hacia tu transformación
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            El turismo médico no debería sentirse caótico. Debería sentirse planeado,
            supervisado y seguro. Agenda tu consulta virtual hoy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://calendar.app.google/6qLbKZjmkZA3nQ238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-bold text-lg px-8 py-4 rounded-full hover:bg-primary-foreground/90 transition-all hover:scale-105 shadow-lg"
            >
              📅 Agendar Valoración Sin Costo
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=16195695034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-primary-foreground/80 pt-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Puebla & Tijuana, México · Hospitales certificados</span>
            </div>
            <a
              href="https://www.serenitysurgeryplanner.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>www.serenitysurgeryplanner.com</span>
            </a>
          </div>

          <p className="text-sm opacity-60 pt-8">
            © {new Date().getFullYear()} Serenity Surgery Planner · Especialistas en Puebla, México
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
