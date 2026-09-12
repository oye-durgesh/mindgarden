import { ChevronLeft } from 'lucide-react'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

export default function GameHeader({ title, secondsLeft, onBack }) {
  return (
    <div className="relative z-10 flex items-center justify-between px-5 pt-6 text-text-onDark">
      <button
        type="button"
        onClick={onBack}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
        aria-label="Back"
      >
        <ChevronLeft size={20} />
      </button>
      <h1 className="font-serif text-xl">{title}</h1>
      <span className="min-w-[3.2rem] rounded-full bg-white/10 px-2.5 py-1 text-center text-sm tabular-nums">
        {formatTime(Math.max(0, secondsLeft))}
      </span>
    </div>
  )
}
