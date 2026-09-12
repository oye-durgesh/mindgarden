import { getTimeOfDay, isLightTheme } from '../../lib/timeOfDay.js'

const GRADIENTS = {
  morning: 'from-morning-from to-morning-to',
  afternoon: 'from-afternoon-from to-afternoon-to',
  evening: 'from-evening-from to-evening-to',
  night: 'from-night-from to-night-to',
  gamesHub: 'from-gamesHub-from to-gamesHub-to',
}

export default function ScreenShell({
  children,
  timeOfDay,
  variant,
  className = '',
  padded = true,
}) {
  const tod = timeOfDay ?? getTimeOfDay()
  const themeKey = variant ?? tod
  const light = variant ? variant === 'morning' || variant === 'afternoon' : isLightTheme(tod)
  const gradient = GRADIENTS[themeKey] ?? GRADIENTS[tod]

  return (
    <div
      className={`relative min-h-dvh bg-gradient-to-b md:min-h-full ${gradient} ${
        light ? 'text-text-onLight' : 'text-text-onDark'
      } ${className}`}
      data-theme={light ? 'light' : 'dark'}
    >
      <div className={`mx-auto flex min-h-dvh w-full max-w-md flex-col md:min-h-full ${padded ? 'px-5 pb-6 pt-6' : ''}`}>
        {children}
      </div>
    </div>
  )
}
