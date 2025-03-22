import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/slider/slider4.jpg",
 "/slider/slider2.jpg",
 "/slider/slide3.jpg",
 "/slider/slider1.jpg",

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Especialista en cirugía plástica</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
          Amplia experiencia en procedimientos avanzados. 
          Reconocido por su precisión y excelencia en el trato a sus pacientes.
        </p>
      </div>
      <div className="relative w-full max-w-lg mx-auto"> {/* Cambiado de max-w-2xl a max-w-lg */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto" // La imagen se ajustará al ancho del contenedor
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
        >
          <ChevronRight size={24} />
        </button>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;