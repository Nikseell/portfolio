import { motion } from 'motion/react'
import KineticGrid from '../components/KineticGrid'
import Reveal from '../components/Reveal'
import { swingUp, fadeUp, swingUpReverse } from '../lib/animations'
import { useEffect, useState } from 'react'

const SKILLS = ['Web Applications', 'Game Development', 'Interactive Experiences'] as const

const Hero = () => {
  const getRigaTime = () =>
    new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Riga',
    })

  const [time, setTime] = useState(getRigaTime)

  useEffect(() => {
    const interval = setInterval(() => setTime(getRigaTime()), 1000 * 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="flex flex-col justify-center pt-0 xl:pt-20 relative min-h-screen select-none"
    >
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10 hidden xl:block">
        <KineticGrid />
      </div>
      <div className="flex w-full items-center flex-col-reverse xl:flex-row">
        <Reveal
          variants={swingUp()}
          clip
          className="uppercase font-bold text-[clamp(80px,15vw,220px)] leading-none tracking-tight text-right"
        >
          Niklavs
        </Reveal>
        <div className="flex w-full xl:justify-end">
          <div className="flex flex-col gap-8 w-full xl:w-fit">
            <ul
              aria-label="Specializations"
              className="flex flex-col gap-4 list-disc md:pl-4 uppercase pl-4 text-xs md:text-base"
            >
              {SKILLS.map((skill, i) => (
                <Reveal
                  key={skill}
                  as={motion.li}
                  variants={fadeUp(0.4 + i * 0.15, 5)}
                >
                  {skill}
                </Reveal>
              ))}
            </ul>
            <Reveal
              variants={fadeUp(0.3)}
              className="text-text-muted pb-8 md:pb-0 text-xs md:text-base"
            >
              /Based in <span className="text-white">Latvia</span>, Riga,{' '}
              <span className="bg-white text-black px-2">{time}</span>
              <span className="text-white"> ( GMT+3 )</span>
            </Reveal>
          </div>
        </div>
      </div>
      <div>
        <Reveal
          variants={swingUpReverse(0.2)}
          clip
          className="uppercase font-bold text-[clamp(80px,15vw,220px)] leading-none tracking-tight text-right"
        >
          Laicans
        </Reveal>
      </div>
      <Reveal
        variants={fadeUp(0.3)}
        className="max-w-xs md:max-w-md text-sm xl:text-xl text-text-muted pt-8 md:pt-14"
      >
        Experienced in <span className="text-white">React</span> and{' '}
        <span className="text-white font-medium">Unity</span>, turning ideas into{' '}
        <span className="text-white">well-crafted</span> products, every time.
      </Reveal>
    </section>
  )
}

export default Hero
