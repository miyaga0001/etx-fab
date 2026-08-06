import { Link } from 'react-router-dom'
import {
  Settings2,
  Hammer,
  Flame,
  Wrench,
  Building2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const capabilities = [
  {
    icon: Settings2,
    title: 'CNC Machining',
    desc: 'Tight-tolerance parts machined to spec. Lathes, mills, and turning centers.',
  },
  {
    icon: Hammer,
    title: 'Metal Fabrication',
    desc: 'Custom cuts, bends, and assemblies in steel, aluminum, and stainless.',
  },
  {
    icon: Flame,
    title: 'Welding',
    desc: 'MIG, TIG, and stick welding. Structural and precision work.',
  },
  {
    icon: Wrench,
    title: 'Custom Parts & Prototypes',
    desc: 'One-off parts and prototype runs. We work from drawings, samples, or your idea.',
  },
  {
    icon: Building2,
    title: 'Structural Steel',
    desc: 'Frames, supports, brackets, and structural components for buildings and equipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Repair & Maintenance',
    desc: 'Field repairs, worn part replacement, and machine restoration.',
  },
]

const differentiators = [
  {
    title: 'Local & reliable',
    desc: "We're right here in East Texas. You can call us, come by, and talk to the people actually doing the work.",
  },
  {
    title: 'No job too small',
    desc: "One part or a production run — we'll give you the same attention either way. Small shops have always been our bread and butter.",
  },
  {
    title: 'Fair, honest pricing',
    desc: "You get a straight quote before any work starts. No surprise charges, no runaround.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-[#1a1f2e] text-white overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,31,46,0.95), rgba(26,31,46,0.95)),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 39px,
              rgba(255,255,255,0.04) 39px,
              rgba(255,255,255,0.04) 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 39px,
              rgba(255,255,255,0.04) 39px,
              rgba(255,255,255,0.04) 40px
            )
          `,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-6">
              East Texas
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-white">
              Precision fabrication and machining in East Texas
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Custom metal work, CNC machining, welding, and fabrication.
              From one-off parts to production runs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="bg-[#e67e22] hover:bg-[#cf6d17] text-white font-semibold px-7 py-3 rounded text-center transition-colors flex items-center justify-center gap-2"
              >
                Request a quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/gallery"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3 rounded text-center transition-colors"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f2e] mb-2">What we do</h2>
            <p className="text-gray-500">Full-service fabrication and machining. Click any service to learn more.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <Link
                key={title}
                to="/services"
                className="group border border-gray-200 hover:border-[#e67e22] rounded-lg p-6 transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 bg-[#e67e22]/10 group-hover:bg-[#e67e22]/20 rounded flex items-center justify-center mb-4 transition-colors">
                  <Icon size={20} className="text-[#e67e22]" />
                </div>
                <h3 className="font-semibold text-[#1a1f2e] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ETX Fab */}
      <section className="bg-gray-50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f2e] mb-10">Why ETX Fab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {differentiators.map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#e67e22] shrink-0" />
                  <h3 className="font-bold text-[#1a1f2e] text-lg">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a1f2e] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Have a project in mind?</h2>
            <p className="text-gray-400 text-sm">Tell us what you need and we'll get back to you fast.</p>
          </div>
          <Link
            to="/quote"
            className="bg-[#e67e22] hover:bg-[#cf6d17] text-white font-semibold px-8 py-3 rounded transition-colors shrink-0 flex items-center gap-2"
          >
            Get a free quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
