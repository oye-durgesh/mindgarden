import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AppStateProvider } from './context/AppStateContext.jsx'
import BottomNav from './components/layout/BottomNav.jsx'
import PhoneMockup from './components/layout/PhoneMockup.jsx'
import Home from './screens/Home.jsx'
import GamesHub from './screens/GamesHub.jsx'
import GamePlay from './screens/GamePlay.jsx'
import MoodCheckIn from './screens/MoodCheckIn.jsx'
import TravelMode from './screens/TravelMode.jsx'
import PlantStreak from './screens/PlantStreak.jsx'
import Learn from './screens/Learn.jsx'
import Buddy from './screens/Buddy.jsx'
import Me from './screens/Me.jsx'

const TAB_PATHS = ['/', '/learn', '/games', '/buddy', '/me']

function AppRoutes() {
  const location = useLocation()
  const showNav = TAB_PATHS.includes(location.pathname)

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/games" element={<GamesHub />} />
            <Route path="/games/:id" element={<GamePlay />} />
            <Route path="/buddy" element={<Buddy />} />
            <Route path="/me" element={<Me />} />
            <Route path="/mood" element={<MoodCheckIn />} />
            <Route path="/travel" element={<TravelMode />} />
            <Route path="/plant" element={<PlantStreak />} />
            <Route path="/practice" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {showNav && <BottomNav />}
    </>
  )
}

export default function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <PhoneMockup>
          <AppRoutes />
        </PhoneMockup>
      </BrowserRouter>
    </AppStateProvider>
  )
}
