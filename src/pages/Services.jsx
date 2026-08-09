import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Settings2, Hammer, Flame, Wrench, Building2, ShieldCheck,
  ArrowRight, ChevronDown, MessageSquare, Phone, FileText,
} from 'lucide-react'

import work4    from '../assets/work/work-4.jpg'
import gallery4 from '../assets/gallery/gallery-4.jpg'
import gallery2 from '../assets/gallery/gallery-2.jpg'
import work1    from '../assets/work/work-1.jpg'
import gallery6 from '../assets/gallery/gallery-6.jpg'
import gallery10 from '../assets/gallery/gallery-10.jpg'

const services = [
  {
    icon: Settings2,
    title: 'CNC Machining',
    photo: work4,
    photoAlt: 'CNC lathe turning a part at ETX Fab and Machine',
    desc: 'We machine parts to tight tolerances using CNC lathes and mills. Whether you need a single prototype or a repeat production run, we can hold the tolerances your design requires.',
    materials: ['Steel', 'Aluminum', 'Stainless steel', 'Mild steel', 'Tool steel'],
    applications: ['Industrial components', 'Replacement parts', 'Custom fixtures', 'Prototype development'],
    capabilities: [
      ['Turning', 'Precision lathe work'],
      ['Milling', 'Manual milling operations'],
      ['Custom Fixtures', 'Jigs & tooling'],
    ],
  },
  {
    icon: Hammer,
    title: 'Metal Fabrication',
    photo: gallery4,
    photoAlt: 'Complex custom metal fabrication assembly at ETX Fab',
    desc: 'Custom fabrication from raw stock to finished assembly. We cut, bend, punch, and form metal into what you need — from simple brackets to complex weldments.',
    materials: ['Mild steel', 'Aluminum', 'Stainless steel', 'Galvanized steel'],
    applications: ['Equipment frames', 'Enclosures', 'Brackets and supports', 'Custom assemblies'],
  },
  {
    icon: Flame,
    title: 'Welding',
    photo: gallery2,
    photoAlt: 'Precision weld bead on steel plate — ETX Fab and Machine',
    desc: 'MIG, TIG, and stick welding for structural and precision applications. Our welders have experience across a wide range of material thicknesses and joint configurations.',
    materials: ['Carbon steel', 'Stainless steel', 'Aluminum'],
    applications: ['Structural connections', 'Pipe and vessel work', 'Equipment repair', 'Custom weldments'],
    capabilities: [
      ['MIG Welding', 'Structural & heavy gauge'],
      ['TIG Welding', 'Precision aluminum & stainless'],
      ['Brazing', 'Specialized joining'],
    ],
  },
  {
    icon: Wrench,
    title: 'Custom Parts & Prototypes',
    photo: work1,
    photoAlt: 'Custom TIG-welded one-off prototype — ETX Fab and Machine',
    desc: "Got a drawing, a sample, or just an idea? We can help you get it made. We work from CAD files, hand sketches, or existing parts you want duplicated.",
    materials: ['Most metals — ask about your specific material'],
    applications: ['One-off parts', 'Prototype runs', 'Replacement for obsolete parts', 'OEM alternatives'],
  },
  {
    icon: Building2,
    title: 'Structural Steel',
    photo: gallery6,
    photoAlt: 'Structural steel truss fabricated at ETX Fab and Machine',
    desc: 'Fabrication and installation of structural steel components for agricultural, commercial, and industrial applications.',
    materials: ['Structural steel', 'HSS tubing', 'Angle iron', 'Channel and beam'],
    applications: ['Building frames', 'Equipment mounts', 'Conveyor supports', 'Agricultural structures'],
  },
  {
    icon: ShieldCheck,
    title: 'Repair & Maintenance',
    photo: gallery10,
    photoAlt: 'Fabricated replacement part being welded at ETX Fab',
    desc: "Broken equipment costs money every hour it's down. We do field repairs, rebuild worn components, and fabricate replacement parts for equipment that's out of production.",
    materials: ['Match existing — most metals'],
    applications: ['Agricultural equipment', 'Industrial machinery', 'Trailers and trucks', 'Field-welded repairs'],
  },
]

