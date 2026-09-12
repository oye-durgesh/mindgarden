import { useMemo, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

const SHAPES = ['●', '▲', '■', '◆']

function makeRound(level) {
  const shape = SHAPES[level % SHAPES.length]
  const size = 9 + Math.min(7, level)
  const odd = Math.floor(Math.random() * size)
  const rotate = 12 + level * 4
  const tint = level % 2 === 0 ? '#8b5cf6' : '#f5a962'
  return { shape, size, odd, rotate, tint }
}

export default function OddOneOut({ onComplete }) {
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const round = useMemo(() => makeRound(level), [level])

  const pick = (index) => {
    if (index === round.odd) {
      setScore((value) => value + 1)
      setLevel((value) => value + 1)
    } else {
      onComplete?.({ score })
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-6">
      <RoundBadge label={`Level ${level}`} />
      <p className="mt-4 text-sm text-text-onDarkMuted">Tap the one that is slightly different</p>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {Array.from({ length: round.size }, (_, index) => (
          <button
            key={`${level}-${index}`}
            type="button"
            onClick={() => pick(index)}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/8 text-2xl"
            style={{
              color: round.tint,
              transform: index === round.odd ? `rotate(${round.rotate}deg)` : undefined,
            }}
          >
            {round.shape}
          </button>
        ))}
      </div>
    </div>
  )
}
