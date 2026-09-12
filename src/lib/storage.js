const STORAGE_KEY = 'mindgarden-v1'

export const DEFAULT_STATE = {
  userName: 'friend',
  streakCount: 0,
  lastActiveDate: null,
  travelModeOn: false,
  travelModeStartedAt: null,
  moodLog: [],
  plantDay: 0,
  completedPlan: {},
  lastPlayedGame: null,
  gratitudeLog: [],
  lightPlantTheme: false,
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_STATE }
    return { ...DEFAULT_STATE, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore quota / private mode
  }
}

export function getItem(key, fallback = null) {
  const state = loadState()
  return state[key] ?? fallback
}

export function setItem(key, value) {
  const state = loadState()
  state[key] = value
  saveState(state)
  return state
}