const faqs = [
  {
    q: 'Do you take on small or one-off jobs?',
    a: 'Yes. One part or a full production run — no job is too small.',
  },
  {
    q: 'Can I just text a photo of a broken part?',
    a: "Yes. Text a photo to (903) 686-9895 and we'll get you a quote, usually the same day.",
  },
  {
    q: 'What materials do you work with?',
    a: 'Steel, aluminum, stainless, carbon, and exotics.',
  },
  {
    q: 'How fast is turnaround?',
    a: "Same-week on most jobs — we'll tell you upfront.",
  },
  {
    q: 'Do you do repairs and field work?',
    a: 'Yes — field repairs, worn-part replacement, and machine restoration.',
  },
  {
    q: 'Do you work from drawings, or just an idea?',
    a: 'Both — CAD files, hand sketches, a sample part, or just a description of what you need.',
  },
  {
    q: 'Do you do production runs?',
    a: 'Yes — from one-off prototypes to repeat production.',
  },
  {
    q: 'Where are you located?',
    a: 'Longview, TX, serving all of East Texas.',
  },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="bg-navy-deep text-white py-14 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Full-service fabrication and machining. If it's metal and you need it made, we can probably do it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/quote"
              className="bg-red hover:bg-red-bright text-white font-bold px-6 py-3 rounded text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <FileText size={16} />
              Request a Quote
            </Link>
            <a
              href="sms:19036869895"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3 rounded text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare size={16} />
              Text a photo
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES — ZIG-ZAG ROWS ───────────────────────────── */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">
          {services.map(({ icon: Icon, title, photo, photoAlt, desc, materials, applications, capabilities }, i) => (
            <div
              key={title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Photo — alternates left/right on desktop; always on top on mobile */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl aspect-[4/3]">
                  <img
                    src={photo}
                    alt={photoAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-red" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">{desc}</p>

                {/* Process detail — CNC Machining + Welding only */}
                {capabilities && (
                  <div className="mb-6 bg-navy-light border border-white/10 rounded-lg px-4 py-4">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Process</h3>
                    <ul className="space-y-2">
                      {capabilities.map(([name, capDesc]) => (
                        <li key={name} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-red rounded-full shrink-0 mt-[7px]" />
                          <span>
                            <span className="font-semibold text-white">{name}</span>
                            {' — '}{capDesc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Materials + Applications */}
                <div className="grid grid-cols-2 gap-6 mb-7">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Materials</h3>
                    <ul className="space-y-1.5">
                      {materials.map((m) => (
                        <li key={m} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-red rounded-full shrink-0 mt-[5px]" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Applications</h3>
                    <ul className="space-y-1.5">
                      {applications.map((a) => (
                        <li key={a} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-red rounded-full shrink-0 mt-[5px]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Per-service CTA */}
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-1.5 text-red hover:text-red-bright font-semibold text-sm transition-colors"
                >
                  Get a quote for this <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. TRUST STRIP ───────────────────────────────────────── */}
      <section className="bg-navy-deep border-y border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              'Certified welders',
              'Same-week turnaround',
              'Steel · Aluminum · Stainless',
              'Longview, TX',
            ].map((item) => (
              <span key={item} className="text-sm text-gray-400">{item}</span>
            ))}
          </div>
          <Link
            to="/gallery"
            className="text-red hover:text-red-bright text-sm font-semibold flex items-center gap-1 transition-colors shrink-0"
          >
            See our work <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── 4. FAQ ───────────────────────────────────────────────── */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Common questions</h2>
          <div className="divide-y divide-white/10">
            {faqs.map(({ q, a }, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full text-left py-4 flex items-center justify-between gap-4 text-white font-semibold text-sm sm:text-base"
                >
                  <span>{q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-gray-300 text-sm leading-relaxed">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CTA ─────────────────────────────────────────── */}
      <section className="bg-navy-deep border-t border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ready to get started?</h2>
            <p className="text-gray-400 text-sm">Request a quote for your project — no commitment required.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/quote"
              className="bg-red hover:bg-red-bright text-white font-bold px-7 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              <FileText size={16} />
              Request a Quote
            </Link>
            <a
              href="tel:19036869895"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href="sms:19036869895"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Text us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
