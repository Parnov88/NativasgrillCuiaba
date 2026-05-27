import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SlideShell, slideItem } from './_SlideShell'
import { waLink } from '../../lib/utils'

const FEATURED_CUTS = [
  { name: 'Picanha Angus', img: '/img/cuts-picanha.png' },
  { name: 'Baby Beef',     img: '/img/cuts-babbeef.png' },
  { name: 'Cordeiro',      img: '/img/cuts-cordeiro.png' },
  { name: 'Bife Ancho',    img: '/img/cuts-bifeancho.png' },
]

export function Cuts({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="06 — Cortes"
      num="06"
      isActive={isActive}
      ambColor="rgba(201,168,76,.07)"
      ambPos="top:0%;right:20%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Rodízio Premium
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
          Tipos de <em>Cortes</em>
        </h2>
      </motion.div>

      {/* Cut cards */}
      <motion.div
        variants={slideItem}
        className="grid grid-cols-4 gap-4 flex-1 mt-1"
      >
        {FEATURED_CUTS.map(cut => (
          <div
            key={cut.name}
            className="relative rounded-2xl overflow-hidden group cursor-default"
            style={{
              background: 'linear-gradient(160deg,#1a1008,#0d0d0d)',
              border: '1px solid rgba(201,168,76,.12)',
              minHeight: 200,
            }}
          >
            {/* Photo */}
            <img
              src={cut.img}
              alt={cut.name}
              className="absolute inset-0 w-full h-full object-cover opacity-80 scale-[1.22] transition-transform duration-700 group-hover:scale-[1.3]"
              onError={e => (e.currentTarget.style.display = 'none')}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top,rgba(0,0,0,.92) 0%,rgba(0,0,0,.4) 45%,rgba(0,0,0,.1) 100%)',
              }}
            />
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%,rgba(201,168,76,.12),transparent)' }}
            />
            {/* Name + underline */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-[.88rem] font-semibold text-white mb-[8px] leading-tight">
                {cut.name}
              </div>
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: 'linear-gradient(90deg,#C9A84C,#E8C96A)',
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* CARDÁPIO CTA */}
      <motion.div variants={slideItem} className="flex justify-end mt-4">
        <a
          href={waLink('Olá! Quero conhecer o cardápio completo da Nativas Grill Cuiabá.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] px-8 py-[12px] rounded-xl font-semibold text-[.78rem] tracking-[.2em] uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg,#C9A84C,#E8C96A)', color: '#1a1208' }}
        >
          <MessageCircle size={15} strokeWidth={2} />
          Cardápio
        </a>
      </motion.div>
    </SlideShell>
  )
}
