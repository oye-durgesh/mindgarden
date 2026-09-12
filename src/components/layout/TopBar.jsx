import { motion } from 'framer-motion'
import { ChevronLeft, Leaf } from 'lucide-react'
import { isLightTheme } from '../../lib/timeOfDay.js'
import { useAppState } from '../../context/AppStateContext.jsx'

export default function TopBar({ greeting, timeOfDay, rightSlot, onBack }) {
  const { streakCount, travelModeOn } = useAppState()
  const light = isLightTheme(timeOfDay)

  return (
    <div className="mb-6 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                light ? 'bg-white/70' : 'bg-white/10'
              }`}
              aria-label="Back"
            >
              <ChevronLeft size={18} />
            </button>
          )}
          {greeting && (
            <h1
              className={`font-serif text-[28px] leading-tight tracking-tight ${
                light ? 'text-text-onLight' : 'text-text-onDark'
              }`}
            >
              {greeting}
            </h1>
          )}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {rightSlot}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium ${
            light
              ? 'bg-white/70 text-text-onLight'
              : 'bg-white/10 text-text-onDark'
          }`}
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Leaf size={14} className="text-accent-green" fill="currentColor" />
          </motion.span>
          <span>{streakCount}</span>
          {travelModeOn && <span className="text-xs opacity-70">✈️</span>}
        </motion.div>
      </div>
    </div>
  )
}
