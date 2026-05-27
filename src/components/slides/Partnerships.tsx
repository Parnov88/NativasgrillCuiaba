import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { PARTNERSHIPS } from '../../data/pricing'

export function Partnerships({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="09 — Parcerias"
      num="09"
      isActive={isActive}
      ambColor="rgba(137,170,204,.13)"
      ambPos="bottom:10%;left:20%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Modelos de Colaboração
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
          Parcerias &amp; <em>Ativações</em>
        </h2>
      </motion.div>

      {/* Partnership cards */}
      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1"
      >
        {PARTNERSHIPS.map((p, i) => (
          <div
            key={p.title}
            className="glass-card rounded-2xl p-6 hover:-translate-y-[3px] transition-all duration-300 flex flex-col gap-4 relative overflow-hidden"
          >
            {/* Number */}
            <div
              className="absolute top-4 right-5 font-display italic text-[2.5rem] leading-[1] select-none pointer-events-none"
              style={{ color: 'rgba(255,255,255,.04)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            <div>
              <div className="text-[.85rem] font-semibold text-white/80 mb-2">{p.title}</div>
              <div className="text-[.72rem] text-white/40 leading-[1.8]">{p.desc}</div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-[6px] mt-auto">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[.1em] uppercase px-3 py-[4px] rounded-full"
                  style={{
                    background: 'rgba(137,170,204,.08)',
                    color: 'rgba(137,170,204,.7)',
                    border: '1px solid rgba(137,170,204,.12)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  )
}
