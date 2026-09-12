export default function GameCard({ game, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-[168px] shrink-0 rounded-2xl glass-dark p-3 text-left text-text-onDark"
    >
      <div className="mb-3 flex h-16 items-center justify-center rounded-xl bg-white/5">
        <span className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-orange opacity-80" />
      </div>
      <p className="font-medium leading-tight">{game.name}</p>
      <p className="mt-1 line-clamp-2 text-xs text-text-onDarkMuted">{game.description}</p>
      <span className="mt-2 inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-text-onDarkMuted">
        {game.duration}
      </span>
    </button>
  )
}
