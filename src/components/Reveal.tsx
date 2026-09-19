import { useRef } from 'react'
import { motion, useInView, type Variants } from 'motion/react'

type RevealProps = {
  variants: Variants
  as?: typeof motion.p | typeof motion.li | typeof motion.nav | typeof motion.ul | typeof motion.div | typeof motion.h1
  className?: string
  clip?: boolean
  inView?: boolean
  children: React.ReactNode
  [key: string]: unknown
}

const Reveal = ({
  variants,
  as: Tag = motion.p,
  className,
  clip = false,
  inView = false,
  children,
  ...rest
}: RevealProps) => {
  const observeRef = useRef<HTMLElement>(null)
  const isIntersecting = useInView(observeRef, { once: true, amount: 0.4 })
  const animateState = inView ? (isIntersecting ? 'visible' : 'hidden') : 'visible'

  const content = (
    <Tag
      ref={clip ? undefined : (observeRef as React.Ref<never>)}
      variants={variants}
      initial="hidden"
      animate={animateState}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )

  return clip ? (
    <div
      ref={observeRef as React.Ref<HTMLDivElement>}
      className="overflow-clip"
    >
      {content}
    </div>
  ) : (
    content
  )
}

export default Reveal
