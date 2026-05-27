import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Excelência', 'Gastronomia', 'Cuiabá', 'Tradição', 'Parceria', 'Inovação']
const DURATION = 2600

interface Props { onComplete: () => void }

export function Loader({ onComplete }: Props) {
  const [count, setCount] = useState(0)
  const [wordIdx, setWordIdx] = useState(0)
  const startRef = useRef(performance.now())

  useEffect(() => {
    let raf: number
    const tick = (now: number) => {
      const pct = Math.min(100, Math.floor(((now - startRef.current) / DURATION) * 100))
      setCount(pct)
      if (pct < 100) { raf = requestAnimationFrame(tick) }
      else { setTimeout(onComplete, 380) }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 580)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black grid"
      style={{ gridTemplateRows: 'auto 1fr auto', padding: '32px 40px' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Monogram size={28} />
        <span className="text-[10px] tracking-[.4em] uppercase text-white/30">
          Nativas Grill Cuiabá — Mídia Kit 2025
        </span>
      </motion.div>

      {/* Word */}
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIdx}
            className="font-display italic text-[clamp(3rem,10vw,7rem)]"
            style={{
              background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
          >
            {WORDS[wordIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <motion.div
        className="flex items-end justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex-1 pb-4">
          <p className="text-[10px] tracking-[.35em] uppercase text-white/25 mb-2">
            Carregando apresentação
          </p>
          <div className="h-px overflow-hidden" style={{ background: 'rgba(255,255,255,.08)' }}>
            <div
              className="h-full transition-all duration-[40ms]"
              style={{
                width: `${count}%`,
                background: 'linear-gradient(90deg,#89AACC,#4E85BF)',
                boxShadow: '0 0 10px rgba(137,170,204,.5)',
              }}
            />
          </div>
        </div>
        <div
          className="font-display italic leading-none tabular-nums"
          style={{
            fontSize: 'clamp(5rem,14vw,11rem)',
            background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,.3) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {String(count).padStart(3, '0')}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Monogram({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#89AACC,#4E85BF)',
        padding: 1.5,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          className="font-display italic text-white"
          style={{ fontSize: size * 0.4, lineHeight: 1 }}
        >
          NG
        </span>
      </div>
    </div>
  )
}
