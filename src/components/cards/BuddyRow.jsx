import { isLightTheme } from '../../lib/timeOfDay.js'

export default function BuddyRow({ name = 'Rahul', timeOfDay, onPoke }) {
  const light = isLightTheme(timeOfDay)

  return (
    <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${light ? 'glass-light' : 'glass-dark'}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-purple/20 font-serif text-lg text-accent-purple">
          {name[0]}
        </span>
        <p className="text-sm">
          <span className="font-medium">{name}</span>
          <span className={light ? ' text-text-onLightMuted' : ' text-text-onDarkMuted'}>
            {' '}
            hasn&apos;t practiced today
          </span>
        </p>
      </div>
      <button
        type="button"
        onClick={onPoke}
        className="rounded-full bg-accent-purple px-3 py-1.5 text-xs font-medium text-white"
      >
        poke
      </button>
    </div>
  )
}
