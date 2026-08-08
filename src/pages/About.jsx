import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Users } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-[#1a1f2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Locally owned and operated in East Texas.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1f2e] mb-4">Our story</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>ETX Fabrication &amp; Machine is a full-service precision welding and custom metal fabrication shop located in Longview, Texas. We serve all of East Texas with expert MIG welding, TIG welding, precision lathe work, metal fabrication, brazing, drilling, boring, and custom fixtures and jigs.</p>
              <p>Backed by years of experience and certified welders, we deliver high-quality craftsmanship, fast turnaround, and fair, competitive pricing — whether it's a one-off repair, a prototype, or a large production run.</p>
              <p>As a premier fabrication shop in Longview, we take pride in turning your complex designs into reality.</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-red/10 rounded flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1f2e] mb-1">Location</h3>
                <p className="text-sm text-gray-500">East Texas</p>
                <p className="text-xs text-gray-400 mt-1">505 E Cotton St, Longview, TX 75601</p>
              </div>
            </div>

{/* Team */}
            <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-red/10 rounded flex items-center justify-center shrink-0">
                <Users size={20} className="text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1f2e] mb-1">The team</h3>
                <p className="text-sm text-gray-600">Locally owned and operated — a family-owned shop proudly serving Longview and all of East Texas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1a1f2e] mb-8">Why choose ETX Fab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Years of hands-on experience in precision fabrication and machining',
              'Certified welders and highly skilled machinists',
              'Fast turnaround without compromising quality',
              'Fair, honest rates for premium craftsmanship',
              'Locally owned, proudly serving Longview and all of East Texas',
            ].map((point) => (
              <div key={point} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-2 h-8 bg-red rounded mb-4" />
                <p className="text-sm font-medium text-[#1a1f2e] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1f2e] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Let's work together</h2>
            <p className="text-gray-400 text-sm">Tell us about your project and we'll get you a quote.</p>
          </div>
          <Link
            to="/quote"
            className="bg-red hover:bg-red-bright text-white font-semibold px-8 py-3 rounded transition-colors shrink-0 flex items-center gap-2"
          >
            Get a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
