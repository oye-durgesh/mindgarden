import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { PLANT_MILESTONES } from '../../lib/streakEngine.js'
import PlantStage from './PlantStage.jsx'

export default function PlantCarousel({ index, onIndex, streakCount, light }) {
  const card = PLANT_MILESTONES[index]
  const canPrev = index > 0
  const canNext = index < PLANT_MILESTONES.length - 1

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={card.day}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          className={`rounded-[28px] px-5 py-6 text-center ${
            light ? 'bg-[#f5ede0] text-text-onLight' : 'glass-dark text-text-onDark'
          }`}
        >
          <p className="text-sm uppercase tracking-[0.18em] opacity-70">Day {card.day}</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent-orange/20 px-3 py-1 text-sm text-accent-orange">
            🔥 {Math.max(streakCount, card.day)} day streak
          </div>
          <PlantStage stage={card.stage} className="mx-auto mt-4 h-56 w-56" />
          <p className="mt-2 font-serif text-2xl">{card.caption}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          disabled={!canPrev}
          onClick={() => onIndex(index - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {PLANT_MILESTONES.map((item, itemIndex) => (
            <span
              key={item.day}
              className={`h-1.5 w-3 rounded-full ${itemIndex === index ? 'bg-accent-purple' : 'bg-white/20'}`}
            />
          ))}
        </div>
        <button
          type="button"
          disabled={!canNext}
          onClick={() => onIndex(index + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
