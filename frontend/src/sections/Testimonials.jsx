import { useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials'
import longHaramImage from '../assets/webp/optimized-gallery/testimonial-long-haram.webp'
import jimmkiImage from '../assets/webp/optimized-gallery/testimonial-jimmki.webp'
import jimikiImage from '../assets/webp/optimized-gallery/testimonial-jimiki.webp'

const testimonialImages = [
  longHaramImage,
  jimmkiImage,
  jimikiImage,
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

  function move(direction) {
    setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(183,125,45,0.24),transparent_28rem)]" />
      <div className="absolute -right-20 top-12 h-80 w-80 rounded-full border border-[#d7b36d]/15" />
      <div className="absolute -right-8 top-24 h-64 w-64 rounded-full border border-[#d7b36d]/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#d7b36d]">Bridal blessings</p>
            <h2 className="max-w-xl font-serif text-5xl leading-[0.95] text-white md:text-6xl">Made for meaningful moments.</h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-stone-400 md:text-right">
            Handcrafted jewellery chosen for weddings, festivals, and the traditions our families carry forward.
          </p>
        </div>

        <div className="grid overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-sm lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-stone-800 lg:min-h-[500px]">
            <img
              key={testimonialImages[activeIndex]}
              src={testimonialImages[activeIndex]}
              alt={activeTestimonial.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full animate-[fadeInUp_0.7s_ease-out] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-stone-950/10" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-300">Featured piece</p>
                <p className="mt-1 font-serif text-3xl text-white">{activeTestimonial.name}</p>
              </div>
              <span className="font-serif text-6xl leading-none text-[#d7b36d]/70">“</span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b36d]">Verified bridal review</span>
                <span className="font-serif text-2xl text-white/30">0{activeIndex + 1}</span>
              </div>
              <blockquote key={activeTestimonial.id} className="mt-10 max-w-2xl animate-[fadeInUp_0.55s_ease-out] font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                “{activeTestimonial.quote}”
              </blockquote>
            </div>

            <div className="mt-12">
              <div className="mb-5 h-px bg-white/15">
                <div key={activeIndex} className="h-full origin-left animate-[sliderProgress_6s_linear] bg-[#d7b36d]" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-lg text-white transition hover:border-[#d7b36d] hover:bg-[#d7b36d] hover:text-stone-950">←</button>
                  <button type="button" aria-label="Next testimonial" onClick={() => move(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7b36d] bg-[#d7b36d] text-lg text-stone-950 transition hover:bg-[#e6bf73]">→</button>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button key={item.id} type="button" aria-label={`Show testimonial from ${item.name}`} onClick={() => setActiveIndex(index)} className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[#d7b36d]' : 'w-2 bg-white/30 hover:bg-white/60'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
