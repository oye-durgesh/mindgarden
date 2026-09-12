import { useMemo, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

const SHAPES = [
  { id: 'circle', node: '●' },
  { id: 'square', node: '■' },
  { id: 'triangle', node: '▲' },
  { id: 'diamond', node: '◆' },
]

function makePuzzle() {
  const [a, b] = [...SHAPES].sort(() => Math.random() - 0.5)
  const pattern = [a, b, a]
  const answer = b
  const options = [...SHAPES].sort(() => Math.random() - 0.5)
  return { pattern, answer, options }
}

export default function PatternCompletion({ onComplete }) {
  const [score, setScore] = useState(0)
  const [puzzle, setPuzzle] = useState(makePuzzle)
  const key = useMemo(() => score, [score])

  const choose = (id) => {
    if (id === puzzle.answer.id) {
      const next = score + 1
      if (next >= 6) onComplete?.({ score: next })
      else {
        setScore(next)
        setPuzzle(makePuzzle())
      }
    } else {
      onComplete?.({ score })
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-6">
      <RoundBadge label={`Puzzle ${score + 1}`} />
      <p className="mt-6 text-sm text-text-onDarkMuted">What comes next?</p>
      <div className="mt-8 flex items-center gap-3 text-4xl text-text-onDark">
        {puzzle.pattern.map((item, index) => (
          <span key={`${key}-${index}`}>{item.node}</span>
        ))}
        <span className="text-text-onDarkMuted">?</span>
      </div>
      <div className="mt-10 grid w-full grid-cols-2 gap-3">
        {puzzle.options.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => choose(item.id)}
            className="rounded-2xl bg-white/8 py-5 text-3xl text-text-onDark"
          >
            {item.node}
          </button>
        ))}
      </div>
    </div>
  )
}
