import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getGameById } from '../lib/gameRegistry.js'
import { useAppState } from '../context/AppStateContext.jsx'
import GameHeader from '../components/games/shared/GameHeader.jsx'
import RadialGlow from '../components/games/shared/RadialGlow.jsx'
import BreathingOrb from '../components/games/BreathingOrb.jsx'
import PatternRecall from '../components/games/PatternRecall.jsx'
import FocusDot from '../components/games/FocusDot.jsx'
import TextPrompt from '../components/games/TextPrompt.jsx'
import StroopTest from '../components/games/StroopTest.jsx'
import MathSprint from '../components/games/MathSprint.jsx'
import CardMatch from '../components/games/CardMatch.jsx'
import NumberRecall from '../components/games/NumberRecall.jsx'
import OddOneOut from '../components/games/OddOneOut.jsx'
import WordUnscramble from '../components/games/WordUnscramble.jsx'
import PatternCompletion from '../components/games/PatternCompletion.jsx'
import ReactionTap from '../components/games/ReactionTap.jsx'
import BodyScan from '../components/games/BodyScan.jsx'

const ENGINES = {
  BreathingOrb,
  PatternRecall,
  FocusDot,
  TextPrompt,
  StroopTest,
  MathSprint,
  CardMatch,
  NumberRecall,
  OddOneOut,
  WordUnscramble,
  PatternCompletion,
  ReactionTap,
  BodyScan,
}

export default function GamePlay() {
  const { id } = useParams()
  const navigate = useNavigate()
  const game = getGameById(id)
  const { completeActivity, setLastPlayedGame, completePlanItem } = useAppState()
  const [secondsLeft, setSecondsLeft] = useState(game?.durationSec ?? 60)
  const [done, setDone] = useState(null)
  const finished = useRef(false)

  useEffect(() => {
    if (game) setLastPlayedGame(game.id)
  }, [game, setLastPlayedGame])

  useEffect(() => {
    if (!game || done) return undefined
    const idTimer = setInterval(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          finish({ score: 1, timedOut: true })
          return 0
        }
        return value - 1
      })
    }, 1000)
    return () => clearInterval(idTimer)
  }, [game, done])

  const finish = (result = { score: 1 }) => {
    if (finished.current) return
    finished.current = true
    completeActivity()
    if (game?.id === 'gratitude-prompt') completePlanItem('gratitude')
    if (game?.id === 'breath-pacer') completePlanItem('daily-detox')
    if (game?.id === 'body-scan' || game?.id === 'ocean-breath') completePlanItem('sleep-journey')
    setDone(result)
    setTimeout(() => navigate('/games'), 1600)
  }

  if (!game) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-night-to text-text-onDark">
        Game not found.
      </div>
    )
  }

  const Engine = ENGINES[game.engine]

  return (
    <div className="relative flex min-h-dvh flex-col bg-gradient-to-b from-gamesHub-from to-gamesHub-to">
      <RadialGlow color={game.category === 'memory' ? 'orange' : 'purple'} />
      <GameHeader title={game.name} secondsLeft={secondsLeft} onBack={() => navigate(-1)} />
      <div className="relative flex flex-1 flex-col pb-10">
        <Engine {...(game.props ?? {})} onComplete={finish} />
      </div>
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-night-to/80 text-center"
          >
            <p className="font-serif text-4xl text-text-onDark">Beautiful.</p>
            <p className="mt-2 text-text-onDarkMuted">Streak watered. Plant a little taller.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
