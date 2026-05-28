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
    <footer className="slide flex-col" style={{ background: '#000', height: '50vh' }}>
      <div className="amb" style={{ width: 500, height: 500, top: '10%', left: '30%', transform: 'translateX(-50%)', background: 'radial-gradient(circle,rgba(78,133,191,.05) 0%,transparent 70%)' }} />

      <div className="relative z-[2] flex flex-col h-full px-8 md:px-14 py-8">

        {/* ── Top separator ── */}
        <motion.div custom={0} variants={fade} initial="hidden" animate={isActive ? 'show' : 'hidden'}>
          <div style={{ height: '0.5px', background: 'rgba(255,255,255,.08)', marginBottom: 24 }} />
        </motion.div>

        {/* ── Main grid: brand left / info right ── */}
        <motion.div
          custom={1} variants={fade} initial="hidden" animate={isActive ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr] gap-8 flex-1"
        >
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <div
                className="font-display leading-[.88] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.8rem,5vw,5rem)' }}
              >
                <span className="block text-white">Nativas</span>
                <span className="italic block" style={{ color: '#C9A84C' }}>Grill</span>
              </div>
              <p className="eyebrow text-white/20 tracking-[.4em] mt-4">Cuiabá · Mato Grosso</p>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <a
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/15 hover:border-white/40 hover:bg-white/[.03] transition-all duration-300 font-medium uppercase tracking-widest text-white px-5 py-2.5 w-fit"
                style={{ fontSize: 10 }}
              >
                <MessageCircle size={10} strokeWidth={1.5} />
                Reservar Espaço
              </a>
              <a
                href={waLink('Olá! Gostaria de falar sobre uma parceria com a Nativas Grill Cuiabá.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/08 hover:border-white/25 transition-all duration-300 uppercase tracking-widest text-white/35 hover:text-white/55 px-5 py-2.5 w-fit"
                style={{ fontSize: 10 }}
              >
                <MessageCircle size={10} strokeWidth={1.5} />
                WhatsApp Direto
              </a>
            </div>
          </div>

          {/* Horários */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-white/25">Horários</p>
            <div className="flex flex-col gap-3 text-white/40 font-light" style={{ fontSize: 12 }}>
              <div>
                <p className="text-white/20 uppercase tracking-[.15em] mb-1" style={{ fontSize: 10 }}>Almoço</p>
                <p>Seg – Sáb · 11h00 – 15h30</p>
                <p>Domingos · 11h00 – 16h00</p>
              </div>
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,.06)' }} />
              <div>
                <p className="text-white/20 uppercase tracking-[.15em] mb-1" style={{ fontSize: 10 }}>Jantar</p>
                <p>Seg – Sáb · 18h30 – 23h30</p>
              </div>
            </div>
          </div>

          {/* Localização & Contato */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-white/25">Localização & Contato</p>
            <div className="flex flex-col gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/40 hover:text-white/60 transition-colors duration-200 font-light leading-[1.7]"
                style={{ fontSize: 12 }}
              >
                <MapPin size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0 mt-[3px]" />
                <span>
                  Av. Miguel Sutil, 6741<br />
                  Duque de Caxias · Cuiabá – MT<br />
                  <span className="uppercase tracking-[.1em] text-white/20" style={{ fontSize: 10 }}>Ver no Google Maps ↗</span>
                </span>
              </a>
              <a href="tel:+556536214642"
                className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors duration-200 font-light"
                style={{ fontSize: 12 }}>
                <Phone size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
                (65) 3621-4642
              </a>
              <a href="https://instagram.com/nativasgrillcuiaba"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors duration-200 font-light"
                style={{ fontSize: 12 }}>
                <Instagram size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
                @nativasgrillcuiaba
              </a>
            </div>
          </div>

          {/* Reservas */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-white/25">Reservas</p>
            <p className="text-white/35 font-light leading-[1.8]" style={{ fontSize: 12 }}>
              Agende seu evento e receba uma proposta personalizada.
            </p>
            <p
              className="font-display italic text-white/12 leading-[1.1] mt-2"
              style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}
            >
              "Da grelha<br />à memória."
            </p>
          </div>
        </motion.div>

        {/* ── Copyright ── */}
        <motion.div custom={2} variants={fade} initial="hidden" animate={isActive ? 'show' : 'hidden'}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mt-6"
        >
          <div style={{ height: '0.5px', background: 'rgba(255,255,255,.05)', marginBottom: 12, width: '100%' }} className="md:hidden" />
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
            © {new Date().getFullYear()} Nativas Grill Cuiabá · Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {['Política de Privacidade', 'Termos de Uso', 'Instagram'].map(l => (
              <a key={l} href="#"
                className="transition-colors duration-200 hover:text-white/40"
                style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
                {l}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
