import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'
import { fadeUp } from '../lib/animations'

const Breaker = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) videoRef.current?.pause()
  }, [])

  return (
    <section className="flex justify-center -mb-26">
      <Reveal
        variants={fadeUp()}
        inView
        className="w-full max-w-400"
      >
        <video
          ref={videoRef}
          src="/glitch.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-auto object-cover grayscal rounded-2xl"
        />
      </Reveal>
    </section>
  )
}

export default Breaker
