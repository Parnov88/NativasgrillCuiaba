import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const PLACEHOLDER_INITIAL = 'Insira seu e-mail para solicitar proposta'
const PLACEHOLDER_SUBMITTED = 'Você receberá nossa proposta em breve'

function useTypewriter(text: string, active: boolean, delay = 60) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!active) {
      setDisplayed('')
      return
    }
    setDisplayed('')
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, delay)
    return () => clearInterval(id)
  }, [text, active, delay])

  return displayed
}

type Mode = 'button' | 'form'

export function Hero() {
  const [mode, setMode] = useState<Mode>('button')
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const resetTimer = useRef<number | null>(null)

  const placeholder = useTypewriter(
    submitted ? PLACEHOLDER_SUBMITTED : PLACEHOLDER_INITIAL,
    mode === 'form'
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    resetTimer.current = window.setTimeout(() => {
      setMode('button')
      setSubmitted(false)
      setEmail('')
    }, 4000)
  }

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) clearTimeout(resetTimer.current)
    }
  }, [])

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6 z-10">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">

        {/* Tagline */}
        <motion.p
          className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Espaço Privativo · Gastronomia Premium · Cuiabá · 2025
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          A experiência gastronômica
          <br className="hidden md:block" />
          que define o Centro-Oeste
        </motion.h1>

        {/* CTA */}
        <motion.div
          className="min-h-[50px] mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {mode === 'button' ? (
              <motion.button
                key="cta-btn"
                onClick={() => setMode('form')}
                className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Solicitar proposta comercial
              </motion.button>
            ) : (
              <motion.form
                key="cta-form"
                onSubmit={handleSubmit}
                className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[320px] focus-within:border-white/40 transition-colors duration-300"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  autoFocus
                  className="flex-1 bg-transparent text-white text-[13px] outline-none placeholder-white/45 min-w-0"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, #89AACC, #4E85BF)' }}
                >
                  {submitted ? (
                    <Check size={14} strokeWidth={2} />
                  ) : (
                    <ArrowRight size={14} strokeWidth={2} />
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Play link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide cursor-pointer">
            Assistir Apresentação
          </button>
        </motion.div>

      </div>
    </section>
  )
}
