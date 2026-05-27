export function fmt(n: number) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export const AG = 'linear-gradient(90deg, #89AACC, #4E85BF)'
export const AG135 = 'linear-gradient(135deg, #89AACC, #4E85BF)'
export const GRAD_TEXT = 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,.95) 50%, rgba(255,255,255,.7) 100%)'

export const WA_NUMBER = '556536214642'
export const WA_BASE = `https://wa.me/${WA_NUMBER}`

export function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}
