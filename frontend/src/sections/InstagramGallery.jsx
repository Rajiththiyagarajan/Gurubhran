import insta1 from '../assets/webp/insta1.jpeg.webp'
import insta2 from '../assets/webp/insta2.jpeg.webp'
import insta3 from '../assets/webp/insta3.jpeg.webp'
import insta4 from '../assets/webp/insta4.jpeg.webp'
import insta5 from '../assets/webp/insta5.jpeg.webp'
import insta6 from '../assets/webp/insta6.jpeg.webp'

const gallery = [insta1, insta2, insta3, insta4, insta5, insta6]

const instagramProfile = 'https://www.instagram.com/gurubhran_temple_jewellery/'
const whatsappLink = 'https://wa.me/917825027402?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20handcrafted%20jewellery.'

export default function InstagramGallery() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ee]">
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#d7b36d]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-white shadow-[0_12px_25px_rgba(28,25,23,0.18)] animate-[instagramFloat_4s_ease-in-out_infinite]">
              <span className="absolute inset-[-5px] rounded-[1.1rem] border border-[#d62976]/60 animate-[instagramPulse_2.8s_ease-in-out_infinite]" />
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                <defs>
                  <linearGradient id="instagramGradient" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#feda75" />
                    <stop offset="0.35" stopColor="#fa7e1e" />
                    <stop offset="0.68" stopColor="#d62976" />
                    <stop offset="1" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#instagramGradient)" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.2" stroke="url(#instagramGradient)" strokeWidth="2" />
                <circle cx="17.4" cy="6.7" r="1.2" fill="#d62976" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a77c37]">Handcrafted jewellery on Instagram</p>
              <h2 className="mt-1 font-serif text-3xl text-stone-900 sm:text-4xl">@gurubhran_temple_jewellery</h2>
            </div>
          </div>
        </div>
          <div className="flex flex-wrap items-center gap-4 md:self-end">
            <a
              href={instagramProfile}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-stone-200 bg-white py-1.5 pl-2 pr-5 text-sm font-semibold text-stone-800 shadow-[0_8px_20px_rgba(65,45,30,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#d62976]/40 hover:shadow-[0_12px_26px_rgba(214,41,118,0.14)] active:translate-y-0 active:scale-[0.98]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#feda75_0%,#fa7e1e_30%,#d62976_65%,#4f5bd5_100%)] text-white shadow-[0_4px_10px_rgba(214,41,118,0.22)] transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </span>
              <span>View Instagram</span>
              <span aria-hidden="true" className="text-base text-[#d62976] transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_10px_20px_rgba(37,211,102,0.2)] transition hover:bg-[#20bd5a]">
              WhatsApp enquiry <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {gallery.map((image, index) => (
            <a
              key={index}
              href={instagramProfile}
              target="_blank"
              rel="noreferrer"
              aria-label={`View handcrafted jewellery on Instagram, post ${index + 1}`}
              className="group relative aspect-square overflow-hidden rounded-[1.4rem] border border-stone-200 bg-stone-100 shadow-soft animate-[fadeInUp_0.8s_ease-out_both]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <img src={image} alt="Jewellery detail from Guru" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">View post ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
