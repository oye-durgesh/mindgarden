import { Moon, RefreshCw, Sun } from 'lucide-react'
import { isLightTheme } from '../../lib/timeOfDay.js'

const ICONS = {
  sun: Sun,
  reset: RefreshCw,
  moon: Moon,
  'moon-ring': Moon,
}

export default function SessionCard({ title, subtitle, duration, icon, onClick, timeOfDay }) {
  const light = isLightTheme(timeOfDay)
  const Icon = ICONS[icon] ?? Sun

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-2xl p-5 text-left ${
        light ? 'glass-light' : 'glass-dark'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs uppercase tracking-[0.18em] ${light ? 'text-text-onLightMuted' : 'text-text-onDarkMuted'}`}>
            Featured session
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight">{title}</h2>
          <p className={`mt-2 text-sm ${light ? 'text-text-onLightMuted' : 'text-text-onDarkMuted'}`}>
            {subtitle}
          </p>
          <span className="mt-4 inline-flex rounded-full bg-evening-to px-4 py-2 text-sm text-white">
            Start · {duration}
          </span>
        </div>
        <div className="relative flex h-16 w-16 items-center justify-center">
          {icon === 'moon-ring' && (
            <span className="absolute inset-0 rounded-full border-2 border-accent-purple/70" />
          )}
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-purple/20 text-accent-purple">
            <Icon size={22} />
          </span>
        </div>
      </div>
    </button>
  )
}
