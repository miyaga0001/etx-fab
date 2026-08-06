import { useState } from 'react'
import { Phone, Upload, CheckCircle2 } from 'lucide-react'

const materials = ['Steel', 'Aluminum', 'Stainless Steel', 'Other']
const timelines = ['No rush', 'Within 2 weeks', 'Within 1 week', 'ASAP']

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    material: '',
    quantity: '',
    timeline: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission will be wired up later (email/Supabase)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md">
          <CheckCircle2 size={48} className="text-[#e67e22] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#1a1f2e] mb-3">Quote request received</h2>
          <p className="text-gray-500">
            We'll review your project details and get back to you shortly. If you need to reach us sooner, give us a call.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#1a1f2e]">
            <Phone size={16} className="text-[#e67e22]" />
            <span className="font-medium">(903) [XXX-XXXX]</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Page header */}
      <section className="bg-[#1a1f2e] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Request a Quote</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Tell us about your project. We'll get back to you with a quote — usually within one business day.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                  Name <span className="text-[#e67e22]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                  Email <span className="text-[#e67e22]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                Phone <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(903) 555-0100"
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors"
              />
            </div>

            {/* Project description */}
            <div>
              <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                Project description <span className="text-[#e67e22]">*</span>
              </label>
              <textarea
                name="description"
                required
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe what you need. Include dimensions, tolerances, finish requirements, or anything else that matters."
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors resize-vertical"
              />
            </div>

            {/* File upload area */}
            <div>
              <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                Drawings / specs <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <Upload size={24} className="mx-auto text-gray-300 mb-2" />
                <p className="text-sm text-gray-400">Drag and drop files here, or click to browse</p>
                <p className="text-xs text-gray-300 mt-1">PDF, DXF, DWG, STEP — file upload coming soon</p>
              </div>
            </div>

            {/* Material + Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                  Material preference
                </label>
                <select
                  name="material"
                  value={form.material}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors bg-white"
                >
                  <option value="">Select material</option>
                  {materials.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 1, 25, 100+"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors"
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                Timeline
              </label>
              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e67e22] focus:ring-1 focus:ring-[#e67e22] transition-colors bg-white"
              >
                <option value="">Select timeline</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#e67e22] hover:bg-[#cf6d17] text-white font-semibold py-3 px-6 rounded transition-colors text-sm"
            >
              Send quote request
            </button>
          </form>

          {/* Phone fallback */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <Phone size={15} className="text-[#e67e22]" />
              Prefer to call?{' '}
              <a href="tel:+1903XXXXXXX" className="text-[#1a1f2e] font-medium hover:text-[#e67e22] transition-colors">
                (903) [XXX-XXXX]
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
