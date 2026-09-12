import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AppStateProvider } from './context/AppStateContext.jsx'
import BottomNav from './components/layout/BottomNav.jsx'
import PhoneMockup, { useIsDesktop } from './components/layout/PhoneMockup.jsx'
import Practice from './screens/Practice.jsx'
import GamesHub from './screens/GamesHub.jsx'
import GamePlay from './screens/GamePlay.jsx'
import MoodCheckIn from './screens/MoodCheckIn.jsx'
import MoodCheckInIframe from './screens/MoodCheckInIframe.jsx'
import TravelMode from './screens/TravelMode.jsx'
import TravelModeIframe from './screens/TravelModeIframe.jsx'
import PlantStreak from './screens/PlantStreak.jsx'
import Learn from './screens/Learn.jsx'
import Buddy from './screens/Buddy.jsx'
import Me from './screens/Me.jsx'

const TAB_PATHS = ['/', '/learn', '/games', '/buddy', '/me']

function AppRoutes() {
  const location = useLocation()
  const isDesktop = useIsDesktop()
  const showNav = TAB_PATHS.includes(location.pathname)

  return (
    <div className={`relative isolate ${isDesktop ? 'h-full w-full overflow-hidden' : 'min-h-dvh'}`}>
      <div
        className={
          isDesktop
            ? `absolute inset-x-0 top-0 overflow-x-hidden overflow-y-auto ${showNav ? 'bottom-[7.5rem]' : 'bottom-0'}`
            : showNav
              ? 'pb-[7.5rem]'
              : ''
        }
      >
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Practice />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/games" element={<GamesHub />} />
              <Route path="/games/:id" element={<GamePlay />} />
              <Route path="/buddy" element={<Buddy />} />
              <Route path="/me" element={<Me />} />
              <Route path="/mood" element={<MoodCheckIn />} />
              <Route path="/mood-check-in" element={<MoodCheckInIframe />} />
              <Route path="/travel" element={<TravelMode />} />
              <Route path="/travel-mode-view" element={<TravelModeIframe />} />
              <Route path="/plant" element={<PlantStreak />} />
              <Route path="/practice" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      {showNav && <BottomNav />}
    </div>
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
