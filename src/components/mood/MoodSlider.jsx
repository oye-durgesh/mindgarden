const FACES = [
  { min: 0, emoji: '😣', label: 'Overwhelmed', copy: 'Too much at once. One slow breath is enough.' },
  { min: 25, emoji: '😟', label: 'Tense', copy: 'A little stretched. Two slow minutes can loosen it.' },
  { min: 50, emoji: '😌', label: 'Calm', copy: 'Steady and centered. Stay here a moment.' },
  { min: 75, emoji: '🌿', label: 'Thriving', copy: 'Open and bright. Let that feeling take root.' },
]

export function moodFromValue(value) {
  return [...FACES].reverse().find((item) => value >= item.min) ?? FACES[0]
}

export default function MoodSlider({ value, onChange }) {
  const mood = moodFromValue(value)

  return (
    <div className="text-center">
      <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white/8 text-6xl shadow-glow">
        {mood.emoji}
      </div>
      <p className="mt-5 font-serif text-3xl">{mood.label}</p>
      <p className="mt-2 text-sm text-text-onDarkMuted">{mood.copy}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-8 h-2 w-full cursor-pointer appearance-none rounded-full"
        style={{
          background: 'linear-gradient(90deg, #7fd67f 0%, #8b5cf6 50%, #f5a962 100%)',
        }}
      />
    </div>
  )
}
