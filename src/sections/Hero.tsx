function HeroSection() {
  return (
    <section>
      <div className="h-screen flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-4 h-full">
          <div className="flex items-center gap-2 py-4">
            <div className="bg-status-online h-1.5 w-1.5 animate-pulse rounded-full" />
            <p className="text-text-muted uppercase font-extralight">Currently working on porfolio website</p>
          </div>
          <span className="flex flex-col gap-4">
            <h1 className="text-[250px] leading-[0.8] tracking-tight font-bold uppercase">Creative</h1>
            <h1 className="text-[250px] leading-[0.8] tracking-tight font-bold uppercase text-text-secondary">
              Developer
            </h1>
          </span>

          <p className="flex flex-col text-right pt-5">
            <span className="uppercase text">Niklavs Laicans</span>
            <span className="text-text-muted">Unity & React Developer - Riga, LV</span>
          </p>
          <div className="bg-gray-400/15 h-0.5 mt-10"></div>
          <div className="flex gap-2 pt-4 justify-between">
            <span className="flex gap-2">
              <p className="uppercase text-text-muted">//</p>
              <p className="uppercase">Always learning. Always building.</p>
            </span>
            <p className="w-2/4 text-text-muted">
              Experienced developer with expertise in React and Unity, crafting engaging web applications and immersive
              game experiences. Passionate about clean code, creative problem-solving, and bringing ambitious ideas to
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
