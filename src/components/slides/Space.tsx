import { motion } from 'framer-motion'
import { SlideShell, slideItem } from './_SlideShell'
import { AMENITIES } from '../../data/pricing'

export function Space({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="04 — Espaço"
      num="04"
      isActive={isActive}
      ambColor="rgba(78,133,191,.12)"
      ambPos="bottom:10%;right:-5%"
    >
      {/* Heading */}
      <motion.div variants={slideItem} className="mb-6">
        <p
          className="flex items-center gap-3 uppercase text-white/30 mb-3"
          style={{ fontSize: 10, letterSpacing: '0.5em' }}
        >
          <span style={{ width: 20, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.35),transparent)', flexShrink: 0 }} />
          Infraestrutura
        </p>
        <h2
          className="font-display leading-[1.03] tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(2rem,4vw,3.4rem)',
            background: 'linear-gradient(175deg,#fff 30%,rgba(255,255,255,.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          O Espaço <em>Privativo</em>
        </h2>
      </motion.div>

      {/* Main grid — two columns, perfectly balanced */}
      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-5 flex-1"
      >
        {/* ── LEFT: Amenities ── */}
        <div className="grid grid-cols-2 gap-[10px] content-start">
          {AMENITIES.map(a => (
            <div
              key={a.title}
              className="group rounded-2xl p-5 flex flex-col gap-2 cursor-default transition-all duration-300 hover:bg-white/[.04]"
              style={{
                background: 'rgba(255,255,255,.02)',
                border: '0.5px solid rgba(255,255,255,.09)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Accent dot */}
              <div
                className="w-[5px] h-[5px] rounded-full mb-1 transition-opacity duration-300 opacity-50 group-hover:opacity-100"
                style={{ background: 'linear-gradient(135deg,#89AACC,#4E85BF)' }}
              />
              <div
                className="font-medium text-white/80 leading-snug tracking-[0.01em] transition-colors duration-300 group-hover:text-white/95"
                style={{ fontSize: 13.5 }}
              >
                {a.title}
              </div>
              <div
                className="text-white/38 leading-[1.65] font-light"
                style={{ fontSize: 12 }}
              >
                {a.desc}
              </div>
            </div>
          ))}
        </div>

        {/* ── RIGHT: Capacity + Conditions ── */}
        <div className="flex flex-col gap-[10px]">

          {/* Capacidade */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '0.5px solid rgba(255,255,255,.09)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p
              className="uppercase text-white/28 mb-5 tracking-[0.45em]"
              style={{ fontSize: 9.5 }}
            >
              Capacidade do espaço
            </p>

            <div className="flex flex-col gap-0">
              {[
                { label: 'Com decoração',  value: '160', unit: 'pessoas' },
                { label: 'Sem decoração',  value: '180', unit: 'lugares' },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-white/45 font-light" style={{ fontSize: 13 }}>
                      {row.label}
                    </span>
                    <div className="flex items-baseline gap-[5px]">
                      <span
                        className="font-display italic leading-none"
                        style={{
                          fontSize: 28,
                          background: 'linear-gradient(90deg,#89AACC,#c8ddee)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {row.value}
                      </span>
                      <span className="text-white/25 font-light" style={{ fontSize: 11 }}>
                        {row.unit}
                      </span>
                    </div>
                  </div>
                  {i === 0 && (
                    <div style={{ height: '0.5px', background: 'rgba(255,255,255,.06)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Condições de Reserva */}
          <div
            className="rounded-2xl p-6 flex-1"
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '0.5px solid rgba(255,255,255,.09)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p
              className="uppercase text-white/28 mb-5 tracking-[0.45em]"
              style={{ fontSize: 9.5 }}
            >
              Condições de reserva
            </p>

            <div className="flex flex-col">
              {[
                { label: 'Abertura mínima',      value: '50 pessoas',              highlight: false },
                { label: 'Exclusividade total',  value: '120+ pessoas',            highlight: true  },
                { label: 'Abaixo de 50 pessoas', value: 'Taxa a negociar',         highlight: false },
                { label: 'Projetor HD',          value: 'Incluso',                 highlight: true  },
                { label: 'Decoração e música',   value: 'Por conta do contratante',highlight: false },
              ].map((row, i, arr) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between py-[11px]">
                    <span
                      className="text-white/42 font-light pr-4"
                      style={{ fontSize: 12.5 }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="font-medium text-right flex-shrink-0"
                      style={{
                        fontSize: 12.5,
                        color: row.highlight ? 'rgba(137,170,204,.9)' : 'rgba(255,255,255,.6)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ height: '0.5px', background: 'rgba(255,255,255,.05)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </SlideShell>
  )
}
