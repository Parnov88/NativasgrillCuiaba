import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { DEMOGRAPHICS, OCCASIONS } from '../../data/pricing'

export function Audience({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="08 — Público"
      num="08"
      isActive={isActive}
      ambColor="rgba(78,133,191,.13)"
      ambPos="top:5%;right:10%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] uppercase text-white/35 mb-[12px]" style={{ fontSize: 10, letterSpacing: '0.45em' }}>
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Perfil de Audiência
        </p>
        <h2
          className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.02em] mb-[16px]"
          style={{
            background: 'linear-gradient(180deg,#fff 30%,rgba(255,255,255,.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Quem frequenta a <em>Nativas</em>
        </h2>
      </motion.div>

      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 flex-1 items-stretch mt-1"
      >
        {/* Left: Demographics */}
        <div className="flex flex-col gap-2">
          <div className="uppercase text-white/25 mb-3 tracking-[.35em]" style={{ fontSize: 10 }}>
            Perfil do público
          </div>
          {DEMOGRAPHICS.map((d, i) => (
            <div key={d.label} className="flex flex-col gap-[7px] mb-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60" style={{ fontSize: 14 }}>{d.label}</span>
                <span
                  className="font-display italic leading-[1]"
                  style={{
                    fontSize: 20,
                    background: 'linear-gradient(90deg,#89AACC,#4E85BF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {d.pct}%
                </span>
              </div>
              <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg,#89AACC,#4E85BF)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: isActive ? `${d.pct}%` : '0%' }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.1 }}
                />
              </div>
            </div>
          ))}

          {/* Summary card */}
          <div className="glass-card rounded-2xl p-5 mt-auto">
            <p className="font-display italic text-white/60 leading-[1.7]" style={{ fontSize: 15 }}>
              "Público premium com alto poder de compra, fiel à experiência
              e influente nas redes sociais."
            </p>
          </div>
        </div>

        {/* Right: Occasions */}
        <div className="flex flex-col gap-3">
          <div className="uppercase text-white/25 mb-1 tracking-[.35em]" style={{ fontSize: 10 }}>
            Ocasiões &amp; eventos
          </div>
          {OCCASIONS.map(o => (
            <div
              key={o.title}
              className="glass-card rounded-xl px-5 py-4 hover:bg-white/[.04] transition-all duration-300 flex items-center gap-4"
            >
              <div
                className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#89AACC,#4E85BF)' }}
              />
              <div>
                <div className="font-semibold text-white/75 mb-[3px]" style={{ fontSize: 14 }}>{o.title}</div>
                <div className="text-white/40" style={{ fontSize: 12 }}>{o.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  )
}
