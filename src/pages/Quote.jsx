import { useState, useRef } from 'react'
import { Phone, Upload, CheckCircle2, X } from 'lucide-react'

// Public Web3Forms access key — safe to include in client code
const ACCESS_KEY = 'd3270f23-8f7b-43d8-94dd-ac16b0c108b4'

const WEB3_ENDPOINT = 'https://api.web3forms.com/submit'
const FILE_SIZE_LIMIT = 20 * 1024 * 1024 // 20 MB

const materials = ['Steel', 'Aluminum', 'Stainless Steel', 'Other']
const timelines = ['No rush', 'Within 2 weeks', 'Within 1 week', 'ASAP']

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [file, setFile] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    material: '',
    quantity: '',
    timeline: '',
  })
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e) => {
    const f = e.target.files?.[0] ?? null
    setFile(f)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const data = new FormData()
    data.append('access_key', ACCESS_KEY)
    data.append('subject', 'New quote request — ETX website')
    data.append('botcheck', '') // honeypot — must be empty

    data.append('name', form.name)
    data.append('email', form.email)
    if (form.phone) data.append('phone', form.phone)
    if (form.material) data.append('material', form.material)
    if (form.quantity) data.append('quantity', form.quantity)
    if (form.timeline) data.append('timeline', form.timeline)

    // Attach file or append a note if it can't go through
    let description = form.description
    if (file) {
      if (file.size > FILE_SIZE_LIMIT) {
        description += `\n\n[Drawing "${file.name}" exceeded the upload size limit — please email it to info@etxfabandmachine.com]`
      } else {
        try {
          data.append('attachment', file, file.name)
        } catch {
          description += `\n\n[Drawing "${file.name}" could not be attached — please email it to info@etxfabandmachine.com]`
        }
      }
    }
    data.append('description', description)

    try {
      const res = await fetch(WEB3_ENDPOINT, { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        setError(json.message || 'Submission failed. Please call us directly.')
      }
    } catch {
      setError('Could not reach the server. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md">
          <CheckCircle2 size={48} className="text-red mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#1a1f2e] mb-3">Quote request received</h2>
          <p className="text-gray-500">
            We'll review your project details and get back to you shortly. If you need to reach us sooner, give us a call.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#1a1f2e]">
            <Phone size={16} className="text-red" />
            <span className="font-medium">(903) 686-9895</span>
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
            {/* Honeypot — hidden from humans, catches bots */}
            <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                  Name <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                  Email <span className="text-red">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors"
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
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors"
              />
            </div>

            {/* Project description */}
            <div>
              <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                Project description <span className="text-red">*</span>
              </label>
              <textarea
                name="description"
                required
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe what you need. Include dimensions, tolerances, finish requirements, or anything else that matters."
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors resize-vertical"
              />
            </div>

            {/* File upload */}
            <div>
              <label className="block text-sm font-medium text-[#1a1f2e] mb-1.5">
                Drawings / specs <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.dxf,.dwg,.stp,.step,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileChange}
              />
              {file ? (
                <div className="border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between gap-3 bg-gray-50">
                  <span className="text-sm text-[#1a1f2e] truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                    className="shrink-0 text-gray-400 hover:text-red transition-colors"
                    aria-label="Remove file"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors"
                >
                  <Upload size={24} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-sm text-gray-400">Click to attach a file</p>
                  <p className="text-xs text-gray-300 mt-1">PDF, DXF, DWG, STEP, JPG, PNG — max 20 MB</p>
                </button>
              )}
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
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors bg-white"
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
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors"
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
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors bg-white"
              >
                <option value="">Select timeline</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded border border-red/30 bg-red/5 px-4 py-3 text-sm text-red">
                {error} Call us at{' '}
                <a href="tel:19036869895" className="font-semibold underline">
                  (903) 686-9895
                </a>
                .
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red hover:bg-red-bright disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded transition-colors text-sm"
            >
              {loading ? 'Sending…' : 'Send quote request'}
            </button>
          </form>

          {/* Phone fallback */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <Phone size={15} className="text-red" />
              Prefer to call?{' '}
              <a href="tel:19036869895" className="text-[#1a1f2e] font-medium hover:text-red transition-colors">
                (903) 686-9895
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
