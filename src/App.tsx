import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Loader } from './components/Loader'
import { NavDots } from './components/NavDots'
import { ProgressBar } from './components/ProgressBar'
import { useDeck } from './hooks/useDeck'

import { Cover } from './components/slides/Cover'
import { About } from './components/slides/About'
import { SobreNos } from './components/slides/SobreNos'
import { Space } from './components/slides/Space'
import { Gastronomy } from './components/slides/Gastronomy'
import { Cuts } from './components/slides/Cuts'
import { Pricing } from './components/slides/Pricing'
import { Audience } from './components/slides/Audience'
import { Partnerships } from './components/slides/Partnerships'
import { Contact } from './components/slides/Contact'

const SLIDE_COUNT = 10

function Deck() {
  const { deckRef, current, goTo } = useDeck(SLIDE_COUNT)
  return (
    <>
      <NavDots current={current} onDotClick={goTo} />
      <ProgressBar current={current} />

      <div id="deck" ref={deckRef}>
        <Cover />
        <About isActive={current === 1} />
        <SobreNos isActive={current === 2} />
        <Space isActive={current === 3} />
        <Gastronomy isActive={current === 4} />
        <Cuts isActive={current === 5} />
        <Pricing isActive={current === 6} />
        <Audience isActive={current === 7} />
        <Partnerships isActive={current === 8} />
        <Contact isActive={current === 9} />
      </div>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <main className="relative bg-black h-screen w-screen overflow-hidden select-none">
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <Deck />}
    </main>
  )
}
