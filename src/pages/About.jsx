import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Users } from 'lucide-react'

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
            <div className="text-gray-600 leading-relaxed space-y-4 italic">
              <p>[Company history and story — to be written]</p>
              <p>[Founding, background, what makes the shop unique]</p>
              <p>[Years in business, experience, types of customers served]</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-[#e67e22]/10 rounded flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#e67e22]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1f2e] mb-1">Location</h3>
                <p className="text-sm text-gray-500">East Texas</p>
                <p className="text-xs text-gray-400 mt-1 italic">[Full address — to be added]</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-[#e67e22]/10 rounded flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#e67e22]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1f2e] mb-1">Hours</h3>
                <p className="text-xs text-gray-400 italic">[Operating hours — to be added]</p>
              </div>
            </div>

            {/* Team */}
            <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-[#e67e22]/10 rounded flex items-center justify-center shrink-0">
                <Users size={20} className="text-[#e67e22]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1f2e] mb-1">The team</h3>
                <p className="text-xs text-gray-400 italic">[Team overview — to be added]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1a1f2e] mb-8">How we operate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                heading: 'Straight talk',
                body: 'We quote what it costs and build what we quoted. If something changes mid-job, we tell you before we do it.',
              },
              {
                heading: 'Real craftsmen',
                body: 'The people who quote your job are the same ones who make it. No outsourcing, no surprises.',
              },
              {
                heading: 'East Texas roots',
                body: "We've built things for neighbors, ranchers, oilfield contractors, and small businesses throughout the region. We intend to keep doing that.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-2 h-8 bg-[#e67e22] rounded mb-4" />
                <h3 className="font-bold text-[#1a1f2e] mb-2">{heading}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
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
            className="bg-[#e67e22] hover:bg-[#cf6d17] text-white font-semibold px-8 py-3 rounded transition-colors shrink-0 flex items-center gap-2"
          >
            Get a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
