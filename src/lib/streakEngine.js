import { daysBetween, todayKey } from './timeOfDay.js'

export const PLANT_MILESTONES = [
  { day: 1, stage: 'seed', label: 'A seed, just beginning', caption: 'Day one. Something quiet has started.' },
  { day: 3, stage: 'sprout', label: 'Breaking through', caption: 'The soil is moving. Keep going.' },
  { day: 5, stage: 'two-leaf', label: 'Two leaves', caption: 'Two small leaves reaching for light.' },
  { day: 7, stage: 'sapling', label: 'Sapling', caption: 'One week. A true sapling now 🌱' },
  { day: 14, stage: 'two-weeks', label: 'Two weeks', caption: 'Two weeks of showing up. Roots are deeper.' },
  { day: 21, stage: 'bud', label: 'Bud forming', caption: 'A bud is gathering itself.' },
  { day: 30, stage: 'almost', label: 'Almost blooming', caption: 'A month of care. Almost in bloom.' },
  { day: 60, stage: 'blooming', label: 'Blooming', caption: 'Sixty days. The garden remembers you.' },
  { day: 100, stage: 'lotus', label: 'Lotus', caption: 'One hundred days. A lotus, fully open 🪷' },
]

export function getPlantStage(plantDay) {
  const day = Math.max(0, plantDay)
  if (day <= 0) return { ...PLANT_MILESTONES[0], day: 0, stage: 'seed' }
  let current = PLANT_MILESTONES[0]
  for (const milestone of PLANT_MILESTONES) {
    if (day >= milestone.day) current = milestone
    else break
  }
  return { ...current, day }
}

export function applyDailyTick(state, now = new Date()) {
  const today = todayKey(now)
  const next = { ...state }

  if (next.travelModeOn && next.travelModeStartedAt) {
    const idle = daysBetween(next.travelModeStartedAt, today)
    if (idle >= 2) {
      next.travelModeOn = false
      next.travelModeStartedAt = null
      next.travelAutoOff = true
    }
  }

  if (!next.lastActiveDate || next.lastActiveDate === today) {
    return next
  }

  const gap = daysBetween(next.lastActiveDate, today)
  if (gap <= 1) return next

  if (next.travelModeOn) {
    return next
  }

  next.streakCount = 0
  next.plantDay = Math.max(0, (next.plantDay ?? 0) - 1)
  return next
}

export function recordActivity(state, now = new Date()) {
  const today = todayKey(now)
  const next = applyDailyTick({ ...state }, now)

  if (next.lastActiveDate === today) {
    return { ...next, alreadyCountedToday: true }
  }

  next.streakCount = (next.streakCount ?? 0) + 1
  next.plantDay = (next.plantDay ?? 0) + 1
  next.lastActiveDate = today
  next.alreadyCountedToday = false
  return next
}

export function setTravelMode(state, on, now = new Date()) {
  const today = todayKey(now)
  return {
    ...state,
    travelModeOn: on,
    travelModeStartedAt: on ? today : null,
    travelAutoOff: false,
  }
}
