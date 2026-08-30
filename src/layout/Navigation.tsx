import { motion } from 'motion/react'
import { useLenis } from '../lib/lenis'
import { ArrowUpRight } from 'lucide-react'

const NAV_ITEMS = ['Home', 'Work', 'Experience', 'About']

const SCROLL_OFFSET = -96

const textVariants = {
  initial: { y: 0 },
  hover: { y: '-100%' },
}

const duplicateVariants = {
  initial: { y: '100%' },
  hover: { y: 0 },
}

const transition = { duration: 0.2, ease: 'easeOut' } as const

const Navigation = () => {
  const lenis = useLenis()

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (target) lenis?.scrollTo(target, { offset: SCROLL_OFFSET })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/40 backdrop-blur-xs hidden lg:flex">
      <div className="w-full h-16 flex items-center justify-between max-w-400 mx-auto">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="hidden xl:block text-2xl uppercase font-medium flex-1 text-left cursor-pointer"
        >
          Niklavs Laicans
        </button>
        <div className="hidden lg:flex flex-1 gap-12 justify-center">
          {NAV_ITEMS.map((title, i) => (
            <motion.button
              key={title}
              type="button"
              onClick={() => scrollToSection(title.toLowerCase())}
              initial="initial"
              whileHover="hover"
              className="relative block overflow-hidden cursor-pointer"
            >
              <motion.span
                variants={textVariants}
                transition={transition}
                className="block"
              >
                /{title}
                <span className="text-text-muted text-xs pl-1 align-top">0{i + 1}</span>
              </motion.span>
              <motion.span
                variants={duplicateVariants}
                transition={transition}
                className="absolute inset-0 block"
              >
                /{title}
                <span className="text-text-muted text-xs pl-1 align-top">0{i + 1}</span>
              </motion.span>
            </motion.button>
          ))}
        </div>
        <div className="hidden xl:flex justify-end flex-1">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="flex border py-2 px-4 cursor-pointer"
          >
            Contact me
            <ArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
