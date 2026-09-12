import { useCallback, useEffect, useRef } from 'react'
import EmbeddedHtmlScreen from '../components/layout/EmbeddedHtmlScreen.jsx'
import { useAppState } from '../context/AppStateContext.jsx'

export default function PlantStreak() {
  const { plantDay, streakCount, completeActivity } = useAppState()
  const iframeRef = useRef(null)

  const postState = useCallback((iframe) => {
    if (iframe) iframeRef.current = iframe
    iframeRef.current?.contentWindow?.postMessage(
      { type: 'MINDGARDEN_STATE', plantDay, streakCount },
      '*'
    )
  }, [plantDay, streakCount])

  useEffect(() => {
    postState()
  }, [postState])

  const onMessage = useCallback((event) => {
    if (event.data?.type === 'MINDGARDEN_PLANT_WATERED') {
      completeActivity()
    }
  }, [completeActivity])

  return (
    <EmbeddedHtmlScreen
      src="/plant-garden/index.html"
      title="Your garden"
      backTo="/me"
      onIframeLoad={postState}
      onMessage={onMessage}
    />
  )
}
