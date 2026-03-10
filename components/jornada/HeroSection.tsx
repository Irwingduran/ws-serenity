"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-teal-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center min-h-screen py-12 gap-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-primary-foreground space-y-6"
        >
          <Image
            src="/jornadamangagastrica/logo-horizontal.jpeg"
            alt="Serenity Surgery Planner"
            width={128}
            height={48}
            className="w-28 md:w-32 mb-4 mix-blend-multiply opacity-90"
          />
          <p className="text-lg font-medium tracking-widest uppercase opacity-80">
            Serenity Surgery Planner
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="italic font-bold">Jornada de</span>
            <br />
            <span className="text-6xl md:text-8xl font-black not-italic uppercase">
              Manga Gástrica
            </span>
          </h1>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-1 pt-4"
          >
            <p className="text-2xl line-through opacity-60">
              De: $85,000 MXN
            </p>
            <p className="text-5xl md:text-6xl font-black">
              A: $69,000 <span className="text-2xl font-normal">MXN</span>
            </p>
          </motion.div>

          {/* Date & location badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <span className="inline-flex items-center gap-3 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/30">
              <span className="text-2xl">📅</span>
              <span className="text-xl font-semibold">Viernes 27 de Marzo</span>
            </span>
            <span className="inline-flex items-center gap-3 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/30">
              <span className="text-2xl">📍</span>
              <span className="text-xl font-semibold">Puebla, México</span>
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-4 flex flex-col sm:flex-row gap-3"
          >
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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 hidden lg:flex justify-end"
        >
          <Image
            src="/jornadamangagastrica/hero-manga.jpg"
            alt="Transformación con Manga Gástrica"
            width={600}
            height={800}
            className="max-h-[80vh] w-auto object-contain rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
