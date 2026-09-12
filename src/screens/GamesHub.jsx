import { useNavigate } from 'react-router-dom'
import { CATEGORIES, GAMES, gamesByCategory, getDailyGame } from '../lib/gameRegistry.js'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import GameCard from '../components/cards/GameCard.jsx'

export default function GamesHub() {
  const navigate = useNavigate()
  const daily = getDailyGame()

  return (
    <ScreenShell variant="gamesHub">
      <TopBar
        greeting="Brain games"
        timeOfDay="night"
      />
      <p className="text-sm text-text-onDarkMuted">
        A few playful minutes to sharpen your mind 🧠
      </p>
      <span className="mt-3 inline-flex w-fit rounded-full bg-accent-green/15 px-3 py-1 text-xs text-accent-green">
        counts for your streak 🌱
      </span>

      <button
        type="button"
        onClick={() => navigate(`/games/${daily.id}`)}
        className="mt-6 w-full rounded-2xl glass-dark p-5 text-left"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-text-onDarkMuted">
          Daily Brain Workout
        </p>
        <h2 className="mt-2 font-serif text-3xl">{daily.name}</h2>
        <p className="mt-1 text-sm text-text-onDarkMuted">{daily.description}</p>
        <span className="mt-4 inline-flex rounded-full bg-accent-purple px-4 py-2 text-sm text-white">
          Play · {daily.duration}
        </span>
      </button>

      <div className="mt-8 space-y-7">
        {CATEGORIES.map((category) => (
          <section key={category.id}>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: category.color }} />
              <div>
                <p className="text-sm font-medium">
                  {category.label}
                  <span className="font-normal text-text-onDarkMuted"> · {category.subtitle}</span>
                </p>
              </div>
            </div>
            <div className="hide-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5">
              {gamesByCategory(category.id).map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onClick={() => navigate(`/games/${game.id}`)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="sr-only">{GAMES.length} games</p>
    </ScreenShell>
  )
}
