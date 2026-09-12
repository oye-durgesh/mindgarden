import { NavLink, useLocation } from 'react-router-dom'
import { BookOpen, Leaf, Sparkles, UserRound, Users } from 'lucide-react'
import { getTimeOfDay, isLightTheme } from '../../lib/timeOfDay.js'

const TABS = [
  { to: '/', label: 'Practice', icon: Sparkles, end: true },
  { to: '/learn', label: 'Learn', icon: BookOpen },
  { to: '/games', label: 'Games', icon: Leaf, raised: true },
  { to: '/buddy', label: 'Buddy', icon: Users },
  { to: '/me', label: 'Me', icon: UserRound },
]

export default function BottomNav() {
  const location = useLocation()
  const light = isLightTheme(getTimeOfDay())

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div
        className={`pointer-events-auto flex items-end justify-between rounded-[28px] px-3 py-2 ${
          light ? 'glass-light' : 'glass-dark'
        }`}
      >
        {TABS.map((tab) => {
          const active =
            tab.end
              ? location.pathname === '/'
              : location.pathname === tab.to || location.pathname.startsWith(`${tab.to}/`)
          const Icon = tab.icon

          if (tab.raised) {
            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className="flex flex-1 flex-col items-center gap-1 pb-1"
              >
                <span className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-accent-purple text-white shadow-glow">
                  <Icon size={22} />
                </span>
                <span className={`text-[11px] ${active ? 'text-accent-purple' : light ? 'text-text-onLightMuted' : 'text-text-onDarkMuted'}`}>
                  {tab.label}
                </span>
              </NavLink>
            )
          }

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={`flex flex-1 flex-col items-center gap-1 py-2 text-[11px] ${
                active
                  ? 'text-accent-purple'
                  : light
                    ? 'text-text-onLightMuted'
                    : 'text-text-onDarkMuted'
              }`}
            >
              <Icon size={20} />
              {tab.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
