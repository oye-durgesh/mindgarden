import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

export default function MoodCheckInIframe() {
  return (
    <EmbeddedHtmlScreen
      src="/mood-check-in/index.html"
      title="Mood Check-in"
      backTo="/"
    />
  )
}
