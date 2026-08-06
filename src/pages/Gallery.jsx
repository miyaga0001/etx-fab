import { Link } from 'react-router-dom'
import { ArrowRight, Camera } from 'lucide-react'

const placeholderProjects = [
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'CNC Machining' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'Fabrication' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'Welding' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'Structural Steel' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'Custom Parts' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'Repair' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'Fabrication' },
  { title: '[Project title]', desc: '[Brief project description]', material: '[Material]', tag: 'CNC Machining' },
]

const tagColors = {
  'CNC Machining': 'bg-blue-100 text-blue-700',
  'Fabrication': 'bg-green-100 text-green-700',
  'Welding': 'bg-orange-100 text-orange-700',
  'Structural Steel': 'bg-gray-100 text-gray-700',
  'Custom Parts': 'bg-purple-100 text-purple-700',
  'Repair': 'bg-yellow-100 text-yellow-700',
}

export default function Gallery() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-[#1a1f2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Work</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A sample of recent projects. Photos coming soon — check back or{' '}
            <Link to="/quote" className="text-[#e67e22] hover:underline">reach out</Link> to talk about what we can do for you.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {placeholderProjects.map((project, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Photo placeholder */}
                <div className="bg-gray-100 h-48 flex flex-col items-center justify-center gap-2">
                  <Camera size={28} className="text-gray-300" />
                  <span className="text-xs text-gray-400">Project photo coming soon</span>
                </div>
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-[#1a1f2e]">{project.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium shrink-0 ${tagColors[project.tag] || 'bg-gray-100 text-gray-600'}`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{project.desc}</p>
                  <p className="text-xs text-gray-400">
                    <span className="font-medium">Material:</span> {project.material}
                  </p>
                </div>
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
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#cf6d17] text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            Request a quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
