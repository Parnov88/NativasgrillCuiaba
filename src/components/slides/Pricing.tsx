import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { PERIODS, COMBOS, type PeriodKey } from '../../data/pricing'
import { fmt } from '../../lib/utils'

const COMBO_IMGS = [
  '/img/pricing-livre.png',
  '/img/pricing-soft.png',
  '/img/pricing-intermediario.png',
  '/img/pricing-premium.png',
]

const PERIOD_KEYS = Object.keys(PERIODS) as PeriodKey[]

export function Pricing({ isActive }: { isActive: boolean }) {
  const [period, setPeriod] = useState<PeriodKey>('jantar')
  const p = PERIODS[period]

  return (
    <SlideShell tag="07 — Tarifas" num="07" isActive={isActive}>
      {/* Header */}
      <motion.div variants={slideItem} className="flex items-end justify-between mb-6 flex-wrap gap-4">
        <div>
          <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[10px]">
            <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
            Pacotes &amp; Preços
          </p>
          <h2
            className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[-0.02em]"
            style={{
              background: 'linear-gradient(180deg,#fff 30%,rgba(255,255,255,.65) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Escolha seu <em>Combo</em>
          </h2>
        </div>

        {/* Period selector — segmented pill */}
        <div
          className="flex items-center rounded-full p-[3px] gap-[2px]"
          style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
        >
          {PERIOD_KEYS.map(key => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className="relative px-[14px] py-[6px] rounded-full text-[9.5px] tracking-[.18em] uppercase transition-all duration-250 cursor-pointer"
              style={
                period === key
                  ? { background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,255,255,.14)' }
                  : { background: 'transparent', color: 'rgba(255,255,255,.3)', border: '1px solid transparent' }
              }
            >
              {key === 'jantar' ? '🌙' : '☀️'}&nbsp;
              {PERIODS[key].label.split(' — ')[0]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div variants={slideItem} className="grid grid-cols-2 md:grid-cols-4 gap-[10px] flex-1">
        {COMBOS.map((c, i) => (
          <div
            key={c.name}
            className="relative rounded-2xl overflow-hidden group cursor-default"
            style={{
              border: c.featured
                ? '1px solid rgba(137,170,204,.2)'
                : '1px solid rgba(255,255,255,.06)',
            }}
          >
            {/* Photo fill */}
            <img
              src={COMBO_IMGS[i]}
              alt={c.name}
              className="absolute inset-0 w-full h-full object-cover scale-[1.22] opacity-70 group-hover:opacity-85 transition-opacity duration-500"
            />

            {/* Gradient overlay — strong at bottom, fades up */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top,rgba(0,0,0,.92) 0%,rgba(0,0,0,.55) 40%,rgba(0,0,0,.08) 100%)' }}
            />

            {/* Featured badge */}
            {c.featured && (
              <div
                className="absolute top-[10px] left-[10px] z-[2] text-[7px] tracking-[.18em] font-semibold uppercase px-[9px] py-[4px] rounded-full text-white"
                style={{ background: 'linear-gradient(90deg,rgba(137,170,204,.55),rgba(78,133,191,.55))', backdropFilter: 'blur(6px)' }}
              >
                Mais pedido
              </div>
            )}

            {/* Content pinned to bottom */}
            <div className="absolute inset-x-0 bottom-0 z-[1] p-[16px] pb-[18px] flex flex-col gap-[6px]">
              {/* Combo name */}
              <div className="text-[.8rem] font-semibold text-white leading-[1.2]">{c.name}</div>

              {/* Short desc */}
              <div className="text-[.62rem] text-white/45 leading-[1.6]">{c.desc}</div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,.08)', margin: '4px 0' }} />

              {/* Price row */}
              <div className="flex items-end justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={period + i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="font-display italic leading-[1]"
                      style={{
                        fontSize: 'clamp(1.4rem,2.5vw,1.75rem)',
                        background: 'linear-gradient(90deg,#89AACC,#c8ddee)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      R$ {fmt(p.prices[i])}
                    </div>
                    <div className="text-[.6rem] text-white/25 mt-[3px]">por pessoa</div>
                  </motion.div>
                </AnimatePresence>
                <div
                  className="text-[7.5px] tracking-[.12em] uppercase text-white/25 text-right leading-[1.5] max-w-[70px]"
                >
                  {p.label.split(' — ').map((part, j) => (
                    <span key={j} className="block">{part}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.div
        variants={slideItem}
        className="flex items-start gap-[8px] mt-[12px] text-[.68rem] text-white/30 leading-[1.85]"
        style={{ paddingTop: 10, borderTop: '1px solid rgba(255,255,255,.05)' }}
      >
        <span style={{ color: 'rgba(137,170,204,.5)', flexShrink: 0, fontSize: 10 }}>✦</span>
        <span>
          Abertura mínima de{' '}
          <strong style={{ color: 'rgba(137,170,204,.75)' }}>50 pessoas</strong>
          {' '}· Exclusividade a partir de{' '}
          <strong style={{ color: 'rgba(137,170,204,.75)' }}>120 convidados</strong>
          {' '}· Rodízio + buffet gourmet inclusos · Projetor HD sem custo adicional
        </span>
      </motion.div>
    </SlideShell>
  )
}
