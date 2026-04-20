import Skills from '../components/Skills'

function HeroSection() {
  return (
    <section>
      <div className="h-screen flex flex-col justify-center py-10">
        <div className="flex flex-col justify-center gap-4 flex-1">
          <div className=" w-fit">
            <div className="flex items-center gap-2">
              <div className="bg-[#5da35d] h-1.5 w-1.5 animate-pulse rounded-full" />
              <p className="text-[#919191] uppercase font-bold">Currently working on porfolio website </p>
            </div>
            <span className="flex flex-col gap-4 ">
              <h1 className="text-[clamp(80px,14vw,200px)] leading-[0.9] font-bold uppercase text-[#E5E2E1]">
                Creative
              </h1>
              <h1 className="text-[clamp(80px,14vw,200px)] leading-[0.9] font-bold uppercase text-[#868686]">
                Developer
              </h1>
            </span>
            <p className="text-right w-full pt-4">Niklavs Laicans / Unity & React Developer</p>
          </div>
          <div className="bg-gray-400/20 h-0.5 mt-10"></div>
          <div className="flex gap-2 pt-4 justify-between">
            <span className="flex gap-2">
              <p className="uppercase text-[#919191]">//</p>
              <p className="uppercase">Creative solutions.</p>
            </span>
            <p className="w-2/4 text-[#919191]">
              Experienced developer with expertise in React and Unity, crafting engaging web applications and immersive
              game experiences. Passionate about clean code, creative problem-solving, and bringing ambitious ideas to
              life.
            </p>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  )
}

export default HeroSection
