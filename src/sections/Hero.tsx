function HeroSection() {
  return (
    <section>
      <div className="h-screen flex flex-col justify-center">
        <div className="flex flex-col  w-fit justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#5da35d] h-1.5 w-1.5 animate-pulse rounded-full" />
            <p className="text-[#919191] uppercase font-bold">Currently working on porfolio website </p>
          </div>
          <span className="flex flex-col gap-4 ">
            <h1 className="text-[clamp(80px,14vw,200px)] leading-[0.9] font-bold uppercase text-[#E5E2E1]">Creative</h1>
            <h1 className="text-[clamp(80px,14vw,200px)] leading-[0.9] font-bold uppercase text-[#4E4E4E]">
              Developer
            </h1>
          </span>
          <p className="text-right w-full">Niklavs Laicans / Unity & React Developer</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
