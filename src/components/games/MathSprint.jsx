import { useEffect, useRef, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

function makeProblem() {
  const ops = ['+', '-', '×']
  const op = ops[Math.floor(Math.random() * ops.length)]
  const a = 1 + Math.floor(Math.random() * (op === '×' ? 9 : 20))
  const b = 1 + Math.floor(Math.random() * (op === '×' ? 9 : 12))
  const answer = op === '+' ? a + b : op === '-' ? a - b : a * b
  return { a, b, op, answer }
}

export default function MathSprint({ onComplete }) {
  const [problem, setProblem] = useState(makeProblem)
  const [input, setInput] = useState('')
  const [correct, setCorrect] = useState(0)
  const correctRef = useRef(0)

  useEffect(() => {
    const done = setTimeout(() => onComplete?.({ score: correctRef.current }), 60000)
    return () => clearTimeout(done)
  }, [onComplete])

  const submit = (value = input) => {
    if (Number(value) === problem.answer) {
      setCorrect((count) => {
        correctRef.current = count + 1
        return count + 1
      })
      setProblem(makeProblem())
      setInput('')
    }
  }

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '−', '0', 'go']

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-4">
      <RoundBadge label={`${correct} correct`} />
      <p className="mt-10 font-serif text-5xl text-text-onDark">
        {problem.a} {problem.op} {problem.b}
      </p>
      <p className="mt-6 min-h-10 font-serif text-3xl text-accent-purple">{input || '—'}</p>
      <div className="mt-8 grid w-full max-w-xs grid-cols-3 gap-2">
        {keys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              if (key === 'go') submit()
              else if (key === '−') setInput((value) => (value.startsWith('-') ? value.slice(1) : `-${value}`))
              else setInput((value) => `${value}${key}`.slice(0, 5))
            }}
            className="rounded-2xl bg-white/8 py-4 text-lg text-text-onDark"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}
