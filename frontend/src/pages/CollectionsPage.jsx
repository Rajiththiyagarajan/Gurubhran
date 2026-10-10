import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories } from '../data/categories'

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const matchingCategories = categories
    .filter((category) => category.name.toLowerCase().includes(normalizedQuery))
    .sort((first, second) => {
      if (!normalizedQuery) return 0
      return Number(second.name.toLowerCase().startsWith(normalizedQuery))
        - Number(first.name.toLowerCase().startsWith(normalizedQuery))
    })
  const filteredCategories = matchingCategories.filter((category) => (
    !selectedCategory || category.name === selectedCategory
  ))

  return (
    <main className="bg-[#f7f3ee]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
            Collections
          </p>
          <h1 className="font-serif text-5xl text-stone-900 sm:text-6xl">Our signature edit</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-stone-600">
            Discover modern heirlooms designed with timeless details, refined finishes, and a luxe sense of occasion.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-5 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="w-full sm:max-w-sm">
              <span className="sr-only">Search collection categories</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search a category..."
                className="w-full rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-sm text-stone-900 outline-none transition focus:border-[#a77c37] focus:ring-2 focus:ring-[#a77c37]/15"
              />
            </label>
            <Link to="/" className="text-sm font-medium text-stone-700 hover:text-stone-900">
              Back to home
            </Link>
          </div>
          <div className={`mt-5 flex flex-wrap gap-2 ${normalizedQuery ? '' : 'hidden sm:flex'}`}>
            {matchingCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={selectedCategory === category.name}
                onClick={() => setSelectedCategory((current) => (
                  current === category.name ? null : category.name
                ))}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedCategory === category.name
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 text-stone-600 hover:border-[#a77c37] hover:text-stone-900'
                }`}
              >
                {category.name}
              </button>
            ))}
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#8c6b35] transition hover:text-stone-900"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredCategories.map((category) => (
            <ProductCard key={category.id} product={category} />
          ))}
        </div>
        {filteredCategories.length === 0 && (
          <p className="py-12 text-center text-sm text-stone-600">No collection categories match “{searchQuery}”.</p>
        )}
      </section>
    </main>
  )
}
