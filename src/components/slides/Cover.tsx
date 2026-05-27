import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Monogram } from '../Loader'
import { waLink } from '../../lib/utils'

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export function Cover() {
  return (
    <div className="slide" style={{ background: '#000' }}>
      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%,transparent 40%,rgba(0,0,0,.7) 100%)' }}
      />
      {/* hero background photo */}
      <img
        src="/img/cover-hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-[1.22] opacity-20 pointer-events-none"
      />
      {/* grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black,transparent 80%)',
        }}
      />
      {/* ambient glows */}
      <div className="amb" style={{ width: 600, height: 600, top: '20%', right: '-10%', background: 'radial-gradient(circle,rgba(78,133,191,.18) 0%,transparent 70%)', opacity: 0.7 }} />
      <div className="amb" style={{ width: 400, height: 400, bottom: '10%', left: '5%',  background: 'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 70%)', opacity: 0.5 }} />
      {/* left bar */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[3]"
        style={{ width: 3, background: 'linear-gradient(180deg,transparent,rgba(137,170,204,.6),rgba(78,133,191,.4),transparent)' }}
      />
      {/* ghost number */}
      <div
        className="absolute right-5 bottom-[-28px] z-0 font-display italic text-white/[.02] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(7rem,20vw,20rem)', letterSpacing: '-.05em' }}
      >
        01
      </div>

      <motion.div
        className="relative z-[2] flex-1 flex flex-col justify-between"
        style={{ padding: '32px 56px 40px 56px' }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Top row */}
        <motion.div variants={fade} className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <Monogram size={32} />
            <span className="text-[11px] tracking-[.25em] uppercase text-white/40 font-normal">
              Nativas Grill
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9px] tracking-[.4em] uppercase text-white/25">
            <div style={{ width: 16, height: 1, background: 'rgba(255,255,255,.15)' }} />
            Apresentação Comercial · 2026
          </div>
        </motion.div>

        {/* Mid */}
        <div>
          <motion.p
            variants={fade}
            className="flex items-center gap-3 text-[9px] tracking-[.6em] uppercase text-white/35 mb-6"
          >
            Cuiabá — Mato Grosso · Brasil
            <span style={{ flex: '0 0 36px', height: 1, background: 'linear-gradient(90deg,rgba(137,170,204,.5),transparent)' }} />
          </motion.p>
          <motion.h1
            variants={fade}
            className="font-display italic leading-[.88] tracking-[-0.04em]"
            style={{
              fontSize: 'clamp(5rem,12vw,11rem)',
              background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,.95) 40%,rgba(255,255,255,.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <span style={{ fontStyle: 'normal', display: 'block' }}>Nativas</span>
            Grill
          </motion.h1>
          <motion.div
            variants={fade}
            style={{
              width: '100%',
              height: 1,
              background: 'linear-gradient(90deg,rgba(255,255,255,.12),transparent)',
              margin: '28px 0',
            }}
          />
          <motion.p
            variants={fade}
            className="text-[.9rem] text-white/40 max-w-[440px] leading-[1.9] font-light"
            style={{ paddingLeft: 18, borderLeft: '1.5px solid rgba(255,255,255,.08)' }}
          >
            Espaço privativo premium · Gastronomia de alto padrão · Referência em eventos
            e rodízio no Centro-Oeste desde 2018.
          </motion.p>
        </div>

        {/* Bottom */}
        <motion.div variants={fade} className="flex items-end justify-between flex-wrap gap-4">
          <div className="text-[10px] text-white/30 font-light leading-[1.9]">
            <strong className="block text-[8.5px] tracking-[.35em] uppercase text-white/20 font-normal mb-1">
              Localização
            </strong>
            Av. Miguel Sutil, 6741 — Duque de Caxias
            <br />
            Cuiabá — MT · CEP 78043-000 · (65) 3621-4642
          </div>
          <div className="flex items-center gap-3">
            <a
              href={waLink('Olá! Gostaria de reservar o espaço da Nativas Grill Cuiabá para um evento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-[9px] rounded-xl font-semibold text-[.75rem] tracking-[.15em] uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg,#C9A84C,#E8C96A)', color: '#1a1208' }}
            >
              <MessageCircle size={14} strokeWidth={2} />
              Reservar Espaço
            </a>
            <div className="liquid-glass rounded-full flex items-center gap-[8px] px-[18px] py-[8px] text-[9px] tracking-[.25em] uppercase text-white/50">
              <span
                className="animate-pulse"
                style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(137,170,204,.8)', flexShrink: 0, display: 'inline-block' }}
              />
              Disponível para parcerias
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <span className="text-[8.5px] tracking-[.4em] uppercase" style={{ color: 'rgba(255,255,255,.18)' }}>
          Avançar
        </span>
        <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,.08)', overflow: 'hidden', position: 'relative' }}>
          <div className="ssh-line" style={{ position: 'absolute', inset: 0 }} />
        </div>
      </div>
    </div>
  )
}
