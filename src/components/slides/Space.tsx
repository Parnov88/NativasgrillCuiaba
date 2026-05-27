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
      tag="03 — Espaço"
      num="03"
      isActive={isActive}
      ambColor="rgba(78,133,191,.14)"
      ambPos="bottom:15%;right:-5%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Infraestrutura
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
          O Espaço <em>Privativo</em>
        </h2>
      </motion.div>

      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 flex-1 items-start mt-2"
      >
        {/* Left: Amenities grid */}
        <div className="grid grid-cols-2 gap-3">
          {AMENITIES.map(a => (
            <div
              key={a.title}
              className="glass-card rounded-2xl p-4 hover:bg-white/[.04] transition-all duration-300 cursor-default"
            >
              <div className="text-[.78rem] font-semibold text-white/75 mb-[5px]">{a.title}</div>
              <div className="text-[.65rem] text-white/35 leading-[1.75]">{a.desc}</div>
            </div>
          ))}
        </div>

        {/* Right: Capacity cards */}
        <div className="flex flex-col gap-4">
          <div className="glass-card rounded-2xl p-6">
            <div className="text-[9px] tracking-[.3em] uppercase text-white/25 mb-2">
              Capacidade máxima
            </div>
            <div className="font-display italic text-[3.2rem] leading-[1] mb-2" style={blueGrad}>
              500+
            </div>
            <div className="text-[.7rem] text-white/40 leading-[1.8]">
              pessoas no salão principal com todas as facilidades inclusas
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="text-[9px] tracking-[.3em] uppercase text-white/25 mb-4">
              Eventos privados
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[.72rem] text-white/45">Abertura privativa</span>
                <span className="text-[.72rem] font-semibold text-white/70">50 pessoas</span>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />
              <div className="flex items-center justify-between">
                <span className="text-[.72rem] text-white/45">Exclusividade total</span>
                <span className="text-[.72rem] font-semibold text-white/70">120+ pessoas</span>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,.05)' }} />
              <div className="flex items-center justify-between">
                <span className="text-[.72rem] text-white/45">Projetor HD incluso</span>
                <span
                  className="text-[.72rem] font-semibold"
                  style={{ color: 'rgba(137,170,204,.8)' }}
                >
                  sem custo
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  )
}
