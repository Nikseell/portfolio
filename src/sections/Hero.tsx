import KineticGrid from '../components/KineticGrid'

const SKILLS = ['Web Applications', 'Game Development', 'Interactive Experiences'] as const

function HeroSection() {
  return (
    <section id="home" className="flex flex-col justify-center pt-0 xl:pt-20 relative min-h-screen select-none">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10 hidden xl:block">
        <KineticGrid />
      </div>
      <div className="flex w-full items-center flex-col-reverse xl:flex-row">
        <p className="uppercase font-bold text-[clamp(80px,15vw,220px)] leading-20 md:leading-40 tracking-tight w-full">
          Niklavs
        </p>
        <div className="flex w-full xl:justify-end">
          <div className="flex flex-col gap-8 w-full xl:w-fit">
            <ul
              aria-label="Specializations"
              className="flex flex-col gap-4 list-disc md:pl-4 uppercase pl-4 text-xs md:text-base"
            >
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="text-text-muted pb-8 md:pb-0 text-xs md:text-base">
              /Based in <span className="text-white">Latvia</span>, Riga,{' '}
              <span className="bg-white text-black px-2">
                {new Date().toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'Europe/Riga',
                })}
              </span>
              <span className="text-white"> ( GMT+3 )</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase font-bold text-[clamp(80px,15vw,220px)] leading-none tracking-tight text-right">
          Laicans
        </p>
      </div>
      <p className="max-w-xs md:max-w-md text-sm xl:text-xl text-text-muted pt-8 md:pt-14">
        Experienced in <span className="text-white">React</span> and{' '}
        <span className="text-white font-medium">Unity</span>, turning ideas into{' '}
        <span className="text-white">well-crafted</span> products, every time.
      </p>
    </section>
  )
}

export default HeroSection
