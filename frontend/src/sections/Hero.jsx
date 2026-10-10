import Button from '../components/Button'
import { Link } from 'react-router-dom'
import heroImage from '../assets/webp/optimized-gallery/hero-jewellery.webp'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f3ee]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf7f1_0%,#f1e4d2_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(205,171,120,0.30),transparent_42%)]" />
      <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#d6b57b]/30 blur-3xl" />
      <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-[#f1e6d9]/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-xl animate-[fadeInUp_0.9s_ease-out]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-stone-500">
            South Indian temple jewellery
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
            Jewellery rooted in devotion.
          </h1>
          <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
            Discover traditional temple and Bharatanatyam jewellery for weddings, festivals, and
            the family celebrations that become treasured memories.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>Shop Temple Jewellery</Button>
            <Link
              to="/order"
              className="hero-order-button inline-flex items-center justify-center rounded-full border border-[#b77d2d]/70 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-all duration-300 hover:border-[#b77d2d] hover:bg-stone-50"
            >
              For Order <span className="ml-2 text-[#b77d2d]">↗</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {[
              ['760+', 'Happy brides'],
              ['Since 2016', 'Years of craft'],
              ['Tradition', 'Crafted with care'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-stone-200 bg-white/70 p-4 backdrop-blur-sm shadow-sm"
              >
                <p className="font-serif text-2xl text-stone-900">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-[floatCard_5s_ease-in-out_infinite]">
          <div className="absolute -left-8 top-8 h-56 w-56 rounded-full bg-gold-200/60 blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-52 w-52 rounded-full bg-stone-300/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] p-2 shadow-[0_30px_80px_rgba(40,30,20,0.12)]">
            <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-[linear-gradient(135deg,rgba(215,180,118,0.95),rgba(255,255,255,0.04),rgba(120,96,69,0.8),rgba(255,255,255,0.08),rgba(215,180,118,0.95))] opacity-90" />
            <div className="pointer-events-none absolute inset-[10px] rounded-[1.8rem] border border-white/70" />
            <div className="pointer-events-none absolute inset-[18px] rounded-[1.6rem] border border-[#d4b57a]/80 animate-[pulseBorder_3s_ease-in-out_infinite]" />

            <img
              src={heroImage}
              alt="Luxury jewellery model"
              fetchPriority="high"
              decoding="async"
              className="relative h-[520px] w-full rounded-[1.8rem] object-cover"
            />

            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_18px_40px_rgba(28,25,23,0.12)] backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Signature bridal edit</p>
              <p className="mt-2 font-serif text-2xl text-stone-900">Lakshmi Kasu Haram</p>
              <p className="text-sm text-stone-600">Traditional temple craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
