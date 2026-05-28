import { Instagram, MapPin, Phone } from 'lucide-react'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Sutil,+6741+Duque+de+Caxias+Cuiab%C3%A1+MT'

export function Footer() {
  return (
    <footer
      className="relative flex-shrink-0"
      style={{
        background: '#000',
        borderTop: '0.5px solid rgba(255,255,255,.08)',
        scrollSnapAlign: 'end',
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 px-10 md:px-16 py-10">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="font-display leading-[.9] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.4rem,2.5vw,2.2rem)' }}>
            <span className="block text-white">Nativas</span>
            <span className="italic block" style={{ color: '#C9A84C' }}>Grill</span>
          </div>
          <p className="eyebrow text-white/20 mt-1">Cuiabá · Mato Grosso</p>
        </div>

        {/* Horários */}
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-white/30">Horários</p>
          <div className="flex flex-col gap-2 font-light text-white/40" style={{ fontSize: 12 }}>
            <span>Seg – Sáb · 11h00 – 15h30</span>
            <span>Domingos · 11h00 – 16h00</span>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,.06)' }} />
            <span>Seg – Sáb · 18h30 – 23h30</span>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-white/30">Endereço</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-white/40 hover:text-white/60 transition-colors font-light leading-[1.7]"
            style={{ fontSize: 12 }}
          >
            <MapPin size={11} strokeWidth={1.5} className="flex-shrink-0 mt-[3px] text-white/20" />
            <span>
              Av. Miguel Sutil, 6741<br />
              Duque de Caxias<br />
              Cuiabá – MT · 78043-000
              <span className="block text-white/20 uppercase tracking-[.1em] mt-1" style={{ fontSize: 9 }}>
                Ver no Google Maps ↗
              </span>
            </span>
          </a>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-white/30">Contato</p>
          <div className="flex flex-col gap-2">
            <a href="tel:+556536214642"
              className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors font-light"
              style={{ fontSize: 12 }}>
              <Phone size={10} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
              (65) 3621-4642
            </a>
            <a href="https://instagram.com/nativasgrillcuiaba"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors font-light"
              style={{ fontSize: 12 }}>
              <Instagram size={10} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
              @nativasgrillcuiaba
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 px-10 md:px-16 py-4"
        style={{ borderTop: '0.5px solid rgba(255,255,255,.05)' }}
      >
        <p style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
          © {new Date().getFullYear()} Nativas Grill Cuiabá · Todos os direitos reservados.
        </p>
        <div className="flex gap-5">
          {['Política de Privacidade', 'Termos de Uso'].map(l => (
            <a key={l} href="#"
              className="hover:text-white/40 transition-colors"
              style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
