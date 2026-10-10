import { Link } from 'react-router-dom'
import logoMark from '../assets/webp/Gurubaharan 11.png.webp'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-stone-950/85 text-stone-200 shadow-[0_-18px_45px_rgba(28,25,23,0.16)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#d7b36d]/20" />
      <div className="pointer-events-none absolute -right-8 -top-16 h-64 w-64 rounded-full border border-[#d7b36d]/10" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-40 w-72 bg-[#b77d2d]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img src={logoMark} alt="Gurubharan Temple Jewellery emblem" className="h-10 w-10 rounded-full border border-white/70 bg-white/90 object-contain p-1 shadow-[0_8px_22px_rgba(0,0,0,0.2)]" />
            <div>
              <p className="font-serif text-2xl leading-none text-white">Guru</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Jewellery</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-stone-300">
            Timeless pieces designed to celebrate every chapter of your story.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm uppercase tracking-[0.28em] text-stone-400">Shop</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>
              <Link to="/collections" className="transition hover:text-white">Collections</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm uppercase tracking-[0.28em] text-stone-400">About</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            {[
              ['Our Story', '/about'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <li key={label}>
                <Link to={path} className="transition hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm uppercase tracking-[0.28em] text-stone-400">Visit</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>77 Pillayar Kovil Street, Vadaserry, Nagercoil, 629001, Kanyakumari District</li>
            <li>gurubhrantemplejewellery@gmail.com</li>
            <li>7825027402</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Guru Jewellery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
