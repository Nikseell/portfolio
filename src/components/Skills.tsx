const skills = [
  { name: 'Unity', icon: 'devicon-unity-plain' },
  { name: 'C#', icon: 'devicon-csharp-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'VS Code', icon: 'devicon-vscode-plain' },
  { name: 'Tailwindcss', icon: 'devicon-tailwindcss-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'NestJS', icon: 'devicon-nestjs-plain' },
  { name: 'NodeJS', icon: 'devicon-nodejs-plain' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
]

const Skills = () => {
  return (
    <div className="overflow-hidden flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {[0, 1].map((n) => (
        <div
          key={n}
          className="flex shrink-0 animate-marquee gap-12 pr-12"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 opacity-65"
            >
              <i className={`${skill.icon} text-3xl text-white`} />
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Skills
