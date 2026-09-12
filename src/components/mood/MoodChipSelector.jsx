const CHIPS = [
  'Meditation',
  'Family time',
  'Quiet morning',
  'Work stretch',
  'Walk outside',
  'Poor sleep',
  'Good coffee',
  'Too many tabs',
]

export default function MoodChipSelector({ selected, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CHIPS.map((chip) => {
        const active = selected.includes(chip)
        return (
          <button
            key={chip}
            type="button"
            onClick={() => onToggle(chip)}
            className={`rounded-full px-3 py-1.5 text-sm ${
              active ? 'bg-accent-purple text-white' : 'bg-white/8 text-text-onDarkMuted'
            }`}
          >
            {chip}
          </button>
        )
      })}
    </div>
  )
}
