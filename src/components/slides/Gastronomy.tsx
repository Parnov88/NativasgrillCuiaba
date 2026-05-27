import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { CUTS, BUFFET_ITEMS } from '../../data/pricing'

export function Gastronomy({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="04 — Gastronomia"
      num="04"
      isActive={isActive}
      ambColor="rgba(137,170,204,.1)"
      ambPos="top:20%;left:30%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Cardápio
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
          Gastronomia <em>Premium</em>
        </h2>
      </motion.div>

      {/* Cuts marquee */}
      <motion.div variants={slideItem} className="overflow-hidden mb-5">
        <div className="text-[9px] tracking-[.4em] uppercase text-white/20 mb-3">
          Cortes nobres · Rodízio de carnes
        </div>
        <div
          className="overflow-hidden py-3"
          style={{ borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)' }}
        >
          <div className="mq-track flex items-center">
            {[...CUTS, ...CUTS].map((cut, i) => (
              <span
                key={i}
                className="flex items-center gap-5 flex-shrink-0 px-5"
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,.45)', letterSpacing: '0.04em' }}
              >
                {cut}
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'rgba(137,170,204,.4)',
                    flexShrink: 0,
                    display: 'inline-block',
                  }}
                />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Buffet section */}
      <motion.div variants={slideItem} className="flex-1 flex flex-col">
        <div className="text-[9px] tracking-[.4em] uppercase text-white/20 mb-4">
          Buffet gourmet · Mais de 60 itens
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {BUFFET_ITEMS.map(item => (
            <span
              key={item}
              className="glass-card rounded-full px-4 py-[6px] text-[.7rem] text-white/50 hover:text-white/70 transition-colors duration-200 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Description row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-auto">
          {[
            { label: 'Culinária japonesa', desc: 'Sushis, sashimis e temakis frescos diariamente' },
            { label: 'Frutos do mar',      desc: 'Salmão norueguês, bacalhau e camarão selecionados' },
            { label: 'Confeitaria fina',   desc: 'Sobremesas artesanais e chocolate importado' },
          ].map(c => (
            <div
              key={c.label}
              className="glass-card rounded-xl p-4 hover:bg-white/[.04] transition-all duration-300"
            >
              <div className="text-[.75rem] font-semibold text-white/70 mb-[4px]">{c.label}</div>
              <div className="text-[.65rem] text-white/35 leading-[1.7]">{c.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  )
}
