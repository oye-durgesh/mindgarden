import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import RoundBadge from './shared/RoundBadge.jsx'

const STEPS = [
  'Settle the jaw. Let the tongue rest.',
  'Relax your shoulders away from your ears.',
  'Soften the chest. Notice the next breath.',
  'Unclench the belly. There is room here.',
  'Heavy the hips into the seat or bed.',
  'Let the legs be long and unused.',
  'The whole body can be a little quieter now.',
]

export default function BodyScan({ onComplete }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      if (step >= STEPS.length - 1) onComplete?.({ score: STEPS.length })
      else setStep((value) => value + 1)
    }, 15000)
    return () => clearTimeout(id)
  }, [step, onComplete])

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <RoundBadge label={`${step + 1} / ${STEPS.length}`} />
      <motion.p
        key={step}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 font-serif text-3xl leading-snug text-text-onDark"
      >
        {STEPS[step]}
      </motion.p>
      <div className="mt-10 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          key={`bar-${step}`}
          className="h-full bg-accent-purple"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 15, ease: 'linear' }}
        />
      </div>
    </div>
  )
}
