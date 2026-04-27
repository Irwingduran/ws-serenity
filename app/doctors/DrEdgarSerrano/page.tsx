"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';

const doctor = {
  name: "Dr. Edgar Serrano",
  specialty: "Bariatric & Metabolic Surgery",
  facility: "MEDSUITES 25th Floor – Torre Médica New City Medical",
  location: "Tijuana, Baja California, Mexico",
  locationSecondary: "Puebla, Mexico (Surgical Program)",
  languages: "English & Spanish",
  licenseSpecialty: "Board-Certified Bariatric & Metabolic Surgeon",
  phoneUS: "+1 (619) 559-1437",
  phoneMX: "664 732 95 16",
  website: "www.dredgarserrano.com",
  bio: "Dr. Edgar Serrano is a board-certified bariatric and metabolic surgeon specializing in advanced minimally invasive weight-loss surgery for patients traveling from the United States to Mexico. Through Serenity Surgery Planner, patients are guided through a structured and medically supervised cross-border surgical program designed to prioritize safety, transparency, and long-term metabolic health.",
  procedures: [
    "Laparoscopic Sleeve Gastrectomy",
    "Gastric Bypass",
    "Mini Gastric Bypass",
    "Transit Bipartition",
    "SADI-S",
    "Revisional Bariatric Surgery",
    "Single-Incision Sleeve Gastrectomy",
    "SPATZ Adjustable Intragastric Balloon",
    "Orbera (BIB Apollo) Intragastric Balloon",
    "Abdominoplasty after weight loss",
    "Laparoscopic Gallbladder Surgery",
    "Laparoscopic Hernia Repair",
    "Anti-Reflux Surgery (GERD)"
  ],
  memberships: [
    "International Federation for the Surgery of Obesity (IFSO)",
    "Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas (CMCOEM)",
    "Colegio de Cirugía Bariátrica y Enfermedades Metabólicas de Baja California",
    "Asociación Mexicana de Cirugía Endoscópica (AMCE)",
    "Asociación Mexicana de Cirugía General (AMCG)"
  ],
  congresses: [
    "IFSO World Congress – Miami (2022)",
    "International Congress for Obesity Surgery (2025)",
    "International Endoscopic Surgery Congress (2024)",
    "CMCOEM Congresses (2019–2025)",
    "BEST Bariatric Trends Congress (2022)"
  ]
};

// 🎠 Componente Carrusel Nativo (con tipos TypeScript)
interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
}

const ImageCarousel = ({ images, altPrefix = "Gallery image" }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Autoplay opcional
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, images.length]);

  // Navegación con teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isTransitioning]);

  // Soporte táctil para móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl shadow-lg group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Track de imágenes con animación */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative aspect-video">
            <Image
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay degradado para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#507775] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#507775] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores de posición */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de imágenes */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

// 🎬 Componente Video Nativo con tipos TypeScript
interface VideoPlayerProps {
  videoSrc: string;
  poster: string;
  title?: string;
  description?: string;
}

