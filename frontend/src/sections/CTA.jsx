import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_75%_45%,rgba(183,125,45,0.2),transparent_35rem),linear-gradient(115deg,#17120e_0%,#3a291b_56%,#100d0a_100%)] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,16,13,0.95),rgba(20,16,13,0.58),rgba(20,16,13,0.78))]" />
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#d7b36d]/25" />
      <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-[#d7b36d]/15" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 text-[#d7b36d]">
            <span className="h-px w-10 bg-[#d7b36d]" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em]">Begin your story in tradition</p>
          </div>
          <h2 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Wear a piece that feels like yours.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-stone-300">
            From bridal sets to timeless heirloom pieces, our jewellery experts help you choose handcrafted designs that feel personal, elegant, and ready for retail or wholesale collections.
          </p>
        </div>

        <Link
          to="/contact"
          className="group relative flex w-full max-w-sm items-center justify-between gap-6 border border-[#d7b36d]/45 bg-stone-950/45 p-5 text-white shadow-[0_14px_35px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:border-[#d7b36d] hover:bg-stone-950/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b36d] lg:mr-8"
        >
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7b36d]">Personal guidance</span>
            <span className="mt-2 block font-serif text-2xl">Speak with our team</span>
          </span>
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d7b36d]/50 text-xl text-[#f0d7a5] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#d7b36d] group-hover:text-stone-950"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
