import KineticGrid from '../components/KineticGrid'

const SKILLS = ['Web Applications', 'Game Development', 'Interactive Experiences'] as const

function HeroSection() {
  return (
    <section className="flex flex-col justify-center pt-20 relative min-h-screen select-none">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10">
        <KineticGrid />
      </div>
      <div className="flex w-full items-center">
        <h1 className="uppercase font-bold text-[220px] leading-40 tracking-tight">Niklavs</h1>
        <div className="flex flex-1 justify-end items-center">
          <div className="flex flex-col gap-8 w-fit h-full">
            <ul
              aria-label="Specializations"
              className="flex flex-col gap-2 list-disc pl-4 uppercase font-medium"
            >
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="text-text-muted">
              /Based in <span className="text-white">Latvia</span>, Riga,{' '}
              <span className="bg-white text-black px-2">
                {new Date().toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'Europe/Riga',
                })}
              </span>{' '}
              <span className="text-white">( GMT+3 )</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="uppercase font-bold text-[220px] leading-none tracking-tight text-right">Laicans</h1>
      </div>
      <p className="w-md text-xl text-text-muted pt-14">
        Experienced in <span className="text-white">React</span> and{' '}
        <span className="text-white font-medium">Unity</span>, turning ideas into{' '}
        <span className="text-white">well-crafted</span> products, every time.
      </p>
    </section>
  )
}

export default HeroSection
