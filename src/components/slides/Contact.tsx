import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Instagram } from 'lucide-react'
import { SlideShell, slideItem } from './_SlideShell'
import { waLink } from '../../lib/utils'

const WA_MSG = 'Olá! Gostaria de solicitar uma proposta para meu evento na Nativas Grill Cuiabá.'

export function Contact({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="10 — Contato"
      num="10"
      isActive={isActive}
      ambColor="rgba(201,168,76,.15)"
      ambPos="top:30%;left:-5%"
    >
      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 flex-1 items-stretch"
      >
        {/* ── LEFT ── */}
        <div className="flex flex-col justify-between">

          {/* Heading */}
          <div>
            <p className="eyebrow text-white/30 mb-3 flex items-center gap-3">
              <span style={{ width: 20, height: 1, background: 'rgba(255,255,255,.2)' }} />
              Fale Conosco
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(180deg,#fff 30%,rgba(255,255,255,.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vamos criar algo <em>juntos</em>
            </h2>
          </div>

          {/* Body */}
          <p
            className="text-white/45 font-light leading-[1.9]"
            style={{ fontSize: 15, paddingLeft: 14, borderLeft: '1.5px solid rgba(255,255,255,.07)' }}
          >
            Eventos corporativos, festas sociais, parcerias com criadores de conteúdo
            ou ativações de marca — fale com a gente e receba uma proposta personalizada.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              ['160',  'Pessoas no espaço'],
              ['2018', 'Em Cuiabá'],
              ['60+',  'Itens no buffet'],
            ].map(([n, l]) => (
              <div key={n}>
                <div
                  className="font-display italic leading-[1]"
                  style={{
                    fontSize: 26,
                    background: 'linear-gradient(90deg,#E8C96A,#C9A84C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {n}
                </div>
                <div className="eyebrow text-white/25 mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] w-fit"
            style={{ fontSize: 14, background: 'linear-gradient(135deg,#E8C96A,#C9A84C)' }}
          >
            <MessageCircle size={17} strokeWidth={1.5} />
            Solicitar proposta via WhatsApp
          </a>

          {/* Contact info */}
          <div
            className="flex flex-col gap-3 pt-4"
            style={{ borderTop: '0.5px solid rgba(255,255,255,.07)' }}
          >
            <a
              href="tel:+556536214642"
              className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors duration-200"
              style={{ fontSize: 13 }}
            >
              <Phone size={13} strokeWidth={1.5} style={{ flexShrink: 0, color: 'rgba(232,201,106,.5)' }} />
              (65) 3621-4642
            </a>
            <div className="flex items-start gap-3 text-white/40" style={{ fontSize: 13 }}>
              <MapPin size={13} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2, color: 'rgba(232,201,106,.5)' }} />
              <span>Av. Miguel Sutil, 6741 — Duque de Caxias<br />Cuiabá — MT · CEP 78043-000</span>
            </div>
            <a
              href="https://instagram.com/nativasgrill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors duration-200"
              style={{ fontSize: 13 }}
            >
              <Instagram size={13} strokeWidth={1.5} style={{ flexShrink: 0, color: 'rgba(232,201,106,.5)' }} />
              @nativasgrill
            </a>
          </div>

        </div>

        {/* ── RIGHT: Brand photo ── */}
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{ border: '1px solid rgba(255,255,255,.08)' }}
        >
          <img
            src="/img/nativasgrill.webp"
            alt="Nativas Grill Cuiabá"
            className="absolute inset-0 w-full h-full object-cover scale-[1.04] group-hover:scale-[1.08] transition-transform duration-700"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top,rgba(0,0,0,.55) 0%,rgba(0,0,0,.08) 50%,rgba(0,0,0,.25) 100%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 z-[1]">
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,.15)', marginBottom: 12 }} />
            <p className="caption text-white/55">Gastronomia premium · Espaço privativo</p>
            <p className="eyebrow text-white/28 mt-2">Cuiabá — Mato Grosso · 2026</p>
          </div>
        </div>

      </motion.div>
    </SlideShell>
  )
}
