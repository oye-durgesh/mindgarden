export default function RoundBadge({ label }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-text-onDarkMuted">
      {label}
    </span>
  )
}
