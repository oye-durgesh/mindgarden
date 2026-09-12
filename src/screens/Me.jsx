import { useNavigate } from 'react-router-dom'
import { useAppState } from '../context/AppStateContext.jsx'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import { getTimeOfDay } from '../lib/timeOfDay.js'

export default function Me() {
  const timeOfDay = getTimeOfDay()
  const navigate = useNavigate()
  const {
    userName,
    setUserName,
    streakCount,
    plantDay,
    travelModeOn,
    setTravelMode,
    lastPlayedGame,
    moodLog,
  } = useAppState()

  return (
    <ScreenShell timeOfDay={timeOfDay}>
      <TopBar greeting="Me" timeOfDay={timeOfDay} />
      <label className="mb-4 block text-sm opacity-70">
        Your name
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className={`mt-2 w-full rounded-2xl px-4 py-3 outline-none ${
            timeOfDay === 'morning' || timeOfDay === 'afternoon'
              ? 'glass-light text-text-onLight'
              : 'glass-dark text-text-onDark'
          }`}
        />
      </label>
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => navigate('/plant')}
          className={`w-full rounded-2xl p-4 text-left ${timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'glass-light' : 'glass-dark'}`}
        >
          <p className="font-serif text-2xl">Garden</p>
          <p className="mt-1 text-sm opacity-70">{streakCount} day streak · plant day {plantDay}</p>
        </button>
        <button
          type="button"
          onClick={() => navigate('/mood')}
          className={`w-full rounded-2xl p-4 text-left ${timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'glass-light' : 'glass-dark'}`}
        >
          <p className="font-serif text-2xl">Mood check-in</p>
          <p className="mt-1 text-sm opacity-70">{moodLog.length} saved entries</p>
        </button>
        <button
          type="button"
          onClick={() => navigate('/travel')}
          className={`w-full rounded-2xl p-4 text-left ${timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'glass-light' : 'glass-dark'}`}
        >
          <p className="font-serif text-2xl">Travel mode</p>
          <p className="mt-1 text-sm opacity-70">{travelModeOn ? 'Streak is frozen' : 'Protect your streak on the road'}</p>
        </button>
      </div>
      <div className={`mt-6 flex items-center justify-between rounded-2xl px-4 py-3 ${timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'glass-light' : 'glass-dark'}`}>
        <span>Travel mode</span>
        <button
          type="button"
          aria-label={travelModeOn ? 'Turn off travel mode' : 'Turn on travel mode'}
          onClick={() => setTravelMode(!travelModeOn)}
          className={`relative h-8 w-14 rounded-full ${travelModeOn ? 'bg-accent-purple' : 'bg-white/15'}`}
        >
          <span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${travelModeOn ? 'left-7' : 'left-1'}`} />
        </button>
      </div>
      {lastPlayedGame && (
        <p className="mt-6 text-sm opacity-70">Last played: {lastPlayedGame}</p>
      )}
    </ScreenShell>
  )
}
