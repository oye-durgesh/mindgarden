import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'

export default function MoodCheckInIframe() {
  const navigate = useNavigate()

  const onMessage = useCallback((event) => {
    if (event.data?.type === 'MINDGARDEN_MOOD_BACK') navigate('/')
  }, [navigate])

  return (
    <EmbeddedHtmlScreen
      src="/mood-check-in/index.html"
      title="Mood Check-in"
      backTo="/"
      showBack={false}
      designWidth={390}
      designHeight={844}
      onMessage={onMessage}
    />
  )
}
