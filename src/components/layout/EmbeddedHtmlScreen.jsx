import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { PHONE_SAFE_TOP, useIsDesktop } from './PhoneMockup.jsx'

export default function EmbeddedHtmlScreen({
  src,
  title,
  backTo = '/',
  onIframeLoad,
  onMessage,
  showBack = true,
  fullBleed = false,
}) {
  const navigate = useNavigate()
  const isDesktop = useIsDesktop()
  const iframeRef = useRef(null)

  const bleedStyle = fullBleed
    ? isDesktop
      ? { marginTop: -PHONE_SAFE_TOP, height: `calc(100% + ${PHONE_SAFE_TOP}px)` }
      : { marginTop: 'calc(-1 * max(1.25rem, env(safe-area-inset-top)))', height: '100dvh' }
    : undefined

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
    <div
      className={`overflow-hidden bg-[#140e22] ${isDesktop ? 'flex h-full min-h-full w-full grow shrink-0 flex-col' : 'relative h-dvh w-full'}`}
      style={bleedStyle}
    >
      {showBack && (
        <button
          type="button"
          onClick={() => navigate(backTo)}
          className="absolute left-5 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-text-onDark"
          aria-label="Back"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="block h-full w-full max-w-full flex-1 border-0"
        style={{ width: '100%', height: '100%' }}
        onLoad={() => onIframeLoad?.(iframeRef.current)}
      />
    </div>
  )
}
