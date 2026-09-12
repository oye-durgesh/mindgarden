import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loadState, saveState } from '../lib/storage.js'
import { todayKey } from '../lib/timeOfDay.js'
import {
  applyDailyTick,
  recordActivity,
  setTravelMode as applyTravelMode,
} from '../lib/streakEngine.js'

const AppStateContext = createContext(null)

export function AppStateProvider({ children }) {
  const [state, setState] = useState(() => applyDailyTick(loadState()))

  useEffect(() => {
    const { alreadyCountedToday, travelAutoOff, ...persistable } = state
    saveState(persistable)
  }, [state])

  const api = useMemo(() => {
    const completeActivity = () => {
      let result
      setState((prev) => {
        result = recordActivity(prev)
        return result
      })
      return result
    }

    const saveMood = (value, tags) => {
      const entry = { date: todayKey(), value, tags }
      setState((prev) => {
        const next = recordActivity(prev)
        const withoutToday = (next.moodLog ?? []).filter((item) => item.date !== entry.date)
        return { ...next, moodLog: [...withoutToday, entry] }
      })
    }

    const completePlanItem = (id) => {
      const today = todayKey()
      setState((prev) => {
        const next = recordActivity(prev)
        const todays = new Set(next.completedPlan?.[today] ?? [])
        todays.add(id)
        return {
          ...next,
          completedPlan: { ...next.completedPlan, [today]: [...todays] },
        }
      })
    }

    const setTravelMode = (on) => {
      setState((prev) => applyTravelMode(prev, on))
    }

    const setUserName = (userName) => {
      setState((prev) => ({ ...prev, userName }))
    }

    const setLastPlayedGame = (id) => {
      setState((prev) => ({ ...prev, lastPlayedGame: id }))
    }

    const addGratitude = (text) => {
      setState((prev) => {
        const next = recordActivity(prev)
        return {
          ...next,
          gratitudeLog: [
            ...(next.gratitudeLog ?? []),
            { date: todayKey(), text },
          ],
        }
      })
    }

    const toggleLightPlantTheme = () => {
      setState((prev) => ({ ...prev, lightPlantTheme: !prev.lightPlantTheme }))
    }

    const todayCompleted = state.completedPlan?.[todayKey()] ?? []

    return {
      ...state,
      todayCompleted,
      completeActivity,
      saveMood,
      completePlanItem,
      setTravelMode,
      setUserName,
      setLastPlayedGame,
      addGratitude,
      toggleLightPlantTheme,
    }
  }, [state])

  return <AppStateContext.Provider value={api}>{children}</AppStateContext.Provider>
}

export function useAppState() {
  const value = useContext(AppStateContext)
  if (!value) throw new Error('useAppState must be used within AppStateProvider')
  return value
}
