import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

export default function TravelModeIframe() {
  return (
    <EmbeddedHtmlScreen
      src="/travel-mode/index.html"
      title="Travel Mode"
      backTo="/travel"
    />
  )
}
