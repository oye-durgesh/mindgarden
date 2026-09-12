import ScreenShell from '../components/layout/ScreenShell.jsx'
import TopBar from '../components/layout/TopBar.jsx'
import { getTimeOfDay } from '../lib/timeOfDay.js'

const NOTES = [
  { title: 'Attention is a muscle', body: 'Two focused minutes beat a distracted hour.' },
  { title: 'Breath first', body: 'The nervous system listens to longer exhales.' },
  { title: 'Streaks are rituals', body: 'Show up small. The plant keeps the score.' },
]

export default function Learn() {
  const timeOfDay = getTimeOfDay()
  return (
    <ScreenShell timeOfDay={timeOfDay}>
      <TopBar greeting="Learn" timeOfDay={timeOfDay} />
      <p className="mb-5 text-sm opacity-70">Short notes for a quieter mind.</p>
      <div className="space-y-3">
        {NOTES.map((note) => (
          <article key={note.title} className={`rounded-2xl p-4 ${timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'glass-light' : 'glass-dark'}`}>
            <h2 className="font-serif text-2xl">{note.title}</h2>
            <p className="mt-2 text-sm opacity-70">{note.body}</p>
          </article>
        ))}
      </div>
    </ScreenShell>
  )
}
