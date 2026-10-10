export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary:
      'bg-stone-900 text-white hover:bg-stone-700 shadow-soft',
    secondary:
      'border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50',
    gold:
      'bg-gold-500 text-white hover:bg-gold-600 shadow-soft',
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
