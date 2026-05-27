import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { STATS, TIMELINE } from '../../data/pricing'

export function About({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="02 — Identidade"
      num="02"
      isActive={isActive}
      ambColor="rgba(137,170,204,.12)"
      ambPos="top:10%;left:-5%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Nossa História
        </p>
        <h2
          className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.02em] mb-[18px]"
          style={{
            background: 'linear-gradient(180deg,#fff 30%,rgba(255,255,255,.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Identidade &amp; <em>Tradição</em>
        </h2>
      </motion.div>

      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 flex-1 items-center mt-2"
      >
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* Stats */}
          <div className="flex gap-8">
            {STATS.map(s => (
              <div key={s.l}>
                <div
                  className="font-display italic text-[2.4rem] leading-[1]"
                  style={{
                    background: 'linear-gradient(90deg,#89AACC,#4E85BF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.n}
                </div>
                <div className="text-[10px] tracking-[.2em] uppercase text-white/35 mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Body */}
          <p
            className="text-[.85rem] text-white/45 leading-[1.9] font-light"
            style={{ paddingLeft: 14, borderLeft: '1.5px solid rgba(255,255,255,.07)' }}
          >
            Nascida em Goiânia em 2006, a Nativas Grill revolucionou o conceito de churrascaria
            ao unir o churrasco gaúcho ao buffet gourmet. Em 2018, chegou a Cuiabá e conquistou
            as classes A e B com um modelo de rodízio premium inédito no Centro-Oeste.
          </p>

          {/* Pull quote */}
          <div className="glass-card rounded-2xl p-5">
            <p className="font-display italic text-[1.05rem] text-white/70 leading-[1.65]">
              "Não vendemos apenas comida.
              <br />
              Criamos memórias à mesa."
            </p>
          </div>
        </div>

        {/* Right column: Timeline */}
        <div className="flex flex-col relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-px" style={{ background: 'rgba(255,255,255,.06)' }} />
          {TIMELINE.map((t, i) => (
            <div key={i} className="relative flex gap-5 pb-7 last:pb-0">
              <div className="relative flex-shrink-0 flex flex-col items-center">
                <div
                  className="w-[10px] h-[10px] rounded-full mt-[5px]"
                  style={
                    i === TIMELINE.length - 1
                      ? { background: 'linear-gradient(135deg,#89AACC,#4E85BF)' }
                      : { background: 'transparent', border: '1px solid rgba(255,255,255,.2)' }
                  }
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-[3px]">
                  <span className="text-[10px] tracking-[.15em] text-white/25">{t.year}</span>
                  {t.pill && (
                    <span
                      className="text-[8px] tracking-[.08em] uppercase px-2 py-[2px] rounded-full"
                      style={{ background: 'rgba(137,170,204,.1)', color: 'rgba(137,170,204,.7)' }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="text-[.78rem] font-semibold text-white/70 mb-[3px]">{t.title}</div>
                <div className="text-[.7rem] text-white/35 leading-[1.8]">{t.body}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  )
}
