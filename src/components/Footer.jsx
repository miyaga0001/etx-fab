import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="text-white font-bold text-lg tracking-wide">ETX FAB</div>
          <div className="text-red text-xs font-medium tracking-widest uppercase mb-3">& Machine</div>
          <p className="text-sm leading-relaxed">
            Precision fabrication and machining in East Texas. Locally owned and operated.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/about', label: 'About' },
              { to: '/quote', label: 'Request a Quote' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-red shrink-0" />
              <a href="tel:19036869895" className="hover:text-white transition-colors">(903) 686-9895</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="text-red shrink-0 mt-0.5" />
              <span>East Texas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} ETX Fab and Machine. All rights reserved.</span>
          <span>etxfabandmachine.com</span>
        </div>
      </div>
    </footer>
  )
}
