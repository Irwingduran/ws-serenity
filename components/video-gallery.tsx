"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface VideoCategory {
  name: string
  videos: string[]
}

const videoCategories: VideoCategory[] = [
  {
    name: "Liposculpture",
    videos: [
      "https://www.facebook.com/reel/923611360658702/",
    ],
  },
  {
    name: "Mammoplasty",
    videos: [
      "https://www.facebook.com/reel/923611360658702/",
    ],
  },
  {
    name: "Rhinoplasty",
    videos: [
      "https://www.facebook.com/reel/1660502114332141/",
    ],
  },
  {
    name: "Bariatric Surgery",
    videos: [
      "https://www.facebook.com/reel/1672154647086518/",
    ],
  },
  {
    name: "Gastric Sleeve",
    videos: [
      "https://www.facebook.com/reel/2052446145544318/",
      "https://www.facebook.com/reel/1892238564991271/",
      "https://www.facebook.com/reel/1511610409954077/",
      "https://www.facebook.com/reel/931868529531821/",
      "https://www.facebook.com/reel/906241362185430/",
      "https://www.facebook.com/reel/933506382519262/",
    ],
  },
]

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const currentCategory = videoCategories[activeCategory]

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0
    }
    checkScroll()
  }, [activeCategory])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = 280
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="py-16 px-4 bg-gray-50" id="videos">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#507775] mb-4">
          Videos Serenity
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Watch real results from our procedures across different specialties.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {videoCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-[#77B5B2] text-white shadow-md"
                  : "bg-white text-[#507775] border border-[#77B5B2]/30 hover:bg-[#77B5B2]/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Videos Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#507775] rounded-full p-2 shadow-lg transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#507775] rounded-full p-2 shadow-lg transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {currentCategory.videos.map((url, index) => {
              const encodedUrl = encodeURIComponent(url)
              return (
                <div
                  key={`${currentCategory.name}-${index}`}
                  className="flex-shrink-0 w-[267px] rounded-xl overflow-hidden shadow-md bg-white"
                >
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?height=476&href=${encodedUrl}&show_text=false&width=267&t=0`}
                    width="267"
                    height="476"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title={`${currentCategory.name} video ${index + 1}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
