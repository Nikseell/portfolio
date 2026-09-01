import type { Variants } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

export const fadeDown = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: EASE, delay } },
})

export const fadeUp = (delay = 0, distance = 100, duration = 1.5): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: duration, ease: EASE, delay } },
})

export const swingUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 300, rotate: 12 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1.5, ease: EASE, delay },
  },
})

export const swingUpReverse = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 300, rotate: -12 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1.5, ease: EASE, delay },
  },
})
