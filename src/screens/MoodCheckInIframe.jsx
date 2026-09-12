import { useNavigate } from 'react-router-dom'
import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

const DESIGN_W = 390
const DESIGN_H = 844

function findDesignRoot(doc) {
  return [...doc.querySelectorAll('[style]')].find((el) => {
    const style = el.getAttribute('style') || ''
    return /width:\s*390px/.test(style) && /height:\s*844px/.test(style)
  })
}

function fitDesignToFrame(iframe) {
  const doc = iframe?.contentDocument
  if (!doc) return

  if (!doc.getElementById('mindgarden-mood-fit')) {
    const style = doc.createElement('style')
    style.id = 'mindgarden-mood-fit'
    style.textContent = [
      'html, body { margin:0 !important; overflow:hidden !important; background:#140e22 !important; }',
      'div[style*="left:510px"], div[style*="left:980px"], div[style*="left:1450px"] { display:none !important; }',
      '[data-drags-parent] { display:none !important; }',
    ].join('\n')
    doc.head.appendChild(style)
  }

  const design = findDesignRoot(doc)
  if (!design) return

  // Canvas wrappers apply their own offsets/transforms; lift the phone out
  // so scale is relative to the iframe viewport, not the artboard.
  if (design.parentElement !== doc.body) {
    doc.body.appendChild(design)
    doc.querySelectorAll('x-dc').forEach((el) => {
      el.style.setProperty('display', 'none', 'important')
    })
  }

  const frameW = iframe.clientWidth || DESIGN_W
  const frameH = iframe.clientHeight || DESIGN_H
  const scale = Math.min(frameW / DESIGN_W, frameH / DESIGN_H)
  const offsetX = Math.max(0, (frameW - DESIGN_W * scale) / 2)
  const offsetY = Math.max(0, (frameH - DESIGN_H * scale) / 2)

  design.style.setProperty('position', 'fixed', 'important')
  design.style.setProperty('left', '0', 'important')
  design.style.setProperty('top', '0', 'important')
  design.style.setProperty('width', `${DESIGN_W}px`, 'important')
  design.style.setProperty('height', `${DESIGN_H}px`, 'important')
  design.style.setProperty('border-radius', '0', 'important')
  design.style.setProperty('box-shadow', 'none', 'important')
  design.style.setProperty('transform-origin', 'top left', 'important')
  design.style.setProperty('transform', `translate(${offsetX}px, ${offsetY}px) scale(${scale})`, 'important')
}

export default function MoodCheckInIframe() {
  const navigate = useNavigate()

  const onIframeLoad = (iframe) => {
    if (!iframe) return

    const apply = () => fitDesignToFrame(iframe)
    apply()
    ;[50, 150, 400].forEach((ms) => window.setTimeout(apply, ms))

    const observer = new ResizeObserver(apply)
    observer.observe(iframe)

    const doc = iframe.contentDocument
    doc?.addEventListener('click', (event) => {
      const target = event.target
      if (target?.closest?.('.ph-caret-left')) navigate('/')
    })
  }

  return (
    <EmbeddedHtmlScreen
      src="/mood-check-in/BackWithBrain Mood Check-in.dc.html"
      title="Mood Check-in"
      backTo="/"
      showBack={false}
      fullBleed
      onIframeLoad={onIframeLoad}
    />
  )
}
