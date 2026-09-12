import { useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext.jsx'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import TravelActivityCard from '../components/cards/TravelActivityCard.jsx'

const ACTIVITIES = [
  {
    title: 'Motion-sickness breathing',
    duration: '2 min',
    description: 'Longer exhales for a queasy cabin or car.',
    icon: '🌊',
    route: '/games/ocean-breath',
  },
  {
    title: 'Travel-anxiety reset',
    duration: '2 min',
    description: 'A gentle coherent breath before boarding.',
    icon: '✈️',
    route: '/games/coherent-breathing',
  },
  {
    title: 'Breathing visual',
    duration: '2 min',
    description: 'Follow the orb. Nothing else required.',
    icon: '🟣',
    route: '/games/breath-pacer',
  },
  {
    title: 'Waiting-room calm',
    duration: '2 min',
    description: 'Track a slow dot while you wait.',
    icon: '🪑',
    route: '/games/focus-dot',
  },
  {
    title: 'Long-haul sleep',
    duration: '3 min',
    description: 'Scan the body and let the seat hold you.',
    icon: '😴',
    route: '/games/body-scan',
  },
]

export default function TravelMode() {
  const navigate = useNavigate()
  const { travelModeOn, setTravelMode } = useAppState()

  return (
    <ScreenShell variant="night">
      <TopBar greeting="Travel mode" timeOfDay="night" onBack={() => navigate(-1)} />
      <div className="flex items-center justify-between rounded-2xl glass-dark px-4 py-3">
        <div>
          <p className="font-medium">Travel mode</p>
          <p className="text-sm text-text-onDarkMuted">{travelModeOn ? 'On' : 'Off'}</p>
        </div>
        <button
          type="button"
          aria-label={travelModeOn ? 'Turn off travel mode' : 'Turn on travel mode'}
          onClick={() => setTravelMode(!travelModeOn)}
          className={`relative h-8 w-14 rounded-full ${travelModeOn ? 'bg-accent-purple' : 'bg-white/15'}`}
        >
          <span
            className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
              travelModeOn ? 'left-7' : 'left-1'
            }`}
          />
        </button>
      </div>

      {travelModeOn && (
        <div className="mt-4 rounded-2xl bg-accent-purple/15 px-4 py-3 text-sm text-text-onDark">
          Your streak is safe while you travel ✈️ — No pressure, pick it back up whenever you land 🌱
        </div>
      )}

      <h2 className="mt-8 font-serif text-2xl">Rest now</h2>
      <div className="mt-3 space-y-3">
        {ACTIVITIES.map((item) => (
          <TravelActivityCard
            key={item.title}
            {...item}
            onClick={() => navigate(item.route)}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-text-onDarkMuted">
        Auto-off reminder in 2 days
      </p>
      {travelModeOn && (
        <button
          type="button"
          onClick={() => setTravelMode(false)}
          className="mt-2 text-center text-sm text-accent-purple"
        >
          Turn off travel mode
        </button>
      )}
    </ScreenShell>
  )
}
