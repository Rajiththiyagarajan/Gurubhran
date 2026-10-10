import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/categories'

export default function CollectionDetailPage() {
  const { slug } = useParams()
  const product = categories.find((item) => item.name.toLowerCase().replace(/\s+/g, '-') === slug)

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-stone-900">Product not found</h1>
        <Link to="/collections" className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">
          Back to Collections
        </Link>
      </main>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to enquire about the ${product.name}. Please share more details.`
  )

  return (
    <main className="bg-[#f7f3ee]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link to="/collections" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            ← Back to collections
          </Link>
          <Link to="/" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Home
          </Link>
        </div>

        <div className="grid gap-10 overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white p-5 shadow-soft md:grid-cols-2 md:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {product.gallery.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-[1.5rem] bg-stone-100">
                <img
                  src={image}
                  alt={`${product.name} detail ${index + 1}`}
                  className="aspect-square h-full min-h-[220px] w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">{product.category}</p>
            <h1 className="mt-4 font-serif text-5xl text-stone-900">{product.name}</h1>
            <p className="mt-6 text-base leading-8 text-stone-600">
              A handcrafted temple jewellery piece designed to honour tradition, blending auspicious motifs with enduring craftsmanship.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/917825027402?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c89b4d] via-[#d7b36d] to-[#b9822b] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_25px_rgba(184,130,43,0.28)]"
              >
                Enquire on WhatsApp
              </a>
              <button className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800">
                Book a Consultation
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Traditional artistry', 'Auspicious motifs', 'Gift ready'].map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
