import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
            Handcrafted favourites
          </p>
          <h2 className="font-serif text-4xl text-stone-900">Signature favourites</h2>
        </div>
        <a href="#all-collections" className="text-sm font-medium text-stone-700 hover:text-stone-900">
          See all handcrafted jewellery
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
