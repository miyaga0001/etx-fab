import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Users, Award, ShieldCheck, Clock, DollarSign } from 'lucide-react'

// PLACEHOLDER — swap this import for a real photo of the shop interior, crew, or owner
// when one is available. Any strong shop-atmosphere or owner portrait works here.
import shopPhoto from '../assets/work/work-3.jpg'

const whyPoints = [
  {
    icon: Award,
    text: 'Years of hands-on experience in precision fabrication and machining',
  },
  {
    icon: ShieldCheck,
    text: 'Certified welders and highly skilled machinists',
  },
  {
    icon: Clock,
    text: 'Fast turnaround without compromising quality',
  },
  {
    icon: DollarSign,
    text: 'Fair, honest rates for premium craftsmanship',
  },
  {
    icon: MapPin,
    text: 'Locally owned, proudly serving Longview and all of East Texas',
  },
]

export default function About() {
  return (
    <div className="bg-navy">

      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="bg-navy-deep text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Locally owned and operated in East Texas.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="bg-navy py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: story text + info cards */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">Our story</h2>
            <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
              <p>ETX Fabrication &amp; Machine is a full-service precision welding and custom metal fabrication shop located in Longview, Texas. We serve all of East Texas with expert MIG welding, TIG welding, precision lathe work, metal fabrication, brazing, drilling, boring, and custom fixtures and jigs.</p>
              <p>Backed by years of experience and certified welders, we deliver high-quality craftsmanship, fast turnaround, and fair, competitive pricing — whether it's a one-off repair, a prototype, or a large production run.</p>
              <p>As a premier fabrication shop in Longview, we take pride in turning your complex designs into reality. When you call or stop by, you talk to the people actually doing the work.</p>
            </div>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 p-5 border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-red/10 rounded flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-sm text-gray-400">East Texas</p>
                  <p className="text-xs text-gray-500 mt-1">505 E Cotton St, Longview, TX 75601</p>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1.5">
                    <Clock size={13} className="text-red shrink-0" />
                    Mon–Fri: 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-start gap-4 p-5 border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-red/10 rounded flex items-center justify-center shrink-0">
                  <Users size={20} className="text-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">The team</h3>
                  <p className="text-sm text-gray-300">Locally owned and operated — a family-owned shop proudly serving Longview and all of East Texas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: shop photo placeholder */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <img
              src={shopPhoto}
              alt="Inside the ETX Fab and Machine shop"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE ETX FAB ───────────────────────────────────── */}
      <section className="bg-navy-deep py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Why choose ETX Fab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyPoints.map(({ icon: Icon, text }) => (
              <div key={text} className="bg-navy border border-white/10 rounded-lg p-5 flex items-start gap-4">
                <div className="w-9 h-9 bg-red/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-red" />
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-navy py-16">
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
