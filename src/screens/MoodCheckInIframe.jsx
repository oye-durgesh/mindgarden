import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

function fillFirstPhone(iframe) {
  const doc = iframe?.contentDocument
  if (!doc) return
  const style = doc.createElement('style')
  style.textContent = [
    'html, body { margin:0 !important; width:100% !important; height:100% !important; overflow:hidden !important; background:#140e22 !important; }',
    'div[style*="left:510px"], div[style*="left:980px"], div[style*="left:1450px"] { display:none !important; }',
    'div[style*="left:40px"] { position:fixed !important; inset:0 !important; left:0 !important; top:0 !important; width:100% !important; }',
    '[data-drags-parent] { display:none !important; }',
    '[style*="width:390px"] { width:100% !important; height:100% !important; border-radius:0 !important; box-shadow:none !important; }',
  ].join('\n')
  doc.head.appendChild(style)
}

export default function MoodCheckInIframe() {
  return (
    <EmbeddedHtmlScreen
      src="/mood-check-in/BackWithBrain Mood Check-in.dc.html"
      title="Mood Check-in"
      backTo="/"
      onIframeLoad={fillFirstPhone}
    />
  )
}
