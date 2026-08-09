import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import work1 from '../assets/work/work-1.jpg'
import work2 from '../assets/work/work-2.jpg'
import work3 from '../assets/work/work-3.jpg'
import work4 from '../assets/work/work-4.jpg'
import gallery3 from '../assets/gallery/gallery-3.jpg'
import gallery6 from '../assets/gallery/gallery-6.jpg'

const slides = [
  { src: work1,   alt: 'TIG-welded custom fabrication — ETX Fab and Machine' },
  { src: gallery6, alt: 'Structural steel truss fabricated at ETX Fab' },
  { src: work4,   alt: 'CNC lathe turning a part — ETX Fab and Machine' },
  { src: gallery3, alt: 'CNC-machined precision part — ETX Fab and Machine' },
  { src: work3,   alt: 'Structural pipe assembly in the ETX Fab shop' },
  { src: work2,   alt: 'Fabricated steel assemblies — ETX Fab and Machine' },
]

export default function HeroCarousel() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4500, stopOnMouseEnter: true, stopOnInteraction: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    prefersReducedMotion ? [] : [autoplayPlugin.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div
      className="relative rounded-[18px] overflow-hidden border border-white/10 shadow-2xl lg:h-[500px]"
      role="region"
      aria-label="Shop photo carousel"
    >
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-none w-full min-h-[300px] lg:h-[500px]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* "Real work from our shop" pill — bottom left */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="inline-flex items-center bg-black/55 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
          Real work from our shop
        </span>
      </div>

      {/* Dot indicators — bottom right */}
      <div
        className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5"
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? 'w-5 bg-red' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows — desktop only */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-colors"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
