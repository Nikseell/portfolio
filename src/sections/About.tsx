const TECH_STACK = [
  'Unity',
  'C#',
  'JavaScript',
  'TypeScript',
  'VS Code',
  'Tailwindcss',
  'React',
  'HTML5',
  'CSS3',
  'Git',
  'NestJS',
  'NodeJS',
  'MongoDB',
]

const TECH_SIZES = ['xl:text-lg', 'text-xl xl:text-2xl', 'xl:text-xl', 'text-xl xl:text-3xl', 'xl:text-base']

const About = () => {
  return (
    <section className="@container">
      <h1 className="uppercase font-bold text-[clamp(43px,12.6cqi,200px)] tracking-tight text-center leading-tight">
        About Niklavs
      </h1>
      <p className="text-xl xl:text-2xl">/How I work</p>
      <p className="text-3xl xl:text-5xl font-medium tracking-wide leading-snug pt-10 pb-10 xl:pb-16">
        I build things that work as good as they look. Equal parts developer and problem solver, I care about the system
        as much as the screen.
      </p>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start lg:items-center">
        <div className="w-full lg:w-sm xl:w-2xl shrink-0 relative aspect-4/5 border border-white/10 overflow-hidden bg-white"></div>
        <div className="flex-1 flex flex-col justify-center gap-10">
          <p className="lg:text-xl xl:text-2xl max-w-lg">
            I like software that just works — no drama, no surprises. Most of what I do is chasing that quietly, one
            detail at a time.
          </p>
          <p className="lg:text-xl text-text-muted max-w-lg">Since 2021 — code, pixels, and everything between.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {TECH_STACK.map((tech, i) => (
              <span
                key={tech}
                className={`uppercase font-semibold tracking-tight ${TECH_SIZES[i % TECH_SIZES.length]} ${
                  i % 4 === 0 ? 'bg-white text-black px-2' : 'text-white/70 hover:text-white transition-colors'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
