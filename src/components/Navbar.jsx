import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#1a1f2e] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-bold tracking-wide text-white">ETX FAB</span>
          <span className="text-xs text-[#e67e22] font-medium tracking-widest uppercase">& Machine</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-[#e67e22]' : 'text-gray-300 hover:text-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/quote"
            className="bg-[#e67e22] hover:bg-[#cf6d17] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
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
                  `text-sm font-medium py-2 px-2 rounded transition-colors ${isActive ? 'text-[#e67e22]' : 'text-gray-300 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#e67e22] hover:bg-[#cf6d17] text-white text-sm font-semibold px-4 py-2 rounded text-center transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
