import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { AMENITIES } from '../../data/pricing'

const blueGrad = {
  background: 'linear-gradient(90deg,#89AACC,#4E85BF)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

export function Space({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="04 — Espaço"
      num="04"
      isActive={isActive}
      ambColor="rgba(78,133,191,.14)"
      ambPos="bottom:15%;right:-5%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] uppercase text-white/35 mb-[12px]" style={{ fontSize: 10, letterSpacing: '0.45em' }}>
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Infraestrutura
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
          O Espaço <em>Privativo</em>
        </h2>
      </motion.div>

      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 flex-1 items-stretch mt-1"
      >
        {/* Left: Amenities grid */}
        <div className="grid grid-cols-2 gap-3 content-start">
          {AMENITIES.map(a => (
            <div
              key={a.title}
              className="glass-card rounded-2xl p-5 hover:bg-white/[.04] transition-all duration-300 cursor-default"
            >
              <div className="font-semibold text-white/80 mb-[6px]" style={{ fontSize: 14 }}>{a.title}</div>
              <div className="text-white/40 leading-[1.7]" style={{ fontSize: 12.5 }}>{a.desc}</div>
            </div>
          ))}
        </div>

        {/* Right: Capacity + Conditions */}
        <div className="flex flex-col gap-4">
          {/* Capacidade */}
          <div className="glass-card rounded-2xl p-6">
            <div className="uppercase text-white/30 mb-5 tracking-[.3em]" style={{ fontSize: 10 }}>
              Capacidade do espaço
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-white/50" style={{ fontSize: 14 }}>Com decoração</span>
                <span className="font-semibold" style={{ ...blueGrad, fontSize: 22, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>160</span>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />
              <div className="flex items-center justify-between">
                <span className="text-white/50" style={{ fontSize: 14 }}>Sem decoração</span>
                <span className="font-semibold" style={{ ...blueGrad, fontSize: 22, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>180</span>
              </div>
            </div>
          </div>

          {/* Condições */}
          <div className="glass-card rounded-2xl p-6 flex-1">
            <div className="uppercase text-white/30 mb-5 tracking-[.3em]" style={{ fontSize: 10 }}>
              Condições de reserva
            </div>
            <div className="flex flex-col gap-0">
              {[
                ['Abertura mínima',      '50 pessoas'],
                ['Exclusividade total',  '120+ pessoas'],
                ['Abaixo de 50 pessoas', 'taxa a negociar'],
                ['Projetor HD',          'incluso'],
                ['Decoração e música',   'por conta do contratante'],
              ].map(([label, value], i, arr) => (
                <div key={label}>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-white/45" style={{ fontSize: 13 }}>{label}</span>
                    <span
                      className="font-semibold text-right"
                      style={{ fontSize: 13, color: i < 2 ? 'rgba(255,255,255,.75)' : 'rgba(137,170,204,.85)' }}
                    >
                      {value}
                    </span>
                  </div>
                  {i < arr.length - 1 && <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  )
}
