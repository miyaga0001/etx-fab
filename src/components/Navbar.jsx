import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, MessageSquare, Mail } from 'lucide-react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      {/* Utility strip — desktop only */}
      <div className="hidden md:block bg-navy-deep border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-end gap-6 text-xs text-gray-500">
          <a href="tel:19036869895" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            <Phone size={11} /> (903) 686-9895
          </a>
          <a href="sms:19036869895" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            <MessageSquare size={11} /> Text us
          </a>
          <a href="mailto:info@etxfabandmachine.com" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            <Mail size={11} /> info@etxfabandmachine.com
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-[#1a1f2e] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-tight"
            onClick={() => setOpen(false)}
          >
            <span className="text-lg font-bold tracking-wide text-white">ETX FAB</span>
            <span className="text-xs text-red font-medium tracking-widest uppercase">& Machine</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-red' : 'text-gray-300 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:19036869895"
              className="flex items-center gap-1.5 text-white font-bold text-base hover:text-red transition-colors"
            >
              <Phone size={16} className="text-red" /> (903) 686-9895
            </a>
            <Link
              to="/quote"
              className="bg-red hover:bg-red-bright text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-[#252b3b] border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium py-2 px-2 rounded transition-colors ${isActive ? 'text-red' : 'text-gray-300 hover:text-white'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="flex gap-2 mt-2">
                <a
                  href="tel:19036869895"
                  className="flex-1 text-center border border-white/20 text-gray-300 text-sm font-medium py-2 rounded transition-colors hover:text-white flex items-center justify-center gap-1.5"
                >
                  <Phone size={13} /> Call
                </a>
                <a
                  href="sms:19036869895"
                  className="flex-1 text-center border border-white/20 text-gray-300 text-sm font-medium py-2 rounded transition-colors hover:text-white flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={13} /> Text
                </a>
              </div>
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="mt-1 bg-red hover:bg-red-bright text-white text-sm font-semibold px-4 py-2 rounded text-center transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
