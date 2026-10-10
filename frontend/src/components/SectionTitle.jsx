export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-stone-600 md:text-lg">{description}</p>
      )}
    </div>
  )
}
