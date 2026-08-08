import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const photos = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)

export default function Gallery() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-[#1a1f2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Work</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A sample of recent projects from the shop.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <div key={i} className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                <img
                  src={src}
                  alt="Custom fabrication"
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#1a1f2e] mb-3">Have a project like this?</h2>
          <p className="text-gray-500 mb-6">Send us the details and we'll put together a quote.</p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-red hover:bg-red-bright text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
