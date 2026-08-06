import { Link } from 'react-router-dom'
import { Settings2, Hammer, Flame, Wrench, Building2, ShieldCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Settings2,
    title: 'CNC Machining',
    desc: 'We machine parts to tight tolerances using CNC lathes and mills. Whether you need a single prototype or a repeat production run, we can hold the tolerances your design requires.',
    materials: ['Steel', 'Aluminum', 'Stainless steel', 'Mild steel', 'Tool steel'],
    applications: ['Industrial components', 'Replacement parts', 'Custom fixtures', 'Prototype development'],
  },
  {
    icon: Hammer,
    title: 'Metal Fabrication',
    desc: 'Custom fabrication from raw stock to finished assembly. We cut, bend, punch, and form metal into what you need — from simple brackets to complex weldments.',
    materials: ['Mild steel', 'Aluminum', 'Stainless steel', 'Galvanized steel'],
    applications: ['Equipment frames', 'Enclosures', 'Brackets and supports', 'Custom assemblies'],
  },
  {
    icon: Flame,
    title: 'Welding',
    desc: 'MIG, TIG, and stick welding for structural and precision applications. Our welders have experience across a wide range of material thicknesses and joint configurations.',
    materials: ['Carbon steel', 'Stainless steel', 'Aluminum'],
    applications: ['Structural connections', 'Pipe and vessel work', 'Equipment repair', 'Custom weldments'],
  },
  {
    icon: Wrench,
    title: 'Custom Parts & Prototypes',
    desc: "Got a drawing, a sample, or just an idea? We can help you get it made. We work from CAD files, hand sketches, or existing parts you want duplicated.",
    materials: ['Most metals — ask about your specific material'],
    applications: ['One-off parts', 'Prototype runs', 'Replacement for obsolete parts', 'OEM alternatives'],
  },
  {
    icon: Building2,
    title: 'Structural Steel',
    desc: 'Fabrication and installation of structural steel components for agricultural, commercial, and industrial applications.',
    materials: ['Structural steel', 'HSS tubing', 'Angle iron', 'Channel and beam'],
    applications: ['Building frames', 'Equipment mounts', 'Conveyor supports', 'Agricultural structures'],
  },
  {
    icon: ShieldCheck,
    title: 'Repair & Maintenance',
    desc: "Broken equipment costs money every hour it's down. We do field repairs, rebuild worn components, and fabricate replacement parts for equipment that's out of production.",
    materials: ['Match existing — most metals'],
    applications: ['Agricultural equipment', 'Industrial machinery', 'Trailers and trucks', 'Field-welded repairs'],
  },
]

export default function Services() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-[#1a1f2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Full-service fabrication and machining. If it's metal and you need it made, we can probably do it.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          {services.map(({ icon: Icon, title, desc, materials, applications }) => (
            <div key={title} className="border border-gray-200 rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#e67e22]/10 rounded flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#e67e22]" />
                </div>
                <h2 className="text-xl font-bold text-[#1a1f2e]">{title}</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Materials</h3>
                  <ul className="space-y-1">
                    {materials.map((m) => (
                      <li key={m} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#e67e22] rounded-full shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Typical Applications</h3>
                  <ul className="space-y-1">
                    {applications.map((a) => (
                      <li key={a} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#e67e22] rounded-full shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1a1f2e] mb-4">Equipment</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-gray-500 italic">
            [Equipment list — to be filled in with actual machines and capacity specs]
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1f2e] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ready to get started?</h2>
            <p className="text-gray-400 text-sm">Request a quote for your project — no commitment required.</p>
          </div>
          <Link
            to="/quote"
            className="bg-[#e67e22] hover:bg-[#cf6d17] text-white font-semibold px-8 py-3 rounded transition-colors shrink-0 flex items-center gap-2"
          >
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
