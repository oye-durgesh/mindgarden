import { Check } from 'lucide-react'
import { isLightTheme } from '../../lib/timeOfDay.js'

export default function PlanItemCard({ title, subtitle, done, onClick, timeOfDay }) {
  const light = isLightTheme(timeOfDay)

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left ${
        light ? 'glass-light' : 'glass-dark'
      }`}
    >
      <div className="min-w-0">
        <p className={`font-medium ${done ? 'line-through opacity-60' : ''}`}>{title}</p>
        <p className={`text-sm ${light ? 'text-text-onLightMuted' : 'text-text-onDarkMuted'} ${done ? 'line-through' : ''}`}>
          {subtitle}
        </p>
      </div>
      {done ? (
        <span className="ml-3 flex items-center gap-1 rounded-full bg-accent-green/20 px-2.5 py-1 text-xs font-medium text-accent-green">
          <Check size={12} />
          done
        </span>
      ) : (
        <span className={`ml-3 h-2 w-2 rounded-full ${light ? 'bg-text-onLightMuted/40' : 'bg-white/20'}`} />
      )}
    </button>
  )
}
