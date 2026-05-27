import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SlideShell, slideItem } from './_SlideShell'
import { waLink } from '../../lib/utils'

const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1555396273-ef5702e7305a?auto=format&fit=crop&w=800&h=420&q=80',
    alt: 'Fachada Nativas Grill',
    span: 'col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&h=240&q=80',
    alt: 'Salão Nativas Grill',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=400&h=240&q=80',
    alt: 'Ambiente Nativas Grill',
    span: '',
  },
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
            Na Nativas Grill, oferecemos uma experiência completa para quem aprecia um bom
            churrasco. Nosso rodízio conta com cortes selecionados de carnes nacionais e
            importadas, preparados para agradar os mais diversos paladares. Além das carnes
            servidas diretamente na mesa, você encontra um buffet completo com saladas frescas,
            acompanhamentos quentes e diversas opções para montar o prato do seu jeito.
          </p>
          <p className="text-[.87rem] text-white/50 leading-[1.95] font-light">
            Para completar a experiência, contamos com uma carta de drinks refrescantes, uma
            adega com rótulos nacionais e importados e um menu de sobremesas caseiras para
            fechar seu momento com chave de ouro. Tudo isso na icônica Av. Miguel Sutil — a
            atmosfera perfeita para aproveitar bons momentos em Cuiabá.
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
              className="w-full h-full object-cover opacity-80"
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
                className="w-full h-full object-cover opacity-75"
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
