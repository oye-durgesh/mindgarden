import { useEffect, useState } from 'react'

export function useIsDesktop() {
  const query = () => (typeof window !== 'undefined' ? window.innerWidth > 768 : false)
  const [isDesktop, setIsDesktop] = useState(query)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 769px)')
    const update = () => setIsDesktop(window.innerWidth > 768)
    update()
    media.addEventListener('change', update)
    window.addEventListener('resize', update)
    return () => {
      media.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return isDesktop
}

export default function PhoneMockup({ children }) {
  const isDesktop = useIsDesktop()

  if (!isDesktop) return children

  return (
    <div className="flex min-h-dvh items-center justify-center overflow-auto bg-gradient-to-br from-[#e8e4f0] via-[#ddd7e8] to-[#d2cbdf] px-6 py-10">
      <div
        className="relative isolate shrink-0 overflow-hidden"
        style={{
          width: 417,
          height: 876,
          borderRadius: 55,
          border: '12px solid #1a1a1a',
          background: '#000',
          boxShadow: '0 28px 80px rgba(26, 20, 40, 0.28), 0 0 0 1px rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 z-50 -translate-x-1/2"
          style={{
            top: 20,
            width: 120,
            height: 34,
            borderRadius: 999,
            background: '#0a0a0a',
          }}
          aria-hidden
        />
        <div
          className="relative isolate h-full w-full overflow-hidden"
          style={{
            width: 393,
            height: 852,
            borderRadius: 43,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
