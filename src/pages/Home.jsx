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
  Phone,
  Camera,
  Clock,
  Check,
} from 'lucide-react'
import work1 from '../assets/work/work-1.jpg'
import work2 from '../assets/work/work-2.jpg'
import work3 from '../assets/work/work-3.jpg'

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

function PhotoPlaceholder({ label, src, alt, className = '' }) {
  return (
    <div
      className={`relative rounded-[14px] border border-white/10 overflow-hidden ${className}`}
      style={!src ? { background: 'linear-gradient(145deg, #1c2535 0%, #141c28 60%, #1a2232 100%)' } : undefined}
    >
      {src ? (
        <img src={src} alt={alt || label} className="w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <Camera size={20} className="text-white/20" />
          <div className="text-center px-3">
            <p className="text-xs text-white/40 font-medium">{label}</p>
            <p className="text-[10px] text-white/20 mt-0.5">[replace with real shop photo]</p>
          </div>
        </div>
      )}
      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2 pointer-events-none">
        <span className="text-[10px] text-white/75 font-medium">{label}</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="pb-20 md:pb-0">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy-deep text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-red shrink-0" />
              <span className="text-red text-xs font-semibold uppercase tracking-widest">
                Longview, TX · East Texas Proud
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-[1.05] mb-5 text-white">
              Precision welding,<br />
              fabrication &{' '}
              <span className="text-red">machining.</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Bring us a drawing, a broken part, or a rough idea — our certified welders
              and machinists in Longview turn it into finished metal, built to spec.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Link
                to="/quote"
                className="bg-red hover:bg-red-bright text-white font-bold px-7 py-3.5 rounded text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                Request a Free Quote <ArrowRight size={17} />
              </Link>
              <a
                href="tel:19036869895"
                className="border border-white/25 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                (903) 686-9895
              </a>
            </div>

            {/* Reassurance line */}
            <div className="flex items-center gap-2 mb-7 text-sm text-gray-400">
              <Check size={14} className="text-green-400 shrink-0" />
              <span>Free estimates — most quotes back the same day.</span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                <ShieldCheck size={11} className="text-red shrink-0" />
                Certified welders
              </span>
              <span className="inline-flex items-center gap-1.5 border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                <Clock size={11} className="text-red shrink-0" />
                Same-week turnaround
              </span>
              <span className="inline-flex border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                Aluminum · Stainless · Carbon · Exotics
              </span>
            </div>
          </div>

          {/* Right: photo grid */}
          <div className="flex flex-col gap-3 lg:h-[500px]">
            <div className="grid grid-cols-2 gap-3 flex-1">
              {/* Left tile: portrait, spans full column height */}
              <PhotoPlaceholder
                label="Custom fabrication"
                src={work1}
                alt="Custom metal fabrication"
                className="h-full min-h-[280px]"
              />
              {/* Right column: two stacked */}
              <div className="flex flex-col gap-3">
                <PhotoPlaceholder
                  label="Precision machining"
                  src={work2}
                  alt="Precision machining"
                  className="flex-1 min-h-[120px]"
                />
                <PhotoPlaceholder
                  label="Metalwork & welding"
                  src={work3}
                  alt="Metalwork and welding"
                  className="flex-1 min-h-[120px]"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex items-center text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                Real work from our shop — not stock photos
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">What we do</h2>
            <p className="text-gray-500">Full-service fabrication and machining. Click any service to learn more.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <Link
                key={title}
                to="/services"
                className="group bg-navy border border-white/10 hover:border-red rounded-lg p-6 transition-all hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-red/10 group-hover:bg-red/20 rounded flex items-center justify-center mb-4 transition-colors">
                  <Icon size={20} className="text-red" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ETX Fab ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f2e] mb-10">Why ETX Fab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {differentiators.map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-red shrink-0" />
                  <h3 className="font-bold text-[#1a1f2e] text-lg">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="bg-[#1a1f2e] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Have a project in mind?</h2>
            <p className="text-gray-400 text-sm">Tell us what you need and we'll get back to you fast.</p>
          </div>
          <Link
            to="/quote"
            className="bg-red hover:bg-red-bright text-white font-semibold px-8 py-3 rounded transition-colors shrink-0 flex items-center gap-2"
          >
            Get a free quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Mobile sticky bottom bar ──────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep border-t border-white/10 px-4 py-3 flex gap-3">
        <a
          href="tel:19036869895"
          className="flex-1 flex items-center justify-center gap-2 border border-white/25 text-white font-semibold py-3 rounded text-sm transition-colors"
        >
          <Phone size={15} />
          Call
        </a>
        <Link
          to="/quote"
          className="flex-1 flex items-center justify-center gap-2 bg-red hover:bg-red-bright text-white font-bold py-3 rounded text-sm transition-colors"
        >
          Request a Quote
        </Link>
      </div>

    </div>
  )
}
