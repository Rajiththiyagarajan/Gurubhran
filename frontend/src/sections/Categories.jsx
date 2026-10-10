import { useEffect, useRef, useState } from 'react'
import { categories } from '../data/categories'

export default function Categories() {
  const dialogRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeCategory && !dialog.open) {
      dialog.showModal()
    } else if (!activeCategory && dialog.open) {
      dialog.close()
    }
  }, [activeCategory])

  function closeGallery() {
    setActiveCategory(null)
    setSelectedImageIndex(null)
  }

  function closePreview() {
    setSelectedImageIndex(null)
  }

  function handleDialogCancel(event) {
    event.preventDefault()
    if (selectedImageIndex !== null) closePreview()
    else closeGallery()
  }

  return (
    <section id="collections" className="overflow-hidden bg-[#f7f3ee] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex items-end justify-between gap-5">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
            Explore handcrafted jewellery
          </p>
          <h2 className="font-serif text-3xl text-stone-900 md:text-4xl">Signature collections</h2>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-stone-400 sm:inline">01 - 12</span>
      </div>

      <div
        className="category-slider flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
      >
        {categories.map((category) => (
          <article
            key={category.id}
            className="group relative min-w-[78vw] snap-start overflow-hidden rounded-[1.6rem] border border-stone-200 bg-stone-100 shadow-soft sm:min-w-[43vw] lg:min-w-[calc((100%-3rem)/4)]"
          >
            <button
              type="button"
              aria-label={`Open ${category.name} gallery`}
              onClick={() => {
                setSelectedImageIndex(null)
                setActiveCategory(category)
              }}
              className="block w-full cursor-pointer text-left"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                decoding="async"
                className="aspect-[0.82] w-full object-cover [@media(hover:hover)]:transition-transform [@media(hover:hover)]:duration-300 [@media(hover:hover)]:group-hover:scale-[1.03]"
              />
            </button>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/10 to-transparent" />
            <div className="pointer-events-none absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/15 text-[10px] font-semibold text-white backdrop-blur-md">
              {String(category.id).padStart(2, '0')}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.26em] text-stone-200">{category.subtitle}</p>
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl">{category.name}</h3>
            </div>
          </article>
        ))}
      </div>
      </div>

      {activeCategory && (
        <dialog
          ref={dialogRef}
          aria-label={`${activeCategory.name} gallery`}
          onCancel={handleDialogCancel}
          onClose={closeGallery}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              if (selectedImageIndex !== null) closePreview()
              else closeGallery()
            }
          }}
          className="fixed inset-0 m-0 flex h-dvh max-h-none w-screen max-w-none items-center justify-center overflow-hidden border-0 bg-stone-950/90 p-3 text-white backdrop:backdrop-blur-sm sm:p-6"
        >
          {selectedImageIndex === null ? (
            <div className="flex h-full min-h-0 w-full max-w-5xl flex-col overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl">
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Collection gallery</p>
                  <h3 className="mt-1 font-serif text-2xl text-white sm:text-3xl">{activeCategory.name}</h3>
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
              <div className="grid min-h-0 flex-1 auto-rows-max grid-cols-1 gap-4 overflow-x-hidden overflow-y-auto overscroll-contain p-4 sm:grid-cols-2 sm:gap-5 sm:p-6">
                {activeCategory.gallery.map((image, index) => (
                  <button
                    key={`${activeCategory.id}-${index}`}
                    type="button"
                    aria-label={`Preview ${activeCategory.name} image ${index + 1}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className="group relative aspect-[0.9] w-full shrink-0 overflow-hidden bg-stone-900 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b36d] sm:aspect-[1.15]"
                  >
                    <img
                      src={image}
                      alt={`${activeCategory.name} item ${index + 1}`}
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
                  {activeCategory.name} <span className="text-stone-500">·</span> {selectedImageIndex + 1} of {activeCategory.gallery.length}
                </p>
                <button
                  type="button"
                  autoFocus
                  aria-label="Close image preview"
                  title="Close preview"
                  onClick={closePreview}
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-3xl leading-none text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ×
                </button>
              </div>
              <div className="flex min-h-0 items-center justify-center p-3 sm:p-6">
                <img
                  src={activeCategory.gallery[selectedImageIndex]}
                  alt={`${activeCategory.name} item ${selectedImageIndex + 1}`}
                  className="max-h-[68dvh] w-full object-contain"
                />
              </div>
            </div>
          )}
        </dialog>
      )}
    </section>
  )
}
