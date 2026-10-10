import { useEffect, useState } from 'react'
import logoMark from '../assets/webp/Gurubaharan 11.png.webp'
import thangavelCover from '../assets/webp/thangavelcover.webp'

const MINIMUM_VISIBLE_MS = 2000
const MAXIMUM_VISIBLE_MS = 3000
const FADE_OUT_MS = 300

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const startedAt = performance.now()
    let dismissed = false
    let hideTimer
    let removeTimer

    function dismiss() {
      if (dismissed) return
      dismissed = true
      window.clearTimeout(maximumTimer)

      const minimumTimeLeft = Math.max(
        0,
        MINIMUM_VISIBLE_MS - (performance.now() - startedAt),
      )

      hideTimer = window.setTimeout(() => {
        setIsFadingOut(true)
        removeTimer = window.setTimeout(() => setIsVisible(false), FADE_OUT_MS)
      }, minimumTimeLeft)
    }

    const maximumTimer = window.setTimeout(dismiss, MAXIMUM_VISIBLE_MS)
    window.addEventListener('load', dismiss, { once: true })

    if (document.readyState === 'complete') dismiss()

    return () => {
      window.clearTimeout(maximumTimer)
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
      window.removeEventListener('load', dismiss)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      role="status"
      aria-label="Loading Gurubharan Temple Jewellery"
      aria-hidden={isFadingOut}
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#15110e] text-white transition-opacity duration-300 ${
        isFadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#15110e_0%,#2b2118_48%,#0f0d0b_100%)]" />
      <img
        src={thangavelCover}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25 lg:hidden"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_48%,rgba(215,179,109,0.18),transparent_30rem)]" />
      <div className="absolute bottom-10 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d7b36d]/35 to-transparent" />

      <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[min(70vh,38rem)] w-[min(35vw,27rem)] -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/15 bg-stone-900 shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:block">
        <img
          src={thangavelCover}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(20,15,11,0.25),rgba(20,15,11,0.72))]" />
        <div className="absolute inset-5 rounded-[1.5rem] border border-white/20" />
        <div className="absolute left-8 top-8 h-10 w-10 border-l border-t border-[#d7b36d]" />
        <div className="absolute bottom-8 right-8 h-10 w-10 border-b border-r border-[#d7b36d]" />
        <div className="absolute bottom-8 left-8 flex items-center gap-3">
          <img src={logoMark} alt="" className="h-12 w-12 rounded-full bg-white/90 p-2 object-contain" />
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/80">Temple jewellery</p>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-7xl items-center px-7 py-12 sm:px-12 lg:px-16">
        <div className="max-w-md animate-[loaderReveal_0.6s_ease-out]">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-[#d7b36d]/40 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <img
              src={logoMark}
              alt="Gurubharan Temple Jewellery"
              fetchPriority="high"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#d7b36d]">Gurubharan</p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-white sm:text-7xl">Temple jewellery.</h1>
          <p className="mt-6 max-w-xs text-sm leading-7 text-stone-300">
            Crafting a considered world of tradition, detail, and timeless celebration.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-40 overflow-hidden bg-white/20 sm:w-56">
              <div className="h-full w-1/2 origin-left animate-[loaderProgress_1s_ease-in-out_infinite] bg-[#d7b36d]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-stone-400">Loading</span>
          </div>
        </div>
      </div>
    </div>
  )
}
