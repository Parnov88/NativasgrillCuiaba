import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
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
        src="/img/cover-hero.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-[1.22] opacity-40 pointer-events-none"
        fetchPriority="high"
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
      <div className="amb" style={{ width: 600, height: 600, top: '20%', right: '-10%', background: 'radial-gradient(circle,rgba(201,168,76,.18) 0%,transparent 70%)', opacity: 0.7 }} />
      <div className="amb" style={{ width: 400, height: 400, bottom: '10%', left: '5%',  background: 'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 70%)', opacity: 0.5 }} />
      {/* left bar */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[3]"
        style={{ width: 3, background: 'linear-gradient(180deg,transparent,rgba(232,201,106,.6),rgba(201,168,76,.4),transparent)' }}
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
        <motion.div variants={fade} className="flex items-center justify-end">
          <div className="flex items-center gap-2 uppercase text-white/25 tracking-[.4em]" style={{ fontSize: 10 }}>
            <div style={{ width: 16, height: 1, background: 'rgba(255,255,255,.15)' }} />
            Apresentação Comercial · 2026
          </div>
        </motion.div>

        {/* Mid */}
        <div>
          <motion.p
            variants={fade}
            className="flex items-center gap-3 uppercase text-white/35 mb-6 tracking-[.5em]"
            style={{ fontSize: 11 }}
          >
            Cuiabá — Mato Grosso · Brasil
            <span style={{ flex: '0 0 36px', height: 1, background: 'linear-gradient(90deg,rgba(232,201,106,.5),transparent)' }} />
          </motion.p>
          <motion.h1
            variants={fade}
            className="font-display italic leading-[.88] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(5rem,12vw,11rem)' }}
          >
            <span
              style={{
                fontStyle: 'normal',
                display: 'block',
                background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,.95) 40%,rgba(255,255,255,.6) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nativas
            </span>
            <span
              style={{
                display: 'block',
                WebkitTextFillColor: '#C9A84C',
                color: '#C9A84C',
              }}
            >
              Grill
            </span>
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
          <div className="text-white/30 font-light leading-[1.9]" style={{ fontSize: 12 }}>
            <strong className="block uppercase text-white/20 font-normal mb-1 tracking-[.35em]" style={{ fontSize: 10 }}>
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
              className="flex items-center gap-2 px-5 py-[10px] rounded-xl font-semibold tracking-[.15em] uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ fontSize: 13, background: 'linear-gradient(135deg,#C9A84C,#E8C96A)', color: '#1a1208' }}
            >
              <MessageCircle size={14} strokeWidth={2} />
              Reservar Espaço
            </a>
            <div className="liquid-glass rounded-full flex items-center gap-[8px] px-[18px] py-[9px] uppercase text-white/50 tracking-[.25em]" style={{ fontSize: 10 }}>
              <span
                className="animate-pulse"
                style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(232,201,106,.8)', flexShrink: 0, display: 'inline-block' }}
              />
              Disponível para parcerias
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <span className="uppercase tracking-[.4em]" style={{ fontSize: 10, color: 'rgba(255,255,255,.3)' }}>
          Avançar
        </span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          style={{ animation: 'bounce-down 1.6s ease-in-out infinite' }}
        >
          <path
            d="M7 10.5L14 17.5L21 10.5"
            stroke="rgba(232,201,106,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
