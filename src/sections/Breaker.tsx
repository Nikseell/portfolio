import { useEffect, useRef } from 'react'

const Breaker = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) videoRef.current?.pause()
  }, [])

  return (
    <section className="flex justify-center -mb-26">
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
    </section>
  )
}

export default Breaker
