import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Lightbox from '../components/Lightbox'

const photos = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)

const images = photos.map((src, i) => ({ src, alt: `ETX Fab shop work — photo ${i + 1}` }))

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <div>
      {/* Page header */}
      <section className="bg-navy-deep text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Work</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A sample of recent projects from the shop.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open photo ${i + 1} in lightbox`}
                className="group rounded-lg border border-white/10 overflow-hidden bg-navy-light w-full cursor-pointer"
              >
                <img
                  src={src}
                  alt={`ETX Fab shop work — photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep border-t border-white/5 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a project like this?</h2>
          <p className="text-gray-400 mb-6">Send us the details and we'll put together a quote.</p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-red hover:bg-red-bright text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
