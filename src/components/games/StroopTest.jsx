import { useEffect, useRef, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

const COLORS = [
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Orange', value: '#f5a962' },
  { name: 'Green', value: '#7fd67f' },
  { name: 'Cream', value: '#f2eefa' },
]

function nextRound() {
  const word = COLORS[Math.floor(Math.random() * COLORS.length)]
  let ink = COLORS[Math.floor(Math.random() * COLORS.length)]
  if (ink.name === word.name) ink = COLORS[(COLORS.indexOf(ink) + 1) % COLORS.length]
  return { word: word.name, ink }
}

export default function StroopTest({ onComplete }) {
  const [current, setCurrent] = useState(nextRound)
  const [correct, setCorrect] = useState(0)
  const [streak, setStreak] = useState(0)
  const [best, setBest] = useState(0)
  const correctRef = useRef(0)

  useEffect(() => {
    const done = setTimeout(() => onComplete?.({ score: correctRef.current }), 60000)
    return () => clearTimeout(done)
  }, [onComplete])

  const choose = (color) => {
    if (color.value === current.ink.value) {
      const nextStreak = streak + 1
      setCorrect((value) => {
        correctRef.current = value + 1
        return value + 1
      })
      setStreak(nextStreak)
      setBest((value) => Math.max(value, nextStreak))
    } else {
      setStreak(0)
    }
    setCurrent(nextRound())
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <RoundBadge label={`${correct} correct · streak ${streak}`} />
      <p className="mt-10 font-serif text-5xl" style={{ color: current.ink.value }}>
        {current.word}
      </p>
      <p className="mt-3 text-sm text-text-onDarkMuted">Tap the color of the letters</p>
      <div className="mt-10 grid w-full grid-cols-2 gap-3">
        {COLORS.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => choose(color)}
            className="rounded-2xl py-4 text-sm font-medium text-evening-to"
            style={{ background: color.value }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <p className="mt-6 text-xs text-text-onDarkMuted">Best streak {best}</p>
    </div>
  )
}
