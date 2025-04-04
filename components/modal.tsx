import { useEffect, useState } from 'react';
import Image from 'next/image';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal on component mount
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Close modal when clicking outside image
  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="relative max-w-4xl w-full max-h-[50vh]">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-10 right-0 text-white hover:text-[#77B5B2] transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative aspect-video w-full h-full">
          <Image
            src="/puebla/mapa.webp"
            alt="Welcome to our medical tourism services"
            fill
            className="object-contain rounded-lg"
            priority
          />
          <div className="absolute top-4 left-0 bg-black opacity-50 p-4 right-0 text-center text-white text-2xl font-bold drop-shadow-md">
            All Routes to Puebla
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeModal;
