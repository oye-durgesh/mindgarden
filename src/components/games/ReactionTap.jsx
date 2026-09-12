import { useEffect, useRef, useState } from 'react'
import RoundBadge from './shared/RoundBadge.jsx'

export default function ReactionTap({ onComplete }) {
  const [phase, setPhase] = useState('wait')
  const [pos, setPos] = useState({ x: 40, y: 40 })
  const [times, setTimes] = useState([])
  const shownAt = useRef(0)

  useEffect(() => {
    if (phase !== 'wait') return undefined
    const delay = 700 + Math.random() * 1600
    const id = setTimeout(() => {
      setPos({ x: 12 + Math.random() * 70, y: 20 + Math.random() * 50 })
      shownAt.current = performance.now()
      setPhase('ready')
    }, delay)
    return () => clearTimeout(id)
  }, [phase, times.length])

  const tap = () => {
    if (phase !== 'ready') return
    const ms = Math.round(performance.now() - shownAt.current)
    const next = [...times, ms]
    setTimes(next)
    if (next.length >= 5) {
      const avg = Math.round(next.reduce((sum, item) => sum + item, 0) / next.length)
      onComplete?.({ score: Math.max(1, 500 - avg) })
    } else {
      setPhase('wait')
    }
  }

  const last = times[times.length - 1]
  const avg = times.length
    ? Math.round(times.reduce((sum, item) => sum + item, 0) / times.length)
    : 0

  return (
    <div className="relative flex flex-1 flex-col px-6 pt-6">
      <div className="flex justify-center">
        <RoundBadge label={`${times.length}/5 · avg ${avg || '—'}ms`} />
      </div>
      <p className="mt-6 text-center text-sm text-text-onDarkMuted">
        {phase === 'wait' ? 'Wait for the light…' : last ? `${last}ms` : 'Tap now'}
      </p>
      {phase === 'ready' && (
        <button
          type="button"
          onClick={tap}
          className="absolute h-14 w-14 rounded-full bg-accent-orange shadow-glow"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        />
      )}
    </div>
  )
}
