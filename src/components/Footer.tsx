import { motion } from 'framer-motion'
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react'
import { waLink } from '../lib/utils'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Sutil,+6741+Duque+de+Caxias+Cuiab%C3%A1+MT'
const WA_MSG =
  'Olá! Gostaria de solicitar uma proposta para meu evento na Nativas Grill Cuiabá.'

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export function Footer({ isActive }: { isActive: boolean }) {
  return (
    <footer className="slide flex-col" style={{ background: '#000' }}>
      <div className="amb" style={{ width: 600, height: 600, top: '20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(78,133,191,.06) 0%,transparent 70%)' }} />

      <div className="relative z-[2] flex flex-col h-full px-8 md:px-14 pt-14 pb-10 justify-between">

        {/* ── TOP: eyebrow ── */}
        <motion.div custom={0} variants={fade} initial="hidden" animate={isActive ? 'show' : 'hidden'}
          className="flex items-center justify-between"
        >
          <p className="eyebrow text-white/18">Apresentação Comercial · 2026</p>
          <div style={{ width: 32, height: '0.5px', background: 'rgba(255,255,255,.1)' }} />
        </motion.div>

        {/* ── CENTER: Brand ── */}
        <motion.div custom={1} variants={fade} initial="hidden" animate={isActive ? 'show' : 'hidden'}
          className="flex flex-col items-center text-center gap-4"
        >
          <div
            className="font-display leading-[.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(4rem,10vw,9rem)' }}
          >
            <span className="block text-white">Nativas</span>
            <span className="italic block" style={{ color: '#C9A84C' }}>Grill</span>
          </div>

          <p className="eyebrow text-white/20 tracking-[.6em]">Cuiabá · Mato Grosso · Brasil</p>

          <div style={{ width: 48, height: '0.5px', background: 'rgba(255,255,255,.1)', margin: '4px 0' }} />

          <a
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/15 hover:border-white/40 hover:bg-white/[.03] transition-all duration-300 font-medium uppercase tracking-widest text-white px-8 py-3 mt-2"
            style={{ fontSize: 10 }}
          >
            <MessageCircle size={11} strokeWidth={1.5} />
            Reservar Espaço
          </a>
        </motion.div>

        {/* ── BOTTOM: Info row ── */}
        <motion.div custom={2} variants={fade} initial="hidden" animate={isActive ? 'show' : 'hidden'}>
          <div style={{ height: '0.5px', background: 'rgba(255,255,255,.07)', marginBottom: 24 }} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {/* Horários */}
            <div>
              <p className="eyebrow text-white/25 mb-3">Horários</p>
              <div className="flex flex-col gap-1 text-white/35 font-light" style={{ fontSize: 12 }}>
                <span>Almoço · Seg–Sáb · 11h–15h30</span>
                <span>Almoço · Dom · 11h–16h</span>
                <span>Jantar · Seg–Sáb · 18h30–23h30</span>
              </div>
            </div>

            {/* Endereço */}
            <div>
              <p className="eyebrow text-white/25 mb-3">Endereço</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-white/55 transition-colors duration-200 font-light leading-[1.7]"
                style={{ fontSize: 12 }}
              >
                Av. Miguel Sutil, 6741<br />
                Duque de Caxias · Cuiabá – MT<br />
                <span className="uppercase tracking-[.1em] text-white/20" style={{ fontSize: 10 }}>Ver no Google Maps ↗</span>
              </a>
            </div>

            {/* Contato */}
            <div>
              <p className="eyebrow text-white/25 mb-3">Contato</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+556536214642"
                  className="flex items-center gap-2 text-white/35 hover:text-white/55 transition-colors duration-200 font-light"
                  style={{ fontSize: 12 }}>
                  <Phone size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
                  (65) 3621-4642
                </a>
                <a href="https://instagram.com/nativasgrillcuiaba"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/35 hover:text-white/55 transition-colors duration-200 font-light"
                  style={{ fontSize: 12 }}>
                  <Instagram size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
                  @nativasgrillcuiaba
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="eyebrow text-white/25 mb-3">Parcerias</p>
              <p className="text-white/30 font-light leading-[1.7] mb-3" style={{ fontSize: 12 }}>
                Parcerias abertas para criadores de conteúdo, marcas e imprensa.
              </p>
              <a
                href={waLink('Olá! Gostaria de falar sobre uma parceria com a Nativas Grill Cuiabá.')}
                target="_blank" rel="noopener noreferrer"
                className="text-white/25 hover:text-white/50 uppercase tracking-[.15em] transition-colors duration-200"
                style={{ fontSize: 10 }}
              >
                Falar com a equipe ↗
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ height: '0.5px', background: 'rgba(255,255,255,.05)', marginBottom: 16 }} />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
              © {new Date().getFullYear()} Nativas Grill Cuiabá · Todos os direitos reservados.
            </p>
            <div className="flex gap-5">
              {['Política de Privacidade', 'Termos de Uso'].map(l => (
                <a key={l} href="#"
                  className="transition-colors duration-200 hover:text-white/40"
                  style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
