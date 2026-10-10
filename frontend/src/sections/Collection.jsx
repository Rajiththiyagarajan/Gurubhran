import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Collection() {
  return (
    <section id="all-collections" className="bg-[#f4efe9]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
              The handcrafted jewellery collection
            </p>
            <h2 className="font-serif text-4xl text-stone-900">12 signature designs</h2>
          </div>
          <button className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-500">
            Filter by: Most loved
          </button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
