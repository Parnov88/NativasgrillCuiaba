import { SLIDE_LABELS } from '../data/pricing'

export function ProgressBar({ current }: { current: number }) {
  const pct = ((current + 1) / SLIDE_LABELS.length) * 100
  return (
    <div className="fixed top-0 left-0 right-0 h-px z-[700]" style={{ background: 'rgba(255,255,255,.04)' }}>
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(90deg,rgba(255,255,255,.2),rgba(255,255,255,.6),rgba(255,255,255,.2))',
          boxShadow: '0 0 8px rgba(255,255,255,.15)',
        }}
      />
    </div>
  )
}
