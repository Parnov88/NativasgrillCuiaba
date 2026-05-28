import { motion } from 'framer-motion'
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react'
import { waLink } from '../lib/utils'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Sutil,+6741+Duque+de+Caxias+Cuiab%C3%A1+MT'

const WA_MSG = 'Olá! Gostaria de solicitar uma proposta para meu evento na Nativas Grill Cuiabá.'

const col = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 },
  }),
}

export function Footer({ isActive }: { isActive: boolean }) {
  return (
    <footer className="slide flex-col" style={{ background: '#000' }}>

      {/* Thin top accent line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent)', flexShrink: 0 }} />

      {/* Ambient */}
      <div className="amb" style={{ width: 500, height: 500, bottom: '-15%', left: '-5%', background: 'radial-gradient(circle,rgba(78,133,191,.07) 0%,transparent 70%)' }} />

      <div className="relative z-[2] flex flex-col h-full px-8 md:px-14 py-12">

        {/* ── TOP: eyebrow ── */}
        <motion.div
          custom={0} variants={col} initial="hidden" animate={isActive ? 'show' : 'hidden'}
          className="flex items-center justify-between mb-10"
        >
          <p className="eyebrow text-white/20">Nativas Grill · Cuiabá · 2026</p>
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,.1)' }} />
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">

          {/* Col 1 — Branding */}
          <motion.div custom={1} variants={col} initial="hidden" animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col justify-between"
          >
            <div>
              <div
                className="font-display leading-[1]"
                style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', letterSpacing: '-0.01em' }}
              >
                <span className="text-white block">Nativas</span>
                <span className="italic" style={{ color: '#C9A84C' }}>Grill</span>
              </div>
              <div className="eyebrow text-white/20 mt-2">Cuiabá — MT</div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <p className="text-white/35 font-light leading-[1.75]" style={{ fontSize: 13 }}>
                Gastronomia premium no Centro-Oeste desde 2006. Tradição, excelência e memórias à mesa.
              </p>
              <a
                href="https://instagram.com/nativasgrillcuiaba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 w-fit mt-1"
                style={{ fontSize: 12 }}
              >
                <Instagram size={12} strokeWidth={1.5} />
                @nativasgrillcuiaba
              </a>
            </div>
          </motion.div>

          {/* Col 2 — Horários */}
          <motion.div custom={2} variants={col} initial="hidden" animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <div className="eyebrow text-white/25 pb-3" style={{ borderBottom: '0.5px solid rgba(255,255,255,.07)' }}>
              Horários
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="uppercase tracking-[.15em] text-white/40 mb-2" style={{ fontSize: 10 }}>Almoço</div>
                <div className="text-white/30 leading-[1.8] font-light" style={{ fontSize: 13 }}>
                  Seg – Sáb<br /><span className="text-white/55">11h00 – 15h30</span>
                </div>
                <div className="text-white/30 leading-[1.8] font-light mt-2" style={{ fontSize: 13 }}>
                  Domingos<br /><span className="text-white/55">11h00 – 16h00</span>
                </div>
              </div>
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,.06)' }} />
              <div>
                <div className="uppercase tracking-[.15em] text-white/40 mb-2" style={{ fontSize: 10 }}>Jantar</div>
                <div className="text-white/30 leading-[1.8] font-light" style={{ fontSize: 13 }}>
                  Seg – Sáb<br /><span className="text-white/55">18h30 – 23h30</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Col 3 — Localização */}
          <motion.div custom={3} variants={col} initial="hidden" animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <div className="eyebrow text-white/25 pb-3" style={{ borderBottom: '0.5px solid rgba(255,255,255,.07)' }}>
              Localização &amp; Contato
            </div>

            <address className="not-italic flex flex-col gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/35 hover:text-white/60 transition-colors duration-300 group"
              >
                <MapPin size={12} strokeWidth={1.5} className="mt-[3px] flex-shrink-0 text-white/20" />
                <span className="font-light leading-[1.85]" style={{ fontSize: 13 }}>
                  Av. Miguel Sutil, 6741<br />
                  Duque de Caxias<br />
                  Cuiabá – MT · 78043-000
                  <span className="block text-white/20 mt-1 uppercase tracking-[.12em]" style={{ fontSize: 10 }}>
                    Ver no Google Maps ↗
                  </span>
                </span>
              </a>

              <a
                href="tel:+556536214642"
                className="flex items-center gap-3 text-white/35 hover:text-white/60 transition-colors duration-300"
                style={{ fontSize: 13 }}
              >
                <Phone size={12} strokeWidth={1.5} className="flex-shrink-0 text-white/20" />
                (65) 3621-4642
              </a>
            </address>
          </motion.div>

          {/* Col 4 — CTA */}
          <motion.div custom={4} variants={col} initial="hidden" animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <div className="eyebrow text-white/25 pb-3" style={{ borderBottom: '0.5px solid rgba(255,255,255,.07)' }}>
              Reservas
            </div>

            <p className="text-white/30 font-light leading-[1.75]" style={{ fontSize: 13 }}>
              Agende seu evento e receba uma proposta personalizada.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 text-white
                           border border-white/15 hover:border-white/50 hover:bg-white/[.03]
                           transition-all duration-300 font-medium uppercase tracking-widest"
                style={{ fontSize: 10 }}
              >
                <MessageCircle size={11} strokeWidth={1.5} />
                Reservar Espaço
              </a>
              <a
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5
                           transition-all duration-300 font-medium uppercase tracking-widest
                           text-white/30 hover:text-white/60"
                style={{
                  fontSize: 10,
                  background: 'rgba(201,168,76,.06)',
                  border: '1px solid rgba(201,168,76,.18)',
                }}
              >
                <MessageCircle size={11} strokeWidth={1.5} />
                WhatsApp Direto
              </a>
            </div>

            {/* Quote */}
            <p className="font-display italic text-white/12 leading-[1.4] mt-auto" style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>
              "Da grelha<br />à memória."
            </p>
          </motion.div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          custom={5} variants={col} initial="hidden" animate={isActive ? 'show' : 'hidden'}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-8 pt-5"
          style={{ borderTop: '0.5px solid rgba(255,255,255,.06)' }}
        >
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,.2)' }}>
            © {new Date().getFullYear()} Nativas Grill Cuiabá · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            {['Política de Privacidade', 'Termos de Uso', 'Instagram'].map(l => (
              <a key={l} href="#"
                className="transition-colors duration-200 hover:text-white/50"
                style={{ fontSize: 10, color: 'rgba(255,255,255,.2)' }}
              >{l}</a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
