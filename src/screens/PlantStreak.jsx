import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext.jsx'
import { getPlantStage, PLANT_MILESTONES } from '../lib/streakEngine.js'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import PlantCarousel from '../components/plant/PlantCarousel.jsx'

export default function PlantStreak() {
  const navigate = useNavigate()
  const { streakCount, plantDay, lightPlantTheme, toggleLightPlantTheme } = useAppState()
  const current = getPlantStage(plantDay)
  const startIndex = useMemo(() => {
    const found = PLANT_MILESTONES.findIndex((item) => item.stage === current.stage)
    return Math.max(0, found)
  }, [current.stage])
  const [index, setIndex] = useState(startIndex)
  const [watered, setWatered] = useState(false)
  const card = PLANT_MILESTONES[index]
  const light = lightPlantTheme || card.day >= 30

  return (
    <ScreenShell variant={light ? 'morning' : 'night'}>
      <TopBar greeting="Your garden" timeOfDay={light ? 'morning' : 'night'} onBack={() => navigate(-1)} />
      <p className="mb-5 text-sm opacity-70">
        Day {plantDay || 1} · {current.label}
      </p>
      <PlantCarousel
        index={index}
        onIndex={setIndex}
        streakCount={streakCount}
        light={light}
      />
      <button
        type="button"
        onClick={() => {
          setWatered(true)
          setTimeout(() => setWatered(false), 1200)
        }}
        className="mt-6 w-full rounded-full bg-accent-purple py-3 font-medium text-white"
      >
        {watered ? 'The soil is grateful' : 'Tap to water'}
      </button>
      <button
        type="button"
        onClick={toggleLightPlantTheme}
        className="mt-4 text-center text-sm opacity-70"
      >
        Light theme — same plant by daylight
      </button>
    </ScreenShell>
  )
}
