import DotGrid from '../components/DotGrid'

function HeroSection() {
  return (
    <section className="flex flex-col justify-center pt-20 relative min-h-screen select-none">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen -z-10">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#141414"
          activeColor="#ffffff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="flex h-fit">
        <div className="flex w-full items-center">
          <p className="uppercase font-bold text-[220px] leading-40 tracking-tight">Niklavs</p>
          <div className="flex flex-1 justify-end items-center">
            <div className="flex flex-col gap-8 w-fit h-full">
              <ul className="flex flex-col gap-2 list-disc pl-4 uppercase">
                <li>Web Applications</li>
                <li>Game Development</li>
                <li>Interactive Experiences</li>
              </ul>
              <p className="text-text-muted">/Based in Latvia, Riga, 13:13 ( GMT+3 )</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase font-bold text-[220px] leading-none tracking-tight text-right">Laicans</p>
      </div>
      <div className="pt-14">
        <p className="w-md text-xl text-text-muted">
          Experienced in <span className="text-white">React</span> and{' '}
          <span className="text-white font-medium">Unity</span>, turning ideas into{' '}
          <span className="text-white">well-crafted</span> products, every time.
        </p>
        {/* <p className="w-md text-xl text-text-muted">
          I design conversion-focused websites that drive results. Helping ambitious brands stand out and connect.
        </p> */}
      </div>
    </section>
  )
}

export default HeroSection
