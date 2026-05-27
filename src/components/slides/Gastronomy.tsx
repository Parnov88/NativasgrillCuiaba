import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { CUTS, BUFFET_ITEMS } from '../../data/pricing'

export function Gastronomy({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="05 — Gastronomia"
      num="05"
      isActive={isActive}
      ambColor="rgba(137,170,204,.1)"
      ambPos="top:20%;left:30%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] uppercase text-white/35 mb-[12px]" style={{ fontSize: 10, letterSpacing: '0.45em' }}>
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Cardápio
        </p>
        <h2
          className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.02em] mb-[14px]"
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
      <motion.div variants={slideItem} className="overflow-hidden mb-4">
        <div className="uppercase text-white/25 mb-2 tracking-[.4em]" style={{ fontSize: 10 }}>
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
                style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', letterSpacing: '0.04em' }}
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
      <motion.div variants={slideItem} className="flex-1 flex flex-col min-h-0">
        <div className="uppercase text-white/25 mb-3 tracking-[.4em]" style={{ fontSize: 10 }}>
          Buffet gourmet · Mais de 60 itens
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {BUFFET_ITEMS.map(item => (
            <span
              key={item}
              className="glass-card rounded-full px-4 py-[7px] text-white/55 hover:text-white/80 transition-colors duration-200 cursor-default"
              style={{ fontSize: 12.5 }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Photo row — taller and fills remaining space */}
        <div className="grid grid-cols-2 gap-3 flex-1" style={{ minHeight: 180 }}>
          {[
            { src: '/img/gastro-buffet.png', label: 'Buffet Gourmet · +60 itens' },
            { src: '/img/gastro-sushi.png',  label: 'Culinária Japonesa · Ao vivo' },
          ].map(p => (
            <div key={p.src} className="relative rounded-2xl overflow-hidden group">
              <img
                src={p.src}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.3] opacity-90"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,.78) 0%,rgba(0,0,0,.08) 55%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 font-semibold text-white/85 tracking-[.03em]" style={{ fontSize: 13 }}>
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  )
}
