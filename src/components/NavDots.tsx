import { SLIDE_LABELS } from '../data/pricing'

interface Props {
  current: number
  onDotClick: (i: number) => void
}

export function NavDots({ current, onDotClick }: Props) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[800] flex flex-col gap-[10px] max-md:hidden">
      {SLIDE_LABELS.map((label, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="relative w-[7px] h-[7px] rounded-full border border-white/20 transition-all duration-300 hover:border-white/50 group"
          style={
            i === current
              ? { background: 'rgba(255,255,255,.8)', borderColor: 'rgba(255,255,255,.8)' }
              : {}
          }
        >
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] tracking-[.2em] uppercase text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}
