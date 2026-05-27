import { motion } from 'framer-motion'

function Monogram() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #89AACC, #4E85BF)',
        padding: 1.5,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            color: 'white',
            fontSize: 11,
            lineHeight: 1,
          }}
        >
          NG
        </span>
      </div>
    </div>
  )
}

const NAV_LINKS = ['Espaço', 'Gastronomia', 'Parcerias']

export function Navbar() {
  return (
    <motion.nav
      className="relative z-20 px-6 py-6 w-full"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        {/* Left */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Monogram />
            <span className="text-white font-semibold text-lg">Nativas Grill</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-white/80 transition-colors text-sm font-medium cursor-pointer">
            Mídia Kit
          </button>
          <button className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer">
            Reservar Espaço
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
