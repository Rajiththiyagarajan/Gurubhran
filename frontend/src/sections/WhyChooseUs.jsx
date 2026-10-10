import { useEffect, useState } from 'react'
import whyImageOne from '../assets/webp/others/why1.jpg.webp'
import whyImageTwo from '../assets/webp/others/why2.jpg.webp'
import whyImageThree from '../assets/webp/others/why3.jpg.webp'
import whyImageFour from '../assets/webp/others/why4.jpg.webp'

const features = [
  {
    title: 'Sacred detailing',
    description: 'Lakshmi motifs, peacocks, mangoes, and floral details finished with reverence.',
    image: whyImageOne,
    number: '01',
    label: 'The craft',
  },
  {
    title: 'Bridal guidance',
    description: 'We help you build the right bridal set, from a headset and haram to matching jimkas.',
    image: whyImageTwo,
    number: '02',
    label: 'The choice',
  },
  {
    title: 'Bharatanatyam artistry',
    description: 'Traditional motifs and careful workmanship bring expressive beauty to every heirloom.',
    image: whyImageThree,
    number: '03',
    label: 'The tradition',
  },
  {
    title: 'Heirloom service',
    description: 'From first selection to final blessing, we make every wedding and festival purchase special.',
    image: whyImageFour,
    number: '04',
    label: 'The memory',
  },
]

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = features[activeIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [])

  function selectFeature(index) {
    setActiveIndex(index)
  }

  function move(direction) {
    setActiveIndex((current) => (current + direction + features.length) % features.length)
  }

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_20%_25%,rgba(183,125,45,0.14),transparent_32rem),linear-gradient(120deg,#f7f3ee,#eee7de_55%,#f4eee6)]"
    >
      <div className="absolute inset-0 bg-[#eee7de]/65 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(247,243,238,0.84),rgba(238,231,222,0.52),rgba(247,243,238,0.76))]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#a77c37]">Why choose Guru</p>
            <h2 className="max-w-md font-serif text-5xl leading-[0.95] text-stone-900 md:text-6xl">
              Tradition in every detail.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-8 text-stone-600">
              Every Guru piece honours the symbols, craftsmanship, and auspicious beauty passed down through generations.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous reason"
                onClick={() => move(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-lg text-stone-700 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next reason"
                onClick={() => move(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-900 bg-stone-900 text-lg text-white transition hover:bg-[#a77c37] hover:text-white"
              >
                →
              </button>
              <span className="ml-3 text-xs font-semibold tracking-[0.18em] text-stone-500">
                {activeFeature.number} / 04
              </span>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative grid overflow-hidden bg-stone-900 md:min-h-[430px] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative z-10 flex flex-col justify-between p-7 text-white sm:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b36d]">{activeFeature.label}</p>
                  <p className="mt-5 font-serif text-7xl leading-none text-white/20">{activeFeature.number}</p>
                </div>
                <div className="mt-10">
                  <h3 key={activeFeature.title} className="animate-[fadeInUp_0.5s_ease-out] font-serif text-4xl leading-tight sm:text-5xl">{activeFeature.title}</h3>
                  <p key={`${activeFeature.title}-description`} className="mt-4 max-w-sm animate-[fadeInUp_0.65s_ease-out] text-sm leading-7 text-stone-300">{activeFeature.description}</p>
                </div>
              </div>

              <div className="relative aspect-[1.15] min-h-[250px] overflow-hidden md:aspect-auto md:min-h-[430px]">
                <img key={activeFeature.image} src={activeFeature.image} alt={activeFeature.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full animate-[fadeInUp_0.7s_ease-out] object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-6 right-6 rounded-full border border-white/50 bg-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-md">Guru temple atelier</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => selectFeature(index)}
                  aria-label={`Show ${feature.title}`}
                  className={`group relative overflow-hidden text-left ${index === activeIndex ? 'opacity-100' : 'opacity-55 hover:opacity-90'}`}
                >
                  <img src={feature.image} alt="" loading="lazy" decoding="async" className="h-20 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 sm:h-24" />
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-white/30">
                    {index === activeIndex && <span className="block h-full origin-left animate-[sliderProgress_5.2s_linear] bg-[#d7b36d]" />}
                  </span>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-600">{feature.number}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
