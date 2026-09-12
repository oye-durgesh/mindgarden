export function getTimeOfDay(date = new Date()) {
  const hour = date.getHours()
  if (hour >= 6 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 18) return 'afternoon'
  if (hour >= 18 && hour < 21) return 'evening'
  return 'night'
}

export function isLightTheme(timeOfDay = getTimeOfDay()) {
  return timeOfDay === 'morning' || timeOfDay === 'afternoon'
}

export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function addDays(dateKey, days) {
  const [y, m, d] = dateKey.split('-').map(Number)
  const next = new Date(y, m - 1, d)
  next.setDate(next.getDate() + days)
  return todayKey(next)
}

export function daysBetween(fromKey, toKey) {
  const [fy, fm, fd] = fromKey.split('-').map(Number)
  const [ty, tm, td] = toKey.split('-').map(Number)
  const from = new Date(fy, fm - 1, fd)
  const to = new Date(ty, tm - 1, td)
  return Math.round((to - from) / 86400000)
}

export const HOME_COPY = {
  morning: {
    greeting: (name) => `Good morning, ${name}`,
    featuredId: 'daily-detox',
    planOrder: ['daily-detox', 'gratitude', 'sleep-journey'],
    featured: {
      title: 'Daily Detox',
      subtitle: 'A gentle 2-minute reset to start the day.',
      duration: '2 min',
      icon: 'sun',
      route: '/games/breath-pacer',
    },
    nudge: 'Watch a tree for 2 min. Phone down.',
  },
  afternoon: {
    greeting: (name) => `Good afternoon, ${name}`,
    featuredId: 'afternoon-reset',
    planOrder: ['daily-detox', 'gratitude', 'sleep-journey'],
    featured: {
      title: 'Afternoon reset',
      subtitle: 'Two quiet minutes to loosen the middle of the day.',
      duration: '2 min',
      icon: 'reset',
      route: '/games/coherent-breathing',
    },
    nudge: 'Step away from the screen. Soften your shoulders.',
  },
  evening: {
    greeting: (name) => `Good evening, ${name}`,
    featuredId: 'sleep-journey',
    planOrder: ['gratitude', 'sleep-journey', 'daily-detox'],
    featured: {
      title: 'Sleep journey',
      subtitle: 'Wind down with a slow, circular breath.',
      duration: '5 min',
      icon: 'moon-ring',
      route: '/games/ocean-breath',
    },
    nudge: 'Dim one light. Let the evening be quieter than the day.',
  },
  night: {
    greeting: (name) => `Good night, ${name}`,
    featuredId: 'tonight-sleep',
    planOrder: ['gratitude', 'sleep-journey', 'daily-detox'],
    featured: {
      title: "Tonight's sleep journey",
      subtitle: 'gratitude → wind-down → sleep',
      duration: '8 min',
      icon: 'moon',
      route: '/mood',
    },
    nudge: 'Leave the day on the page. The night will hold the rest.',
  },
}

export const PLAN_ITEMS = {
  'daily-detox': {
    id: 'daily-detox',
    title: 'Daily Detox',
    subtitle: '2-min breath + focus',
    route: '/games/breath-pacer',
  },
  gratitude: {
    id: 'gratitude',
    title: 'Gratitude',
    subtitle: 'Name one small good thing',
    route: '/games/gratitude-prompt',
  },
  'sleep-journey': {
    id: 'sleep-journey',
    title: 'Sleep journey',
    subtitle: 'Wind-down for later tonight',
    route: '/games/body-scan',
  },
}
