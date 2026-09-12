export default function TravelActivityCard({ title, duration, description, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-start gap-3 rounded-2xl glass-dark p-4 text-left text-text-onDark"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-purple/20 text-lg">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium">{title}</p>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-text-onDarkMuted">
            {duration}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-onDarkMuted">{description}</p>
      </div>
    </button>
  )
}
