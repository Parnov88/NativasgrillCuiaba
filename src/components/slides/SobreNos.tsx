import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SlideShell, slideItem } from './_SlideShell'
import { waLink } from '../../lib/utils'

const PHOTOS = [
  { url: '/img/sobrenos-salao.png',  alt: 'Salão Nativas Grill',    span: 'col-span-2' },
  { url: '/img/sobrenos-mesa.png',   alt: 'Mesa Nativas Grill',     span: '' },
  { url: '/img/sobrenos-grelha.png', alt: 'Parrilla Nativas Grill', span: '' },
]

export function SobreNos({ isActive }: { isActive: boolean }) {
  return (
    <SlideShell
      tag="03 — Sobre Nós"
      num="03"
      isActive={isActive}
      ambColor="rgba(137,170,204,.1)"
      ambPos="top:15%;right:0%"
    >
      {/* Heading */}
      <motion.div variants={slideItem}>
        <p className="flex items-center gap-[10px] text-[9px] tracking-[.5em] uppercase text-white/35 mb-[14px]">
          <span style={{ width: 24, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.4),transparent)' }} />
          Quem Somos
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
          Sobre <em>Nós</em>
        </h2>
      </motion.div>

      <motion.div
        variants={slideItem}
        className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 flex-1 items-center mt-2"
      >
        {/* Left: copy + CTA */}
        <div className="flex flex-col gap-5">
          <p className="text-[.87rem] text-white/50 leading-[1.95] font-light">
            Rodízio premium com cortes nacionais e importados servidos diretamente à mesa,
            buffet gourmet com mais de 60 itens e carta de bebidas cuidadosamente selecionada.
          </p>
          <p className="text-[.87rem] text-white/50 leading-[1.95] font-light">
            Na icônica Av. Miguel Sutil, o ambiente ideal para eventos corporativos,
            celebrações e momentos que ficam na memória.
          </p>

          <a
            href={waLink('Olá! Gostaria de conhecer o rodízio da Nativas Grill Cuiabá.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-fit px-7 py-[13px] rounded-xl font-semibold text-[.78rem] tracking-[.12em] uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg,#C9A84C,#E8C96A)', color: '#1a1208' }}
          >
            <MessageCircle size={15} strokeWidth={2} />
            Conhecer nosso rodízio
          </a>
        </div>

        {/* Right: photo grid */}
        <div className="grid grid-cols-2 grid-rows-[1.6fr_1fr] gap-3 h-full min-h-[280px]">
          {/* Large top photo */}
          <div
            className="col-span-2 relative rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)' }}
          >
            <img
              src={PHOTOS[0].url}
              alt={PHOTOS[0].alt}
              className="w-full h-full object-cover opacity-90 scale-[1.22]"
              onError={e => (e.currentTarget.style.display = 'none')}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top,rgba(0,0,0,.5) 0%,transparent 60%)' }}
            />
          </div>
          {/* Two smaller photos */}
          {PHOTOS.slice(1).map((p, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)' }}
            >
              <img
                src={p.url}
                alt={p.alt}
                className="w-full h-full object-cover opacity-85 scale-[1.22]"
                onError={e => (e.currentTarget.style.display = 'none')}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,.2)' }} />
            </div>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  )
}
