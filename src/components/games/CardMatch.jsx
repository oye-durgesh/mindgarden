import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import RoundBadge from './shared/RoundBadge.jsx'

const FACES = ['🌙', '🌿', '🌸', '☀️', '💧', '⭐', '🍀', '🦋']

export default function CardMatch({ onComplete }) {
  const deck = useMemo(() => {
    const pairs = [...FACES, ...FACES]
    return pairs
      .map((face, index) => ({ id: index, face, matched: false }))
      .sort(() => Math.random() - 0.5)
  }, [])
  const [cards, setCards] = useState(deck)
  const [open, setOpen] = useState([])
  const [flips, setFlips] = useState(0)

  const flip = (id) => {
    const card = cards.find((item) => item.id === id)
    if (!card || card.matched || open.includes(id) || open.length === 2) return
    const nextOpen = [...open, id]
    setOpen(nextOpen)
    setFlips((value) => value + 1)
    if (nextOpen.length < 2) return

    const [a, b] = nextOpen.map((item) => cards.find((cardItem) => cardItem.id === item))
    if (a.face === b.face) {
      const next = cards.map((item) =>
        item.face === a.face ? { ...item, matched: true } : item,
      )
      setCards(next)
      setOpen([])
      if (next.every((item) => item.matched)) {
        onComplete?.({ score: Math.max(1, 64 - flips) })
      }
    } else {
      setTimeout(() => setOpen([]), 700)
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-4">
      <RoundBadge label={`${flips} flips`} />
      <div className="mt-8 grid grid-cols-4 gap-2">
        {cards.map((card) => {
          const shown = card.matched || open.includes(card.id)
          return (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => flip(card.id)}
              animate={{ rotateY: shown ? 180 : 0 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/8 text-xl"
            >
              {shown ? card.face : ''}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
