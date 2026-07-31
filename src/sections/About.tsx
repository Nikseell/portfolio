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

const TECH_SIZES = ['text-lg', 'text-2xl', 'text-xl', 'text-3xl', 'text-base']

const About = () => {
  return (
    <section>
      <h1 className="uppercase font-bold text-[194px] leading-none tracking-tight">About Niklavs</h1>
      <p className="text-medium text-2xl">/How I work</p>
      <p className="text-5xl font-semibold tracking-wide leading-snug pt-10 pb-16">
        I build things that work as good as they look. Equal parts developer and problem solver, I care about the system
        as much as the screen.
      </p>
      <div className="flex gap-16 items-start">
        <div className="w-2xl relative aspect-4/5 border border-white/10 overflow-hidden h-180 bg-white"></div>
        <div className="flex-1 flex flex-col justify-center gap-10 h-180">
          <p className="text-2xl max-w-lg">
            I like software that just works — no drama, no surprises. Most of what I do is chasing that quietly, one
            detail at a time.
          </p>
          <p className="text-xl text-text-muted max-w-lg">Since 2021 — code, pixels, and everything between.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {TECH_STACK.map((tech, i) => (
              <span
                key={tech}
                className={`uppercase font-bold tracking-tight ${TECH_SIZES[i % TECH_SIZES.length]} ${
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
