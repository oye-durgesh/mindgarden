import { useMemo, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

const WORDS = ['QUIET', 'STILL', 'BREATHE', 'GROUND', 'GENTLE', 'BLOOM', 'REST', 'LOTUS']

function scramble(word) {
  const letters = word.split('')
  do {
    letters.sort(() => Math.random() - 0.5)
  } while (letters.join('') === word)
  return letters.map((letter, index) => ({ id: `${letter}-${index}`, letter }))
}

export default function WordUnscramble({ onComplete }) {
  const [index, setIndex] = useState(0)
  const word = WORDS[index]
  const tiles = useMemo(() => scramble(word), [word])
  const [used, setUsed] = useState([])
  const [score, setScore] = useState(0)

  const guess = used.map((id) => tiles.find((tile) => tile.id === id).letter).join('')

  const tap = (id) => {
    if (used.includes(id)) return
    const next = [...used, id]
    setUsed(next)
    const nextGuess = next.map((item) => tiles.find((tile) => tile.id === item).letter).join('')
    if (nextGuess.length !== word.length) return
    if (nextGuess === word) {
      const nextScore = score + 1
      if (index >= WORDS.length - 1) {
        onComplete?.({ score: nextScore })
      } else {
        setScore(nextScore)
        setIndex((value) => value + 1)
        setUsed([])
      }
    } else {
      setTimeout(() => setUsed([]), 400)
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-6">
      <RoundBadge label={`${score} words`} />
      <p className="mt-8 min-h-12 font-serif text-3xl tracking-[0.3em] text-text-onDark">
        {guess.padEnd(word.length, '·')}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            type="button"
            disabled={used.includes(tile.id)}
            onClick={() => tap(tile.id)}
            className="h-14 w-14 rounded-2xl bg-white/8 text-xl text-text-onDark disabled:opacity-30"
          >
            {tile.letter}
          </button>
        ))}
      </div>
    </div>
  )
}
