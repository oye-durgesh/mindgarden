import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

export default function SleepJourneyIframe() {
  return (
    <EmbeddedHtmlScreen
      src="/sleep-journey/index.html"
      title="Sleep journey"
      backTo="/"
    />
  )
}
