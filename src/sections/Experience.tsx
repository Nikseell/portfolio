import { experienceData } from '../data/experience'

const Experience = () => {
  return (
    <section className="@container">
      <h1 className="uppercase font-bold text-[clamp(42px,12.6cqi,200px)] leading-40 tracking-tight text-center lg:pb-20">
        My experience
      </h1>
      <div className="flex flex-col gap-10">
        {experienceData.map((experience) => (
          <div
            key={experience.title}
            className="flex flex-col lg:flex-row gap-2"
          >
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-xl xl:text-3xl">{experience.company}</p>
              <p className="text-text-muted text-base xl:text-xl">
                {experience.startDate} — {experience.endDate}
              </p>
            </div>
            <p className="flex-1 text-xl xl:text-3xl max-w-md">{experience.title}</p>
            <p className="flex-1 text-base xl:text-xl text-text-muted xl:px-10">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
