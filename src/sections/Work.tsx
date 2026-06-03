import WorkCard from '../components/WorkCard'
import { workData } from '../data/work'

const Work = () => {
  const displayedWorks = workData.slice(0, 4)

  return (
    <section>
      <h1 className="uppercase font-bold text-[176px] leading-40 tracking-tight pb-26 text-center">Selected works</h1>
      <div className="flex flex-col gap-6">
        {displayedWorks.map((work) => (
          <WorkCard
            key={work.title}
            {...work}
          />
        ))}
      </div>
    </section>
  )
}

export default Work
