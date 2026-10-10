import { useState } from 'react'

const contactDetails = [
  ['Visit our studio', '77 Pillayar Kovil Street, Vadaserry, Nagercoil, 629001, Kanyakumari District', 'By appointment, Mon-Sat'],
  ['Call us', '7825027402', 'Available 10:00 - 19:00'],
  ['Write to us', 'gurubhrantemplejewellery@gmail.com', 'We reply within one business day'],
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-[#f7f3ee]">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="border-b border-stone-300 pb-7 lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div className="animate-[fadeInUp_0.8s_ease-out]">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a77c37]">The Guru atelier</p>
            <h1 className="mt-4 whitespace-nowrap font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] text-stone-900">
              Let&apos;s talk jewellery.
            </h1>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-stone-600 lg:mb-1 lg:mt-0">
            Personal styling, meaningful gifting, and custom creations begin with a simple conversation.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="animate-[fadeInUp_1.05s_ease-out]">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-stone-900 p-6 text-white sm:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#d7b36d]/30" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#d7b36d]/20" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b36d]">Visit us in Nagercoil</p>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="mt-3 max-w-sm font-serif text-4xl leading-tight sm:text-5xl">A quiet place for beautiful decisions.</h2>
                  <span className="hidden font-serif text-5xl text-[#d7b36d]/80 sm:block">G</span>
                </div>
                <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                  {contactDetails.map(([title, value, detail]) => (
                    <div key={title} className="border-t border-white/15 pt-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-stone-400">{title}</p>
                      <p className="mt-1 break-words text-sm text-white">{value}</p>
                      <p className="mt-1 text-xs text-stone-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-7 border-t border-white/15 pt-4">
                <p className="text-sm leading-6 text-stone-300">Come in, take your time, and find the piece that feels like yours.</p>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmit} className="border-t-2 border-stone-900 pt-6 animate-[fadeInUp_1s_ease-out] sm:pt-8">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b18a49]">Private consultation</p>
                <h2 className="mt-2 font-serif text-4xl text-stone-900">Start a conversation</h2>
              </div>
              <span className="hidden font-serif text-4xl text-[#c29a58] sm:block">01</span>
            </div>

            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Your name
                <input required type="text" placeholder="Type your name" className="mt-2 w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#b18a49]" />
              </label>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Email address
                <input required type="email" placeholder="yourname@example.com" className="mt-2 w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#b18a49]" />
              </label>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Category
                <select className="mt-2 w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-stone-900 outline-none transition-colors focus:border-[#b18a49]">
                  <option>Chockers</option>
                  <option>Dallers</option>
                  <option>Headset</option>
                  <option>Jimmki</option>
                  <option>Leaf Headset</option>
                  <option>Long Haram</option>
                  <option>Mango Headset</option>
                  <option>Mattal</option>
                  <option>Nethichutti</option>
                  <option>Ottiyanam</option>
                  <option>Stud</option>
                  <option>Suryan Chandran</option>
                </select>
              </label>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Phone number
                <input type="tel" placeholder="+91 78250 27402" className="mt-2 w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#b18a49]" />
              </label>
            </div>
            <label className="mt-8 block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Your message
              <textarea rows="6" placeholder="Share your occasion, style, or the piece you have in mind..." className="mt-3 w-full resize-none border border-stone-300 bg-white/50 p-4 text-sm font-normal normal-case tracking-normal text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#b18a49]" />
            </label>
            <div className="mt-7 flex flex-col items-start gap-4 border-t border-stone-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-5 text-stone-500">We respect your privacy and reply within one business day.</p>
              <button type="submit" className="rounded-full bg-stone-900 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#b18a49]">
                Send enquiry
              </button>
              {submitted && <p className="text-sm text-[#8c6b35]">Thank you. Our atelier will be in touch soon.</p>}
            </div>
          </form>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-stone-300 bg-white animate-[fadeInUp_1.2s_ease-out]">
          <iframe
            title="Gurubharan Temple Jewellery in Nagercoil"
            src="https://www.google.com/maps?q=77%20Pillayar%20Kovil%20Street%2C%20Vadaserry%2C%20Nagercoil%20629001%2C%20Kanyakumari%20District&output=embed"
            className="h-72 w-full grayscale-[0.2] transition duration-700 hover:grayscale-0 sm:h-96 lg:h-[28rem]"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone-600">77 Pillayar Kovil Street, Vadaserry, Nagercoil, 629001, Kanyakumari District</p>
            <a href="https://www.google.com/maps/search/?api=1&query=77%20Pillayar%20Kovil%20Street%2C%20Vadaserry%2C%20Nagercoil%20629001%2C%20Kanyakumari%20District" target="_blank" rel="noreferrer" className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-[#9a7437] hover:text-stone-900">Open map</a>
          </div>
        </div>
      </section>
    </main>
  )
}
