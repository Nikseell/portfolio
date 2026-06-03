import { experienceData } from '../data/experience'

const Experience = () => {
  return (
    <section>
      <h1 className="uppercase font-bold text-[198px] leading-40 tracking-tight pb-26 text-center">My experience</h1>
      <div className="flex flex-col gap-10">
        {experienceData.map((experience) => (
          <div
            key={experience.title}
            className="flex"
          >
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-3xl font-medium">{experience.company}</p>
              <p className="text-text-muted text-xl">
                {experience.startDate} — {experience.endDate}
              </p>
            </div>
            <p className="flex-1 text-3xl font-medium max-w-md">{experience.title}</p>
            <p className="flex-1 text-xl text-text-muted font-medium px-10">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
