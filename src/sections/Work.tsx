import { motion } from 'motion/react'
import WorkCard from '../components/WorkCard'
import { workData } from '../data/work'
import { fadeUp } from '../lib/animations'
import Reveal from '../components/Reveal'

const Work = () => {
  const displayedWorks = workData.slice(0, 4)

  return (
    <section id="work">
      <Reveal
        as={motion.h1}
        variants={fadeUp()}
        inView
        className="@container pb-6 xl:pb-16 uppercase font-semibold text-[clamp(38px,11.3cqi,174px)] leading-20 md:leading-40 tracking-tight w-full text-center text-nowrap"
      >
        Selected works
      </Reveal>
      <div className="flex flex-col gap-10">
        {displayedWorks.map((work) => (
          <Reveal
            as={motion.div}
            variants={fadeUp()}
            inView
            key={work.title}
          >
            <WorkCard {...work} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Work
