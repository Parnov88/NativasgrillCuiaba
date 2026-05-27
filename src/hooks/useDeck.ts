import { useEffect, useRef, useState, useCallback } from 'react'

export function useDeck(slideCount: number) {
  const deckRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((i: number) => {
    const deck = deckRef.current
    if (!deck) return
    const slides = deck.querySelectorAll<HTMLElement>('.slide')
    const target = slides[Math.max(0, Math.min(slideCount - 1, i))]
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [slideCount])

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return

    const handleScroll = () => {
      const slides = deck.querySelectorAll<HTMLElement>('.slide')
      const h = deck.clientHeight
      const dt = deck.getBoundingClientRect().top
      let active = 0
      slides.forEach((s, i) => {
        if (s.getBoundingClientRect().top - dt <= h / 2) active = i
      })
      setCurrent(active)
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(current + 1) }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(current - 1) }
    }

    deck.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKey)
    return () => {
      deck.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKey)
    }
  }, [current, goTo])

  return { deckRef, current, goTo }
}
