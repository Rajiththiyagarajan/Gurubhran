import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 md:translate-y-10',
        className,
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
