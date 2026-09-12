import { useEffect, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

function makeDigits(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('')
}

export default function NumberRecall({ onComplete }) {
  const [length, setLength] = useState(3)
  const [target, setTarget] = useState(() => makeDigits(3))
  const [phase, setPhase] = useState('show')
  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    setPhase('show')
    setInput('')
    const hide = setTimeout(() => setPhase('input'), 1400 + length * 180)
    return () => clearTimeout(hide)
  }, [target, length])

  const submit = () => {
    if (input === target) {
      setScore(length)
      const nextLength = length + 1
      setLength(nextLength)
      setTarget(makeDigits(nextLength))
    } else {
      onComplete?.({ score })
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-6">
      <RoundBadge label={`${length} digits`} />
      <p className="mt-10 font-serif text-4xl tracking-[0.28em] text-text-onDark">
        {phase === 'show' ? target : input || '•'.repeat(length)}
      </p>
      <div className="mt-10 grid w-full max-w-xs grid-cols-3 gap-2">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'ok'].map((key) => (
          <button
            key={key}
            type="button"
            disabled={phase !== 'input'}
            onClick={() => {
              if (key === 'clear') setInput('')
              else if (key === 'ok') submit()
              else setInput((value) => `${value}${key}`.slice(0, length))
            }}
            className="rounded-2xl bg-white/8 py-4 text-lg text-text-onDark disabled:opacity-40"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}
