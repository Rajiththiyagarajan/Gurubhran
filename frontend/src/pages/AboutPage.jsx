import longHaramImage from '../assets/webp/long haram.png.webp'
import awardImageOne from '../assets/webp/awards1.png.webp'
import awardImageTwo from '../assets/webp/awards2.png.webp'
import awardImageThree from '../assets/webp/awards3.png.webp'
import awardImageFour from '../assets/webp/awards4.png.webp'
import awardImageFive from '../assets/webp/awards5.png.webp'
import Reveal from '../components/Reveal'
import thangavel from '../assets/webp/thangavel.webp'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const awards = [
  ['2022', 'Young Entrepreneurs Award'],
  ['2021-22', 'Next Generation Award'],
  ['2023-24', 'District Award'],
  ['2025', 'Private Creative Icon Award'],
]

const awardImages = [awardImageOne, awardImageTwo, awardImageThree, awardImageFour, awardImageFive]

export default function AboutPage() {
  const [selectedAward, setSelectedAward] = useState(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  const isViewerOpen = selectedAward !== null

  useEffect(() => {
    if (!isViewerOpen) {
      triggerRef.current?.focus()
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus({ preventScroll: true })

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedAward(null)
        triggerRef.current?.focus()
      }
      if (event.key === 'ArrowRight') {
        setSelectedAward((current) => (current + 1) % awardImages.length)
      }
      if (event.key === 'ArrowLeft') {
        setSelectedAward((current) => (current - 1 + awardImages.length) % awardImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isViewerOpen])

  function closeViewer() {
    setSelectedAward(null)
  }

  return (
    <main className="bg-[#f7f3ee] text-stone-900">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="grid items-end gap-8 border-b border-stone-300/80 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a77c37]">Gurubharan Temple Jewellery</p>
            <h1 className="mt-4 max-w-3xl font-serif text-6xl leading-[0.88] text-stone-950 sm:text-7xl lg:text-8xl">
              Our Story
            </h1>
          </div>
          <p className="max-w-md text-base leading-8 text-stone-600 lg:pb-1">
            A legacy shaped by family, guided by tradition, and carried forward through the vision of a new generation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 lg:pb-20">
        <figure className="relative h-[420px] overflow-hidden bg-stone-200 sm:h-[520px] lg:h-[600px]">
          <img src={thangavel} alt="Traditional temple jewellery by Gurubharan" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/5" />
          <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-200">Nagercoil temple jewellery</span>
            <span className="font-serif text-4xl">2016</span>
          </figcaption>
        </figure>
        <article className="max-w-2xl self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a77c37]">01 / The beginning</p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-stone-950 sm:text-6xl">A Legacy Rooted in Tradition</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-stone-600">
            <p>
              Some traditions are not simply passed down <span className="text-[#a77c37]">&mdash;</span> they are <strong className="font-semibold text-stone-800">lived, practiced, and perfected through generations.</strong>
            </p>
            <p>
              Our story begins with a family deeply rooted in the traditional art of <strong className="font-semibold text-stone-800">Nagercoil Temple Jewellery</strong>. The craft was shaped by our <strong className="font-semibold text-stone-800">father, T. Muthuswamy, and grandfather, S. Thangavel</strong>, whose dedication and knowledge laid the foundation for the generations that followed.
            </p>
            <p>
              At the heart of this legacy is our <strong className="font-semibold text-stone-800">Guru, Kalamani</strong>, a highly respected craftsman known for his exceptional work in Nagercoil Temple Jewellery. His contribution to this traditional art has been recognized through honours including the <strong className="font-semibold text-stone-800">Haryana State Award</strong> and the <strong className="font-semibold text-stone-800">Tamil Nadu Valum Kalai Pokisham Award</strong>.
            </p>
            <p>His craftsmanship and dedication became more than an inspiration <span className="text-[#a77c37]">&mdash;</span> they became a guiding light for the next generation.</p>
          </div>
        </article>
      </section>

      <section className="border-y border-stone-300/80 bg-[#efe6d9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a77c37]">Recognition along the way</p>
            <h2 className="mt-3 font-serif text-4xl text-stone-950 sm:text-5xl">Craft that keeps moving forward.</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4">
            {awards.map(([year, award]) => (
              <div key={award} className="border-l border-[#b99051]/60 pl-4">
                <p className="font-serif text-3xl text-stone-950">{year}</p>
                <p className="mt-1 text-xs leading-5 text-stone-600">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#20251f] text-[#f7f3ee]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4b16e]">A record of recognition</p>
              <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.92] text-white">
                Honours earned.<br />Heritage carried forward.
              </h2>
            </div>
            <div className="flex items-center gap-4 lg:pb-1">
              <span className="font-serif text-6xl leading-none text-[#d4b16e]">05</span>
              <p className="max-w-[150px] text-[10px] uppercase leading-5 tracking-[0.2em] text-stone-300">Milestones in a living tradition</p>
            </div>
          </Reveal>

          <Reveal className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[190px_190px]" delay={160}>
            {awardImages.map((image, index) => (
              <figure
                key={image}
                className={`group relative overflow-hidden border border-white/15 bg-[#eee8dd] p-3 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-[#d4b16e] hover:shadow-[0_20px_44px_rgba(0,0,0,0.34)] hover:ring-1 hover:ring-[#d4b16e]/35 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-4 ${
                  index === 0
                    ? 'col-span-2 aspect-[4/3] lg:col-span-6 lg:row-span-2 lg:aspect-auto'
                    : 'aspect-[4/5] lg:col-span-3 lg:row-span-1 lg:aspect-auto'
                }`}
              >
                <button
                  type="button"
                  aria-label={`View award ${index + 1} in detail`}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelectedAward(index)
                  }}
                  className="block h-full w-full cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b16e]"
                >
                  <img
                    src={image}
                    alt={`Gurubharan Temple Jewellery award ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.045] group-hover:brightness-105 group-hover:saturate-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </button>
                <span className="pointer-events-none absolute inset-3 bg-gradient-to-t from-stone-950/10 via-transparent to-[#d4b16e]/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:inset-4" />
                <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between border-t border-stone-900/10 bg-[#f7f3ee]/95 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-700 transition-[background-color,border-color] duration-300 group-hover:border-[#b99051]/40 group-hover:bg-white sm:inset-x-4 sm:bottom-4">
                  <span>Gurubharan · Recognition</span>
                  <span className="font-serif text-sm text-[#a77c37]">0{index + 1}</span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-stone-300/80 bg-[#efe6d9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8 lg:py-16">
          <article className="relative border-l-2 border-[#b99051] pl-6 sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a77c37]">02 / The journey</p>
            <h2 className="mt-4 max-w-md font-serif text-5xl leading-[0.92] text-stone-950 sm:text-6xl">The Journey of Gurubharan</h2>
            <div className="mt-9 flex items-end gap-4">
              <span className="font-serif text-7xl leading-none text-[#a77c37] sm:text-8xl">2016</span>
              <span className="mb-1 max-w-[120px] text-[10px] uppercase leading-5 tracking-[0.18em] text-stone-500">The first chapter begins</span>
            </div>
          </article>

          <div className="relative space-y-8 lg:pt-2">
            <div className="absolute bottom-4 left-[5px] top-4 hidden w-px bg-[#c8a96e]/60 sm:block" />
            <article className="relative grid gap-3 sm:grid-cols-[28px_1fr] sm:gap-5">
              <span className="relative z-10 mt-2 hidden h-3 w-3 rounded-full border-2 border-[#efe6d9] bg-[#a77c37] shadow-[0_0_0_1px_#b99051] sm:block" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a77c37]">A new chapter</p>
                <p className="mt-2 text-base leading-8 text-stone-600">
                  Inspired by this heritage, our journey began in <strong className="font-semibold text-stone-800">2016</strong>. With respect for the traditional techniques passed down through our family, we began building a new chapter <span className="text-[#a77c37]">&mdash;</span> one that brings together <strong className="font-semibold text-stone-800">age-old craftsmanship and the vision of a new generation</strong>.
                </p>
              </div>
            </article>

            <article className="relative grid gap-3 sm:grid-cols-[28px_1fr] sm:gap-5">
              <span className="relative z-10 mt-2 hidden h-3 w-3 rounded-full border-2 border-[#efe6d9] bg-[#a77c37] shadow-[0_0_0_1px_#b99051] sm:block" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a77c37]">Honours earned</p>
                <p className="mt-2 text-base leading-8 text-stone-600">
                  Over the years, this journey has been recognized through several honours, including the <strong className="font-semibold text-stone-800">Young Entrepreneurs Award (2022)</strong>, <strong className="font-semibold text-stone-800">Next Generation Award (2021-2022)</strong>, <strong className="font-semibold text-stone-800">District Award (2023-2024)</strong>, and the <strong className="font-semibold text-stone-800">Private Creative Icon Award (2025)</strong>.
                </p>
              </div>
            </article>

            <article className="relative grid gap-3 sm:grid-cols-[28px_1fr] sm:gap-5">
              <span className="relative z-10 mt-2 hidden h-3 w-3 rounded-full border-2 border-[#efe6d9] bg-[#a77c37] shadow-[0_0_0_1px_#b99051] sm:block" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a77c37]">The responsibility</p>
                <p className="mt-2 text-base leading-8 text-stone-600">Each recognition represents not just an achievement, but a reminder of the responsibility we carry <span className="text-[#a77c37]">&mdash;</span> to protect the beauty of our traditional craft and take it forward.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-stone-950 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 25, 23, 0.88), rgba(28, 25, 23, 0.94)), url(${longHaramImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b979]">03 / The meaning</p>
            <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">More Than Jewellery</h2>
          </div>
          <div className="max-w-2xl text-base leading-8 text-stone-300">
            <p>
              At <strong className="font-semibold text-white">Gurubharan Temple Jewellery</strong>, every creation carries a piece of our heritage.
            </p>
            <p className="mt-5">Every design reflects the patience of a craftsman, the knowledge of generations, and the beauty of an art form that has stood the test of time.</p>
            <p className="mt-5">We believe jewellery should not simply be worn <span className="text-[#d9b979]">&mdash;</span> <strong className="font-semibold text-white">it should carry a story.</strong></p>
            <div className="mt-7 grid gap-2 border-l border-[#d9b979] pl-5 font-serif text-2xl text-[#f1d49a] sm:grid-cols-2">
              <span>A story of family.</span>
              <span>A story of tradition.</span>
              <span>A story of craftsmanship.</span>
              <span>A story passed forward.</span>
            </div>
          </div>
        </div>
      </section>

      {isViewerOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Award image viewer"
          onClick={closeViewer}
          className="fixed inset-0 z-[100] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-stone-950/90 p-2 backdrop-blur-md sm:p-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative grid h-[calc(100dvh-1rem)] w-full max-w-6xl grid-rows-[minmax(0,1fr)_auto] overflow-hidden border border-[#d4b16e]/45 bg-[#171914] shadow-[0_28px_100px_rgba(0,0,0,0.6)] sm:h-[calc(100dvh-3rem)] lg:h-[min(84dvh,760px)] lg:grid-cols-[minmax(0,1fr)_300px] lg:grid-rows-1"
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close award viewer"
              title="Close"
              onClick={closeViewer}
              className="absolute right-2 top-2 z-30 flex h-11 w-11 items-center justify-center border border-white/25 bg-stone-950/90 text-3xl leading-none text-white transition-colors hover:border-[#d4b16e] hover:text-[#f0d7a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b16e] sm:right-3 sm:top-3"
            >
              ×
            </button>
            <div className="relative flex min-h-0 items-center justify-center bg-black/25 p-2 sm:p-8">
              <img
                src={awardImages[selectedAward]}
                alt={`Gurubharan Temple Jewellery award ${selectedAward + 1} enlarged`}
                className="h-auto max-h-full w-auto max-w-full object-contain"
              />
              <button
                type="button"
                aria-label="Previous award"
                title="Previous award"
                onClick={() => setSelectedAward((selectedAward - 1 + awardImages.length) % awardImages.length)}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-stone-950/75 font-serif text-3xl text-white transition-colors hover:border-[#d4b16e] hover:text-[#f0d7a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b16e]"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next award"
                title="Next award"
                onClick={() => setSelectedAward((selectedAward + 1) % awardImages.length)}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-stone-950/75 font-serif text-3xl text-white transition-colors hover:border-[#d4b16e] hover:text-[#f0d7a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b16e]"
              >
                ›
              </button>
            </div>
            <aside className="flex items-center justify-between gap-6 border-t border-white/10 bg-[#f7f3ee] p-5 text-stone-900 sm:p-7 lg:flex-col lg:items-start lg:justify-end lg:border-l lg:border-t-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a77c37]">Gurubharan · Award Archive</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight">A record of recognition</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">Honouring a craft carried forward through generations.</p>
              </div>
              <p className="shrink-0 font-serif text-3xl text-[#a77c37]" aria-live="polite">
                0{selectedAward + 1}<span className="text-stone-400"> / 05</span>
              </p>
            </aside>
          </div>
        </div>,
        document.body,
      )}

    </main>
  )
}
