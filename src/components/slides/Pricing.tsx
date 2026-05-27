import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { PERIODS, COMBOS, type PeriodKey } from '../../data/pricing'
import { fmt } from '../../lib/utils'

const COMBO_IMGS = [
  '/img/pricing-livre.png',
  '/img/pricing-soft.png',
  '/img/pricing-intermediario.png',
  '/img/pricing-premium.png',
]

export function Pricing({ isActive }: { isActive: boolean }) {
  const [period, setPeriod] = useState<PeriodKey>('jantar')
  const p = PERIODS[period]

  return (
    <SlideShell tag="07 — Tarifas" num="07" isActive={isActive}>
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Arquitetura de Preços
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
          Pacotes &amp; <em>Tarifas</em>
        </h2>
      </motion.div>

      <motion.div variants={slideItem} className="flex flex-col flex-1 overflow-hidden">
        {/* Period tabs */}
        <div className="flex gap-1 mb-[18px] flex-wrap">
          {(Object.keys(PERIODS) as PeriodKey[]).map(key => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className="flex items-center gap-[5px] text-[10px] px-[14px] py-[6px] rounded-full border transition-all duration-200"
              style={
                period === key
                  ? { background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.15)', color: 'rgba(255,255,255,.8)' }
                  : { background: 'transparent', borderColor: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.35)' }
              }
            >
              {key === 'jantar' ? '🌙' : '☀️'} {PERIODS[key].label.split(' — ')[0]}
            </button>
          ))}
        </div>

        {/* Price cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] flex-1">
          {COMBOS.map((c, i) => (
            <div
              key={c.name}
              className="glass-card flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-[3px] relative overflow-hidden group"
              style={c.featured ? { background: 'rgba(137,170,204,.05)', borderColor: 'rgba(137,170,204,.12)' } : {}}
            >
              {/* Background photo */}
              <img
                src={COMBO_IMGS[i]}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover scale-[1.22] opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.95) 0%, rgba(0,0,0,.5) 50%, rgba(0,0,0,.3) 100%)' }} />
              {c.featured && (
                <div
                  className="absolute top-0 right-0 text-[7px] tracking-[.15em] font-semibold px-[9px] py-[4px] text-white z-[2]"
                  style={{ background: 'linear-gradient(90deg,rgba(137,170,204,.5),rgba(78,133,191,.5))' }}
                >
                  MAIS PEDIDO
                </div>
              )}
              <div className="p-[18px] pb-[12px] border-b border-white/5 flex-1 relative z-[1]">
                <div className="text-[.8rem] font-semibold text-white/80 mb-[5px]">{c.name}</div>
                <div className="text-[.67rem] text-white/30 leading-[1.75] min-h-[48px]">{c.desc}</div>
              </div>
              <div className="px-[16px] py-[12px] pb-[16px] relative z-[1]">
                <div className="text-[8px] tracking-[.2em] uppercase text-white/20 mb-[4px]">{p.label}</div>
                <div
                  className="font-display italic text-[1.4rem] leading-[1]"
                  style={{
                    background: 'linear-gradient(90deg,#89AACC,#4E85BF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  R$ {fmt(p.prices[i])}
                </div>
                <div className="text-[.62rem] text-white/20 mt-[2px]">por pessoa</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="glass-card flex gap-[8px] items-start rounded-[10px] p-[11px] pl-[14px] mt-[12px] text-[.7rem] text-white/30 leading-[1.85]">
          <span style={{ color: 'rgba(137,170,204,.6)', flexShrink: 0, marginTop: 1 }}>ℹ</span>
          <span>
            Abertura a partir de{' '}
            <strong style={{ color: 'rgba(137,170,204,.8)' }}>50 pessoas</strong>. A partir de{' '}
            <strong style={{ color: 'rgba(137,170,204,.8)' }}>120 convidados</strong>, exclusividade
            total garantida. Todos os pacotes incluem rodízio + buffet gourmet. Projetor HD incluso
            sem custo.
          </span>
        </div>
      </motion.div>
    </SlideShell>
  )
}
