import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppState } from '../../context/AppStateContext.jsx'
import RoundBadge from './shared/RoundBadge.jsx'

const GRATITUDE_PROMPTS = [
  'Name one small thing that felt kind today.',
  'Who made the day a little lighter?',
  'What quiet moment are you glad existed?',
  'What is one comfort your body has right now?',
]

const GROUNDING_STEPS = [
  { count: 5, sense: 'see', prompt: 'Name 5 things you see' },
  { count: 4, sense: 'hear', prompt: 'Name 4 things you hear' },
  { count: 3, sense: 'feel', prompt: 'Name 3 things you can feel' },
  { count: 2, sense: 'smell', prompt: 'Name 2 things you smell' },
  { count: 1, sense: 'taste', prompt: 'Name 1 thing you taste' },
]

export default function TextPrompt({ variant = 'gratitude', onComplete }) {
  const { addGratitude } = useAppState()
  const [text, setText] = useState('')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [released, setReleased] = useState(false)
  const prompt = useMemo(
    () => GRATITUDE_PROMPTS[Math.floor(Math.random() * GRATITUDE_PROMPTS.length)],
    [],
  )

  const submit = () => {
    if (variant === 'gratitude') {
      if (text.trim()) addGratitude(text.trim())
      onComplete?.({ score: text.trim().length })
      return
    }
    if (variant === 'unload') {
      setReleased(true)
      setTimeout(() => onComplete?.({ score: 1 }), 900)
      return
    }
    if (!text.trim()) return
    const next = [...answers, text.trim()]
    setAnswers(next)
    setText('')
    if (step >= GROUNDING_STEPS.length - 1) {
      onComplete?.({ score: next.length })
    } else {
      setStep((value) => value + 1)
    }
  }

  const heading =
    variant === 'gratitude'
      ? prompt
      : variant === 'unload'
        ? 'Set it down. You do not have to keep it.'
        : GROUNDING_STEPS[step].prompt

  return (
    <div className="flex flex-1 flex-col px-6 pt-6">
      {variant === 'grounding' && (
        <div className="mb-4 flex justify-center gap-2">
          {GROUNDING_STEPS.map((item, index) => (
            <span
              key={item.sense}
              className={`h-2 w-2 rounded-full ${index <= step ? 'bg-accent-green' : 'bg-white/20'}`}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <RoundBadge
          label={variant === 'gratitude' ? 'Gratitude' : variant === 'unload' ? 'Release' : `Step ${step + 1}`}
        />
      </div>
      <h2 className="mt-6 font-serif text-3xl leading-tight text-text-onDark">{heading}</h2>
      <motion.textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Write softly..."
        animate={released ? { opacity: 0, y: -24, filter: 'blur(8px)' } : { opacity: 1, y: 0 }}
        className="mt-6 min-h-40 w-full resize-none rounded-2xl bg-white/10 p-4 text-text-onDark outline-none ring-1 ring-white/10 placeholder:text-text-onDarkMuted"
      />
      <button
        type="button"
        onClick={submit}
        className="mt-6 w-full rounded-full bg-accent-purple py-3 font-medium text-white shadow-glow"
      >
        {variant === 'unload' ? 'Release' : variant === 'grounding' ? 'Next' : 'Save'}
      </button>
    </div>
  )
}
