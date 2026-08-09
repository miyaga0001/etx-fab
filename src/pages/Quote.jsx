import { useState, useRef } from 'react'
import { Phone, Upload, CheckCircle2, X, MessageSquare } from 'lucide-react'

// Public Web3Forms access key — safe to include in client code
const ACCESS_KEY = 'd3270f23-8f7b-43d8-94dd-ac16b0c108b4'

const WEB3_ENDPOINT = 'https://api.web3forms.com/submit'
const FILE_ATTACH_LIMIT = 5 * 1024 * 1024 // 5 MB — above this we note it instead of attaching

const serviceTypes = [
  'CNC Machining',
  'Metal Fabrication',
  'Welding',
  'Custom Parts / Prototypes',
  'Structural Steel',
  'Repair & Maintenance',
  'Other / Not sure',
]
const materials = ['Steel', 'Aluminum', 'Stainless Steel', 'Other']
const timelines = ['No rush', 'Within 2 weeks', 'Within 1 week', 'ASAP']

function fileSizeLabel(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`
}

function buildFormData(form, description) {
  const data = new FormData()
  data.append('access_key', ACCESS_KEY)
  data.append('subject', 'New quote request — ETX website')
  data.append('botcheck', '')           // honeypot — must be empty
  data.append('replyto', form.email)   // replies go straight to the customer
  data.append('name', form.name)
  data.append('email', form.email)
  if (form.phone)       data.append('phone', form.phone)
  if (form.company)     data.append('company', form.company)
  if (form.serviceType) data.append('service_type', form.serviceType)
  if (form.material)    data.append('material', form.material)
  if (form.quantity)    data.append('quantity', form.quantity)
  if (form.timeline)    data.append('timeline', form.timeline)
  data.append('description', description)
  return data
}

async function postData(data) {
  const res = await fetch(WEB3_ENDPOINT, { method: 'POST', body: data })
  const json = await res.json()
  if (!json.success) throw new Error(json.message || 'Submission failed')
}

const inputClass =
  'w-full bg-navy border border-white/15 rounded px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors'

const selectClass =
  'w-full bg-navy border border-white/15 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-colors'

const labelClass = 'block text-sm font-medium text-gray-200 mb-1.5'

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [file, setFile] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
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
    setFile(e.target.files?.[0] ?? null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const drawingNote = file
      ? `\n\nNOTE: Customer attached a drawing (${file.name}, ${fileSizeLabel(file.size)}) too large for the form — follow up to request it by email.`
      : null

    const fileTooBig = file && file.size > FILE_ATTACH_LIMIT

    try {
      if (!file || fileTooBig) {
        // No file, or file exceeds limit: send text-only with a note if applicable
        const desc = fileTooBig ? form.description + drawingNote : form.description
        await postData(buildFormData(form, desc))
      } else {
        // File within limit: attempt with attachment; on any failure retry text-only
        try {
          const data = buildFormData(form, form.description)
          data.append('attachment', file, file.name)
          await postData(data)
        } catch {
          // Attachment attempt failed — retry without file so the quote still gets through
          await postData(buildFormData(form, form.description + drawingNote))
        }
      }
      setSubmitted(true)
    } catch {
      setError('Could not send your request. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-navy px-4">
        <div className="text-center max-w-md">
          <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Quote request received</h2>
          <p className="text-gray-400">
            We'll review your project details and get back to you shortly. If you need to reach us sooner, give us a call.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-white">
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
      <section className="bg-navy-deep text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Request a Quote</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Tell us about your project. We'll get back to you with a quote — usually within one business day.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-navy-light border border-white/10 rounded-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot — hidden from humans, catches bots */}
              <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Name <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Email <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Phone <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(903) 555-0100"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Company <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Service type */}
              <div>
                <label className={labelClass}>
                  Service type <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select service</option>
                  {serviceTypes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Project description */}
              <div>
                <label className={labelClass}>
                  Project description <span className="text-red">*</span>
                </label>
                <textarea
                  name="description"
                  required
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe what you need. Include dimensions, tolerances, finish requirements, or anything else that matters."
                  className={inputClass + ' resize-vertical'}
                />
              </div>

              {/* File upload */}
              <div>
                <label className={labelClass}>
                  Drawings / specs <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.dxf,.dwg,.stp,.step,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {file ? (
                  <div className="border border-white/15 rounded-lg px-4 py-3 flex items-center justify-between gap-3 bg-navy">
                    <span className="text-sm text-white truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                      className="shrink-0 text-gray-500 hover:text-red transition-colors"
                      aria-label="Remove file"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors"
                  >
                    <Upload size={24} className="mx-auto text-gray-500 mb-2" />
                    <p className="text-sm text-gray-400">Click to attach a file</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DXF, DWG, STEP, JPG, PNG — up to 5 MB</p>
                  </button>
                )}
              </div>

              {/* Material + Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Material preference
                  </label>
                  <select
                    name="material"
                    value={form.material}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select material</option>
                    {materials.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 1, 25, 100+"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className={labelClass}>
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select timeline</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded border border-red/40 bg-red/10 px-4 py-3 text-sm text-red">
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
          </div>

          {/* Phone + Text fallback */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="text-sm text-gray-400 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-1.5">
                <Phone size={15} className="text-red shrink-0" />
                Prefer to call?{' '}
                <a href="tel:19036869895" className="text-white font-medium hover:text-red transition-colors">
                  (903) 686-9895
                </a>
              </span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <a
                href="sms:19036869895"
                className="flex items-center gap-1.5 text-white font-medium hover:text-red transition-colors"
              >
                <MessageSquare size={15} className="text-red shrink-0" />
                or text us a photo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
