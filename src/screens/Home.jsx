import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTimeOfDay, HOME_COPY, PLAN_ITEMS, todayKey } from '../lib/timeOfDay.js'
import { useAppState } from '../context/AppStateContext.jsx'
import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import PlanItemCard from '../components/cards/PlanItemCard.jsx'
import SessionCard from '../components/cards/SessionCard.jsx'
import QuietNudgeCard from '../components/cards/QuietNudgeCard.jsx'
import BuddyRow from '../components/cards/BuddyRow.jsx'

export default function Home() {
  const navigate = useNavigate()
  const timeOfDay = getTimeOfDay()
  const copy = HOME_COPY[timeOfDay]
  const { userName, todayCompleted, completePlanItem } = useAppState()
  const [poked, setPoked] = useState(false)

  const openPlan = (item) => {
    completePlanItem(item.id)
    navigate(item.route)
  }

  return (
    <ScreenShell timeOfDay={timeOfDay}>
      <TopBar greeting={copy.greeting(userName)} timeOfDay={timeOfDay} />

      <section className="space-y-2">
        <p className="text-xs uppercase tracking-[0.16em] opacity-70">Today&apos;s plan</p>
        {copy.planOrder.map((id) => {
          const item = PLAN_ITEMS[id]
          return (
            <PlanItemCard
              key={id}
              title={item.title}
              subtitle={item.subtitle}
              done={todayCompleted.includes(id)}
              timeOfDay={timeOfDay}
              onClick={() => openPlan(item)}
            />
          )
        })}
      </section>

      <div className="mt-5">
        <SessionCard
          {...copy.featured}
          timeOfDay={timeOfDay}
          onClick={() => {
            completePlanItem(copy.featuredId)
            navigate(copy.featured.route)
          }}
        />
      </div>

      <div className="mt-4">
        <QuietNudgeCard text={copy.nudge} timeOfDay={timeOfDay} />
      </div>

      <div className="mt-4">
        <BuddyRow
          timeOfDay={timeOfDay}
          onPoke={() => {
            setPoked(true)
          }}
        />
        {poked && (
          <p className="mt-2 text-center text-xs opacity-70">
            Soft poke sent · {todayKey()}
          </p>
        )}
      </div>
    </ScreenShell>
  )
}
