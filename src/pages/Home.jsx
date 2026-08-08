import { Link } from 'react-router-dom'
import {
  Settings2, Hammer, Flame, Wrench, Building2, ShieldCheck,
  ArrowRight, CheckCircle2, Phone, Check, MessageSquare, FileText,
} from 'lucide-react'
import work1 from '../assets/work/work-1.jpg'

const galleryPhotos = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)

const capabilities = [
  {
    icon: Settings2,
    title: 'CNC Machining',
    desc: 'Tight-tolerance parts machined to spec. Lathes, mills, and turning centers.',
    photoIdx: 0,
  },
  {
    icon: Hammer,
    title: 'Metal Fabrication',
    desc: 'Custom cuts, bends, and assemblies in steel, aluminum, and stainless.',
    photoIdx: 1,
  },
  {
    icon: Flame,
    title: 'Welding',
    desc: 'MIG, TIG, and stick welding. Structural and precision work.',
    photoIdx: 2,
  },
  {
    icon: Wrench,
    title: 'Custom Parts & Prototypes',
    desc: 'One-off parts and prototype runs. We work from drawings, samples, or your idea.',
    photoIdx: 3,
  },
  {
    icon: Building2,
    title: 'Structural Steel',
    desc: 'Frames, supports, brackets, and structural components for buildings and equipment.',
    photoIdx: 4,
  },
  {
    icon: ShieldCheck,
    title: 'Repair & Maintenance',
    desc: 'Field repairs, worn part replacement, and machine restoration.',
    photoIdx: 5,
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

const trustItems = [
  'Certified welders',
  'Same-week turnaround',
  'Aluminum · Stainless · Carbon',
  'Longview, TX · serving all of East Texas',
]

const steps = [
  {
    icon: MessageSquare,
    step: '1',
    title: 'Text or call us',
    desc: 'Send a photo, a drawing, or just describe what you need. A quick text is enough to get started.',
  },
  {
    icon: FileText,
    step: '2',
    title: 'We quote it — usually same day',
    desc: 'We give you a straight quote before any work starts. No pressure, no surprise charges.',
  },
  {
    icon: Hammer,
    step: '3',
    title: 'We build or fix it',
    desc: 'Certified welders and machinists get it done — on the timeline we quoted.',
  },
]

export default function Home() {
  const galleryBand = galleryPhotos.slice(0, 8)

  return (
    <div className="pb-20 md:pb-0">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="bg-navy-deep text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-red shrink-0" />
              <span className="text-red text-xs font-semibold uppercase tracking-widest">
                Longview, TX · East Texas Proud
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-[1.05] mb-5 text-white">
              Precision welding,<br />
              fabrication &{' '}
              <span className="text-red">machining.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Bring us a drawing, a broken part, or a rough idea — our certified welders
              and machinists in Longview turn it into finished metal, built to spec.
            </p>

            {/* Three-button action row */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Link
                to="/quote"
                className="bg-red hover:bg-red-bright text-white font-bold px-6 py-3.5 rounded text-sm text-center transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <FileText size={16} />
                Request a Quote
              </Link>
              <a
                href="tel:19036869895"
                className="border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call
              </a>
              <a
                href="sms:19036869895"
                className="border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                Text a photo
              </a>
            </div>

            {/* Hook line */}
            <div className="flex items-center gap-2 mb-7 text-sm text-gray-400">
              <Check size={14} className="text-green-400 shrink-0" />
              <span>Text us a photo of your part — we'll get you a quote the same day.</span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                <ShieldCheck size={11} className="text-red shrink-0" />
                Certified welders
              </span>
              <span className="inline-flex items-center gap-1.5 border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                Same-week turnaround
              </span>
              <span className="inline-flex border border-white/15 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                Aluminum · Stainless · Carbon · Exotics
              </span>
            </div>
          </div>

          {/* Right: single feature photo */}
          <div className="relative rounded-[18px] overflow-hidden border border-white/10 shadow-2xl lg:h-[500px]">
            <img
              src={work1}
              alt="Custom metal fabrication — ETX Fab and Machine shop"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center bg-black/55 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                Real work from our shop
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. TRUST STRIP ───────────────────────────────────────── */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-2">
            {trustItems.map((item) => (
              <span key={item} className="text-xs text-gray-400 font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">What we do</h2>
            <p className="text-gray-500">
              Full-service fabrication and machining.{' '}
              <Link to="/services" className="text-red hover:underline">See all services →</Link>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: Icon, title, desc, photoIdx }) => (
              <Link
                key={title}
                to="/services"
                className="group bg-white border border-gray-200 hover:border-red rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {galleryPhotos[photoIdx] && (
                  <div className="h-36 overflow-hidden bg-gray-100">
                    <img
                      src={galleryPhotos[photoIdx]}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red/10 group-hover:bg-red/20 rounded flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={16} className="text-red" />
                    </div>
                    <h3 className="font-semibold text-navy">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. GALLERY BAND ──────────────────────────────────────── */}
      <section className="bg-navy py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Real parts.<br className="sm:hidden" /> Real welds. Real shop.
            </h2>
            <Link
              to="/gallery"
              className="text-red hover:text-red-bright text-sm font-semibold shrink-0 flex items-center gap-1 transition-colors"
            >
              View full gallery <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {galleryBand.map((src, i) => (
              <Link key={i} to="/gallery" className="group rounded-lg overflow-hidden bg-navy-light aspect-square block">
                <img
                  src={src}
                  alt="ETX Fab shop work"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden sm:block absolute top-6 left-[calc(100%/6)] right-[calc(100%/6)] h-px bg-gray-200" />
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative flex flex-col items-start sm:items-center sm:text-center">
                <div className="relative z-10 w-12 h-12 rounded-full bg-red flex items-center justify-center mb-4 shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="text-xs text-red font-bold uppercase tracking-widest mb-1">Step {step}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY ETX FAB ───────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Why ETX Fab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {differentiators.map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-red shrink-0" />
                  <h3 className="font-bold text-navy text-lg">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FOR BUSINESSES ────────────────────────────────────── */}
      <section className="bg-navy-deep text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Built for bigger jobs, too.</h2>
            <p className="text-gray-300 leading-relaxed">
              We take on production runs and contract work for businesses across East Texas —
              steel, aluminum, and stainless, from one-off prototypes to repeat production.
              Come by, call, or text to talk through what you need.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Materials', value: 'Steel · Aluminum · Stainless' },
              { label: 'Volume', value: 'One-off to production runs' },
              { label: 'Estimates', value: 'Free, no obligation' },
              { label: 'Turnaround', value: 'Same-week on most jobs' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-navy border border-white/10 rounded-lg p-4">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                <div className="text-sm text-white font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT BAND ──────────────────────────────────────── */}
      <section className="bg-red py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Have a project or a broken part?</h2>
            <p className="text-white/80 text-sm">We'll get you a quote — usually the same day.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/quote"
              className="bg-white text-red font-bold px-6 py-3 rounded text-sm transition-colors hover:bg-gray-100 flex items-center gap-2"
            >
              <FileText size={16} />
              Request a Quote
            </Link>
            <a
              href="tel:19036869895"
              className="border border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href="sms:19036869895"
              className="border border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Text us
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. MOBILE STICKY BAR ─────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep border-t border-white/10 px-3 py-2.5 flex gap-2">
        <a
          href="tel:19036869895"
          className="flex-1 flex items-center justify-center gap-1.5 border border-white/25 text-white font-semibold py-2.5 rounded text-sm"
        >
          <Phone size={14} />
          Call
        </a>
        <a
          href="sms:19036869895"
          className="flex-1 flex items-center justify-center gap-1.5 border border-white/25 text-white font-semibold py-2.5 rounded text-sm"
        >
          <MessageSquare size={14} />
          Text
        </a>
        <Link
          to="/quote"
          className="flex-[2] flex items-center justify-center gap-1.5 bg-red hover:bg-red-bright text-white font-bold py-2.5 px-3 rounded text-sm transition-colors"
        >
          Request a Quote
        </Link>
      </div>

    </div>
  )
}
