"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const galleryItems = [
  {
    id: 1,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0001.jpg",
  },
  {
    id: 2,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0002.jpg",
  },
  {
    id: 3,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0003.jpg",
  },
  {
    id: 4,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0004.jpg",
  },
  {
    id: 5,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0005.jpg",
  },
  {
    id: 6,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0008.jpg",
  },
  {
    id: 7,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0009.jpg",
  },
  {
    id: 8,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0011.jpg",
  },
  {
    id: 9,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0012.jpg",
  },
  {
    id: 10,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0013.jpg",
  },
  {
    id: 11,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0014.jpg",
  },
  {
    id: 12,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0015.jpg",
  },
  {
    id: 13,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0016.jpg",
  },
  {
    id: 14,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0017.jpg",
  },
  {
    id: 15,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0018.jpg",
  },
  {
    id: 16,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0019.jpg",
  },
  {
    id: 17,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0020.jpg",
  },
  {
    id: 18,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0024.jpg",
  },
  {
    id: 19,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0022.jpg",
  },
  {
    id: 20,
    type: "facility",
    title: "",
    description: "",
    image: "/location/IMG_0023.jpg",
  },
]

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-6">Our Facilities</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {galleryItems.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item.id)}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Modal for full-size image view */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black/95 border-none">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedImage && (
              <div className="p-4">
                <img
                  src={galleryItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                  alt={galleryItems.find((item) => item.id === selectedImage)?.title}
                  className="w-full rounded-lg"
                />
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-medium mb-2">
                    {galleryItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-300">{galleryItems.find((item) => item.id === selectedImage)?.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}