import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react'
import { waLink } from '../lib/utils'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Sutil,+6741+Duque+de+Caxias+Cuiab%C3%A1+MT'
const WA_MSG =
  'Olá! Gostaria de solicitar uma proposta para meu evento na Nativas Grill Cuiabá.'

export function Footer() {
  return (
    <footer
      className="relative flex-shrink-0"
      style={{
        background: '#000',
        borderTop: '0.5px solid rgba(255,255,255,.07)',
        scrollSnapAlign: 'end',
      }}
    >
      {/* ── Main row ── */}
      <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 px-8 md:px-14 pt-10 pb-8">

        {/* Brand + CTAs */}
        <div className="flex flex-col gap-5">
          <div>
            <div
              className="font-display leading-[.88] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.6rem,3vw,2.6rem)' }}
            >
              <span className="block text-white">Nativas</span>
              <span className="italic block" style={{ color: '#C9A84C' }}>Grill</span>
            </div>
            <p className="eyebrow text-white/20 tracking-[.4em] mt-3">Cuiabá · Mato Grosso</p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/15 hover:border-white/40 hover:bg-white/[.03] transition-all duration-300 font-medium uppercase tracking-widest text-white px-4 py-2 w-fit"
              style={{ fontSize: 9 }}
            >
              <MessageCircle size={9} strokeWidth={1.5} />
              Reservar Espaço
            </a>
            <a
              href={waLink('Olá! Gostaria de falar sobre uma parceria com a Nativas Grill Cuiabá.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/07 hover:border-white/20 transition-all duration-300 uppercase tracking-widest text-white/30 hover:text-white/55 px-4 py-2 w-fit"
              style={{ fontSize: 9 }}
            >
              <MessageCircle size={9} strokeWidth={1.5} />
              WhatsApp Direto
            </a>
          </div>
        </div>

        {/* Horários */}
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-white/25">Horários</p>
          <div className="flex flex-col gap-2 text-white/40 font-light" style={{ fontSize: 11.5 }}>
            <div>
              <p className="text-white/18 uppercase tracking-[.12em] mb-0.5" style={{ fontSize: 9 }}>Almoço</p>
              <p>Seg – Sáb · 11h00 – 15h30</p>
              <p>Domingos · 11h00 – 16h00</p>
            </div>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,.05)' }} />
            <div>
              <p className="text-white/18 uppercase tracking-[.12em] mb-0.5" style={{ fontSize: 9 }}>Jantar</p>
              <p>Seg – Sáb · 18h30 – 23h30</p>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-white/25">Endereço</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-white/40 hover:text-white/60 transition-colors duration-200 font-light leading-[1.7]"
            style={{ fontSize: 11.5 }}
          >
            <MapPin size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0 mt-[3px]" />
            <span>
              Av. Miguel Sutil, 6741<br />
              Duque de Caxias<br />
              Cuiabá – MT · 78043-000<br />
              <span className="uppercase tracking-[.1em] text-white/20" style={{ fontSize: 9 }}>Ver no Google Maps ↗</span>
            </span>
          </a>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-white/25">Contato</p>
          <div className="flex flex-col gap-2">
            <a href="tel:+556536214642"
              className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors duration-200 font-light"
              style={{ fontSize: 11.5 }}>
              <Phone size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
              (65) 3621-4642
            </a>
            <a href="https://instagram.com/nativasgrillcuiaba"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors duration-200 font-light"
              style={{ fontSize: 11.5 }}>
              <Instagram size={11} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
              @nativasgrillcuiaba
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 px-8 md:px-14 py-4"
        style={{ borderTop: '0.5px solid rgba(255,255,255,.05)' }}
      >
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
    </footer>
  )
}
