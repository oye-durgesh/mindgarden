export default function RadialGlow({ color = 'purple' }) {
  const tint = color === 'orange' ? 'rgba(245,169,98,0.28)' : 'rgba(139,92,246,0.32)'

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 20%, ${tint}, transparent 70%)`,
      }}
    />
  )
}
