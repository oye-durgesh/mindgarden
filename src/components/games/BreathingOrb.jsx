import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import RoundBadge from './shared/RoundBadge.jsx'

const PHASE_COPY = {
  inhale: 'breathe in',
  holdIn: 'hold',
  exhale: 'breathe out',
  holdOut: 'hold',
}

export default function BreathingOrb({
  inhale = 4,
  holdIn = 4,
  exhale = 4,
  holdOut = 4,
  variant = 'orb',
  onComplete,
}) {
  const phases = useMemo(
    () =>
      [
        { id: 'inhale', seconds: inhale, scale: 1.35 },
        { id: 'holdIn', seconds: holdIn, scale: 1.35 },
        { id: 'exhale', seconds: exhale, scale: 0.82 },
        { id: 'holdOut', seconds: holdOut, scale: 0.82 },
      ].filter((phase) => phase.seconds > 0),
    [inhale, holdIn, exhale, holdOut],
  )

  const [index, setIndex] = useState(0)
  const phase = phases[index] ?? phases[0]

  useEffect(() => {
    if (!phase) {
      onComplete?.({ score: 0 })
      return undefined
    }
    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % phases.length)
    }, phase.seconds * 1000)
    return () => clearTimeout(timer)
  }, [phase, phases.length, onComplete])

  const cycle = phases.reduce((sum, item) => sum + item.seconds, 0)
  const progress = phases.slice(0, index).reduce((sum, item) => sum + item.seconds, 0) / cycle

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <RoundBadge label={variant === 'box' ? 'Box breath' : variant === 'wave' ? 'Ocean' : 'Pacer'} />
      <div className="relative mt-10 flex h-64 w-64 items-center justify-center">
        {variant === 'box' ? (
          <BoxTrace progress={progress + (1 / phases.length) * 0.5} />
        ) : variant === 'wave' ? (
          <WaveOrb scale={phase.scale} duration={phase.seconds} />
        ) : (
          <motion.div
            className="h-40 w-40 rounded-full bg-gradient-to-br from-accent-purple to-[#c4b5fd] shadow-glow"
            animate={{ scale: phase.scale, opacity: [0.85, 1, 0.85] }}
            transition={{ duration: phase.seconds, ease: 'easeInOut' }}
          />
        )}
      </div>
      <motion.p
        key={phase.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 font-serif text-3xl text-text-onDark"
      >
        {PHASE_COPY[phase.id]}
      </motion.p>
      <p className="mt-2 text-sm text-text-onDarkMuted">{phase.seconds}s</p>
    </div>
  )
}

function WaveOrb({ scale, duration }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="h-48 w-48"
      animate={{ scale }}
      transition={{ duration, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="waveFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>
      <path
        d="M20 110 C50 70, 80 150, 110 100 C140 50, 160 140, 180 90 L180 180 L20 180 Z"
        fill="url(#waveFill)"
        opacity="0.9"
      />
      <path
        d="M20 90 C55 50, 85 130, 120 80 C150 40, 165 120, 180 70"
        fill="none"
        stroke="#f2eefa"
        strokeWidth="3"
        opacity="0.7"
      />
    </motion.svg>
  )
}

function BoxTrace({ progress }) {
  const length = 400
  const dash = Math.max(8, (progress % 1) * length)

  return (
    <svg viewBox="0 0 120 120" className="h-48 w-48">
      <rect x="10" y="10" width="100" height="100" rx="8" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
      <rect
        x="10"
        y="10"
        width="100"
        height="100"
        rx="8"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="4"
        strokeDasharray={`${dash} ${length}`}
        strokeLinecap="round"
      />
    </svg>
  )
}
