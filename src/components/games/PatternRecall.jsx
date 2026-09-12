import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import RoundBadge from './shared/RoundBadge.jsx'

const ICONS = ['🌸', '🌙', '🌿', '☀️', '💧', '🔥', '⭐', '🍀', '🦋']

function randomTile(exclude) {
  let next = Math.floor(Math.random() * 9)
  if (next === exclude) next = (next + 1) % 9
  return next
}

export default function PatternRecall({ variant = 'tiles', onComplete }) {
  const [round, setRound] = useState(1)
  const [sequence, setSequence] = useState([randomTile()])
  const [phase, setPhase] = useState('watch')
  const [active, setActive] = useState(-1)
  const [inputIndex, setInputIndex] = useState(0)
  const [movedFrom, setMovedFrom] = useState(0)
  const [movedTo, setMovedTo] = useState(1)
  const [score, setScore] = useState(0)
  const [faces] = useState(() => [...ICONS])

  useEffect(() => {
    if (variant === 'moved') {
      const from = randomTile()
      const to = randomTile(from)
      setMovedFrom(from)
      setMovedTo(to)
      setPhase('watch')
      const show = setTimeout(() => setPhase('answer'), 1400)
      return () => clearTimeout(show)
    }

    let i = 0
    setPhase('watch')
    setActive(-1)
    const play = setInterval(() => {
      setActive(sequence[i])
      i += 1
      if (i >= sequence.length) {
        clearInterval(play)
        setTimeout(() => {
          setActive(-1)
          setPhase('repeat')
          setInputIndex(0)
        }, 450)
      } else {
        setTimeout(() => setActive(-1), 380)
      }
    }, 700)
    return () => clearInterval(play)
  }, [sequence, variant, round])

  const handleTile = (index) => {
    if (variant === 'moved') {
      if (phase !== 'answer') return
      if (index === movedTo) {
        setScore((value) => value + 1)
        setRound((value) => value + 1)
      } else {
        onComplete?.({ score })
      }
      return
    }

    if (phase !== 'repeat') return
    if (index === sequence[inputIndex]) {
      const nextIndex = inputIndex + 1
      setActive(index)
      if (nextIndex >= sequence.length) {
        setScore(sequence.length)
        setRound((value) => value + 1)
        setSequence((current) => [...current, randomTile()])
      } else {
        setInputIndex(nextIndex)
      }
    } else {
      onComplete?.({ score })
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <RoundBadge label={`Round ${round}`} />
      <p className="mt-4 font-serif text-2xl text-text-onDark">
        {variant === 'moved'
          ? phase === 'watch'
            ? 'Watch who moves'
            : 'Which one moved?'
          : phase === 'watch'
            ? 'Watch, then repeat'
            : 'Your turn'}
      </p>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }, (_, index) => {
          const lit =
            variant === 'moved'
              ? phase === 'watch' && index === movedTo
              : active === index
          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => handleTile(index)}
              animate={{ scale: lit ? 1.06 : 1, backgroundColor: lit ? '#8b5cf6' : 'rgba(255,255,255,0.08)' }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl text-2xl text-text-onDark"
            >
              {variant === 'moved' ? faces[index] : ''}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
