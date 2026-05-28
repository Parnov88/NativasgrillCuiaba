import { motion } from 'framer-motion'
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react'
import { waLink } from '../lib/utils'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Sutil,+6741+Duque+de+Caxias+Cuiab%C3%A1+MT'

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export function Footer({ isActive }: { isActive: boolean }) {
  return (
    <footer
      className="slide flex-col"
      style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,.06)' }}
    >
      {/* Ambient */}
      <div
        className="amb"
        style={{
          width: 500,
          height: 500,
          bottom: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle,rgba(78,133,191,.09) 0%,transparent 70%)',
        }}
      />

      {/* Inner */}
      <div className="relative z-[2] flex flex-col h-full px-8 md:px-14 pt-16 pb-10">

        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-12"
          custom={0}
          variants={fade}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
        >
          <span style={{ display: 'inline-block', width: 20, height: 1, background: 'rgba(255,255,255,.2)', verticalAlign: 'middle', marginRight: 12 }} />
          Nativas Grill · Cuiabá · 2026
        </motion.p>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 flex-1">

          {/* Col 1 — Branding */}
          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <div>
              <div
                className="font-display tracking-widest uppercase text-white"
                style={{ fontSize: 'var(--ts-4)', lineHeight: 1.1 }}
              >
                Nativas<br />Grill
              </div>
              <div className="text-white/20 tracking-widest uppercase mt-1" style={{ fontSize: 'var(--ts-0)' }}>
                Cuiabá
              </div>
            </div>

            <p className="text-white/40 font-light leading-[1.8]" style={{ fontSize: 'var(--ts-2)' }}>
              Gastronomia premium no<br />
              Centro-Oeste desde 2006.<br />
              Tradição, excelência e<br />
              memórias à mesa.
            </p>

            <a
              href="https://instagram.com/nativasgrillcuiaba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/30 hover:text-white/70 transition-colors duration-300 w-fit"
              style={{ fontSize: 'var(--ts-1)' }}
            >
              <Instagram size={13} strokeWidth={1.5} />
              @nativasgrillcuiaba
            </a>
          </motion.div>

          {/* Col 2 — Horários */}
          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <div className="eyebrow" style={{ borderBottom: '1px solid rgba(255,255,255,.06)', paddingBottom: 12 }}>
              Horários
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="text-white/55 font-medium uppercase tracking-[.15em] mb-2" style={{ fontSize: 'var(--ts-0)' }}>
                  Almoço
                </div>
                <div className="text-white/35 font-light leading-[1.9]" style={{ fontSize: 'var(--ts-1)' }}>
                  Seg – Sáb<br />
                  <span className="text-white/55">11h00 – 15h30</span>
                </div>
                <div className="text-white/35 font-light leading-[1.9] mt-2" style={{ fontSize: 'var(--ts-1)' }}>
                  Domingos<br />
                  <span className="text-white/55">11h00 – 16h00</span>
                </div>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,.05)' }} />

              <div>
                <div className="text-white/55 font-medium uppercase tracking-[.15em] mb-2" style={{ fontSize: 'var(--ts-0)' }}>
                  Jantar
                </div>
                <div className="text-white/35 font-light leading-[1.9]" style={{ fontSize: 'var(--ts-1)' }}>
                  Seg – Sáb<br />
                  <span className="text-white/55">18h30 – 23h30</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Col 3 — Localização & Contato */}
          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-5"
          >
            <div className="eyebrow" style={{ borderBottom: '1px solid rgba(255,255,255,.06)', paddingBottom: 12 }}>
              Localização &amp; Contato
            </div>

            <address className="not-italic flex flex-col gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/35 hover:text-white/65 transition-colors duration-300 group"
              >
                <MapPin size={13} strokeWidth={1.5} className="mt-[3px] flex-shrink-0 text-white/25 group-hover:text-white/55 transition-colors duration-300" />
                <span className="font-light leading-[1.85]" style={{ fontSize: 'var(--ts-1)' }}>
                  Av. Miguel Sutil, 6741<br />
                  Duque de Caxias<br />
                  Cuiabá – MT<br />
                  CEP 78043-000
                  <span className="block text-white/20 mt-1 uppercase tracking-[.12em]" style={{ fontSize: 'var(--ts-0)' }}>
                    Ver no Google Maps ↗
                  </span>
                </span>
              </a>

              <a
                href="tel:+556536214642"
                className="flex items-center gap-3 text-white/35 hover:text-white/65 transition-colors duration-300"
              >
                <Phone size={13} strokeWidth={1.5} className="flex-shrink-0 text-white/25" />
                <span style={{ fontSize: 'var(--ts-1)' }}>(65) 3621-4642</span>
              </a>
            </address>
          </motion.div>

          {/* Col 4 — CTA Reserva */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate={isActive ? 'show' : 'hidden'}
            className="flex flex-col gap-6 justify-between"
          >
            <div className="eyebrow" style={{ borderBottom: '1px solid rgba(255,255,255,.06)', paddingBottom: 12 }}>
              Reservas
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-white/35 font-light leading-[1.8]" style={{ fontSize: 'var(--ts-1)' }}>
                Agende seu evento com a nossa equipe e receba uma proposta personalizada.
              </p>

              <a
                href={waLink('Olá! Gostaria de solicitar uma proposta para meu evento na Nativas Grill Cuiabá.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 text-white
                           border border-white/15 hover:border-white/60 hover:bg-white/[.03]
                           transition-all duration-300 rounded-none font-sans font-medium
                           uppercase tracking-widest"
                style={{ fontSize: 'var(--ts-0)' }}
              >
                <MessageCircle size={12} strokeWidth={1.5} />
                Reservar Espaço
              </a>

              <a
                href={waLink('Olá! Gostaria de solicitar uma proposta para meu evento na Nativas Grill Cuiabá.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6
                           transition-all duration-300 font-sans font-medium
                           uppercase tracking-widest text-white/30 hover:text-white/60"
                style={{
                  fontSize: 'var(--ts-0)',
                  background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(232,201,106,.08))',
                  border: '1px solid rgba(201,168,76,.2)',
                }}
              >
                <MessageCircle size={12} strokeWidth={1.5} />
                WhatsApp Direto
              </a>
            </div>

            {/* Decorative serif quote */}
            <p
              className="font-display italic text-white/15 leading-[1.5] mt-auto"
              style={{ fontSize: 'var(--ts-3)' }}
            >
              "Da grelha<br />à memória."
            </p>
          </motion.div>
        </div>

        {/* Bottom bar — legal */}
        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-10 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
        >
          <p style={{ fontSize: 'var(--ts-0)', color: 'rgba(255,255,255,.22)' }}>
            © {new Date().getFullYear()} Nativas Grill Cuiabá. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            {['Política de Privacidade', 'Termos de Uso'].map(label => (
              <a
                key={label}
                href="#"
                className="transition-colors duration-200 hover:text-white/60"
                style={{ fontSize: 'var(--ts-0)', color: 'rgba(255,255,255,.22)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="https://instagram.com/nativasgrillcuiaba"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white/60"
              style={{ fontSize: 'var(--ts-0)', color: 'rgba(255,255,255,.22)' }}
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
