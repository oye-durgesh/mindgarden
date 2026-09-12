import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useIsDesktop } from './PhoneMockup.jsx'

export default function EmbeddedHtmlScreen({
  src,
  title,
  backTo = '/',
  onIframeLoad,
  onMessage,
  showBack = true,
  designWidth,
  designHeight,
}) {
  const navigate = useNavigate()
  const isDesktop = useIsDesktop()
  const iframeRef = useRef(null)
  const frameRef = useRef(null)
  const [frame, setFrame] = useState({ width: 0, height: 0 })
  const fitToDesign = designWidth > 0 && designHeight > 0

  useEffect(() => {
    if (!onMessage) return undefined
    const handle = (event) => {
      if (event.source !== iframeRef.current?.contentWindow) return
      onMessage(event)
    }
    window.addEventListener('message', handle)
    return () => window.removeEventListener('message', handle)
  }, [onMessage])

  useEffect(() => {
    if (!fitToDesign) return undefined
    const node = frameRef.current
    if (!node) return undefined

    const update = () => {
      const rect = node.getBoundingClientRect()
      setFrame({ width: rect.width, height: rect.height })
    }
    update()

    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [fitToDesign])

  const scale = fitToDesign && frame.width > 0 && frame.height > 0
    ? Math.min(frame.width / designWidth, frame.height / designHeight)
    : 1
  const offsetX = fitToDesign ? Math.max(0, (frame.width - designWidth * scale) / 2) : 0
  const offsetY = fitToDesign ? Math.max(0, (frame.height - designHeight * scale) / 2) : 0

  return (
    <div className={`overflow-hidden bg-[#140e22] ${isDesktop ? 'flex h-full min-h-full w-full grow shrink-0 flex-col' : 'relative h-dvh w-full'}`}>
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
      <div ref={frameRef} className="relative h-full min-h-0 w-full flex-1 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          className={fitToDesign ? 'absolute border-0' : 'block h-full w-full max-w-full border-0'}
          style={
            fitToDesign
              ? {
                  left: offsetX,
                  top: offsetY,
                  width: designWidth,
                  height: designHeight,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }
              : { width: '100%', height: '100%' }
          }
          onLoad={() => onIframeLoad?.(iframeRef.current)}
        />
      </div>
    </div>
  )
}
