import { useNavigate } from 'react-router-dom'
import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

export default function TravelModeIframe() {
  const navigate = useNavigate()

  return (
    <EmbeddedHtmlScreen
      src="/travel-mode/index.html"
      title="Travel Mode"
      backTo="/travel"
      showBack={false}
      onIframeLoad={(iframe) => {
        iframe?.contentDocument?.addEventListener('click', (event) => {
          if (event.target?.closest?.('.ph-caret-left')) navigate('/travel')
        })
      }}
    />
  )
}
