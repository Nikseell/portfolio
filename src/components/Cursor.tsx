import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')
  const [isFinePointer] = useState(() => window.matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    if (!isFinePointer) return

    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })

    const handleOver = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor-link]')
      if (link) {
        setHovering(true)
        setLabel(link.dataset.cursorLink ?? '')
      }
    }

    const handleOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-cursor-link]')) setHovering(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [isFinePointer])

  if (!isFinePointer) return null

  const variants = {
    default: { x: position.x - 16, y: position.y - 16, width: 32, height: 32 },
    image: { x: position.x - 40, y: position.y - 40, width: 80, height: 80 },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none z-100 flex items-center justify-center"
      variants={variants}
      animate={hovering ? 'image' : 'default'}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
    >
      {hovering && <ArrowUpRight className="size-15 text-black" />}
      <AnimatePresence>
        {hovering && label && (
          <motion.span
            key="label"
            className="absolute left-3/4 top-[76%] origin-top-left whitespace-nowrap rounded-full border-3 border-black bg-white px-2.75 py-1.25 text-[11px] leading-tight font-semibold uppercase tracking-widest text-black"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Cursor
