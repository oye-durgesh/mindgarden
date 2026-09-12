import { useNavigate } from 'react-router-dom'
import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

const DESIGN_W = 390
const DESIGN_H = 844

function findCanvasPhone(doc) {
  return (
    doc.querySelector('[data-mindgarden-mood]') ||
    [...doc.querySelectorAll('[style]')].find((el) => {
      const style = el.getAttribute('style') || ''
      return /left:\s*40px/.test(style) && /top:\s*40px/.test(style) && /width:\s*390px/.test(style)
    })
  )
}

function fitDesignToFrame(iframe) {
  const doc = iframe?.contentDocument
  if (!doc) return

  if (!doc.getElementById('mindgarden-mood-fit')) {
    const style = doc.createElement('style')
    style.id = 'mindgarden-mood-fit'
    style.textContent = [
      'html, body, x-dc { margin:0 !important; overflow:hidden !important; background:#140e22 !important; }',
      'div[style*="left:510px"], div[style*="left:980px"], div[style*="left:1450px"] { display:none !important; }',
      '[data-drags-parent] { display:none !important; }',
    ].join('\n')
    doc.head.appendChild(style)
  }

  const canvas = findCanvasPhone(doc)
  if (!canvas) return
  canvas.setAttribute('data-mindgarden-mood', '1')

  const frameBox = iframe.getBoundingClientRect()
  const frameW = frameBox.width || iframe.clientWidth || DESIGN_W
  const frameH = frameBox.height || iframe.clientHeight || DESIGN_H
  const scale = Math.min(frameW / DESIGN_W, frameH / DESIGN_H)
  const offsetX = Math.max(0, (frameW - DESIGN_W * scale) / 2)
  const offsetY = Math.max(0, (frameH - DESIGN_H * scale) / 2)

  canvas.style.setProperty('position', 'absolute', 'important')
  canvas.style.setProperty('left', `${offsetX}px`, 'important')
  canvas.style.setProperty('top', `${offsetY}px`, 'important')
  canvas.style.setProperty('width', `${DESIGN_W}px`, 'important')
  canvas.style.setProperty('transform-origin', 'top left', 'important')
  canvas.style.setProperty('transform', `scale(${scale})`, 'important')
}

export default function MoodCheckInIframe() {
  const navigate = useNavigate()

  const onIframeLoad = (iframe) => {
    if (!iframe) return

    iframe.setAttribute('scrolling', 'no')
    iframe.style.overflow = 'hidden'

    const apply = () => fitDesignToFrame(iframe)
    apply()
    ;[50, 150, 400, 800].forEach((ms) => window.setTimeout(apply, ms))

    const observer = new ResizeObserver(apply)
    observer.observe(iframe)

    iframe.contentDocument?.addEventListener('click', (event) => {
      if (event.target?.closest?.('.ph-caret-left')) navigate('/')
    })
  }

  return (
    <EmbeddedHtmlScreen
      src="/mood-check-in/BackWithBrain Mood Check-in.dc.html"
      title="Mood Check-in"
      backTo="/"
      showBack={false}
      onIframeLoad={onIframeLoad}
    />
  )
}
