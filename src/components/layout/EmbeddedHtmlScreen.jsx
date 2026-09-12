import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useIsDesktop } from './PhoneMockup.jsx'

export default function EmbeddedHtmlScreen({
  src,
  title,
  backTo = '/',
  onIframeLoad,
  onMessage,
}) {
  const navigate = useNavigate()
  const isDesktop = useIsDesktop()
  const iframeRef = useRef(null)

  useEffect(() => {
    if (!onMessage) return undefined
    const handle = (event) => {
      if (event.source !== iframeRef.current?.contentWindow) return
      onMessage(event)
    }
    window.addEventListener('message', handle)
    return () => window.removeEventListener('message', handle)
  }, [onMessage])

  return (
    <div className={`overflow-hidden bg-black ${isDesktop ? 'flex min-h-full grow shrink-0 flex-col' : 'relative h-dvh w-full'}`}>
      <button
        type="button"
        onClick={() => navigate(backTo)}
        className="absolute left-5 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-text-onDark"
        aria-label="Back"
      >
        <ChevronLeft size={20} />
      </button>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="min-h-full w-full flex-1 border-0"
        onLoad={() => onIframeLoad?.(iframeRef.current)}
      />
    </div>
  )
}
