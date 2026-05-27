import { Printer } from 'lucide-react'
import { Monogram } from './Loader'

export function Toolbar({ onLogoClick }: { onLogoClick: () => void }) {
  return (
    <div className="fixed top-5 left-6 z-[850] flex gap-2 items-center">
      <button
        onClick={onLogoClick}
        className="transition-transform hover:scale-[1.08] hover:rotate-[8deg]"
      >
        <Monogram size={32} />
      </button>
      <button
        onClick={() => window.print()}
        className="liquid-glass rounded-full flex items-center gap-[6px] px-4 py-[7px] text-[11px] text-white/50 hover:text-white transition-colors"
      >
        <Printer size={13} strokeWidth={1.5} />
        <span className="max-md:hidden">Baixar PDF</span>
      </button>
    </div>
  )
}
