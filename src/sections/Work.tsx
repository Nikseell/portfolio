import WorkCard from '../components/WorkCard'
import { workData } from '../data/work'

const Work = () => {
  const displayedWorks = workData.slice(0, 4)

  return (
    <section id="work">
      <div className="@container pb-6 xl:pb-16">
        <h1 className="uppercase font-semibold text-[clamp(38px,11.3cqi,174px)] leading-20 md:leading-40 tracking-tight w-full text-center text-nowrap">
          Selected works
        </h1>
      </div>
      <div className="flex flex-col gap-10">
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
