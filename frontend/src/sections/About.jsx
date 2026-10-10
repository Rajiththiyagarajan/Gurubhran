import about from '../assets/webp/others/About.png.webp'

export default function About() {
  return (
    <section id="about" className="bg-stone-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img
            src={about}
            alt="Handcrafted jewellery craftsmanship"
            loading="lazy"
            decoding="async"
            className="h-[560px] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 right-8 rounded-[1.5rem] bg-white p-5 shadow-soft">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Since 2017</p>
            <p className="mt-2 font-serif text-3xl text-stone-900">Temple-made</p>
            <p className="text-stone-600">with devotion</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">Gurubharan Temple Jewellery</p>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">
            Jewellery shaped by heritage, craftsmanship, and meaning.
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-600">
            We design traditional temple and Bharatanatyam jewellery for weddings, festive dressing, and
            the cherished moments that deserve to be remembered. Each piece blends heritage motifs with a
            thoughtful, wearable finish.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-600">
            From bridal sets and statement necklaces to bangles, studs, and custom heirlooms, every design
            is made to feel personal, refined, and suitable for gifting, retail collections, and wholesale enquiries.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="font-serif text-3xl text-stone-900">760+</p>
              <p className="mt-2 text-sm text-stone-600">Happy clients</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="font-serif text-3xl text-stone-900">Tradition</p>
              <p className="mt-2 text-sm text-stone-600">Inspired by South Indian heritage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
