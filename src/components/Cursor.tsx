import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('img')) setHovering(true)
    }

    const handleOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('img')) setHovering(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])

  const variants = {
    default: { x: position.x - 16, y: position.y - 16, width: 32, height: 32 },
    image: { x: position.x - 40, y: position.y - 40, width: 80, height: 80 },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none z-9999 flex items-center justify-center"
      variants={variants}
      animate={hovering ? 'image' : 'default'}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
    >
      {hovering && <ArrowUpRight className="w-14 h-14 text-black" />}
    </motion.div>
  )
}

export default Cursor
