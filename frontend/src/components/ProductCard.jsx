import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

export default function ProductCard({ product }) {
  const dialogRef = useRef(null)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const category = categories.find((item) => item.name === product.name)
  const gallery = category?.gallery ?? [product.image]
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${product.name}. Please share more details.`
  )

  const productSlug = product.name.toLowerCase().replace(/\s+/g, '-')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (galleryOpen && !dialog.open) dialog.showModal()
    else if (!galleryOpen && dialog.open) dialog.close()
  }, [galleryOpen])

  function closeGallery() {
    setGalleryOpen(false)
    setSelectedImageIndex(null)
  }

  function handleDialogCancel(event) {
    event.preventDefault()
    if (selectedImageIndex !== null) setSelectedImageIndex(null)
    else closeGallery()
  }

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#c89b4d]/60 hover:shadow-[0_20px_45px_rgba(128,88,32,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f2eadf]">
        <button
          type="button"
          aria-label={`View ${product.name} images`}
          onClick={() => setGalleryOpen(true)}
          className="block h-full w-full cursor-zoom-in text-left"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          />
        </button>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-700 shadow-sm">
          {product.badge}
        </span>
        <button
          type="button"
          aria-label={`View ${product.name} images`}
          onClick={() => setGalleryOpen(true)}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-stone-950/75 text-xl text-[#f0d7a5] opacity-0 backdrop-blur-sm transition duration-300 hover:bg-stone-950 focus-visible:opacity-100 group-hover:opacity-100"
        >
          ⌕
        </button>
      </div>
      <Link to={`/collections/${productSlug}`} className="block">
        <div className="min-h-[170px] p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#a77c37]">{product.category ?? product.name}</p>
            <span className="text-xs font-medium text-stone-400">{String(product.id).padStart(2, '0')}</span>
          </div>
          <h3 className="mt-3 line-clamp-2 text-xl font-medium leading-tight text-stone-900">
            {product.name}
          </h3>
          <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-stone-500">
            {product.subtitle ?? category?.subtitle} {product.detail ?? category?.detail}
          </p>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <a
          href={`https://wa.me/917825027402?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="mt-2 block w-full rounded-full bg-gradient-to-r from-[#c89b4d] via-[#d7b36d] to-[#b9822b] px-4 py-3 text-center text-sm font-medium text-white shadow-[0_12px_25px_rgba(184,130,43,0.28)] transition hover:brightness-105"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {galleryOpen && (
        <dialog
          ref={dialogRef}
          aria-label={`${product.name} image gallery`}
          onCancel={handleDialogCancel}
          onClose={closeGallery}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              if (selectedImageIndex !== null) setSelectedImageIndex(null)
              else closeGallery()
            }
          }}
          className="fixed inset-0 m-0 flex h-dvh max-h-none w-screen max-w-none items-center justify-center overflow-hidden border-0 bg-stone-950/90 p-3 text-white backdrop:backdrop-blur-sm sm:p-6"
        >
          {selectedImageIndex === null ? (
            <div className="flex h-[calc(100dvh-1.5rem)] max-h-full min-h-0 w-full max-w-5xl flex-col overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl sm:h-[calc(100dvh-3rem)]">
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Product gallery</p>
                  <h3 className="mt-1 font-serif text-2xl text-white sm:text-3xl">{product.name}</h3>
                </div>
                <button
                  type="button"
                  autoFocus
                  aria-label="Close gallery"
                  onClick={closeGallery}
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-3xl leading-none text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ×
                </button>
              </div>
              <div className="grid min-h-0 flex-1 gap-4 overflow-y-auto p-4 sm:grid-cols-2 sm:gap-5 sm:p-6">
                {gallery.map((image, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    aria-label={`Preview ${product.name} image ${index + 1}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className="group relative aspect-[0.9] w-full overflow-hidden bg-stone-900 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b36d] sm:aspect-[1.15]"
                  >
                    <img
                      src={image}
                      alt={`${product.name} item ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-white">
                      <span className="text-sm font-medium">View image</span>
                      <span className="text-xs tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="relative flex max-h-[84dvh] w-full max-w-3xl flex-col overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                <p className="text-sm text-stone-300">
                  {product.name} <span className="text-stone-500">·</span> {selectedImageIndex + 1} of {gallery.length}
                </p>
                <button
                  type="button"
                  autoFocus
                  aria-label="Close image preview"
                  onClick={() => setSelectedImageIndex(null)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-3xl leading-none text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ×
                </button>
              </div>
              <div className="flex min-h-0 items-center justify-center p-3 sm:p-6">
                <img
                  src={gallery[selectedImageIndex]}
                  alt={`${product.name} item ${selectedImageIndex + 1}`}
                  className="max-h-[68dvh] w-full object-contain"
                />
              </div>
            </div>
          )}
        </dialog>
      )}
    </article>
  )
}
