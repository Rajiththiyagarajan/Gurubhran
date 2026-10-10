import { useState } from 'react'
import thangavelCover from '../assets/webp/thangavelcover.webp'

const initialForm = {
  name: '',
  phone: '',
  type: 'Traditional temple jewellery',
  brief: '',
}

export default function OrderPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const message = [
      'Hello Gurubharan Temple Jewellery, I would like to enquire about a traditional jewellery design.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Style: ${form.type}`,
      `Design brief: ${form.brief || 'I would like guidance from the atelier.'}`,
    ].join('\n')

    setSubmitted(true)
    window.open(`https://wa.me/917825027402?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="overflow-hidden bg-[#f7f3ee]">
      <section className="relative overflow-hidden bg-[#17120e] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(183,125,45,0.18),transparent_24rem),linear-gradient(125deg,#17120e,#362516_58%,#100d0a)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e6bf73]">Traditional jewellery atelier</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.9] sm:text-7xl">Your idea,<br /><span className="text-[#e6bf73]">made timeless.</span></h1>
            <p className="mt-7 max-w-md text-base leading-8 text-stone-300">Share your idea for traditional temple or Bharatanatyam jewellery, then speak directly with our atelier on WhatsApp.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/917825027402?text=Hello%2C%20I%27d%20like%20help%20choosing%20traditional%20temple%20jewellery." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-xs font-semibold text-white shadow-[0_12px_25px_rgba(37,211,102,0.2)] transition hover:bg-[#20bd5a]">WhatsApp us ↗</a>
              <a href="https://www.instagram.com/gurubhran_temple_jewellery/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs font-semibold text-[#f0d7a5] backdrop-blur-md transition hover:bg-white/20">View Instagram ↗</a>
            </div>
            <div className="mt-10 flex items-center gap-5 border-t border-white/15 pt-5">
              <span className="font-serif text-4xl text-[#e6bf73]">Artistry</span>
              <span className="max-w-[10rem] text-[10px] uppercase tracking-[0.22em] text-stone-400">Rooted in South Indian tradition</span>
            </div>
          </div>

          <div className="relative lg:pl-10">
            <div className="absolute -inset-5 rounded-[3rem] border border-[#d7b36d]/20" />
            <div
              className="relative aspect-[0.92] overflow-hidden rounded-[2.5rem] border border-white/20 bg-cover bg-center shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
              style={{ backgroundImage: `url(${thangavelCover})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-stone-950/10" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4">
                <div><p className="text-[10px] uppercase tracking-[0.28em] text-[#e6bf73]">Gurubhran</p><p className="mt-2 font-serif text-3xl text-white">Temple jewellery</p></div>
                <span className="font-serif text-6xl leading-none text-[#e6bf73]/75">01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a77c37]">Your order brief</p>
          <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight text-stone-900">A beautiful beginning starts with a few details.</h2>
          <div className="mt-8 space-y-5 border-t border-stone-300 pt-6">
            {[
              ['01', 'Share your idea', 'Tell us about the piece, occasion, and feeling you want to create.'],
              ['02', 'Refine with our atelier', 'We guide you through motifs, finish, stones, and design.'],
              ['03', 'Craft your heirloom', 'Your chosen design is crafted with care and respect for tradition.'],
            ].map(([number, title, text]) => (
              <div key={number} className="flex gap-4">
                <span className="font-serif text-2xl text-[#b77d2d]">{number}</span>
                <div>
                  <h3 className="font-semibold text-stone-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="border border-stone-200 bg-white p-6 shadow-soft sm:p-10">
          <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a77c37]">Private order consultation</p>
              <h2 className="mt-2 font-serif text-4xl text-stone-900">Shape your jewellery design</h2>
            </div>
            <div className="text-right">
              <span className="block font-serif text-2xl text-[#d7b36d]">Tradition</span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-stone-400">Made to be meaningful</span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Your name<input required name="name" value={form.name} onChange={updateField} placeholder="Your full name" className="order-input" /></label>
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Phone number<input required name="phone" value={form.phone} onChange={updateField} placeholder="+91 78250 27402" className="order-input" /></label>
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Jewellery style<select name="type" value={form.type} onChange={updateField} className="order-input"><option>Traditional temple jewellery</option><option>Bharatanatyam jewellery</option><option>Bridal jewellery</option><option>Chockers</option><option>Dallers</option><option>Headset</option><option>Jimmki</option><option>Leaf Headset</option><option>Long Haram</option><option>Mango Headset</option><option>Mattal</option><option>Nethichutti</option><option>Ottiyanam</option><option>Stud</option><option>Suryan Chandran</option></select></label>
          </div>

          <label className="mt-7 block text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Tell us about your design<textarea name="brief" value={form.brief} onChange={updateField} rows="5" placeholder="Describe the occasion, style, reference, or design you have in mind..." className="order-input resize-none" /></label>

          <div className="mt-8 flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-5 text-stone-500">Your short request opens WhatsApp so our jewellery team can reply directly.</p>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_25px_rgba(37,211,102,0.22)] transition hover:bg-[#20bd5a]">Send on WhatsApp <span aria-hidden="true">↗</span></button>
          </div>
          {submitted && <p className="mt-4 text-sm text-[#8a5d22]">Your enquiry is ready in WhatsApp.</p>}
        </form>
      </section>
    </main>
  )
}