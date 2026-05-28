import { Instagram, MapPin, Phone } from 'lucide-react'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Sutil,+6741+Duque+de+Caxias+Cuiab%C3%A1+MT'

export function Footer() {
  return (
    <footer className="slide" style={{ background: '#000', height: '40vh' }}>

      {/* content centered */}
      <div className="relative z-[2] flex flex-col justify-center h-full">

        {/* separator */}
        <div style={{ height: '0.5px', background: 'rgba(255,255,255,.08)' }} />

        {/* 4-column grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 items-start"
          style={{ gap: '2rem 3rem', padding: '2.5rem 4rem' }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div
              className="font-display leading-[.9] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.6rem,2.8vw,2.4rem)' }}
            >
              <span className="block text-white">Nativas</span>
              <span className="italic block" style={{ color: '#C9A84C' }}>Grill</span>
            </div>
            <p className="eyebrow text-white/20 mt-1">Cuiabá · Mato Grosso</p>
          </div>

          {/* Horários */}
          <div className="flex flex-col gap-2">
            <p className="eyebrow text-white/30 mb-1">Horários</p>
            <div className="flex flex-col gap-1.5 font-light text-white/40" style={{ fontSize: 11.5 }}>
              <span>Seg – Sáb · 11h00 – 15h30</span>
              <span>Domingos · 11h00 – 16h00</span>
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,.06)', margin: '2px 0' }} />
              <span>Seg – Sáb · 18h30 – 23h30</span>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex flex-col gap-2">
            <p className="eyebrow text-white/30 mb-1">Endereço</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white/40 hover:text-white/60 transition-colors font-light leading-[1.65]"
              style={{ fontSize: 11.5 }}
            >
              <MapPin size={10} strokeWidth={1.5} className="flex-shrink-0 mt-[3px] text-white/20" />
              <span>
                Av. Miguel Sutil, 6741<br />
                Duque de Caxias<br />
                Cuiabá – MT · 78043-000
              </span>
            </a>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-2">
            <p className="eyebrow text-white/30 mb-1">Contato</p>
            <div className="flex flex-col gap-1.5">
              <a
                href="tel:+556536214642"
                className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors font-light"
                style={{ fontSize: 11.5 }}
              >
                <Phone size={10} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
                (65) 3621-4642
              </a>
              <a
                href="https://instagram.com/nativasgrillcuiaba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors font-light"
                style={{ fontSize: 11.5 }}
              >
                <Instagram size={10} strokeWidth={1.5} className="text-white/20 flex-shrink-0" />
                @nativasgrillcuiaba
              </a>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1"
          style={{
            borderTop: '0.5px solid rgba(255,255,255,.05)',
            padding: '0.75rem 4rem',
          }}
        >
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}>
            © {new Date().getFullYear()} Nativas Grill Cuiabá · Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {['Política de Privacidade', 'Termos de Uso'].map(l => (
              <a
                key={l}
                href="#"
                className="hover:text-white/40 transition-colors"
                style={{ fontSize: 10, color: 'rgba(255,255,255,.18)' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
