import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  tag: string
  num: string
  children: ReactNode
  isActive: boolean
  ambColor?: string
  ambPos?: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export function SlideShell({
  tag,
  num,
  children,
  isActive,
  ambColor = 'rgba(78,133,191,.18)',
  ambPos = 'top:5%;right:-8%',
}: Props) {
  return (
    <div className="slide">
      {/* grid bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)',
        }}
      />
      {/* ambient */}
      <div
        className="amb"
        style={{
          width: 450,
          height: 450,
          background: `radial-gradient(circle,${ambColor} 0%,transparent 70%)`,
          ...parsePosStyle(ambPos),
        }}
      />
      {/* ghost number */}
      <div
        className="absolute bottom-[-28px] right-5 z-0 font-display italic text-white/[.025] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(7rem,20vw,20rem)', letterSpacing: '-.05em' }}
      >
        {num}
      </div>
      {/* inner content */}
      <motion.div
        className="flex-1 flex flex-col px-8 md:px-14 pt-16 pb-12 relative z-[2] w-full"
        variants={container}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
      >
        {children}
      </motion.div>
    </div>
  )
}

export { item as slideItem }

function parsePosStyle(pos: string): Record<string, string> {
  const style: Record<string, string> = {}
  pos.split(';').forEach(p => {
    const [k, v] = p.split(':').map(s => s.trim())
    if (k && v) style[k] = v
  })
  return style
}
