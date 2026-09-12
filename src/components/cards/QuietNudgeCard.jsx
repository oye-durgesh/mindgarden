import { isLightTheme } from '../../lib/timeOfDay.js'

export default function QuietNudgeCard({ text, timeOfDay }) {
  const light = isLightTheme(timeOfDay)

  return (
    <div className={`rounded-2xl px-4 py-4 ${light ? 'glass-light' : 'glass-dark'}`}>
      <p className={`text-xs uppercase tracking-[0.16em] ${light ? 'text-text-onLightMuted' : 'text-text-onDarkMuted'}`}>
        Quiet nudge
      </p>
      <p className="mt-2 font-serif text-xl leading-snug">{text}</p>
    </div>
  )
}
