import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { todayKey } from '../lib/timeOfDay.js'
import { useAppState } from '../context/AppStateContext.jsx'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import MoodSlider from '../components/mood/MoodSlider.jsx'
import MoodChipSelector from '../components/mood/MoodChipSelector.jsx'

export default function MoodCheckIn() {
  const navigate = useNavigate()
  const { saveMood } = useAppState()
  const [value, setValue] = useState(62)
  const [tags, setTags] = useState([])

  const toggle = (chip) => {
    setTags((current) =>
      current.includes(chip) ? current.filter((item) => item !== chip) : [...current, chip],
    )
  }

  return (
    <ScreenShell variant="night">
      <TopBar greeting="Mood" timeOfDay="night" onBack={() => navigate(-1)} />
      <p className="text-xs uppercase tracking-[0.16em] text-text-onDarkMuted">{todayKey()}</p>
      <h1 className="mt-2 font-serif text-3xl leading-tight">
        How&apos;s your mind feeling right now?
      </h1>
      <div className="mt-8">
        <MoodSlider value={value} onChange={setValue} />
      </div>
      <div className="mt-8">
        <MoodChipSelector selected={tags} onToggle={toggle} />
      </div>
      <button
        type="button"
        onClick={() => {
          saveMood(value, tags)
          navigate(-1)
        }}
        className="mt-10 w-full rounded-full bg-accent-purple py-3.5 font-medium text-white shadow-glow"
      >
        Save today&apos;s mood
      </button>
    </ScreenShell>
  )
}
