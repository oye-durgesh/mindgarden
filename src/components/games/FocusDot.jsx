import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import RoundBadge from './shared/RoundBadge.jsx'

const COLORS = ['#8b5cf6', '#f5a962', '#7fd67f', '#f2eefa']

export default function FocusDot({ variant = 'track', onComplete }) {
  const wrapRef = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x: 40, y: 40 })
  const [colorIndex, setColorIndex] = useState(0)
  const [hits, setHits] = useState(0)
  const [misses, setMisses] = useState(0)
  const [nearFrames, setNearFrames] = useState(0)
  const [totalFrames, setTotalFrames] = useState(0)
  const lastColorChange = useRef(Date.now())
  const awaitingTap = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPos({
        x: 12 + Math.random() * 76,
        y: 18 + Math.random() * 64,
      })
    }, 2200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (variant !== 'color-change') return undefined
    const id = setInterval(() => {
      setColorIndex((value) => (value + 1 + Math.floor(Math.random() * 2)) % COLORS.length)
      lastColorChange.current = Date.now()
      awaitingTap.current = true
      setTimeout(() => {
        if (awaitingTap.current) {
          awaitingTap.current = false
          setMisses((value) => value + 1)
        }
      }, 1400)
    }, 2800 + Math.random() * 1600)
    return () => clearInterval(id)
  }, [variant])

  useEffect(() => {
    if (variant !== 'track') return undefined
    const id = setInterval(() => {
      const box = wrapRef.current?.getBoundingClientRect()
      if (!box) return
      const dx = pointer.current.x - (box.left + (pos.x / 100) * box.width)
      const dy = pointer.current.y - (box.top + (pos.y / 100) * box.height)
      const near = Math.hypot(dx, dy) < 56
      setTotalFrames((value) => value + 1)
      if (near) setNearFrames((value) => value + 1)
    }, 120)
    return () => clearInterval(id)
  }, [pos, variant])

  const handlePointer = (event) => {
    pointer.current = { x: event.clientX, y: event.clientY }
  }

  const handleTap = () => {
    if (variant !== 'color-change') return
    if (awaitingTap.current && Date.now() - lastColorChange.current < 1400) {
      awaitingTap.current = false
      setHits((value) => value + 1)
    } else {
      setMisses((value) => value + 1)
    }
  }

  const score =
    variant === 'track'
      ? totalFrames
        ? Math.round((nearFrames / totalFrames) * 100)
        : 0
      : Math.max(0, hits * 10 - misses * 4)

  return (
    <div
      ref={wrapRef}
      className="relative flex flex-1 flex-col px-6"
      onPointerMove={handlePointer}
      onClick={handleTap}
    >
      <div className="flex justify-center pt-4">
        <RoundBadge label={variant === 'track' ? 'Follow the dot' : 'Tap the change'} />
      </div>
      <p className="mt-4 text-center text-sm text-text-onDarkMuted">
        {variant === 'track'
          ? 'Keep your cursor or finger near the drifting light.'
          : 'Tap only when the color changes.'}
      </p>
      <motion.button
        type="button"
        className="absolute h-8 w-8 rounded-full shadow-glow"
        style={{ left: `${pos.x}%`, top: `${pos.y}%`, background: COLORS[colorIndex] }}
        animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        onClick={(event) => {
          event.stopPropagation()
          handleTap()
        }}
      />
      <p className="mt-auto pb-8 text-center text-sm text-text-onDarkMuted">
        {variant === 'track' ? `Focus ${score}%` : `Hits ${hits} · misses ${misses}`}
      </p>
      <span className="hidden">{onComplete && score}</span>
    </div>
  )
}
