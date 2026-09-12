import { useNavigate } from 'react-router-dom'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import BuddyRow from '../components/cards/BuddyRow.jsx'
import { getTimeOfDay } from '../lib/timeOfDay.js'

export default function Buddy() {
  const timeOfDay = getTimeOfDay()
  const navigate = useNavigate()

  return (
    <ScreenShell timeOfDay={timeOfDay}>
      <TopBar greeting="Buddy" timeOfDay={timeOfDay} />
      <p className="mb-5 text-sm opacity-70">A gentle circle. No leaderboards.</p>
      <div className="space-y-3">
        <BuddyRow name="Rahul" timeOfDay={timeOfDay} />
        <BuddyRow name="Maya" timeOfDay={timeOfDay} />
        <BuddyRow name="Leo" timeOfDay={timeOfDay} />
      </div>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-8 w-full rounded-full bg-accent-purple py-3 text-white"
      >
        Practice together later
      </button>
    </ScreenShell>
  )
}