const VideoPlayer = ({ videoSrc, poster, title, description }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = videoRef.current.duration 
        ? (videoRef.current.currentTime / videoRef.current.duration) * 100 
        : 0;
      setProgress(progress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current?.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVolume(videoRef.current.muted ? 0 : 1);
    }
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen?.();
    }
  };

  // Mostrar controles al mover el mouse
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, []);

  // Formatear tiempo mm:ss
  const formatTime = (seconds: number | undefined) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video HTML5 nativo */}
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover cursor-pointer"
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
        onClick={togglePlay}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Overlay de play inicial */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Play video"
        >
          <div className="w-20 h-20 bg-[#77B5B2]/90 hover:bg-[#77B5B2] rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105">
            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* Controles personalizados */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Barra de progreso */}
        <div 
          className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer mb-4 group/progress"
          onClick={handleSeek}
        >
          <div 
            className="h-full bg-[#77B5B2] rounded-full relative transition-all"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex items-center justify-between text-white">
          {/* Controles izquierda */}
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="hover:text-[#77B5B2] transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* Volumen */}
            <div className="flex items-center gap-2 group/volume">
              <button onClick={toggleMute} className="hover:text-[#77B5B2] transition-colors">
                {volume === 0 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15.414a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7zM12 9v6" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 4v16M5.586 15.414a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-0 group-hover/volume:w-20 transition-all duration-300 accent-[#77B5B2] cursor-pointer"
                aria-label="Volume"
              />
            </div>

            {/* Tiempo */}
            <span className="text-sm text-white/80 font-mono">
              {formatTime(videoRef.current?.currentTime)} / {formatTime(videoRef.current?.duration)}
            </span>
          </div>

          {/* Controles derecha */}
          <div className="flex items-center gap-3">
            {title && (
              <span className="hidden md:block text-sm text-white/90 max-w-xs truncate">{title}</span>
            )}
            <button 
              onClick={toggleFullscreen}
              className="hover:text-[#77B5B2] transition-colors"
              aria-label="Toggle fullscreen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  // 📸 Imágenes para el carrusel (reemplaza con tus rutas reales)
  const galleryImages = [
    "/gallery/clinic-exterior.jpg",
    "/gallery/surgical-room.jpg", 
    "/gallery/recovery-area.jpg",
    "/gallery/patient-care.jpg",
    "/gallery/team-photo.jpg"
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/#partners" className="inline-flex items-center text-sm font-medium text-[#77B5B2] hover:text-[#5a9c99]">
                  Doctor&apos;s
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Dr. Serrano</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Doctor Header */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Doctor Photo */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/dr-serrano.jpeg"
                  alt="Dr. Edgar Serrano"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl font-bold text-[#507775] mb-2">{doctor.name}</h1>
              <p className="text-xl text-[#77B5B2] mb-6">{doctor.specialty}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Surgical Facility</h3>
                  <p className="text-lg text-gray-800">{doctor.facility}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Location</h3>
                  <p className="text-lg text-gray-800">{doctor.location}</p>
                  <p className="text-sm text-gray-600">{doctor.locationSecondary}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Languages</h3>
                  <p className="text-lg text-gray-800">{doctor.languages}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Certification</h3>
                  <p className="text-lg text-gray-800">{doctor.licenseSpecialty}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-[#f0f9f8] rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-[#507775] mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#77B5B2]">📞</span>
                    <div>
                      <p className="text-xs text-gray-500">International Patients (US)</p>
                      <p className="text-gray-800 font-medium">{doctor.phoneUS}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#77B5B2]">📞</span>
                    <div>
                      <p className="text-xs text-gray-500">Mexico Direct</p>
                      <p className="text-gray-800 font-medium">{doctor.phoneMX}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <a href={`https://${doctor.website}`} target="_blank" rel="noopener noreferrer" className="text-[#77B5B2] hover:text-[#5a9c99] font-medium inline-flex items-center">
                    🌐 {doctor.website}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Info */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-[#507775] mb-4">Office Location</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-gray-600 max-w-2xl">
                  {doctor.facility} - Zona Río, Tijuana, Baja California, Mexico. Conveniently located near the U.S.–Mexico border for international patients traveling from California and other U.S. states.
                </p>
              </div>
              <a
                href={`https://www.findoctor.com.mx/doctores/edgar-serrano-garcia`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#77B5B2] text-white rounded-lg hover:bg-[#5a9c99] transition-colors font-medium"
              >
                Findoctor Profile →
              </a>
            </div>
          </div>
        </section>

              {/* 🎬 Video Section - NUEVO */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#507775] mb-3">About</h2>
          </div>
          
          <VideoPlayer 
            videoSrc="/videos/dr-serrano-intro.mp4"
            poster="/videos/dr-serrano-poster.jpg"
            title="Presentación del Dr. Edgar Serrano"
            description="Conoce nuestro enfoque en cirugía bariátrica segura y personalizada"
          />
          
        </section>

        {/* Biography Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-[#507775] mb-6">Biography</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">{doctor.bio}</p>
            <p className="mb-4">
              Obesity is treated as a chronic metabolic disease — not a cosmetic condition.
            </p>
            <p className="mb-4">Each patient undergoes:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Comprehensive medical evaluation</li>
              <li>Nutritional assessment</li>
              <li>Laboratory risk stratification</li>
              <li>Psychological clearance when indicated</li>
              <li>Structured preoperative preparation</li>
            </ul>
            <p className="mb-4">
              Surgical candidacy is determined based on medical criteria. Not all patients qualify. Ethical patient selection is central to safety and outcomes.
            </p>
            <p>
              Dr. Serrano&apos;s approach integrates evidence-based bariatric protocols, enhanced recovery pathways, and advanced laparoscopic techniques.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-[#507775] mb-6">Experience & Training</h2>
            <div className="prose max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                Dr. Edgar Serrano completed a High Specialty Fellowship in Bariatric and Metabolic Surgery at Centro Médico Nacional 20 de Noviembre (UNAM), followed by advanced laparoscopic training and formal General Surgery residency through IMSS.
              </p>
              <p className="mb-4">His clinical practice focuses on:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Primary bariatric surgery</li>
                <li>Revisional bariatric surgery</li>
                <li>Advanced minimally invasive metabolic procedures</li>
                <li>Selected single-incision sleeve gastrectomy</li>
              </ul>
              <p>
                Continuous education and international academic participation are part of his professional standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Congress Participation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#507775] mb-4">Congress Participation</h3>
                <ul className="space-y-2">
                  {doctor.congresses.map((congress, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{congress}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Memberships */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#507775] mb-4">Professional Memberships</h3>
                <ul className="space-y-2">
                  {doctor.memberships.map((membership, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{membership}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-[#507775] mb-6">Services</h2>
          <p className="text-gray-600 mb-8">
            Through Serenity Surgery Planner, patients receive coordinated surgical care in Puebla, Mexico under a structured and medically supervised program.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bariatric Surgery */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#507775] mb-4">Bariatric & Metabolic Surgery</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Laparoscopic Sleeve Gastrectomy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Gastric Bypass</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Mini Gastric Bypass</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Transit Bipartition</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SADI-S</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Revisional Bariatric Surgery</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Single-Incision Sleeve Gastrectomy</span>
                </li>
              </ul>
            </div>

            {/* Intragastric Balloon */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#507775] mb-4">Intragastric Balloon Therapy</h3>
              <p className="text-xs text-gray-500 mb-3">Non-Surgical Weight Loss</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SPATZ Adjustable Intragastric Balloon</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Orbera (BIB Apollo) Intragastric Balloon</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Balloon therapy includes structured nutritional supervision and follow-up.
              </p>
            </div>

            {/* Post Weight Loss */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#507775] mb-4">Post-Weight Loss Surgery</h3>
              <p className="text-xs text-gray-500 mb-3">After Massive Weight Loss</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Abdominoplasty (Tummy Tuck)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Body contouring procedures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Excess skin removal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Abdominal wall reconstruction</span>
                </li>
              </ul>
            </div>

            {/* General Surgery */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#507775] mb-4">Advanced General Surgery</h3>
              <p className="text-xs text-gray-500 mb-3">Minimally Invasive Procedures</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Laparoscopic Gallbladder Surgery</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Laparoscopic Hernia Repair</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Anti-Reflux Surgery (GERD / Fundoplication)</span>
                </li>
              </ul>
            </div>

            {/* Medical Tourism Program */}
            <div className="bg-[#f0f9f8] border border-[#77B5B2]/20 rounded-lg p-6 shadow-sm md:col-span-2">
              <h3 className="text-lg font-semibold text-[#507775] mb-4">Structured Medical Tourism Program</h3>
              <p className="text-sm text-gray-600 mb-4">Complete surgical coordination through Serenity Surgery Planner:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Virtual preoperative consultation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Comprehensive medical evaluation before travel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Surgical coordination through Serenity Surgery Planner</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Hospital coordination in Puebla</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Organized travel logistics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Postoperative monitoring protocol</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#77B5B2] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Direct communication with the surgical team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 🎠 Gallery Carousel Section - NUEVO */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-[#507775] mb-3">Gallery</h2>
            </div>
            
            <ImageCarousel 
              images={galleryImages}
              altPrefix="Medical facility"
            />
          
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#77B5B2] py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact Dr. Serrano&apos;s team to schedule a virtual consultation and learn more about your surgical options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://www.findoctor.com.mx/doctores/edgar-serrano-garcia`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Findoctor Profile
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Page;