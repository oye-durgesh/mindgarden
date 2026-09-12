import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useIsDesktop } from './PhoneMockup.jsx'

export default function EmbeddedHtmlScreen({ src, title, backTo = '/' }) {
  const navigate = useNavigate()
  const isDesktop = useIsDesktop()

  return (
    <div className={`overflow-hidden bg-black ${isDesktop ? 'absolute inset-0' : 'relative h-dvh w-full'}`}>
      <button
        type="button"
        onClick={() => navigate(backTo)}
        className="absolute left-5 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-text-onDark"
        aria-label="Back"
      >
        <ChevronLeft size={20} />
      </button>
      <iframe src={src} title={title} className="h-full w-full border-0" />
    </div>
  )
}
