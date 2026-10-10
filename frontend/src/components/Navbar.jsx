import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMark from '../assets/webp/Gurubaharan 11.png.webp'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/55 shadow-[0_10px_35px_rgba(55,41,27,0.08)] backdrop-blur-2xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMark} alt="Gurubharan Temple Jewellery emblem" className="h-10 w-10 rounded-full border border-white/70 bg-white/90 object-contain p-1 shadow-[0_8px_20px_rgba(28,25,23,0.18)]" />
          <div>
            <p className="font-serif text-2xl leading-none text-stone-900">Gurubhran</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Temple Jewellery</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition hover:text-stone-900 ${
                  isActive ? 'text-stone-900 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#b77d2d]' : 'text-stone-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+917825027402"
            className="hidden items-center gap-2 rounded-full border border-stone-300 bg-white/85 px-3.5 py-2 text-sm font-medium text-stone-800 shadow-[0_10px_25px_rgba(28,25,23,0.08)] transition hover:border-[#b77d2d] hover:text-[#8a5d22] lg:inline-flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4e7cf] text-[#8a5d22]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                <path d="M6.6 10.8c1.3 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" />
              </svg>
            </span>
            <span className="whitespace-nowrap tracking-[0.08em]">+91 78250 27402</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/80 bg-white/55 text-stone-800 shadow-[0_6px_18px_rgba(55,41,27,0.1)] backdrop-blur-xl transition lg:hidden"
          >
            <span
              className={`block h-0.5 w-4 rounded-full bg-stone-800 transition-all duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-stone-800 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-stone-800 transition-all duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/60 bg-white/65 px-4 py-4 shadow-[0_18px_40px_rgba(28,25,23,0.12)] backdrop-blur-2xl backdrop-saturate-150 lg:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
              >
                <span>{item.name}</span>
                <span className="text-stone-400">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="tel:+917825027402"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-800 shadow-[0_10px_25px_rgba(28,25,23,0.08)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4e7cf] text-[#8a5d22]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M6.6 10.8c1.3 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" />
                </svg>
              </span>
              <span className="tracking-[0.12em]">+91 78250 27402</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
