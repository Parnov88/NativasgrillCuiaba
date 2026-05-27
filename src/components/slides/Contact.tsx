import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Instagram } from 'lucide-react'
import { SlideShell, slideItem } from './_SlideShell'
import { waLink } from '../../lib/utils'

const WA_MSG = 'Olá! Vi o mídia kit da Nativas Grill e gostaria de solicitar uma proposta para meu evento.'

export function Contact({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="08 — Contato"
      num="08"
      isActive={isActive}
      ambColor="rgba(78,133,191,.15)"
      ambPos="top:30%;left:-5%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Fale Conosco
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
          Vamos criar algo <em>juntos</em>
        </h2>
      </motion.div>

      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 flex-1 items-center mt-2"
      >
        {/* Left: CTA */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[.9rem] text-white/45 leading-[1.9] font-light max-w-[420px]"
            style={{ paddingLeft: 14, borderLeft: '1.5px solid rgba(255,255,255,.07)' }}
          >
            Seja para eventos corporativos, festas sociais, parcerias com criadores de conteúdo ou
            ativações de marca — a Nativas Grill está disponível para construir experiências únicas
            ao seu lado.
          </p>

          {/* WhatsApp button */}
          <a
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white text-[.85rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg w-fit"
            style={{ background: 'linear-gradient(135deg,#89AACC,#4E85BF)' }}
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Solicitar proposta via WhatsApp
          </a>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+556536214642"
              className="flex items-center gap-3 text-[.75rem] text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              <Phone size={14} strokeWidth={1.5} style={{ flexShrink: 0, color: 'rgba(137,170,204,.6)' }} />
              (65) 3621-4642
            </a>
            <div className="flex items-start gap-3 text-[.75rem] text-white/40">
              <MapPin size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2, color: 'rgba(137,170,204,.6)' }} />
              <span>Av. Miguel Sutil, 6741 — Duque de Caxias<br />Cuiabá — MT · CEP 78043-000</span>
            </div>
            <a
              href="https://instagram.com/nativasgrill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[.75rem] text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              <Instagram size={14} strokeWidth={1.5} style={{ flexShrink: 0, color: 'rgba(137,170,204,.6)' }} />
              @nativasgrill
            </a>
          </div>
        </div>

        {/* Right: Closing card */}
        <div className="flex flex-col gap-4">
          <div className="glass-card rounded-2xl p-7 flex flex-col gap-5">
            <div
              className="font-display italic text-[clamp(3.5rem,7vw,6rem)] leading-[.9] tracking-[-0.03em]"
              style={{
                background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,.4) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nativas<br />Grill
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }} />
            <div className="flex flex-col gap-[6px]">
              {[
                'Gastronomia premium',
                'Espaço privativo',
                'Cuiabá · Mato Grosso',
                'Disponível para parcerias',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-[.7rem] text-white/35">
                  <div
                    style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(137,170,204,.5)', flexShrink: 0 }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mídia Kit label */}
          <div className="text-center text-[9px] tracking-[.4em] uppercase text-white/20">
            Mídia Kit · 2026
          </div>
        </div>
      </motion.div>
    </SlideShell>
  )
}
